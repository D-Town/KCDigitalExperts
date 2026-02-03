'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '../i18n/routing';
import { useState, useRef, useEffect, useId } from 'react';

const languages = [
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'en', name: 'English', flag: '🇬🇧' },
];

// const languages = [
//   { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
//   { code: 'en', name: 'English', flag: '🇬🇧' },
//   { code: 'fr', name: 'Français', flag: '🇫🇷' },
//   { code: 'es', name: 'Español', flag: '🇪🇸' },
//   { code: 'it', name: 'Italiano', flag: '🇮🇹' },
// ];

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const optionRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const listboxId = useId();

  const currentLanguage = languages.find((lang) => lang.code === locale);

  const switchLocale = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
    setIsOpen(false);
  };

  const closeMenu = () => setIsOpen(false);

  const focusOption = (index: number) => {
    const clamped = Math.max(0, Math.min(languages.length - 1, index));
    optionRefs.current[clamped]?.focus();
  };

  const handleTriggerKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === 'ArrowDown' || event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      setIsOpen(true);
      requestAnimationFrame(() => focusOption(0));
    } else if (event.key === 'Escape') {
      closeMenu();
    }
  };

  const handleOptionKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      focusOption(index + 1);
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      focusOption(index - 1);
    } else if (event.key === 'Home') {
      event.preventDefault();
      focusOption(0);
    } else if (event.key === 'End') {
      event.preventDefault();
      focusOption(languages.length - 1);
    } else if (event.key === 'Escape') {
      event.preventDefault();
      closeMenu();
    } else if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      switchLocale(languages[index].code);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (isOpen) {
      requestAnimationFrame(() => focusOption(0));
    }
  }, [isOpen]);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-100 transition-colors"
        aria-label="Sprache wechseln"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-controls={listboxId}
        title={currentLanguage?.name}
        onKeyDown={handleTriggerKeyDown}
      >
        <span className="text-2xl">{currentLanguage?.flag}</span>
      </button>

      {isOpen && (
        <div
          id={listboxId}
          role="listbox"
          aria-label="Sprache wählen"
          className="absolute right-0 mt-2 w-40 rounded-lg border border-gray-200 bg-white shadow-lg z-50"
        >
          {languages.map((lang, index) => (
            <button
              key={lang.code}
              onClick={() => switchLocale(lang.code)}
              role="option"
              aria-selected={locale === lang.code}
              ref={(node) => { optionRefs.current[index] = node; }}
              onKeyDown={(event) => handleOptionKeyDown(event, index)}
              className={`w-full flex items-center gap-3 px-4 py-2.5 hover:bg-gray-100 transition-colors first:rounded-t-lg last:rounded-b-lg ${
                locale === lang.code ? 'bg-blue-50' : ''
              }`}
            >
              <span className="text-xl">{lang.flag}</span>
              <span className="text-sm font-medium">{lang.name}</span>
              {locale === lang.code && (
                <svg
                  className="w-4 h-4 ml-auto text-blue-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
