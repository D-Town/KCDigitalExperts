import { useTranslations } from "next-intl";
import Image from "next/image";

const AboutUs = () => {
  const t = useTranslations('AboutUs');
  const whyBullets = t.raw('why.bullets') as string[];
  const frustrationBullets = t.raw('frustration.bullets') as string[];
  return (
    <main className="kc-wrap" role="main" aria-labelledby="page-title">
      <div className="container-custom py-12 space-y-12">
        <section className="card space-y-4">
          <h1 className="h1">{t("title")}</h1>
        </section>

        <section className="kc-card dark-mode-transition mb-10 sm:mb-14">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h3 className="h3">{t("whoIs.p1")}</h3>
              <br />
              <p>{t("whoIs.p1")}</p>
              <br />
              <p>{t("whoIs.p2")}</p>
            </div>

            {/* Visual / Mock */}
            <div className="relative">
              <Image src="/img/kate-and-chris-transparent.png" width={506} height={506} alt="" />
            </div>
          </div>
        </section>

        <section className="card space-y-4">
          <h2 className="h2">{t("history.title")}</h2>
          <p> {t.rich('history.p1', {
            strong: (chunks) => <strong>{chunks}</strong>,
            i: (chunks) => <i>{chunks}</i>,
          })}</p>
          <p>{t("history.p2")}</p>
          <p>{t.rich('history.p3', {
            strong: (chunks) => <strong>{chunks}</strong>
          })}</p>
          <p>{t("history.p4")}</p>
          <p>{t("history.p5")}</p>
        </section>

        <section className="card space-y-4">
          <h3 className="h3">{t("frustration.title")}</h3>
          <p>{t("frustration.p1")}</p>
          <ul>
            {frustrationBullets.map((_, index) => (
              <li key={index}>
                {t.rich(`why.bullets.${index}`, {
                  strong: (chunks) => <strong>{chunks}</strong>,
                })}
              </li>
            ))}
          </ul>
        </section>

        <section className="card space-y-4">
          <h3 className="h3">{t("why.title")}</h3>
          <ul>
            {whyBullets.map((_, index) => (
              <li key={index}>
                {t.rich(`why.bullets.${index}`, {
                  strong: (chunks) => <strong>{chunks}</strong>,
                })}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}

export default AboutUs;