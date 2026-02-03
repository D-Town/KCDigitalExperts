import { useTranslations } from 'next-intl';

const Accessibility = () => {
  const t = useTranslations('Legal.accessibility');
  const serviceDescBullets = t.raw('sections.serviceDesc.bullets') as string[];
  const serviceDeliveryBullets = t.raw('sections.serviceDelivery.bullets') as string[];
  const compatibilityBullets = t.raw('sections.compatibility.bullets') as string[];

  return (
    <main tabIndex={-1} role="main" aria-labelledby="page-title">
      <div id="main-content" className="main-content">
        <div className="container-custom py-12 space-y-12">
          <section className="legal-section">
            <h1 id="page-title">{t('title')}</h1>
            <p>{t('intro')}</p>
          </section>

          <section className="legal-section" aria-labelledby="provider">
            <h2 id="provider">{t('sections.provider.title')}</h2>
            <div className="legal__address">
              {t.rich('sections.provider.addressHtml', {
                strong: (chunks) => <strong>{chunks}</strong>,
                br: () => <br />,
              })}
            </div>
            <ul className="legal__list">
              <li>
                <strong>{t('sections.provider.contactList.emailLabel')}</strong>{' '}
                <a href={`mailto:${t('sections.provider.contactList.emailValue')}`}>
                  {t('sections.provider.contactList.emailValue')}
                </a>
              </li>
              <li>
                <strong>{t('sections.provider.contactList.phoneLabel')}</strong>{' '}
                {t('sections.provider.contactList.phoneValue')}
              </li>
              <li>
                <strong>{t('sections.provider.contactList.websiteLabel')}</strong>{' '}
                <a
                  href={t('sections.provider.contactList.websiteUrl')}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t('sections.provider.contactList.websiteUrl')}
                </a>
              </li>
              <li>
                <strong>{t('sections.provider.contactList.imprintLabel')}</strong>{' '}
                <a
                  href={t('sections.provider.contactList.imprintUrl')}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t('sections.provider.contactList.imprintUrl')}
                </a>
              </li>
            </ul>
          </section>

          <section className="legal-section" aria-labelledby="service-desc">
            <h2 id="service-desc">{t('sections.serviceDesc.title')}</h2>
            <p>{t('sections.serviceDesc.p1')}</p>
            <p>{t('sections.serviceDesc.p2')}</p>
            <ul className="legal__bullets">
              {serviceDescBullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p>{t('sections.serviceDesc.p3')}</p>
          </section>

          <section className="legal-section" aria-labelledby="service-delivery">
            <h2 id="service-delivery">{t('sections.serviceDelivery.title')}</h2>
            <p>{t('sections.serviceDelivery.p1')}</p>
            <ul className="legal__bullets">
              {serviceDeliveryBullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p>{t('sections.serviceDelivery.p2')}</p>
          </section>

          <section className="legal-section" aria-labelledby="compatibility">
            <h2 id="compatibility">{t('sections.compatibility.title')}</h2>
            <p>{t('sections.compatibility.p1')}</p>
            <p>
              {t.rich('sections.compatibility.p2', {
                strong: (chunks) => <strong>{chunks}</strong>,
              })}
            </p>
            <p>{t('sections.compatibility.p3')}</p>
            <ul className="legal__bullets">
              {compatibilityBullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="legal-section" aria-labelledby="authority">
            <h2 id="authority">{t('sections.authority.title')}</h2>
            <p>
              {t.rich('sections.authority.addressHtml', {
                strong: (chunks) => <strong>{chunks}</strong>,
                br: () => <br />,
              })}
            </p>
            <ul className="legal__list">
              <li>
                <strong>{t('sections.authority.contactList.phoneLabel')}</strong>{' '}
                {t('sections.authority.contactList.phoneValue')}
              </li>
              <li>
                <strong>{t('sections.authority.contactList.emailLabel')}</strong>{' '}
                <a href={`mailto:${t('sections.authority.contactList.emailValue')}`}>
                  {t('sections.authority.contactList.emailValue')}
                </a>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
}

export default Accessibility
