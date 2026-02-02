"use client";
import { useState } from "react";
import ThemeToggle from "../theme-toggle";
import Link from "next/link";
import LanguageSwitcher from "../LanguageSwitcher";
import { useTranslations } from "next-intl";

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const t = useTranslations('Header');

  return (
    <header className="header" role="banner">
      {/* Skip to Main Content Link für Barrierefreiheit */}
      <Link href="#main-content" className="skip-link">
        {t("skipToContent")}
      </Link>

      <nav className="container-custom" aria-label="Hauptnavigation">
        <div className="flex items-center justify-between gap-4 py-4 md:py-5">
          {/* Logo */}
          <Link
            href="/"
            className="group flex items-center gap-3 text-2xl sm:text-3xl font-semibold tracking-tight no-underline"
          >
            <span className="logo-placeholder" aria-hidden="true">
              Bild
            </span>
            <span className="text-text-heading">KC Digital Experts</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <details className="relative">
              <summary className="nav-link list-none cursor-pointer select-none">
                {t("nav.products")}
              </summary>
              <div className="nav-dropdown">
                <Link href="/shop" className="nav-link">{t("nav.productItems.all")}</Link>
                <Link href="/shop#mrr" className="nav-link">{t("nav.productItems.mrr")}</Link>
                <Link href="/shop#affiliate" className="nav-link">{t("nav.productItems.affiliate")}</Link>
                {/* <Link href="/shop#sonstige" className="nav-link">{t("nav.productItems.other")}</Link> */}
              </div>
            </details>
            <Link href="/aboutUs" className="nav-link">{t("nav.about")}</Link>
            <Link href="/contact" className="nav-link">{t("nav.contact")}</Link>
            <ThemeToggle />
            <LanguageSwitcher />
            <Link href="/login" className="btn-primary">{t("nav.login")}</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="btn-ghost p-2"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label="Menü öffnen"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div id="mobile-menu" className="md:hidden pb-6 pt-2 space-y-2" role="menu">
            <details className="mobile-submenu">
              <summary className="nav-link block rounded-xl px-3 py-2 list-none cursor-pointer" role="menuitem">
                {t("nav.products")}
              </summary>
              <div className="space-y-1 px-3 pb-2">
                <Link href="/shop" className="nav-link block rounded-lg px-3 py-2" role="menuitem">{t("nav.productItems.all")}</Link>
                <Link href="/shop#mrr" className="nav-link block rounded-lg px-3 py-2" role="menuitem">{t("nav.productItems.mrr")}</Link>
                <Link href="/shop#affiliate" className="nav-link block rounded-lg px-3 py-2" role="menuitem">{t("nav.productItems.affiliate")}</Link>
                {/* <Link href="/produkte/shop#sonstige" className="nav-link block rounded-lg px-3 py-2" role="menuitem">{t("nav.productItems.other")}</Link> */}
              </div>
            </details>
            <Link href="/aboutUs" className="nav-link block rounded-xl px-3 py-2" role="menuitem">{t("about")}</Link>
            <Link href="/contact" className="nav-link block rounded-xl px-3 py-2" role="menuitem">{t("contact")}</Link>
            <Link href="/login" className="btn-primary w-full mt-3" role="menuitem">{t("login")}</Link>
          </div>
        )}
      </nav>
    </header>
  )
}
