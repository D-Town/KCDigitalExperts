"use client";
import { useState } from "react";
import ThemeToggle from "../theme-toggle";
import Link from "next/link";

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="header" role="banner">
      {/* Skip to Main Content Link für Barrierefreiheit */}
      <a href="#main-content" className="skip-link">
        Zum Hauptinhalt springen
      </a>

      <nav className="container-custom" aria-label="Hauptnavigation">
        <div className="flex items-center justify-between gap-4 py-4 md:py-5">
          {/* Logo */}
          <Link
            href="/"
            className="group flex items-center gap-3 text-2xl sm:text-3xl font-semibold tracking-tight no-underline"
          >
            <span className="rounded-full bg-primary/10 px-3 py-1 text-primary">
              Deine
            </span>
            <span className="text-text-heading">Marke</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <a href="/produkte" className="nav-link">Produkte</a>
            <a href="/ueber-uns" className="nav-link">Über uns</a>
            <a href="/kontakt" className="nav-link">Kontakt</a>
            <ThemeToggle />
            <a href="/login" className="btn-primary">Anmelden</a>
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
            <a href="/produkte" className="nav-link block rounded-xl px-3 py-2" role="menuitem">Produkte</a>
            <a href="/ueber-uns" className="nav-link block rounded-xl px-3 py-2" role="menuitem">Über uns</a>
            <a href="/kontakt" className="nav-link block rounded-xl px-3 py-2" role="menuitem">Kontakt</a>
            <a href="/login" className="btn-primary w-full mt-3" role="menuitem">Anmelden</a>
          </div>
        )}
      </nav>
    </header>
  )
}
