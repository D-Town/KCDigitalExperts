import { useTranslations } from 'next-intl';

const Privacy = () => {
  const t = useTranslations('Legal.privacy');

  return (
    <main className="kc-wrap" role="main" aria-labelledby="page-title">
      <section className="kc-card">
        <div className="legal-content">
          <section className="legal-section">
            <h1 id="page-title">Datenschutzerklärung</h1>
          </section>

          <section className="legal-section" aria-labelledby="overview">
            <h2 id="overview">1. Datenschutz auf einen Blick</h2>
            <h3>Allgemeine Hinweise</h3>
            <p>
              Die folgenden Hinweise geben dir einen schnellen Überblick darüber,
              was mit deinen personenbezogenen Daten passiert, wenn du diese Website besuchst.
              Personenbezogene Daten sind alle Daten, mit denen du persönlich identifiziert werden kannst.
              Ausführliche Informationen findest du in den nachfolgenden Abschnitten dieser Datenschutzerklärung.
            </p>

            <h3>Datenerfassung auf dieser Website</h3>
            <h4>Wer ist für die Datenerfassung verantwortlich?</h4>
            <p>
              Die Verarbeitung deiner Daten erfolgt durch den Betreiber dieser Website.
              Die entsprechenden Kontaktdaten findest du im Abschnitt
              <em>„Hinweis zur verantwortlichen Stelle“</em> weiter unten.
            </p>

            <h4>Wie erfassen wir deine Daten?</h4>
            <p>
              Zum einen werden Daten erhoben, die du uns aktiv mitteilst – etwa,
              wenn du ein Formular ausfüllst oder Kontakt zu uns aufnimmst.
            </p>
            <p>
              Weitere Daten werden automatisch oder nach deiner Einwilligung
              durch unsere IT-Systeme erfasst, sobald du die Website besuchst.
              Dabei handelt es sich vor allem um technische Informationen
              (z. B. Browsertyp, Betriebssystem oder Zeitpunkt des Seitenaufrufs).
            </p>

            <h4>Wofür nutzen wir deine Daten?</h4>
            <p>
              Ein Teil der Daten ist erforderlich, um die Website technisch fehlerfrei bereitzustellen.
              Andere Daten können – sofern du eingewilligt hast – zur Analyse deines Nutzerverhaltens verwendet werden.
              Werden über die Website Verträge angebahnt oder abgeschlossen,
              verarbeiten wir die übermittelten Daten außerdem zur Abwicklung von Bestellungen,
              Vertragsangeboten oder Anfragen.
            </p>

            <h4>Welche Rechte hast du?</h4>
            <p>
              Du hast jederzeit das Recht, unentgeltlich Auskunft über Herkunft,
              Empfänger und Zweck deiner gespeicherten personenbezogenen Daten zu erhalten.
              Außerdem kannst du die Berichtigung oder Löschung dieser Daten verlangen.
            </p>
            <p>
              Erteilte Einwilligungen kannst du jederzeit mit Wirkung für die Zukunft widerrufen.
              Zusätzlich hast du unter bestimmten Voraussetzungen das Recht,
              die Verarbeitung deiner Daten einzuschränken.
              Außerdem steht dir ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
            </p>
          </section>

          <section className="legal-section" aria-labelledby="hosting">
            <h2 id="hosting">2. Hosting</h2>
            <h3>Externes Hosting</h3>
            <p className="legal-address">
              <strong>Cloudflare, Inc.</strong><br />
              101 Townsend St.<br />
              San Francisco, CA 94107<br />
              USA
            </p>
            <p>
              Cloudflare verarbeitet personenbezogene Daten (z. B. IP-Adressen,
              Logdaten, technische Zugriffsdaten), um die Website bereitzustellen,
              vor Angriffen zu schützen und eine stabile Auslieferung zu gewährleisten.
            </p>
            <p>
              Die Datenverarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO
              (berechtigtes Interesse an einer sicheren und effizienten Bereitstellung
              unseres Online-Angebots).
            </p>
          </section>

          <section className="legal-section" aria-labelledby="general-info">
            <h2 id="general-info">3. Allgemeine Hinweise &amp; Pflichtinformationen</h2>
            <h3>Hinweis zur verantwortlichen Stelle</h3>
            <p>
              Verantwortlich für die Datenverarbeitung auf dieser Website ist:
            </p>
            <p className="legal-address">
              <strong>Katja und Christian Ernst GbR</strong><br />
              c/o IP-Management #45145<br />
              Ludwig-Erhard-Str. 18<br />
              20459 Hamburg<br /><br />
              Telefon: 0211 17801315<br />
              E-Mail: info@kcdigitalexperts.de
            </p>

            <h3>Speicherdauer</h3>
            <p>
              Deine personenbezogenen Daten werden nur so lange gespeichert,
              wie dies für die jeweiligen Verarbeitungszwecke erforderlich ist.
              Entfällt der Zweck oder widerrufst du deine Einwilligung,
              werden die Daten gelöscht, sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
            </p>

            <h3>Rechtsgrundlagen der Verarbeitung</h3>
            <p>
              Je nach Art der Verarbeitung erfolgt diese auf Grundlage
              deiner Einwilligung (Art. 6 Abs. 1 lit. a DSGVO),
              zur Vertragserfüllung (Art. 6 Abs. 1 lit. b DSGVO),
              aufgrund gesetzlicher Verpflichtungen (Art. 6 Abs. 1 lit. c DSGVO)
              oder auf Basis berechtigter Interessen (Art. 6 Abs. 1 lit. f DSGVO).
            </p>

            <h3>Widerruf &amp; Widerspruch</h3>
            <p>
              Du kannst eine erteilte Einwilligung jederzeit widerrufen.
              Zudem hast du das Recht, der Verarbeitung deiner Daten
              aus Gründen deiner besonderen Situation zu widersprechen,
              sofern diese auf Art. 6 Abs. 1 lit. e oder f DSGVO beruht.
            </p>
          </section>

          <section className="legal-section" aria-labelledby="cookies">
            <h2 id="cookies">4. Cookies &amp; Einwilligungsmanagement</h2>
            <p>
              Unsere Website nutzt technisch notwendige Cookies und vergleichbare Technologien,
              die für den sicheren Betrieb und die Auslieferung der Website erforderlich sind.
            </p>
            <p>
              Hierzu zählen insbesondere sicherheitsrelevante Funktionen und
              Performance-Dienste, die durch unseren Hosting- und CDN-Anbieter
              Cloudflare bereitgestellt werden.
            </p>
            <p>
              Diese Cookies sind erforderlich, um die Website vor Angriffen zu schützen,
              eine stabile Verbindung zu gewährleisten und Inhalte effizient auszuliefern.
              Sie können daher nicht deaktiviert werden.
            </p>
          </section>

          <section className="legal-section" aria-labelledby="contact">
            <h2 id="contact">5. Kontakt &amp; Kommunikation</h2>
            <p>
              Wenn du uns per E-Mail, Telefon oder Messenger kontaktierst,
              verarbeiten wir deine Angaben zur Bearbeitung deiner Anfrage.
              Die Verarbeitung erfolgt je nach Inhalt der Anfrage
              auf Grundlage von Art. 6 Abs. 1 lit. b oder lit. f DSGVO.
            </p>
          </section>

          <section className="legal-section" aria-labelledby="newsletter">
            <h2 id="newsletter">6. Newsletter</h2>
            <p>
              Für den Versand unseres Newsletters nutzen wir das Double-Opt-In-Verfahren.
              Die Verarbeitung deiner Daten erfolgt ausschließlich auf Grundlage
              deiner Einwilligung, die du jederzeit widerrufen kannst.
            </p>
          </section>

          <section className="legal-section" aria-labelledby="analytics">
            <h2 id="analytics">7. Analyse-Tools &amp; Sicherheit</h2>
            <p>
              Analyse-Tools wie Google Analytics werden nur eingesetzt,
              wenn du zuvor ausdrücklich eingewilligt hast.
              Zudem setzen wir Sicherheitsmechanismen wie SSL-/TLS-Verschlüsselung
              ein, um deine Daten zu schützen.
            </p>
          </section>

          <section className="legal-section" aria-labelledby="objection">
            <h2 id="objection">8. Widerspruch gegen Werbe-E-Mails</h2>
            <p>
              Der Nutzung veröffentlichter Kontaktdaten zur Übersendung
              nicht ausdrücklich angeforderter Werbung wird hiermit widersprochen.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}

export default Privacy
