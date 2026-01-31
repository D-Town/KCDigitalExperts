import { useTranslations } from 'next-intl';

const Home = () => {

  const t = useTranslations('Home');
  const whyBullets = t.raw('why.bullets') as string[];
  return (
    <div className="container-custom py-12 space-y-12">
      {/* Hero Section */}
      <section className="text-center space-y-6">
        <h1 className="h1">{t("hero.title")}</h1>
        <h2 className="h2">
          {t("hero.subTitle")}
        </h2>
      </section>
      <section className="card space-y-4">
        <p>{t("hero.p1")}</p>
        <p> {t.rich('hero.p2', {
          strong: (chunks) => <strong>{chunks}</strong>,
          u: (chunks) => <u>{chunks}</u>,
        })}</p>
        <p>{t.rich('hero.p3', {
          strong: (chunks) => <strong>{chunks}</strong>
        })}</p>
        <p>{t("hero.p4")}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="btn-primary">{t("hero.button")}</button>
        </div>
      </section>
      <br />
      <img src="./img/energy-1280x768.png" alt="" />
      <br />
      <section className="card space-y-4">
        <h2 className="h2">{t("story.title")}</h2>
        <p>{t("story.p1")}</p>
        <p>{t("story.p2")}</p>
        <p>{t("story.p3")}</p>
        <p>{t("story.p4")}</p>
        <p>{t("story.p5")}</p>
      </section>
      <section className="card space-y-4">
        <h2 className="h2">{t("consulting.title")}</h2>
        <p>{t("consulting.p1")}</p>
        <div>
          <button className="btn-primary">{t("consulting.button")}</button>
        </div>
      </section>
      <br />
      <section className="card space-y-4">
        <h2 className="h2">{t("why.title")}</h2>
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
      <br />
    </div>
  );
}

export default Home
