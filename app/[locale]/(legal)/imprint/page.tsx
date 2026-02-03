import { useTranslations } from 'next-intl';

const Imprint = () => {
  const t = useTranslations('Legal.imprint');

  return (
    <main tabIndex={-1} role="main" aria-labelledby="page-title">
      <div id="main-content" className="main-content">
        <div className="container-custom py-12 space-y-12">
          <section className="legal-section">
            <h1 id="page-title">{t('title')}</h1>
            <p>{t.rich('items.adress', { br: () => <br /> })}</p>
            <p>
              {t.rich('items.represented', {
                strong: (chunks) => <strong>{chunks}</strong>,
                br: () => <br />,
              })}
            </p>
          </section>

          <section className="legal-section" aria-labelledby="contact">
            <h2 id="contact">{t('items.contact.title')}</h2>
            <p>
              {t.rich('items.contact.description', {
                br: () => <br />,
                link: (chunks) => (
                  <a href="mailto:info@kcdigitalexperts.de">{chunks}</a>
                ),
              })}
            </p>
          </section>

          <section className="legal-section" aria-labelledby="tax">
            <h2 id="tax">{t('items.tax.title')}</h2>
            <p>{t.rich('items.tax.description', { br: () => <br /> })}</p>
          </section>

          <section className="legal-section" aria-labelledby="arbitration">
            <h2 id="arbitration">{t('items.arbitration.title')}</h2>
            <p>{t.rich('items.arbitration.description', { br: () => <br /> })}</p>
          </section>
        </div>
      </div>
    </main>
  );
}

export default Imprint
