import { useTranslations } from 'next-intl';

const Terms = () => {
  const t = useTranslations('Legal.terms');

  return (
    <main className="kc-wrap" role="main" aria-labelledby="page-title">
      <section className="kc-card">
        <div className="legal-content">
          <section className="legal-section">
            <h1 id="page-title">Allgemeine Geschäftsbedingungen (AGB)</h1>
            <p><strong>für digitale Produkte &amp; digitale Dienstleistungen</strong></p>
            <p className="legal-address">
              Katja und Christian Ernst GbR<br />
              c/o IP-Management #45145<br />
              Ludwig-Erhard-Str. 18<br />
              20459 Hamburg<br />
              E-Mail: info@kcdigitalexperts.de<br />
              (nachfolgend „Anbieter“)
            </p>
          </section>

          <section className="legal-section" aria-labelledby="scope">
            <h2 id="scope">1. Geltungsbereich</h2>
            <p>
              (1) Digitale Inhalte werden nach erfolgreicher Zahlung entweder zum Download
              bereitgestellt oder über einen von uns betriebenen Online-Zugangsbereich
              (z. B. Mitgliederbereich oder vergleichbare Lösung) zugänglich gemacht.
            </p>
            <p>
              (2) Die AGB gelten sowohl gegenüber <strong>Verbrauchern</strong> (§ 13 BGB) als auch gegenüber
              <strong>Unternehmern</strong> (§ 14 BGB). Einzelne Regelungen gelten ausdrücklich nur für Verbraucher oder nur
              für Unternehmer.
            </p>
            <p>
              (3) Abweichende Bedingungen des Kunden gelten nicht, es sei denn, wir stimmen ihrer Geltung ausdrücklich in
              Textform zu.
            </p>
          </section>

          <section className="legal-section" aria-labelledby="services">
            <h2 id="services">2. Leistungen &amp; Leistungsbeschreibung</h2>
            <p>
              (1) Wir bieten digitale Produkte sowie digitale Bildungs- und Informationsleistungen an – insbesondere rund um
              Online-Business,
              digitales Marketing, Content-Erstellung sowie Tools/Automatisierung (z. B. Kurse, Videos, Workbooks, Vorlagen,
              Anleitungen, Mitgliederbereiche).
            </p>
            <p>
              (2) Welche Inhalte du genau bekommst (Umfang, Voraussetzungen, ggf. Laufzeit), ergibt sich aus der jeweiligen
              Leistungsbeschreibung auf der Verkaufsseite bzw. im Checkout.
            </p>
            <p>
              (3) Wir schulden die Bereitstellung der beschriebenen Inhalte/Leistungen – <strong>nicht</strong> jedoch einen
              bestimmten wirtschaftlichen oder geschäftlichen Erfolg (z. B. Umsatz, Reichweite, Kundengewinn).
            </p>
          </section>

          <section className="legal-section" aria-labelledby="contract">
            <h2 id="contract">3. Vertragsschluss</h2>
            <p>
              (1) Die Darstellung unserer Produkte/Leistungen ist kein rechtlich bindendes Angebot, sondern eine Aufforderung,
              eine Bestellung abzugeben.
            </p>
            <p>
              (2) Mit Abschluss des Bestellprozesses gibst du ein verbindliches Angebot ab. Der Vertrag kommt zustande,
              sobald wir die Bestellung per E-Mail bestätigen oder die digitale Bereitstellung freischalten.
            </p>
          </section>

          <section className="legal-section" aria-labelledby="pricing">
            <h2 id="pricing">4. Preise, Zahlung &amp; Rechnung</h2>
            <p>
              (1) Es gelten die Preise, die zum Zeitpunkt der Bestellung angezeigt werden. Sofern nicht anders ausgewiesen,
              verstehen sich Preise gegenüber Verbrauchern inklusive gesetzlicher Umsatzsteuer; gegenüber Unternehmern je nach
              Darstellung im Checkout.
            </p>
            <p>
              (2) Welche Zahlungsmethoden verfügbar sind, siehst du im Checkout. Die Zahlungsabwicklung erfolgt über die
              jeweils
              eingebundenen Zahlungsdienstleister bzw. Plattformen.
            </p>
            <p>
              (3) Du stimmst zu, dass Rechnungen in elektronischer Form (z. B. per E-Mail/PDF) ausgestellt werden.
            </p>
          </section>

          <section className="legal-section" aria-labelledby="delivery">
            <h2 id="delivery">5. Bereitstellung digitaler Inhalte, Zugang &amp; Verfügbarkeit</h2>
            <p>
              (1) Nach erfolgreicher Zahlung stellen wir digitale Inhalte entweder sofort zum Download bereit oder machen sie
              über einen Mitgliederbereich zugänglich (Details findest du auf der Produktseite/im Checkout).
            </p>
            <p>
              (2) Bei Mitgliederbereichen benötigst du ein Kundenkonto, Login-Daten sowie eine funktionierende
              Internetverbindung.
            </p>
            <p>
              (3) Wir sorgen nach bestem Wissen für eine hohe Verfügbarkeit. Eine durchgehend unterbrechungsfreie
              Verfügbarkeit
              können wir jedoch nicht garantieren (z. B. Wartung, technische Störungen, Einfluss Dritter/Hoster).
            </p>
          </section>

          <section className="legal-section" aria-labelledby="rights">
            <h2 id="rights">6. Nutzungsrechte, Weitergabe &amp; Account-Sharing</h2>
            <p>
              (1) Sofern nicht anders angegeben, erhältst du ein <strong>einfaches, nicht übertragbares und nicht
                unterlizenzierbares</strong>
              Nutzungsrecht. Dieses gilt für die Vertragslaufzeit bzw. bei Einmalkauf zeitlich unbeschränkt – ausschließlich
              für eigene Zwecke.
            </p>
            <p>(2) Insbesondere ist Folgendes untersagt:</p>
            <ul>
              <li>Weitergabe, Verkauf, Vermietung, Verleih oder öffentliche Zugänglichmachung der Inhalte,</li>
              <li>Teilen von Login-Daten (Account-Sharing),</li>
              <li>systematisches Kopieren/Extrahieren, Spiegeln oder Re-Upload von Inhalten,</li>
              <li>Nutzung der Inhalte für Schulungen Dritter (z. B. interne/externe Trainings) ohne gesonderte Lizenz.</li>
            </ul>
            <p>
              (3) Bei Verstößen dürfen wir deinen Zugang vorübergehend sperren oder entziehen. Weitergehende Ansprüche bleiben
              unberührt.
            </p>
            <h3 id="rights-mrr">6a. Besonderheit: MRR-/Reseller-/Weiterverkaufsrechte (nur wenn ausdrücklich ausgewiesen)</h3>
            <p>
              (1) Bei Produkten, die auf der Verkaufsseite ausdrücklich als „MRR“, „Reseller“, „Weiterverkaufsrechte“ o. ä.
              gekennzeichnet sind,
              gelten zusätzlich die dort beschriebenen Lizenz- und Weiterverkaufsbedingungen.
            </p>
            <p>
              (2) Für alle anderen Produkte gilt Abschnitt 6: keine Weitergabe und kein Weiterverkauf.
            </p>
          </section>

          <section className="legal-section" aria-labelledby="updates">
            <h2 id="updates">7. Updates &amp; Weiterentwicklung</h2>
            <p>
              (1) Sofern nicht ausdrücklich zugesagt, besteht <strong>kein Anspruch</strong> auf Updates, Upgrades, neue
              Versionen oder inhaltliche Weiterentwicklungen.
            </p>
            <p>
              (2) Wir dürfen Inhalte aus sachlichen Gründen anpassen (z. B. Aktualisierung, technische Umstellungen),
              sofern der Gesamtcharakter der Leistung erhalten bleibt und die Änderung für dich zumutbar ist.
            </p>
          </section>

          <section className="legal-section" aria-labelledby="withdrawal">
            <h2 id="withdrawal">8. Widerrufsrecht für Verbraucher (digitale Inhalte)</h2>
            <p>
              (1) Verbrauchern steht grundsätzlich ein Widerrufsrecht zu. Die Widerrufsbelehrung und das
              Muster-Widerrufsformular
              stellen wir gesondert zur Verfügung.
            </p>
            <p>
              (2) <strong>Erlöschen des Widerrufsrechts bei digitalen Inhalten:</strong>
              Das Widerrufsrecht erlischt bei einem Vertrag über digitale Inhalte, die nicht auf einem körperlichen
              Datenträger geliefert werden,
              wenn wir mit der Ausführung des Vertrags begonnen haben, nachdem du als Verbraucher
            </p>
            <ul>
              <li>ausdrücklich zugestimmt hast, dass wir vor Ablauf der Widerrufsfrist mit der Ausführung beginnen, und</li>
              <li>deine Kenntnis bestätigt hast, dass du durch deine Zustimmung mit Beginn der Ausführung dein Widerrufsrecht
                verlierst.</li>
            </ul>
            <p>
              (§ 356 Abs. 5 BGB).
            </p>
          </section>

          <section className="legal-section" aria-labelledby="customer-duties">
            <h2 id="customer-duties">9. Pflichten des Kunden</h2>
            <p>
              (1) Du bist selbst dafür verantwortlich, dass du die technischen Voraussetzungen erfüllst (Gerät, Browser,
              Internetverbindung).
            </p>
            <p>
              (2) Zugangsdaten musst du vertraulich behandeln und vor dem Zugriff Dritter schützen.
            </p>
          </section>

          <section className="legal-section" aria-labelledby="warranty">
            <h2 id="warranty">10. Gewährleistung / Mängelrechte</h2>
            <p>
              (1) Für Verbraucher gelten die gesetzlichen Gewährleistungsrechte.
            </p>
            <p>
              (2) Gegenüber Unternehmern gilt: Offensichtliche Mängel sind unverzüglich in Textform anzuzeigen.
              Im Übrigen richtet sich die Gewährleistung nach den gesetzlichen Vorschriften, soweit nicht zwingend abweichend
              zulässig.
            </p>
          </section>

          <section className="legal-section" aria-labelledby="liability">
            <h2 id="liability">11. Haftung</h2>
            <p>
              (1) Wir haften unbeschränkt bei Vorsatz und grober Fahrlässigkeit, bei Verletzung von Leben, Körper oder
              Gesundheit
              sowie nach zwingenden gesetzlichen Vorschriften.
            </p>
            <p>
              (2) Bei leicht fahrlässiger Verletzung wesentlicher Vertragspflichten (Kardinalpflichten) ist unsere Haftung
              auf den vertragstypischen, vorhersehbaren Schaden begrenzt.
            </p>
            <p>
              (3) Im Übrigen ist die Haftung ausgeschlossen. Diese Haftungsregelungen gelten auch für unsere
              Erfüllungsgehilfen.
            </p>
          </section>

          <section className="legal-section" aria-labelledby="duration">
            <h2 id="duration">12. Laufzeit / Kündigung</h2>
            <p>
              (1) Bei Einmalkäufen endet der Vertrag mit Bereitstellung der digitalen Inhalte, sofern keine abweichende
              Laufzeit
              (z. B. Mitgliederbereich/Subscription) vereinbart ist.
            </p>
            <p>
              (2) Für laufzeitgebundene Leistungen gelten die im Checkout bzw. auf der Produktseite ausgewiesenen Laufzeiten
              und Kündigungsbedingungen.
            </p>
            <p>
              (3) Das Recht zur Kündigung aus wichtigem Grund bleibt unberührt.
            </p>
          </section>

          <section className="legal-section" aria-labelledby="privacy">
            <h2 id="privacy">13. Datenschutz</h2>
            <p>
              Details zur Verarbeitung personenbezogener Daten findest du in unserer Datenschutzerklärung.
            </p>
          </section>

          <section className="legal-section" aria-labelledby="final">
            <h2 id="final">14. Schlussbestimmungen</h2>
            <p>
              (1) Es gilt deutsches Recht unter Ausschluss des UN-Kaufrechts (CISG).
            </p>
            <p>
              (2) Ist der Kunde Kaufmann, juristische Person des öffentlichen Rechts oder öffentlich-rechtliches
              Sondervermögen
              oder hat keinen allgemeinen Gerichtsstand in Deutschland, ist Gerichtsstand unser Sitz; zwingende Gerichtsstände
              bleiben unberührt.
            </p>
            <p>
              (3) Sollte eine Bestimmung dieser AGB unwirksam sein oder werden, bleibt die Wirksamkeit der übrigen
              Bestimmungen unberührt.
            </p>
          </section>

          <section className="legal-section" aria-labelledby="dispute">
            <h2 id="dispute">15. Online-Streitbeilegung / Verbraucherschlichtung</h2>
            <p>
              Die EU-Kommission stellt eine Plattform zur Online-Streitbeilegung bereit:
              <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer">
                https://ec.europa.eu/consumers/odr
              </a>
            </p>
            <p>
              Wir sind weder verpflichtet noch bereit, an einem Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}

export default Terms
