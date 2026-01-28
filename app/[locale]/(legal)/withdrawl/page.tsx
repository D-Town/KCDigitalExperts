import { useTranslations } from 'next-intl';

const Withdrawl = () => {
  const t = useTranslations('Legal.withdrawal');

  return (
    <main className="kc-wrap" role="main" aria-labelledby="page-title">
      <div className="container-custom py-12 space-y-12">
        <section className="legal-section">
          <h1 id="page-title">{t('title')}</h1>
        </section>

        <section className="legal-section" aria-labelledby="withdrawal-right">
          <h2 id="withdrawal-right">{t('sections.withdrawalRight.title')}</h2>
          <p>
            <em>{t('sections.withdrawalRight.consumerDefinition')}</em>
          </p>
          <p>{t('sections.withdrawalRight.p1')}</p>
          <p>{t('sections.withdrawalRight.p2')}</p>
          <p className="legal-address">
            {t.rich('sections.withdrawalRight.contactAddressHtml', {
              strong: (chunks) => <strong>{chunks}</strong>,
              br: () => <br />,
              link: (chunks) => (
                <a href={`mailto:${t('email')}`}>{chunks}</a>
              ),
              email: t('email'),
            })}
          </p>
          <p>{t('sections.withdrawalRight.p3')}</p>
          <p>{t('sections.withdrawalRight.p4')}</p>
        </section>

        <section className="legal-section" aria-labelledby="withdrawal-effects">
          <h2 id="withdrawal-effects">{t('sections.withdrawalEffects.title')}</h2>
          <p>{t('sections.withdrawalEffects.p1')}</p>
          <p>{t('sections.withdrawalEffects.p2')}</p>
        </section>

        <section className="legal-section" aria-labelledby="withdrawal-expiration">
          <h2 id="withdrawal-expiration">{t('sections.withdrawalExpiration.title')}</h2>
          <p>{t('sections.withdrawalExpiration.p1')}</p>
        </section>

        <section className="legal-section" aria-labelledby="withdrawal-form">
          <h2 id="withdrawal-form">{t('sections.withdrawalForm.title')}</h2>
          <p>{t('sections.withdrawalForm.note')}</p>
          <p className="legal-address">
            {t.rich('sections.withdrawalForm.toAddressHtml', {
              strong: (chunks) => <strong>{chunks}</strong>,
              br: () => <br />,
              email: t('email'),
            })}
          </p>
          <p>{t('sections.withdrawalForm.p1')}</p>
          <p>{t('sections.withdrawalForm.blank1')}</p>
          <p>
            {t('sections.withdrawalForm.orderedAtLabel')}<br />
            {t('sections.withdrawalForm.blank2')}
          </p>
          <p>
            {t('sections.withdrawalForm.consumerNameAddressLabel')}<br />
            {t('sections.withdrawalForm.blank3')}
          </p>
          <p>
            {t('sections.withdrawalForm.dateLabel')}<br />
            {t('sections.withdrawalForm.blank4')}
          </p>
          <p>
            {t('sections.withdrawalForm.signatureLabel')}<br />
            {t('sections.withdrawalForm.blank5')}
          </p>
        </section>
      </div>
    </main>
  );
}

export default Withdrawl
