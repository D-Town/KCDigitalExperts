import { useTranslations } from "next-intl";

export function Footer() {
  const t = useTranslations('Footer');
  return (
    <footer className="footer" role="contentinfo">
      <div className="container-custom py-[10px]">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">


          <div>
            <h4 className="h6 mb-2">{t("quickLinks.title")}</h4>
            <ul className="space-y-1 text-body-sm">
              <li><a href="/produkt-1">{t("quickLinks.items.home")}</a></li>
              <li><a href="/produkt-2">{t("quickLinks.items.shop")}</a></li>
              <li><a href="/produkt-3">{t("quickLinks.items.about")} uns</a></li>
              <li><a href="/produkt-3">{t("quickLinks.items.contact")}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="h6 mb-2">{t("social.title")}</h4>
            <ul className="space-y-1 text-body-sm">
              <li><a href="/ueber-uns">{t("social.items.facebook")}</a></li>
              <li><a href="/karriere">{t("social.items.instagram")}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="h6 mb-2">{t("legal.title")}</h4>
            <ul className="space-y-1 text-body-sm">
              <li><a href="/agb">{t("legal.items.terms")}</a></li>
              <li><a href="/datenschutz">{t("legal.items.privacy")}</a></li>
              <li><a href="/impressum">{t("legal.items.imprint")}</a></li>
              <li><a href="/wiederufsbelehrung">{t("legal.items.withdrawal")}</a></li>
              <li><a href="/barriererefreiheit">{t("legal.items.accessibility")}</a></li>
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
