"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";

type ConsentState = {
  analytics: boolean;
  ads: boolean;
  ts: number;
};

const CONSENT_KEY = "kc_consent_v1";
const CONSENT_MAX_AGE_DAYS = 180;

const readConsent = (): ConsentState | null => {
  if (typeof window === "undefined") return null;
  const raw = window.localStorage.getItem(CONSENT_KEY);
  if (!raw) return null;
  try {
    const parsed = JSON.parse(raw) as ConsentState;
    const maxAgeMs = CONSENT_MAX_AGE_DAYS * 24 * 60 * 60 * 1000;
    if (!parsed?.ts || Date.now() - parsed.ts > maxAgeMs) {
      return null;
    }
    return parsed;
  } catch {
    return null;
  }
};

const writeConsent = (state: ConsentState) => {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(CONSENT_KEY, JSON.stringify(state));
};

const updateConsentMode = (analytics: boolean, ads: boolean) => {
  if (typeof window === "undefined") return;
  const dataLayer = (window as any).dataLayer || [];
  (window as any).dataLayer = dataLayer;
  const gtag = (...args: any[]) => dataLayer.push(args);

  gtag("consent", "update", {
    analytics_storage: analytics ? "granted" : "denied",
    ad_storage: ads ? "granted" : "denied",
    ad_user_data: ads ? "granted" : "denied",
    ad_personalization: ads ? "granted" : "denied",
    functionality_storage: "granted",
    security_storage: "granted",
  });
};

export default function CookieConsentBanner() {
  const [visible, setVisible] = useState(false);
  const t = useTranslations("CookieBanner");

  useEffect(() => {
    const saved = readConsent();
    if (saved) {
      updateConsentMode(saved.analytics, saved.ads);
      return;
    }

    const gpcEnabled =
      typeof navigator !== "undefined" &&
      (navigator.globalPrivacyControl || navigator.doNotTrack === "1");

    if (gpcEnabled) {
      const denied = { analytics: false, ads: false, ts: Date.now() };
      writeConsent(denied);
      updateConsentMode(false, false);
      return;
    }

    setVisible(true);
  }, []);

  const acceptAll = () => {
    const state = { analytics: true, ads: true, ts: Date.now() };
    writeConsent(state);
    updateConsentMode(true, true);
    setVisible(false);
  };

  const acceptEssential = () => {
    const state = { analytics: false, ads: false, ts: Date.now() };
    writeConsent(state);
    updateConsentMode(false, false);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-50 p-4"
      role="dialog"
      aria-live="polite"
      aria-label="Cookie Hinweise"
    >
      <div className="kc-card dark-mode-transition mx-auto flex max-w-3xl flex-col gap-4">
        <div className="space-y-2">
          <p className="text-body-sm text-muted">{t("title")}</p>
          <p className="text-body-sm">{t("description")}</p>
          <p className="text-body-sm text-muted">{t("essentialNote")}</p>
          <Link href="/privacy" className="text-body-sm">
            {t("privacyLink")}
          </Link>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
          <button type="button" className="btn-ghost" onClick={acceptEssential}>
            {t("acceptEssential")}
          </button>
          <button type="button" className="btn-primary" onClick={acceptAll}>
            {t("acceptAll")}
          </button>
        </div>
      </div>
    </div>
  );
}
