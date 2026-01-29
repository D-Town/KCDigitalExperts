import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const runtime = 'nodejs';

const MAX_MESSAGE_LENGTH = 1200;
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 5 * 60 * 1000;

const rateStore = new Map<string, { count: number; resetAt: number }>();

const getClientIp = (req: NextRequest) => {
  const cfIp = req.headers.get('cf-connecting-ip');
  if (cfIp) return cfIp;
  const forwarded = req.headers.get('x-forwarded-for');
  if (forwarded) return forwarded.split(',')[0]?.trim() || 'unknown';
  return 'unknown';
};

const escapeHtml = (input: string) =>
  input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

const pickLocale = (locale?: string) => (locale === 'en' ? 'en' : 'de');

const getTemplates = (locale: 'de' | 'en') => {
  if (locale === 'en') {
    return {
      adminSubject: 'New contact form message',
      adminText: (payload: ContactPayload) =>
        `New contact form message\n\nName: ${payload.name}\nEmail: ${payload.email}\n\nMessage:\n${payload.message}`,
      adminHtml: (payload: ContactPayload) => `
        <p><strong>New contact form message</strong></p>
        <p><strong>Name:</strong> ${escapeHtml(payload.name)}<br />
        <strong>Email:</strong> ${escapeHtml(payload.email)}</p>
        <p><strong>Message:</strong><br />${escapeHtml(payload.message).replace(/\n/g, '<br />')}</p>
      `,
      userSubject: 'We received your message',
      userText: (payload: ContactPayload) =>
        `Hi ${payload.name},\n\nThanks for your message. We have received it and will get back to you soon.\n\nYour message:\n${payload.message}\n\nBest regards\nKC Digital Experts`,
      userHtml: (payload: ContactPayload) => `
        <p>Hi ${escapeHtml(payload.name)},</p>
        <p>Thanks for your message. We have received it and will get back to you soon.</p>
        <p><strong>Your message:</strong><br />${escapeHtml(payload.message).replace(/\n/g, '<br />')}</p>
        <p>Best regards<br />KC Digital Experts</p>
      `,
    };
  }

  return {
    adminSubject: 'Neue Kontaktanfrage',
    adminText: (payload: ContactPayload) =>
      `Neue Kontaktanfrage\n\nName: ${payload.name}\nE-Mail: ${payload.email}\n\nNachricht:\n${payload.message}`,
    adminHtml: (payload: ContactPayload) => `
      <p><strong>Neue Kontaktanfrage</strong></p>
      <p><strong>Name:</strong> ${escapeHtml(payload.name)}<br />
      <strong>E-Mail:</strong> ${escapeHtml(payload.email)}</p>
      <p><strong>Nachricht:</strong><br />${escapeHtml(payload.message).replace(/\n/g, '<br />')}</p>
    `,
    userSubject: 'Wir haben deine Nachricht erhalten',
    userText: (payload: ContactPayload) =>
      `Hi ${payload.name},\n\nvielen Dank für deine Nachricht. Wir haben sie erhalten und melden uns so schnell wie möglich bei dir.\n\nDeine Nachricht:\n${payload.message}\n\nLiebe Grüße\nKC Digital Experts`,
    userHtml: (payload: ContactPayload) => `
      <p>Hi ${escapeHtml(payload.name)},</p>
      <p>vielen Dank für deine Nachricht. Wir haben sie erhalten und melden uns so schnell wie möglich bei dir.</p>
      <p><strong>Deine Nachricht:</strong><br />${escapeHtml(payload.message).replace(/\n/g, '<br />')}</p>
      <p>Liebe Grüße<br />KC Digital Experts</p>
    `,
  };
};

type ContactPayload = {
  name: string;
  email: string;
  message: string;
  token: string;
  locale?: string;
};

const isValidEmail = (value: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

const enforceRateLimit = (ip: string) => {
  const now = Date.now();
  const entry = rateStore.get(ip);

  if (!entry || entry.resetAt <= now) {
    rateStore.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return { ok: true } as const;
  }

  if (entry.count >= RATE_LIMIT) {
    return { ok: false, resetAt: entry.resetAt } as const;
  }

  entry.count += 1;
  return { ok: true } as const;
};

const verifyRecaptcha = async (token: string, ip: string | null) => {
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  if (!secret) return { ok: false, message: 'reCAPTCHA not configured' } as const;

  const params = new URLSearchParams({
    secret,
    response: token,
  });
  if (ip) params.append('remoteip', ip);

  const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: params.toString(),
  });

  const data = (await response.json()) as {
    success: boolean;
    score?: number;
    action?: string;
  };

  const threshold = Number(process.env.RECAPTCHA_SCORE_THRESHOLD ?? '0.5');
  if (!data.success) return { ok: false, message: 'reCAPTCHA verification failed' } as const;
  if (typeof data.score === 'number' && data.score < threshold) {
    return { ok: false, message: 'reCAPTCHA score too low' } as const;
  }
  if (data.action && data.action !== 'contact_submit') {
    return { ok: false, message: 'reCAPTCHA action mismatch' } as const;
  }

  return { ok: true } as const;
};

export async function POST(req: NextRequest) {
  try {
    const ip = getClientIp(req);
    const rate = enforceRateLimit(ip);
    if (!rate.ok) {
      return NextResponse.json(
        { code: 'RATE_LIMIT' },
        { status: 429 }
      );
    }

    const body = (await req.json()) as Partial<ContactPayload>;
    const name = body.name?.trim() || '';
    const email = body.email?.trim() || '';
    const message = body.message?.trim() || '';
    const token = body.token?.trim() || '';
    const locale = pickLocale(body.locale);

    if (!name || !email || !message || !token) {
      return NextResponse.json({ code: 'VALIDATION' }, { status: 400 });
    }

    if (!isValidEmail(email) || name.length > 100 || email.length > 200) {
      return NextResponse.json({ code: 'VALIDATION' }, { status: 400 });
    }

    if (message.length > MAX_MESSAGE_LENGTH) {
      return NextResponse.json({ code: 'MESSAGE_TOO_LONG' }, { status: 400 });
    }

    const recaptcha = await verifyRecaptcha(token, ip === 'unknown' ? null : ip);
    if (!recaptcha.ok) {
      return NextResponse.json({ code: 'RECAPTCHA' }, { status: 400 });
    }

    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = Number(process.env.SMTP_PORT || 587);
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const mailFrom = process.env.MAIL_FROM;
    const mailTo = process.env.MAIL_TO;

    if (!smtpHost || !smtpUser || !smtpPass || !mailFrom || !mailTo) {
      return NextResponse.json({ code: 'CONFIG' }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const payload: ContactPayload = { name, email, message, token, locale };
    const templates = getTemplates(locale);

    await transporter.sendMail({
      from: mailFrom,
      to: mailTo,
      subject: templates.adminSubject,
      text: templates.adminText(payload),
      html: templates.adminHtml(payload),
      replyTo: email,
    });

    await transporter.sendMail({
      from: mailFrom,
      to: email,
      subject: templates.userSubject,
      text: templates.userText(payload),
      html: templates.userHtml(payload),
      replyTo: mailTo,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json({ code: 'INTERNAL' }, { status: 500 });
  }
}
