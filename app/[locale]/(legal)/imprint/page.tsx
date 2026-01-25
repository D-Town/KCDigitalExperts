import { useTranslations } from 'next-intl';

const Imprint = () => {
  const t = useTranslations('Legal.imprint');

  return (
    <main className="kc-wrap" role="main" aria-labelledby="page-title">
      <section className="kc-card space-y-6">
        <h1 id="page-title">{t('title')}</h1>

        <p>{t.rich('items.adress', { br: () => <br /> })}</p>

        <p>
          {t.rich('items.represented', {
            strong: (chunks) => <strong>{chunks}</strong>,
            br: () => <br />,
          })}
        </p>

        <h2>{t('items.contact.title')}</h2>
        <p>
          {t.rich('items.contact.description', {
            br: () => <br />,
            link: (chunks) => (
              <a href="mailto:info@kcdigitalexperts.de">{chunks}</a>
            ),
          })}
        </p>

        <h2>{t('items.tax.title')}</h2>
        <p>{t.rich('items.tax.description', { br: () => <br /> })}</p>

        <h2>{t('items.arbitration.title')}</h2>
        <p>{t.rich('items.arbitration.description', { br: () => <br /> })}</p>
      </section>
    </main>
  );
}

export default Imprint
