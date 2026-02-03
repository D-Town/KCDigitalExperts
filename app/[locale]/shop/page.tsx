import Link from "next/link";
import { getTranslations } from "next-intl/server";
import ProductCard from "../../../components/shop/ProductCard";
import { getActiveProducts, getMRRProducts, getAffiliateProducts } from "../../../lib/products-helper";

export default async function ShopPage() {
  const t = await getTranslations("Shop.mainPage");
  const allProducts = await getActiveProducts();
  const mrrProducts = await getMRRProducts();
  const affiliateProducts = await getAffiliateProducts();

  const totalProducts = allProducts.length;
  const mrrCount = mrrProducts.length;
  const affiliateCount = affiliateProducts.length;

  return (
    <main id="main-content" tabIndex={-1} className="container-custom py-12 space-y-16">
      <section className="kc-card dark-mode-transition">
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div className="space-y-6">
            <p className="text-body-sm text-muted">{t("main.p0")}</p>
            <h1 className="h1" id="shop-title">
              {t("main.title")}
            </h1>
            <p className="text-body-sm text-muted">{t("main.p1")}</p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href="#produkte" className="btn-primary">
                {t("main.link1")}
              </Link>
              <Link href="/contact" className="btn-ghost">
                {t("main.link2")}
              </Link>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="kc-card dark-mode-transition">
              <p className="text-body-sm text-muted">{t("main.div.p1")}</p>
              <p className="h3">{totalProducts}</p>
            </div>
            <div className="kc-card dark-mode-transition">
              <p className="text-body-sm text-muted">{t("main.div.p2")}</p>
              <p className="h3">{mrrCount}</p>
            </div>
            <div className="kc-card dark-mode-transition sm:col-span-2">
              <p className="text-body-sm text-muted">{t("main.div.p3")}</p>
              <p className="h3">{affiliateCount}</p>
              <p className="text-body-sm text-muted mt-2">{t("main.div.p4")}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="kc-card dark-mode-transition space-y-4" aria-labelledby="context-title">
        <h2 className="h2" id="context-title">{t("context.title")}</h2>
        <p>{t.rich("context.p1", { br: () => <br /> })}</p>
        <p>{t.rich("context.p2", { br: () => <br /> })}</p>
      </section>

      <section className="space-y-12" aria-labelledby="products-title">
        <div className="kc-card dark-mode-transition space-y-4">
          <h2 className="h2" id="solution-title">{t("solution.title")}</h2>
          <p>{t.rich("solution.p1", { br: () => <br /> })}</p>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="kc-card dark-mode-transition">
              <p className="text-body-sm text-muted">{t("solution.div.p1")}</p>
              <p className="h4">{t("solution.div.p2")}</p>
            </div>
            <div className="kc-card dark-mode-transition">
              <p className="text-body-sm text-muted">{t("solution.div.p3")}</p>
              <p className="h4">{t("solution.div.p4")}</p>
            </div>
            <div className="kc-card dark-mode-transition">
              <p className="text-body-sm text-muted">{t("solution.div.p5")}</p>
              <p className="h4">{t("solution.div.p6")}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-12" id="produkte" aria-labelledby="products-title">
        <div className="space-y-8" id="mrr">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h3 className="h3">{t("products.mrr.h3")}</h3>
            <p className="text-body-sm text-muted">
              {mrrCount} {t("products.mrr.p1")}
            </p>
          </div>
          <p>{t("products.mrr.p2")}</p>
          {mrrCount ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {mrrProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <p className="text-body-sm text-muted">{t("products.mrr.fallback")}</p>
          )}
        </div>

        <div className="space-y-8" id="affiliate">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h3 className="h3">{t("products.affiliate.h3")}</h3>
            <p className="text-body-sm text-muted">
              {affiliateCount} {t("products.affiliate.p1")}
            </p>
          </div>
          <p>{t("products.affiliate.p2")}</p>
          {affiliateCount ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {affiliateProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <p className="text-body-sm text-muted">{t("products.affiliate.fallback")}</p>
          )}
        </div>
      </section>

      {/* <section className="kc-card dark-mode-transition space-y-4" aria-labelledby="audience-title">
        <h2 className="h2" id="audience-title">Für wen?</h2>
        <ul className="space-y-2">
          <li>Creator und Experten, die ihr Wissen produktisieren wollen.</li>
          <li>Agenturen, die skalierbare Angebote neben Services brauchen.</li>
          <li>Affiliate-Partner mit klarer Zielgruppe und Performance-Fokus.</li>
        </ul>
      </section> */}

      <section className="kc-card dark-mode-transition space-y-4" aria-labelledby="story-title">
        <h2 className="h2" id="story-title">{t("story.title")}</h2>
        <p>{t.rich("story.p1", { br: () => <br /> })}</p>
        <p>{t("story.p2")}</p>
      </section>

      {/* <section className="kc-card dark-mode-transition space-y-6" aria-labelledby="testimonials-title">
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
      </section> */}

      {/* <section className="kc-card dark-mode-transition space-y-6" aria-labelledby="cta-title">
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
      </section> */}
    </main>
  );
}
