const Home = () => {
  return (
    <div className="container-custom py-12 space-y-12">
      {/* Hero Section */}
      <section className="text-center space-y-6">
        <h1 className="h1">Willkommen auf unserer Website</h1>
        <p className="text-body-lg text-muted max-w-2xl mx-auto">
          Entdecke innovative Lösungen, die dein Leben einfacher machen. 
          Mit modernster Technologie und benutzerfreundlichem Design.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="btn-primary">Jetzt starten</button>
          <button className="btn-ghost">Mehr erfahren</button>
        </div>
      </section>

      {/* Card Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card card-hover">
          <h3 className="h3 mb-3">Schnell</h3>
          <p className="text-muted">
            Blitzschnelle Performance für optimale Nutzererfahrung.
          </p>
        </div>
        <div className="card card-hover">
          <h3 className="h3 mb-3">Sicher</h3>
          <p className="text-muted">
            Höchste Sicherheitsstandards zum Schutz deiner Daten.
          </p>
        </div>
        <div className="card card-hover">
          <h3 className="h3 mb-3">Zuverlässig</h3>
          <p className="text-muted">
            99,9% Verfügbarkeit für unterbrechungsfreien Service.
          </p>
        </div>
      </section>

      {/* Typography Beispiele */}
      <section className="card space-y-4">
        <h2 className="h2">Typografie Beispiele</h2>
        <h3 className="h3">Das ist eine H3 Überschrift</h3>
        <h4 className="h4">Das ist eine H4 Überschrift</h4>
        <h5 className="h5">Das ist eine H5 Überschrift</h5>
        <h6 className="h6">Das ist eine H6 Überschrift</h6>
        <p>
          Dies ist ein normaler Absatz mit <a href="#">einem Link</a>. 
          Der Text ist gut lesbar und hat einen angenehmen Zeilenabstand.
        </p>
        <p className="text-muted">
          Dies ist ein gedämpfter Text, der für weniger wichtige Informationen verwendet wird.
        </p>
      </section>

      {/* Form Beispiel */}
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

export default Home
