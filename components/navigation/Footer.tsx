import { useTranslations } from "next-intl";
import Link from "next/link";

export function Footer() {
  const t = useTranslations('Footer');
  return (
    <footer className="footer" role="contentinfo">
      <div className="container-custom py-[10px]">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">


          <div>
            <h4 className="h6 mb-2">{t("quickLinks.title")}</h4>
            <ul className="space-y-1 text-body-sm">
              <li><Link href="/">{t("quickLinks.items.home")}</Link></li>
              <li><Link href="/shop">{t("quickLinks.items.shop")}</Link></li>
              <li><Link href="/aboutUs">{t("quickLinks.items.about")} uns</Link></li>
              <li><Link href="/contact">{t("quickLinks.items.contact")}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="h6 mb-2">{t("social.title")}</h4>
            <ul className="space-y-1 text-body-sm">
              <li><Link href="/ueber-uns">{t("social.items.facebook")}</Link></li>
              <li><Link href="/karriere">{t("social.items.instagram")}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="h6 mb-2">{t("legal.title")}</h4>
            <ul className="space-y-1 text-body-sm">
              <li><Link href="/terms">{t("legal.items.terms")}</Link></li>
              <li><Link href="/privacy">{t("legal.items.privacy")}</Link></li>
              <li><Link href="/imprint">{t("legal.items.imprint")}</Link></li>
              <li><Link href="/withdrawl">{t("legal.items.withdrawal")}</Link></li>
              <li><Link href="/accessibility">{t("legal.items.accessibility")}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="h5 mb-2">{t("about.title")}</h3>
            <p className="text-muted text-body-sm">{t("about.description")}
            </p>
          </div>
        </div>

        <hr className="my-[10px] border-border" />

        <div className="flex flex-col md:flex-row justify-center items-center text-body-sm text-muted">
          <p>{t("copyright")}</p>
        </div>
      </div>
    </footer>
  )
}
