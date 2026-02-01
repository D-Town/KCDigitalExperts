import Link from "next/link";
import ProductCard from "../../../components/shop/ProductCard";
import { getActiveProducts, getMRRProducts, getAffiliateProducts } from "../../../lib/products-helper";

export default async function ShopPage() {
  const allProducts = await getActiveProducts();
  const mrrProducts = await getMRRProducts();
  const affiliateProducts = await getAffiliateProducts();

  const totalProducts = allProducts.length;
  const mrrCount = mrrProducts.length;
  const affiliateCount = affiliateProducts.length;

  return (
    <main className="kc-wrap" role="main" aria-labelledby="page-title">
      <div className="container-custom py-12 space-y-12">
      <section className="kc-card dark-mode-transition">
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div className="space-y-6">
            <p className="text-body-sm text-muted">
              Digitale Produkte • Klarer Fokus • Sofort startklar
            </p>
            <h1 className="h1" id="shop-title">
              Deine nächste Umsatzstufe beginnt mit dem richtigen Produkt.
            </h1>
            <p className="text-body-sm text-muted">
              Kuratiert, geprüft und so aufgebaut, dass du schnell sichtbar wirst und sicher skalieren kannst.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href="#produkte" className="btn-primary">
                Produkte entdecken
              </Link>
              <Link href="/contact" className="btn-ghost">
                Beratung anfragen
              </Link>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="kc-card dark-mode-transition">
              <p className="text-body-sm text-muted">Produkte gesamt</p>
              <p className="h3">{totalProducts}</p>
            </div>
            <div className="kc-card dark-mode-transition">
              <p className="text-body-sm text-muted">MRR Produkte</p>
              <p className="h3">{mrrCount}</p>
            </div>
            <div className="kc-card dark-mode-transition sm:col-span-2">
              <p className="text-body-sm text-muted">Affiliate Produkte</p>
              <p className="h3">{affiliateCount}</p>
              <p className="text-body-sm text-muted mt-2">
                Für Partner, die Reichweite in skalierbare Umsätze verwandeln möchten.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="kc-card dark-mode-transition space-y-4" aria-labelledby="context-title">
        <h2 className="h2" id="context-title">Kontext / Problem</h2>
        <p>
          Viele digitale Produkte wirken austauschbar, lassen sich schwer erklären oder liefern keine klaren Ergebnisse.
          Genau dort entstehen Unsicherheit und Kaufabbrüche.
        </p>
        <p>
          Diese Auswahl reduziert Komplexität, fokussiert auf echte Nachfrage und sorgt für einen planbaren Ablauf von
          der ersten Aufmerksamkeit bis zur Conversion.
        </p>
      </section>

      <section className="space-y-12" id="produkte" aria-labelledby="products-title">
        <div className="kc-card dark-mode-transition space-y-4">
          <h2 className="h2" id="products-title">Lösung / Ansatz</h2>
          <p>
            Du bekommst strukturierte Produktpakete, klare Positionierung und messbaren Mehrwert. Jedes Produkt ist so
            aufgebaut, dass es sofort kommuniziert werden kann – ohne Content-Chaos.
          </p>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="kc-card dark-mode-transition">
              <p className="text-body-sm text-muted">Positionierung</p>
              <p className="h4">Sofort verständlicher Nutzen</p>
            </div>
            <div className="kc-card dark-mode-transition">
              <p className="text-body-sm text-muted">Assets</p>
              <p className="h4">Fixe Sales-Page Struktur</p>
            </div>
            <div className="kc-card dark-mode-transition">
              <p className="text-body-sm text-muted">Skalierung</p>
              <p className="h4">Umsatz mit System statt Zufall</p>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h3 className="h3">MRR Produkte</h3>
            <p className="text-body-sm text-muted">{mrrCount} Produkte</p>
          </div>
          {mrrCount ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {mrrProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <p className="text-body-sm text-muted">Aktuell sind keine MRR Produkte verfügbar.</p>
          )}
        </div>

        <div className="space-y-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h3 className="h3">Affiliate Produkte</h3>
            <p className="text-body-sm text-muted">{affiliateCount} Produkte</p>
          </div>
          {affiliateCount ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {affiliateProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <p className="text-body-sm text-muted">Aktuell sind keine Affiliate Produkte verfügbar.</p>
          )}
        </div>
      </section>

      <section className="kc-card dark-mode-transition space-y-4" aria-labelledby="audience-title">
        <h2 className="h2" id="audience-title">Für wen?</h2>
        <ul className="space-y-2">
          <li>Creator und Experten, die ihr Wissen produktisieren wollen.</li>
          <li>Agenturen, die skalierbare Angebote neben Services brauchen.</li>
          <li>Affiliate-Partner mit klarer Zielgruppe und Performance-Fokus.</li>
        </ul>
      </section>

      <section className="kc-card dark-mode-transition space-y-4" aria-labelledby="story-title">
        <h2 className="h2" id="story-title">Story / About</h2>
        <p>
          KC Digital Experts verbindet Strategie, Content und Automatisierung. Wir testen Produkte in der Praxis,
          reduzieren auf das Wesentliche und liefern Assets, die funktionieren.
        </p>
        <p>
          Das Ergebnis: weniger Chaos, mehr Klarheit und ein Setup, das mit deinem Wachstum Schritt hält.
        </p>
      </section>

      <section className="kc-card dark-mode-transition space-y-6" aria-labelledby="testimonials-title">
        <div className="space-y-2">
          <h2 className="h2" id="testimonials-title">Testimonials</h2>
          <p className="text-body-sm text-muted">
            Platzhalter bis zum nächsten Kunden-Feedback. Optik & Struktur sind final.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            "Klarer Fokus, schnelle Umsetzung.",
            "Die Produkte verkaufen sich endlich ohne Erklär-Marathon.",
            "Mehr Struktur, weniger Stress im Launch."
          ].map((quote, index) => (
            <div key={index} className="kc-card dark-mode-transition space-y-3">
              <p className="text-body-sm text-muted">“{quote}”</p>
              <p className="text-body-sm">— Kundin / Kunde</p>
            </div>
          ))}
        </div>
      </section>

      <section className="kc-card dark-mode-transition space-y-6" aria-labelledby="cta-title">
        <div className="space-y-3">
          <h2 className="h2" id="cta-title">Bereit für die nächste Verkaufswelle?</h2>
          <p className="text-body-sm text-muted">
            Lass uns gemeinsam das richtige Produkt und den passenden Go-to-Market finden.
          </p>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Link href="/contact" className="btn-primary">
            Gespräch starten
          </Link>
          <Link href="#produkte" className="btn-ghost">
            Produkte vergleichen
          </Link>
        </div>
      </section>
    </div>
    </main>
  );
}
