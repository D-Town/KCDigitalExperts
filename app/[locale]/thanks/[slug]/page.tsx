import { notFound } from "next/navigation";
import { getProductByThankYouSlug } from "../../../../lib/products-helper";
import { logMissingThankYouSlug } from "../../../../lib/server-logger";
import Image from "next/image";

const ThankYou = async ({
  params
}: {
  params: Promise<{ slug: string }>
}) => {
  const { slug } = await params;
  const product = await getProductByThankYouSlug(slug);

  if (!product) {
    await logMissingThankYouSlug(slug);
    notFound();
  }

  return (
    <main id="main-content" tabIndex={-1} className="container-custom py-12 space-y-12" role="main" aria-labelledby="page-title">
      <section className="kc-card dark-mode-transition space-y-6">
        <div className="space-y-3">
          <p className="text-body-sm text-muted">Bestätigung & Zugriff</p>
          <h1 id="page-title" className="h2">Danke für deinen Kauf</h1>
          <p className="text-body-sm">
            Du hast dir gerade <strong>{product.product_name}</strong> gesichert.
          </p>
        </div>

        <div className="kc-card dark-mode-transition">
          <p className="text-body-sm text-muted">
            Wichtig: Bitte verwende für die Registrierung in der Akademie dieselben Daten, die du beim Kauf eingegeben hast.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="h3">So bekommst du jetzt Zugriff</h2>
          <ol className="space-y-2 list-decimal pl-5 text-body-sm">
            <li>Du bekommst deine Bestellbestätigung und Rechnung per E-Mail von Digistore24.</li>
            <li>Registriere dich in unserer Akademie über den Button unten.</li>
            <li>Logge dich danach mit denselben Daten ein, die du beim Kauf verwendet hast.</li>
            <li>Dein Kurs <strong>{product.product_name}</strong> ist danach für dich freigeschaltet.</li>
          </ol>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row">
          <a className="btn-primary" href="https://www.mrracademy.com/auth/register" rel="nofollow">
            Zur Akademie Registrierung
          </a>
          <a className="btn-ghost" href="https://www.mrracademy.com/auth/login" rel="nofollow">
            Ich habe schon ein Konto
          </a>
        </div>
      </section>

      <section className="kc-card dark-mode-transition space-y-4">
        <h2 className="h3">Wenn du die E-Mail nicht findest</h2>
        <ul className="space-y-2 list-disc pl-5 text-body-sm">
          <li>Bitte prüfe Spam/Junk/Unbekannt.</li>
          <li>Warte 5–10 Minuten, manchmal dauert es kurz.</li>
          <li>Falls du mehrere E-Mail-Adressen nutzt: prüfe die, die du beim Kauf eingegeben hast.</li>
        </ul>
        <p className="text-body-sm text-muted">
          Wenn nach 15 Minuten noch nichts da ist, schreib uns kurz an{" "}
          <a href="mailto:info@kcdigitalexperts.de">info@kcdigitalexperts.de</a>.
        </p>
      </section>

      <section className="kc-card dark-mode-transition space-y-4">
        <h2 className="h3">Support</h2>
        <p className="text-body-sm">
          Wenn etwas nicht klappt, schick uns bitte direkt diese Infos mit, dann lösen wir es am schnellsten:
        </p>
        <ul className="space-y-2 list-disc pl-5 text-body-sm">
          <li>Vor- und Nachname</li>
          <li>E-Mail-Adresse aus dem Kauf</li>
          <li>Produktname: <strong>{product.product_name}</strong></li>
          <li>Optional: Bestellnummer aus der Digistore-E-Mail</li>
        </ul>
      </section>

      <section className="kc-card dark-mode-transition space-y-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-body-sm">Liebe Grüße</p>
            <p className="text-body-sm text-muted">KC Digital Experts</p>
            <Image
              src="/img/sign/sign-black-transparent.png"
              alt="Signatur KC Digital Experts"
              width={260}
              height={96}
              loading="lazy"
              className="block dark:hidden"
            />
            <Image
              src="/img/sign/sign-white-transparent.png"
              alt="Signatur KC Digital Experts"
              width={260}
              height={96}
              loading="lazy"
              className="hidden dark:block"
            />
          </div>
        </div>
        <div className="kc-card dark-mode-transition">
          <p className="text-body-sm text-muted">
            Die Abbuchung erfolgt durch Digistore24 GmbH (Deutschland)
          </p>
        </div>
      </section>
    </main>
  )
}

export default ThankYou;
