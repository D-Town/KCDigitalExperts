export function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container-custom py-[10px]">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Firma Info */}
          <div>
            <h3 className="h5 mb-2">Deine Marke</h3>
            <p className="text-muted text-body-sm">
              Innovative Lösungen für eine bessere Zukunft.
            </p>
            <div className="mt-3 flex items-center gap-3 text-body-sm text-muted">
              <span className="inline-flex h-3 w-3 rounded-full bg-accent" aria-hidden="true" />
              Barrierefrei, mobile first, durchdacht.
            </div>
          </div>

          {/* Links Spalte 1 */}
          <div>
            <h4 className="h6 mb-2">Produkte</h4>
            <ul className="space-y-1 text-body-sm">
              <li><a href="/produkt-1">Produkt 1</a></li>
              <li><a href="/produkt-2">Produkt 2</a></li>
              <li><a href="/produkt-3">Produkt 3</a></li>
            </ul>
          </div>

          {/* Links Spalte 2 */}
          <div>
            <h4 className="h6 mb-2">Unternehmen</h4>
            <ul className="space-y-1 text-body-sm">
              <li><a href="/ueber-uns">Über uns</a></li>
              <li><a href="/karriere">Karriere</a></li>
              <li><a href="/kontakt">Kontakt</a></li>
            </ul>
          </div>

          {/* Links Spalte 3 */}
          <div>
            <h4 className="h6 mb-2">Rechtliches</h4>
            <ul className="space-y-1 text-body-sm">
              <li><a href="/datenschutz">Datenschutz</a></li>
              <li><a href="/impressum">Impressum</a></li>
              <li><a href="/agb">AGB</a></li>
            </ul>
          </div>
        </div>

        <hr className="my-[10px] border-border" />

        <div className="flex flex-col md:flex-row justify-between items-center text-body-sm text-muted">
          <p>&copy; 2026 Deine Marke. Alle Rechte vorbehalten.</p>
          <div className="flex space-x-6 mt-2 md:mt-0">
            <a href="#" aria-label="Facebook" className="hover:text-primary">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
              </svg>
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-primary">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
              </svg>
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-primary">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
