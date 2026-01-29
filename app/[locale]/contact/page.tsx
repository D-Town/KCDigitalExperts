import { useTranslations } from 'next-intl';

const Contact = () => {

  const t = useTranslations('Contact');
  return (
    <div className="container-custom py-12 space-y-12">
      <section className="card max-w-2xl mx-auto">
        <h2 className="h2 mb-6">Kontaktformular</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-body-sm font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="input"
              placeholder="Dein Name"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-body-sm font-medium mb-2">
              E-Mail
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="input"
              placeholder="deine@email.de"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-body-sm font-medium mb-2">
              Nachricht
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="input resize-none"
              placeholder="Deine Nachricht..."
              required
            />
          </div>
          <button type="submit" className="btn-primary w-full">
            Absenden
          </button>
        </form>
      </section>
    </div>
  );
}

export default Contact
