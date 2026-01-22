export function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container-custom py-[10px]">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">


          <div>
            <h4 className="h6 mb-2">Kurzlinks</h4>
            <ul className="space-y-1 text-body-sm">
              <li><a href="/produkt-1">Startseite</a></li>
              <li><a href="/produkt-2">Shop</a></li>
              <li><a href="/produkt-3">Über uns</a></li>
              <li><a href="/produkt-3">Kontakt</a></li>
            </ul>
          </div>

          <div>
            <h4 className="h6 mb-2">Sozial</h4>
            <ul className="space-y-1 text-body-sm">
              <li><a href="/ueber-uns">Facebook</a></li>
              <li><a href="/karriere">Instagram</a></li>
            </ul>
          </div>

          <div>
            <h4 className="h6 mb-2">Rechtliches</h4>
            <ul className="space-y-1 text-body-sm">
              <li><a href="/agb">AGB</a></li>
              <li><a href="/datenschutz">Datenschutz</a></li>
              <li><a href="/impressum">Impressum</a></li>
              <li><a href="/wiederufsbelehrung">Widerrufsbelehrung</a></li>
              <li><a href="/barriererefreiheit">Barriererefreiheit</a></li>
            </ul>
          </div>

          <div>
            <h3 className="h5 mb-2">Über uns</h3>
            <p className="text-muted text-body-sm">
              Entdecken mit KC Digital Experts, wie du dein Online-Business erfolgreich aufbauen kannst. Unsere erprobten Strategien, leicht verständlichen Online-Kurse und persönliche Beratung unterstützen dich dabei.
            </p>
          </div>
        </div>

        <hr className="my-[10px] border-border" />

        <div className="flex flex-col md:flex-row justify-center items-center text-body-sm text-muted">
          <p>&copy; 2026 KC Digital Experts. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  )
}
