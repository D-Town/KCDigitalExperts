import { useTranslations } from 'next-intl';

const Accessibility = () => {
  const t = useTranslations('Legal.accessibility');

  return (
    <main className="kc-wrap" role="main" aria-labelledby="page-title">
      <section className="kc-card">
        <div className="legal-content">
          <section className="legal-section">
            <h1 id="page-title">Erklärung zur Barrierefreiheit für Dienstleistungen</h1>
            <p>
              Im Rahmen unserer Barrierefreiheitserklärung möchten wir Ihnen einen Überblick über den Stand der Vereinbarkeit
              der unten beschriebenen Dienstleistung(en)
              mit den Anforderungen der Barrierefreiheit nach gesetzlichen Vorschriften (insbesondere mit dem
              Barrierefreiheitsstärkungsgesetz – BFSG) geben.
            </p>
          </section>

          <section className="legal-section" aria-labelledby="provider">
            <h2 id="provider">Angaben zum Dienstleistungserbringer</h2>
            <div className="legal__address">
              <strong>Katja und Christian Ernst GbR</strong><br />
              Ludwig-Erhard-Str. 18<br />
              c/o IP-Management #45145<br />
              20459 Hamburg
            </div>
            <ul className="legal__list">
              <li><strong>E-Mail:</strong> <a href="mailto:info@kcdigitalexperts.de">info@kcdigitalexperts.de</a></li>
              <li><strong>Telefon:</strong> 021117801315</li>
              <li><strong>Website:</strong> <a href="https://www.kcdigitalexperts.de" target="_blank"
                rel="noopener noreferrer">https://www.kcdigitalexperts.de</a></li>
              <li><strong>Impressum:</strong> <a href="https://www.kcdigitalexperts.de/impressum" target="_blank"
                rel="noopener noreferrer">https://www.kcdigitalexperts.de/impressum</a></li>
            </ul>
          </section>

          <section className="legal-section" aria-labelledby="service-desc">
            <h2 id="service-desc">Allgemeine Beschreibung der Dienstleistung</h2>
            <p>
              KC Digital Experts bietet digitale Bildungsprodukte und digitale Dienstleistungen an, die Nutzerinnen und
              Nutzern
              dabei helfen,
              digitale Kompetenzen aufzubauen und zu erweitern.
            </p>
            <p>Das Angebot umfasst insbesondere:</p>
            <ul className="legal__bullets">
              <li>digitale Kurse und Lerninhalte</li>
              <li>Schulungen zum Verständnis von Plattformen wie Instagram</li>
              <li>Inhalte zum Aufbau eines digitalen Business</li>
              <li>Weiterbildungen zu Mindset, Canva, digitalen Tools, Automatisierung und Online-Einkommensmodellen</li>
              <li>digitale Inhalte zu Affiliate-Marketing (z. B. erklärende Inhalte anhand von Beispielen wie
                Kreditkarten-Affiliate-Programmen)</li>
              <li>zukünftig: automatisierte n8n-Workflows als digitale Produkte</li>
            </ul>
            <p>
              Die Produkte werden ausschließlich digital bereitgestellt (z. B. als Online-Kurse, Downloads,
              Mitgliederbereiche
              oder automatisierte Abläufe).
            </p>
          </section>

          <section className="legal-section" aria-labelledby="service-delivery">
            <h2 id="service-delivery">Erläuterungen zur Durchführung der Dienstleistung</h2>
            <p>Die Bereitstellung der Dienstleistungen erfolgt vollständig online:</p>
            <ul className="legal__bullets">
              <li>Auswahl und Buchung der digitalen Produkte über den Online-Shop</li>
              <li>digitale Auslieferung der Inhalte nach dem Kauf</li>
              <li>Nutzung der Inhalte über Endgeräte wie Desktop, Tablet oder Smartphone</li>
              <li>kein physischer Versand, keine Vor-Ort-Leistungen</li>
            </ul>
            <p>
              Die Nutzung der Inhalte erfolgt eigenständig durch die Kundinnen und Kunden.
              Es handelt sich um digitale Selbstlern- und Weiterbildungsangebote, teilweise ergänzt durch erklärende
              Inhalte,
              Anleitungen oder begleitende Materialien.
            </p>
          </section>

          <section className="legal-section" aria-labelledby="compatibility">
            <h2 id="compatibility">Stand der Vereinbarkeit mit den Anforderungen</h2>
            <p>
              Wir setzen uns für digitale Barrierefreiheit ein und verfolgen das Ziel, unsere Website so zu gestalten, dass
              sie
              für alle Nutzerinnen und Nutzer
              uneingeschränkt zugänglich ist. Daher arbeiten wir kontinuierlich daran, die Anforderungen des
              Barrierefreiheitsstärkungsgesetzes (BFSG) und der
              Verordnung zum Barrierefreiheitsstärkungsgesetz (BFSGV) schrittweise umzusetzen.
            </p>
            <p>
              Unser Ziel ist die Orientierung an den Web Content Accessibility Guidelines (WCAG). Diese Website ist derzeit
              <strong>teilweise barrierefrei</strong>.
              Wir arbeiten kontinuierlich daran, bestehende Barrieren zu identifizieren und abzubauen.
            </p>
            <p>Derzeit umgesetzte Maßnahmen umfassen unter anderem:</p>
            <ul className="legal__bullets">
              <li>klare Seitenstruktur</li>
              <li>verständliche Sprache</li>
              <li>gut lesbare Texte</li>
              <li>Bedienbarkeit über gängige Browser und Endgeräte</li>
            </ul>
          </section>

          <section className="legal-section" aria-labelledby="authority">
            <h2 id="authority">Zuständige Marktüberwachungsbehörde</h2>
            <p>
              Marktüberwachungsstelle der Länder für die Barrierefreiheit von Produkten und Dienstleistungen (MLBF)<br />
              c/o Ministerium für Arbeit, Soziales, Gesundheit und Gleichstellung Sachsen-Anhalt<br />
              Postfach 39 11 55<br />
              39135 Magdeburg
            </p>
            <ul className="legal__list">
              <li><strong>Telefon:</strong> +49 (0) 391 567 6970</li>
              <li><strong>E-Mail:</strong> <a href="mailto:mlbf@ms.sachsen-anhalt.de">mlbf@ms.sachsen-anhalt.de</a></li>
            </ul>
          </section>
        </div>
      </section>
    </main>
  );
}

export default Accessibility
