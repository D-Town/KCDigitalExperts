'use client';

import { useState } from 'react';
import Script from 'next/script';
import { useLocale, useTranslations } from 'next-intl';

declare global {
  interface Window {
    grecaptcha?: {
      ready: (cb: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
    };
  }
}

const Contact = () => {
  const t = useTranslations('Contact');
  const locale = useLocale();
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [error, setError] = useState('');
  const [messageLength, setMessageLength] = useState(0);

  const isDisabled = status === 'submitting' || status === 'success';

  const getRecaptchaToken = async () => {
    if (!siteKey) {
      throw new Error(t('errors.missingRecaptcha'));
    }
    if (!window.grecaptcha) {
      throw new Error(t('errors.recaptchaUnavailable'));
    }

    return new Promise<string>((resolve, reject) => {
      window.grecaptcha?.ready(async () => {
        try {
          const token = await window.grecaptcha?.execute(siteKey, { action: 'contact_submit' });
          if (!token) {
            reject(new Error(t('errors.recaptchaFailed')));
            return;
          }
          resolve(token);
        } catch {
          reject(new Error(t('errors.recaptchaFailed')));
        }
      });
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === 'submitting') return;

    setError('');
    setStatus('submitting');

    try {
      const formData = new FormData(event.currentTarget);
      const name = String(formData.get('name') || '').trim();
      const email = String(formData.get('email') || '').trim();
      const message = String(formData.get('message') || '').trim();

      if (!name || !email || !message) {
        throw new Error(t('errors.validation'));
      }

      const token = await getRecaptchaToken();
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message, token, locale }),
      });

      const payload = await response.json();
      if (!response.ok) {
        const code = payload?.code as string | undefined;
        const mapped = code
          ? {
              RATE_LIMIT: t('errors.rateLimit'),
              VALIDATION: t('errors.validation'),
              MESSAGE_TOO_LONG: t('errors.messageTooLong'),
              RECAPTCHA: t('errors.recaptchaFailed'),
            }[code]
          : undefined;
        throw new Error(mapped || t('errors.default'));
      }

      event.currentTarget.reset();
      setMessageLength(0);
      setStatus('success');
    } catch (err) {
      setError(err instanceof Error ? err.message : t('errors.default'));
      setStatus('error');
    }
  };

  return (
    <main id="main-content" tabIndex={-1} className="container-custom py-12 space-y-12">
      {siteKey ? (
        <Script src={`https://www.google.com/recaptcha/api.js?render=${siteKey}`} />
      ) : null}
      <section className="card max-w-2xl mx-auto">
        <h2 className="h2 mb-2">{t('title')}</h2>
        <p className="text-muted mb-6">{t('intro')}</p>

        {status === 'success' ? (
          <div className="alert alert--success">
            <div className="alert__title">{t('success.title')}</div>
            <span>{t('success.message')}</span>
          </div>
        ) : null}

        {status === 'error' ? (
          <div className="alert alert--error">
            <div className="alert__title">{t('errors.default')}</div>
            <span>{error}</span>
          </div>
        ) : null}

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block text-body-sm font-medium mb-2">
              {t('form.name.label')}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="input"
              placeholder={t('form.name.placeholder')}
              required
              disabled={isDisabled}
              maxLength={100}
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-body-sm font-medium mb-2">
              {t('form.email.label')}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="input"
              placeholder={t('form.email.placeholder')}
              required
              disabled={isDisabled}
              maxLength={200}
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-body-sm font-medium mb-2">
              {t('form.message.label')}
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="input resize-none"
              placeholder={t('form.message.placeholder')}
              required
              disabled={isDisabled}
              maxLength={1200}
              onChange={(event) => setMessageLength(event.currentTarget.value.length)}
            />
            <p className="text-muted text-xs mt-2">
              {t('form.message.hint', { count: messageLength })}
            </p>
          </div>
          <button type="submit" className="btn-primary w-full" disabled={isDisabled}>
            {status === 'submitting' ? t('form.submitPending') : t('form.submit')}
          </button>
        </form>
      </section>
    </main>
  );
}

export default Contact
