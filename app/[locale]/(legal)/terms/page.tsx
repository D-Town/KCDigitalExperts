import { useTranslations } from 'next-intl';

const Terms = () => {
  const t = useTranslations('Legal.terms');
  const rightsBullets = t.raw('sections.rights.bullets') as string[];
  const withdrawalBullets = t.raw('sections.withdrawal.bullets') as string[];

  return (
    <main tabIndex={-1} role="main" aria-labelledby="page-title">
      <div id="main-content" className="main-content">
        <div className="container-custom py-12 space-y-12">
        <section className="legal-section">
          <h1 id="page-title">{t('title')}</h1>
          <p><strong>{t('subtitle')}</strong></p>
          <p className="legal-address">
            {t.rich('provider.addressHtml', {
              br: () => <br />,
              email: t('provider.email'),
            })}
          </p>
        </section>

        <section className="legal-section" aria-labelledby="scope">
          <h2 id="scope">{t('sections.scope.title')}</h2>
          <p>{t('sections.scope.p1')}</p>
          <p>
            {t.rich('sections.scope.p2', {
              strong: (chunks) => <strong>{chunks}</strong>,
            })}
          </p>
          <p>{t('sections.scope.p3')}</p>
        </section>

        <section className="legal-section" aria-labelledby="services">
          <h2 id="services">{t('sections.services.title')}</h2>
          <p>{t('sections.services.p1')}</p>
          <p>{t('sections.services.p2')}</p>
          <p>
            {t.rich('sections.services.p3', {
              strong: (chunks) => <strong>{chunks}</strong>,
            })}
          </p>
        </section>

        <section className="legal-section" aria-labelledby="contract">
          <h2 id="contract">{t('sections.contract.title')}</h2>
          <p>{t('sections.contract.p1')}</p>
          <p>{t('sections.contract.p2')}</p>
        </section>

        <section className="legal-section" aria-labelledby="pricing">
          <h2 id="pricing">{t('sections.pricing.title')}</h2>
          <p>{t('sections.pricing.p1')}</p>
          <p>{t('sections.pricing.p2')}</p>
          <p>{t('sections.pricing.p3')}</p>
        </section>

        <section className="legal-section" aria-labelledby="delivery">
          <h2 id="delivery">{t('sections.delivery.title')}</h2>
          <p>{t('sections.delivery.p1')}</p>
          <p>{t('sections.delivery.p2')}</p>
          <p>{t('sections.delivery.p3')}</p>
        </section>

        <section className="legal-section" aria-labelledby="rights">
          <h2 id="rights">{t('sections.rights.title')}</h2>
          <p>
            {t.rich('sections.rights.p1', {
              strong: (chunks) => <strong>{chunks}</strong>,
            })}
          </p>
          <p>{t('sections.rights.p2')}</p>
          <ul className="legal__bullets">
            {rightsBullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p>{t('sections.rights.p3')}</p>
          <h3 id="rights-mrr">{t('sections.rights.mrr.title')}</h3>
          <p>{t('sections.rights.mrr.p1')}</p>
          <p>{t('sections.rights.mrr.p2')}</p>
        </section>

        <section className="legal-section" aria-labelledby="updates">
          <h2 id="updates">{t('sections.updates.title')}</h2>
          <p>
            {t.rich('sections.updates.p1', {
              strong: (chunks) => <strong>{chunks}</strong>,
            })}
          </p>
          <p>{t('sections.updates.p2')}</p>
        </section>

        <section className="legal-section" aria-labelledby="withdrawal">
          <h2 id="withdrawal">{t('sections.withdrawal.title')}</h2>
          <p>{t('sections.withdrawal.p1')}</p>
          <p>
            {t.rich('sections.withdrawal.p2', {
              strong: (chunks) => <strong>{chunks}</strong>,
            })}
          </p>
          <ul className="legal__bullets">
            {withdrawalBullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p>{t('sections.withdrawal.p3')}</p>
        </section>

        <section className="legal-section" aria-labelledby="customer-duties">
          <h2 id="customer-duties">{t('sections.customerDuties.title')}</h2>
          <p>{t('sections.customerDuties.p1')}</p>
          <p>{t('sections.customerDuties.p2')}</p>
        </section>

        <section className="legal-section" aria-labelledby="warranty">
          <h2 id="warranty">{t('sections.warranty.title')}</h2>
          <p>{t('sections.warranty.p1')}</p>
          <p>{t('sections.warranty.p2')}</p>
        </section>

        <section className="legal-section" aria-labelledby="liability">
          <h2 id="liability">{t('sections.liability.title')}</h2>
          <p>{t('sections.liability.p1')}</p>
          <p>{t('sections.liability.p2')}</p>
          <p>{t('sections.liability.p3')}</p>
        </section>

        <section className="legal-section" aria-labelledby="duration">
          <h2 id="duration">{t('sections.duration.title')}</h2>
          <p>{t('sections.duration.p1')}</p>
          <p>{t('sections.duration.p2')}</p>
          <p>{t('sections.duration.p3')}</p>
        </section>

        <section className="legal-section" aria-labelledby="privacy">
          <h2 id="privacy">{t('sections.privacy.title')}</h2>
          <p>{t('sections.privacy.p1')}</p>
        </section>

        <section className="legal-section" aria-labelledby="final">
          <h2 id="final">{t('sections.final.title')}</h2>
          <p>{t('sections.final.p1')}</p>
          <p>{t('sections.final.p2')}</p>
          <p>{t('sections.final.p3')}</p>
        </section>

        <section className="legal-section" aria-labelledby="dispute">
          <h2 id="dispute">{t('sections.dispute.title')}</h2>
          <p>
            {t.rich('sections.dispute.p1', {
              link: (chunks) => (
                <a
                  href={t('sections.dispute.odrUrl')}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {chunks}
                </a>
              ),
              odrUrl: t('sections.dispute.odrUrl'),
            })}
          </p>
          <p>{t('sections.dispute.p2')}</p>
        </section>
        </div>
      </div>
    </main>
  );
}

export default Terms
