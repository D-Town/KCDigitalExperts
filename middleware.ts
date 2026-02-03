import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';
import { createServerClient } from '@supabase/ssr';
import { NextResponse, type NextRequest } from 'next/server';

const setSecurityHeaders = (response: NextResponse) => {
  const isProd = process.env.NODE_ENV === 'production';

  const csp = [
    "default-src 'self'",
    "base-uri 'self'",
    "form-action 'self'",
    "frame-ancestors 'none'",
    "object-src 'none'",
    "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google.com/recaptcha/ https://www.gstatic.com/recaptcha/",
    "script-src-elem 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google.com/recaptcha/ https://www.gstatic.com/recaptcha/",
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data: blob: https://www.googletagmanager.com https://www.google-analytics.com https://stats.g.doubleclick.net https://www.gstatic.com",
    "connect-src 'self' https://www.google-analytics.com https://stats.g.doubleclick.net https://www.googletagmanager.com https://www.google.com/recaptcha/ https://www.gstatic.com/recaptcha/",
    "frame-src https://www.google.com/recaptcha/ https://www.gstatic.com/recaptcha/",
    "font-src 'self' data:",
    "upgrade-insecure-requests",
  ].join('; ');

  response.headers.set('Content-Security-Policy', csp);
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set(
    'Permissions-Policy',
    'camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()'
  );
  response.headers.set('Cross-Origin-Opener-Policy', 'same-origin');

  if (isProd) {
    response.headers.set(
      'Strict-Transport-Security',
      'max-age=63072000; includeSubDomains; preload'
    );
  }
};

// next-intl Middleware
const intlMiddleware = createMiddleware(routing);

export async function middleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);

  // 1. Supabase Auth Session aktualisieren
  let response = NextResponse.next({
    request: { headers: requestHeaders },
  });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value)
          );
          response = NextResponse.next({
            request: { headers: requestHeaders },
          });
          cookiesToSet.forEach(({ name, value, options }) =>
            response.cookies.set(name, value, options)
          );
        },
      },
    }
  );

  // Session aktualisieren
  await supabase.auth.getUser();

  // 2. next-intl Middleware ausführen
  const intlResponse = intlMiddleware(request);
  
  // 3. Supabase Cookies in die intl Response übertragen
  if (intlResponse) {
    response.cookies.getAll().forEach((cookie) => {
      intlResponse.cookies.set(cookie.name, cookie.value);
    });
    setSecurityHeaders(intlResponse);
    return intlResponse;
  }

  setSecurityHeaders(response);
  return response;
}

export const config = {
  matcher: [
    // Match all pathnames except for
    // - … if they start with `/api`, `/_next` or `/_vercel`
    // - … the ones containing a dot (e.g. `favicon.ico`)
    '/((?!api|_next|_vercel|.*\\..*).*)',
  ],
};
