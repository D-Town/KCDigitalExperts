import { useTranslations } from 'next-intl';

const Withdrawl = () => {
  const t = useTranslations('Legal.withdrawl');

  return (
    <main className="kc-wrap" role="main" aria-labelledby="page-title">
      <section className="kc-card">
        <div className="legal-content">
          <section className="legal-section">
            <h1 id="page-title">Widerrufsbelehrung</h1>
          </section>

          <section className="legal-section" aria-labelledby="withdrawal-right">
            <h2 id="withdrawal-right">Widerrufsrecht für Verbraucher</h2>
            <p>
              <em>
                Verbraucher ist jede natürliche Person, die ein Rechtsgeschäft zu Zwecken abschließt,
                die überwiegend weder ihrer gewerblichen noch ihrer selbständigen beruflichen Tätigkeit
                zugerechnet werden können.
              </em>
            </p>
            <p>
              Du hast das Recht, diesen Vertrag innerhalb von 14 Tagen ohne Angabe von Gründen zu widerrufen.
              Die Widerrufsfrist beträgt 14 Tage ab dem Tag des Vertragsabschlusses.
            </p>
            <p>
              Um dein Widerrufsrecht auszuüben, musst du uns
            </p>
            <p className="legal-address">
              <strong>Katja und Christian Ernst GbR</strong><br />
              Ludwig-Erhard-Str. 18<br />
              c/o IP-Management #45145<br />
              20459 Hamburg<br />
              E-Mail: <a href="mailto:info@kcdigitalexperts.de">info@kcdigitalexperts.de</a>
            </p>
            <p>
              mittels einer eindeutigen Erklärung (z. B. per Post oder per E-Mail)
              über deinen Entschluss informieren, diesen Vertrag zu widerrufen.
              Du kannst dafür das unten aufgeführte Muster-Widerrufsformular verwenden,
              dies ist jedoch nicht verpflichtend.
            </p>
            <p>
              Zur Wahrung der Widerrufsfrist reicht es aus,
              dass du die Mitteilung über die Ausübung des Widerrufsrechts
              vor Ablauf der Widerrufsfrist absendest.
            </p>
          </section>

          <section className="legal-section" aria-labelledby="withdrawal-effects">
            <h2 id="withdrawal-effects">Folgen des Widerrufs</h2>
            <p>
              Wenn du diesen Vertrag widerrufst, erstatten wir dir alle Zahlungen,
              die wir von dir erhalten haben,
              unverzüglich und spätestens binnen vierzehn Tagen ab dem Tag,
              an dem die Mitteilung über deinen Widerruf bei uns eingegangen ist.
            </p>
            <p>
              Für die Rückzahlung verwenden wir dasselbe Zahlungsmittel,
              das du bei der ursprünglichen Transaktion eingesetzt hast,
              es sei denn, mit dir wurde ausdrücklich etwas anderes vereinbart.
              In keinem Fall werden dir wegen dieser Rückzahlung Entgelte berechnet.
            </p>
          </section>

          <section className="legal-section" aria-labelledby="withdrawal-expiration">
            <h2 id="withdrawal-expiration">Erlöschen des Widerrufsrechts</h2>
            <p>
              Das Widerrufsrecht erlischt vorzeitig,
              wenn wir mit der Ausführung des Vertrags begonnen haben,
              nachdem du ausdrücklich zugestimmt hast,
              dass wir vor Ablauf der Widerrufsfrist mit der Ausführung beginnen,
              und du bestätigt hast, dass du durch deine Zustimmung
              mit Beginn der Ausführung dein Widerrufsrecht verlierst
              (§ 356 Abs. 5 BGB).
            </p>
          </section>

          <section className="legal-section" aria-labelledby="withdrawal-form">
            <h2 id="withdrawal-form">Muster-Widerrufsformular</h2>
            <p>
              (Wenn du den Vertrag widerrufen möchtest,
              fülle bitte dieses Formular aus und sende es zurück.)
            </p>
            <p className="legal-address">
              <strong>An:</strong><br />
              Katja und Christian Ernst GbR<br />
              Ludwig-Erhard-Str. 18<br />
              c/o IP-Management #45145<br />
              20459 Hamburg<br />
              E-Mail: info@kcdigitalexperts.de
            </p>
            <p>
              Hiermit widerrufe ich den von mir abgeschlossenen Vertrag
              über die Bereitstellung des Zugangs zu folgenden digitalen Inhalten:
            </p>
            <p>
              ..............................................................................
            </p>
            <p>
              Bestellt am (Datum):<br />
              .............................
            </p>
            <p>
              Name und Anschrift des Verbrauchers:<br />
              .............................
            </p>
            <p>
              Datum:<br />
              .............................
            </p>
            <p>
              Unterschrift (nur bei schriftlichem Widerruf):<br />
              .............................
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}

export default Withdrawl
