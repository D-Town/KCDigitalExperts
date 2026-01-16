# KC Digital Expert - Content Creator Platform

## 🎯 Projektziel
Eine sichere, mehrsprachige Next.js-Plattform für automatisierte Content-Erstellung mit n8n-Integration, Supabase-Backend und Mitgliederbereich.

---

## 📋 Projekt-Setup

### 1. Initial Setup

```bash
# Next.js Projekt erstellen
npx create-next-app@latest kc-digital-expert --typescript --tailwind --app --no-src-dir

cd kc-digital-expert

# Alle Dependencies in einem Rutsch installieren
npm install @supabase/supabase-js @supabase/ssr next-intl react-hook-form zod @hookform/resolvers lucide-react clsx tailwind-merge

# Dev Dependencies
npm install -D @types/node

# shadcn/ui initialisieren
npx shadcn@latest init
```

**Bei shadcn/ui Setup wählen:**
- Style: Default
- Base color: Slate (oder deine Präferenz)
- CSS variables: Yes

### 2. Ordnerstruktur erstellen

```bash
# Hauptordner
mkdir -p app/{api,\[locale\]}
mkdir -p app/[locale]/{auth,marketing,dashboard}
mkdir -p app/api/{auth,content,webhook}

# Auth Routen
mkdir -p app/[locale]/auth/{login,register}

# Marketing Routen (öffentlich)
mkdir -p app/[locale]/marketing/{about,products,privacy,imprint}

# Dashboard Routen (geschützt)
mkdir -p app/[locale]/dashboard/{content,profile,settings,api-keys}

# Components
mkdir -p components/{ui,auth,dashboard,marketing,shared}

# Lib & Utils
mkdir -p lib/{supabase,n8n}
mkdir -p hooks
mkdir -p types
mkdir -p messages

# Config
mkdir -p config
```

---

## 📁 Projektstruktur

```
kc-digital-expert/
├── app/
│   ├── [locale]/                    # Multilingual routing (de/en)
│   │   ├── auth/                    # Authentifizierung (öffentlich)
│   │   │   ├── login/
│   │   │   │   └── page.tsx
│   │   │   └── register/
│   │   │       └── page.tsx
│   │   ├── marketing/               # Landing Page & Marketing (öffentlich)
│   │   │   ├── page.tsx            # Hauptseite / Landing Page
│   │   │   ├── about/
│   │   │   │   └── page.tsx        # Über uns
│   │   │   ├── products/
│   │   │   │   └── page.tsx        # Produktübersicht (Digistore24 Links)
│   │   │   ├── privacy/
│   │   │   │   └── page.tsx        # Datenschutz
│   │   │   ├── imprint/
│   │   │   │   └── page.tsx        # Impressum
│   │   │   └── layout.tsx          # Marketing Layout (Header, Footer)
│   │   ├── dashboard/               # Mitgliederbereich (geschützt)
│   │   │   ├── page.tsx            # Dashboard Overview
│   │   │   ├── content/
│   │   │   │   └── page.tsx        # Content Generator & History
│   │   │   ├── profile/
│   │   │   │   └── page.tsx        # Benutzerprofil
│   │   │   ├── settings/
│   │   │   │   └── page.tsx        # Einstellungen & Konfiguration
│   │   │   ├── api-keys/
│   │   │   │   └── page.tsx        # API Key Management
│   │   │   └── layout.tsx          # Dashboard Layout
│   │   ├── layout.tsx              # Root Locale Layout
│   │   └── not-found.tsx
│   ├── api/                         # API Routes
│   │   ├── auth/
│   │   │   └── callback/           # Supabase Auth Callback
│   │   │       └── route.ts
│   │   ├── content/
│   │   │   ├── generate/           # Content-Generierung triggern
│   │   │   │   └── route.ts
│   │   │   └── history/            # Content-Historie abrufen
│   │   │       └── route.ts
│   │   └── webhook/
│   │       └── n8n/                # n8n Webhook Endpoint
│   │           └── route.ts
│   ├── layout.tsx                   # Root Layout
│   └── globals.css
├── components/
│   ├── ui/                          # shadcn/ui Komponenten
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   ├── form.tsx
│   │   └── ...
│   ├── auth/
│   │   ├── login-form.tsx
│   │   ├── register-form.tsx
│   │   └── auth-guard.tsx
│   ├── dashboard/
│   │   ├── stats-card.tsx
│   │   ├── content-card.tsx
│   │   ├── copy-button.tsx          # Copy-to-Clipboard Button
│   │   └── sidebar.tsx
│   ├── marketing/
│   │   ├── hero.tsx
│   │   ├── features.tsx
│   │   ├── product-card.tsx
│   │   └── cta.tsx
│   └── shared/
│       ├── header.tsx
│       ├── footer.tsx
│       └── language-switcher.tsx
├── lib/
│   ├── supabase/
│   │   ├── client.ts                # Client-side Supabase
│   │   ├── server.ts                # Server-side Supabase
│   │   └── middleware.ts            # Auth Middleware Helper
│   ├── n8n/
│   │   └── trigger.ts               # n8n Workflow Trigger
│   └── utils.ts                     # Utility Functions (cn, etc.)
├── hooks/
│   ├── use-user.ts                  # Current User Hook
│   ├── use-content.ts               # Content Management
│   └── use-copy-to-clipboard.ts     # Copy Functionality
├── types/
│   ├── database.types.ts            # Supabase Generated Types
│   ├── content.types.ts             # Content Types
│   └── user.types.ts                # User Types
├── messages/
│   ├── de.json                      # Deutsche Übersetzungen
│   └── en.json                      # Englische Übersetzungen
├── config/
│   └── site.ts                      # Site Configuration
├── middleware.ts                    # Next.js Middleware (Auth + i18n)
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## 🔧 Technologie-Stack

- **Framework**: Next.js 15 (App Router)
- **Sprache**: TypeScript
- **Styling**: Tailwind CSS + shadcn/ui
- **Datenbank**: Supabase (PostgreSQL)
- **Auth**: Supabase Auth
- **i18n**: next-intl
- **Forms**: react-hook-form + zod
- **Icons**: lucide-react
- **Automation**: n8n (externe Workflows)

---

## ✅ TODO Liste / Features

### Phase 1: Foundation & Setup
- [ ] Next.js Projekt initialisieren
- [ ] Ordnerstruktur anlegen
- [ ] Dependencies installieren
- [ ] Tailwind + shadcn/ui konfigurieren
- [ ] Git Repository setup mit Semantic Versioning
- [ ] GitHub Actions für CI/CD vorbereiten

### Phase 2: Supabase Setup
- [ ] Supabase Projekt erstellen
- [ ] Environment Variables konfigurieren
- [ ] Datenbank Schema entwerfen
  - [ ] Users/Profiles Table
  - [ ] Content Table
  - [ ] API Keys Table
  - [ ] Customer Avatars Table
  - [ ] Statistics Table
- [ ] Row Level Security (RLS) Policies
- [ ] Supabase Client Setup (client.ts & server.ts)

### Phase 3: Authentifizierung & Sicherheit
- [ ] Middleware für Auth implementieren
- [ ] Login-Seite erstellen
- [ ] Registrierungs-Seite erstellen
- [ ] Auth Callback Route
- [ ] Password Reset Flow
- [ ] Email Verification
- [ ] Protected Routes Guard
- [ ] Session Management
- [ ] CSRF Protection

### Phase 4: Internationalisierung (i18n)
- [ ] next-intl konfigurieren
- [ ] Middleware für i18n erweitern
- [ ] Deutsche Übersetzungen (de.json)
- [ ] Englische Übersetzungen (en.json)
- [ ] Language Switcher Komponente
- [ ] Locale-basiertes Routing

### Phase 5: Marketing/Landing Page
- [ ] Layout für Marketing-Bereich
- [ ] Landing Page (Hero, Features, CTA)
- [ ] Über Uns Seite
- [ ] Produkte Seite (Digistore24 Integration)
- [ ] Datenschutz Seite
- [ ] Impressum Seite
- [ ] Footer mit allen Links
- [ ] Header mit Navigation
- [ ] Responsive Design für alle Seiten

### Phase 6: Dashboard (Mitgliederbereich)
- [ ] Dashboard Layout mit Sidebar
- [ ] Dashboard Overview mit Statistiken
- [ ] Content Generator UI
  - [ ] Kundenavatar Auswahl
  - [ ] Kanal-Auswahl (5 Kanäle)
  - [ ] Zielgruppen-Konfiguration
  - [ ] Content-Typ Auswahl
  - [ ] Generate Button
- [ ] Content History/Liste
- [ ] Copy-to-Clipboard Funktionalität
- [ ] Content Detail View
- [ ] Mobile-optimierte Ansichten

### Phase 7: Profil & Einstellungen
- [ ] Profil-Seite
  - [ ] Profilbild Upload
  - [ ] Benutzername ändern
  - [ ] Email ändern
  - [ ] Passwort ändern
- [ ] Einstellungen-Seite
  - [ ] Kundenavatar Management
  - [ ] Content-Präferenzen
  - [ ] Benachrichtigungen
- [ ] Account Löschen Funktion

### Phase 8: API Key Management
- [ ] API Keys Liste
- [ ] API Key generieren
- [ ] API Key anzeigen (einmalig)
- [ ] API Key löschen
- [ ] API Key Permissions

### Phase 9: n8n Integration
- [ ] n8n Webhook Endpoint
- [ ] Workflow Trigger Funktion
- [ ] Content-Generierung Flow
- [ ] Kundenavatar zu n8n senden
- [ ] Content von n8n empfangen
- [ ] Error Handling
- [ ] Webhook Security (API Key Validation)

### Phase 10: Statistiken & Analytics
- [ ] Dashboard Statistiken
  - [ ] Gesamt generierter Content
  - [ ] Content pro Kanal
  - [ ] Content pro Zeitraum
  - [ ] API Usage
- [ ] Content Performance Tracking
- [ ] Export Funktionalität

### Phase 11: Testing & Sicherheit
- [ ] Unit Tests (kritische Funktionen)
- [ ] E2E Tests (User Flows)
- [ ] Security Audit
  - [ ] SQL Injection Prevention
  - [ ] XSS Prevention
  - [ ] CSRF Tokens
  - [ ] Rate Limiting
  - [ ] Input Validation (alle Forms)
- [ ] Performance Testing
- [ ] Mobile Testing

### Phase 12: Deployment & DevOps
- [ ] Vercel Deployment Setup
- [ ] Environment Variables (Production)
- [ ] Custom Domain Setup
- [ ] SSL/HTTPS
- [ ] Monitoring Setup
- [ ] Error Tracking (z.B. Sentry)
- [ ] Backup Strategy

### Phase 13: Nice-to-Have Features (später)
- [ ] Dark Mode
- [ ] Content Templates
- [ ] Bulk Content Generation
- [ ] Content Scheduling
- [ ] Team Accounts
- [ ] Weitere Sprachen (FR, ES, IT)
- [ ] API Dokumentation
- [ ] Content Export (PDF, JSON)

---

## 🔐 Sicherheitskonzept

### 1. **Supabase Row Level Security (RLS)**
- Jeder Datenbankzugriff wird auf User-Level geprüft
- Policies definieren wer was lesen/schreiben darf
- Server-seitige Validierung

### 2. **Next.js Middleware**
- Prüft Auth-Status vor jedem Request
- Schützt Dashboard-Routen
- Redirect zu Login wenn nicht authentifiziert

### 3. **Server Components**
- Sensitive Logik läuft nur auf dem Server
- API Keys werden nie ans Frontend geschickt
- Datenbank-Queries nur server-seitig

### 4. **Environment Variables**
- Secrets niemals im Code
- `.env.local` für lokale Entwicklung
- Vercel Environment Variables für Production

### 5. **Input Validation**
- Zod Schemas für alle Forms
- Server-seitige Validation zusätzlich
- Sanitization von User Input

### 6. **Rate Limiting**
- API Routes haben Request Limits
- Schutz vor Brute Force
- Per User/IP Limitierung

### 7. **CSRF Protection**
- Supabase übernimmt CSRF Tokens
- Custom Headers für API Requests

---

## 🌿 Git & Semantic Versioning Setup

### Git Workflow mit Semantic Versioning

Wir nutzen **Semantic Versioning 2.0.0**: `MAJOR.MINOR.PATCH`

- **MAJOR** (1.0.0): Breaking Changes
- **MINOR** (0.1.0): Neue Features (backwards compatible)
- **PATCH** (0.0.1): Bugfixes

### Branch-Strategie

```
main (production)
  └── develop (development)
       ├── feature/feature-name
       ├── bugfix/bug-description
       └── hotfix/urgent-fix
```

### Setup Schritte

```bash
# 1. Git initialisieren (falls noch nicht geschehen)
git init
git branch -M main

# 2. Initial Commit
git add .
git commit -m "chore: initial project setup"

# 3. Develop Branch erstellen
git checkout -b develop
git push -u origin develop

# 4. Feature Branch erstellen (Beispiel)
git checkout -b feature/authentication
# ... deine Änderungen ...
git add .
git commit -m "feat: add user authentication"
git push -u origin feature/authentication

# 5. Pull Request auf GitHub erstellen
# Merge in develop nach Code Review

# 6. Release vorbereiten
git checkout develop
git checkout -b release/0.1.0
# Version in package.json anpassen
git add package.json
git commit -m "chore: bump version to 0.1.0"
git checkout main
git merge release/0.1.0
git tag -a v0.1.0 -m "Release version 0.1.0"
git push origin main --tags
```

### Commit Message Convention

Wir nutzen [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(<scope>): <subject>

<body>

<footer>
```

**Types:**
- `feat`: Neues Feature (MINOR Version)
- `fix`: Bugfix (PATCH Version)
- `docs`: Dokumentation
- `style`: Formatierung, Styling
- `refactor`: Code-Refactoring
- `test`: Tests
- `chore`: Build, Dependencies
- `perf`: Performance Verbesserung
- `ci`: CI/CD Änderungen
- `BREAKING CHANGE`: Breaking Change (MAJOR Version)

**Beispiele:**
```bash
git commit -m "feat(auth): add login functionality"
git commit -m "fix(dashboard): resolve content display bug"
git commit -m "docs(readme): update installation steps"
git commit -m "chore(deps): update next.js to v15"
```

### GitHub Setup

1. **Repository erstellen** (bereits erledigt)

2. **Branch Protection Rules** (auf GitHub):
   - Settings → Branches → Add rule
   - Branch name pattern: `main`
   - ✅ Require pull request reviews before merging
   - ✅ Require status checks to pass before merging
   - ✅ Require branches to be up to date

3. **GitHub Actions** (später):
   ```yaml
   # .github/workflows/ci.yml
   name: CI
   on: [push, pull_request]
   jobs:
     test:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v3
         - uses: actions/setup-node@v3
         - run: npm install
         - run: npm run lint
         - run: npm run build
   ```

### Versioning Workflow

**Für jedes neue Feature:**
1. Feature Branch erstellen: `git checkout -b feature/i18n`
2. Feature entwickeln
3. Commits mit `feat:` prefix
4. Pull Request zu `develop`
5. Merge nach Review

**Für einen Release:**
1. Release Branch: `git checkout -b release/0.2.0`
2. Version bumpen: `npm version minor` (erstellt automatisch Tag)
3. In `main` mergen
4. Tag pushen: `git push --tags`
5. GitHub Release erstellen mit Changelog

**Für Hotfixes:**
1. Hotfix Branch von `main`: `git checkout -b hotfix/critical-bug`
2. Fix implementieren
3. In `main` UND `develop` mergen
4. Patch Version: `npm version patch`

---

## 🚀 Next Steps

1. **Jetzt sofort:**
   - Dependencies installieren
   - Ordnerstruktur anlegen
   - Git Setup mit Semantic Versioning

2. **Als nächstes:**
   - Supabase Projekt anlegen
   - Environment Variables konfigurieren
   - Middleware für Auth + i18n

3. **Dann:**
   - Erste UI Komponenten (shadcn/ui)
   - Landing Page Grundgerüst
   - Login/Register Forms

---

## 📝 Environment Variables

Erstelle eine `.env.local` Datei:

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

# n8n
N8N_WEBHOOK_URL=your_n8n_webhook_url
N8N_API_KEY=your_n8n_api_key

# Site
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

---

## 📚 Hilfreiche Links

- [Next.js Docs](https://nextjs.org/docs)
- [Supabase Docs](https://supabase.com/docs)
- [shadcn/ui Docs](https://ui.shadcn.com)
- [next-intl Docs](https://next-intl-docs.vercel.app)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Semantic Versioning](https://semver.org)
- [Conventional Commits](https://www.conventionalcommits.org)

---

**Let's build something awesome! 🚀**