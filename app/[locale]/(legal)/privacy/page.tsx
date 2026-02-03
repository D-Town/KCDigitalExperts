import { useTranslations } from 'next-intl';

const Privacy = () => {
  const t = useTranslations('Legal.privacy');

  return (
    <main id="main-content" tabIndex={-1} className="kc-wrap" role="main" aria-labelledby="page-title">
      <div className="container-custom py-12 space-y-12">
        <section className="legal-section">
          <h1 id="page-title">{t('title')}</h1>
        </section>

        <section className="legal-section" aria-labelledby="overview">
          <h2 id="overview">{t('sections.overview.title')}</h2>
          <h3>{t('sections.overview.generalNotes.title')}</h3>
          <p>{t('sections.overview.generalNotes.p1')}</p>

          <h3>{t('sections.overview.dataCollection.title')}</h3>
          <h4>{t('sections.overview.dataCollection.whoResponsible.title')}</h4>
          <p>
            {t.rich('sections.overview.dataCollection.whoResponsible.p1', {
              em: (chunks) => <em>{chunks}</em>,
            })}
          </p>

          <h4>{t('sections.overview.dataCollection.howWeCollect.title')}</h4>
          <p>{t('sections.overview.dataCollection.howWeCollect.p1')}</p>
          <p>{t('sections.overview.dataCollection.howWeCollect.p2')}</p>

          <h4>{t('sections.overview.dataCollection.whyWeUse.title')}</h4>
          <p>{t('sections.overview.dataCollection.whyWeUse.p1')}</p>

          <h4>{t('sections.overview.dataCollection.yourRights.title')}</h4>
          <p>{t('sections.overview.dataCollection.yourRights.p1')}</p>
          <p>{t('sections.overview.dataCollection.yourRights.p2')}</p>
        </section>

        <section className="legal-section" aria-labelledby="hosting">
          <h2 id="hosting">{t('sections.hosting.title')}</h2>
          <h3>{t('sections.hosting.externalHosting.title')}</h3>
          <p className="legal-address">
            {t.rich('sections.hosting.externalHosting.providerAddress', {
              strong: (chunks) => <strong>{chunks}</strong>,
              br: () => <br />,
            })}
          </p>
          <p>{t('sections.hosting.externalHosting.p1')}</p>
          <p>{t('sections.hosting.externalHosting.p2')}</p>
        </section>

        <section className="legal-section" aria-labelledby="general-info">
          <h2 id="general-info">{t('sections.generalInfo.title')}</h2>
          <h3>{t('sections.generalInfo.controllerNotice.title')}</h3>
          <p>{t('sections.generalInfo.controllerNotice.p1')}</p>
          <p className="legal-address">
            {t.rich('sections.generalInfo.controllerNotice.address', {
              strong: (chunks) => <strong>{chunks}</strong>,
              br: () => <br />,
            })}
          </p>

          <h3>{t('sections.generalInfo.retention.title')}</h3>
          <p>{t('sections.generalInfo.retention.p1')}</p>

          <h3>{t('sections.generalInfo.legalBases.title')}</h3>
          <p>{t('sections.generalInfo.legalBases.p1')}</p>

          <h3>{t('sections.generalInfo.withdrawalObjection.title')}</h3>
          <p>{t('sections.generalInfo.withdrawalObjection.p1')}</p>
        </section>

        <section className="legal-section" aria-labelledby="cookies">
          <h2 id="cookies">{t('sections.cookies.title')}</h2>
          <p>{t('sections.cookies.p1')}</p>
          <p>{t('sections.cookies.p2')}</p>
          <p>{t('sections.cookies.p3')}</p>
        </section>

        <section className="legal-section" aria-labelledby="contact">
          <h2 id="contact">{t('sections.contact.title')}</h2>
          <p>{t('sections.contact.p1')}</p>
        </section>

        <section className="legal-section" aria-labelledby="newsletter">
          <h2 id="newsletter">{t('sections.newsletter.title')}</h2>
          <p>{t('sections.newsletter.p1')}</p>
        </section>

        <section className="legal-section" aria-labelledby="analytics">
          <h2 id="analytics">{t('sections.analytics.title')}</h2>
          <p>{t('sections.analytics.p1')}</p>
          <p>{t('sections.analytics.p2')}</p>
        </section>

        <section className="legal-section" aria-labelledby="recaptcha">
          <h2 id="recaptcha">{t('sections.recaptcha.title')}</h2>
          <p>{t('sections.recaptcha.p1')}</p>
          <p>{t('sections.recaptcha.p2')}</p>
        </section>

        <section className="legal-section" aria-labelledby="objection">
          <h2 id="objection">{t('sections.objection.title')}</h2>
          <p>{t('sections.objection.p1')}</p>
        </section>
      </div>
    </main>
  );
}

export default Privacy
