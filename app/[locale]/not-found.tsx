import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  const t = useTranslations('NotFound');
  return (
    <main id="main-content" tabIndex={-1} className="kc-wrap" role="main" aria-labelledby="page-title">
      <div className="container-custom py-12 space-y-12">
        <section className="kc-card dark-mode-transition space-y-6">
          <div className="space-y-2">
            <p className="text-body-sm text-muted">404</p>
            <h1 id="page-title" className="h2">{t("title")}</h1>
            <p className="text-body-sm text-muted">
              {t("p")}
            </p>
          </div>

          <div>
            <Image src="/img/404.png" alt="Ein trauriger Roboter ist ein teil aus 404 aus Steien die zerbrochen ausshen wo er die letzte 4 darstellt" width={800} height={533}/>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Link href="/shop" className="btn-primary">
              {t("button1")}
            </Link>
            <Link href="/contact" className="btn-ghost">
              {t("button2")}
            </Link>
          </div>
        </section>
      </div>
    </main>

  );
}
