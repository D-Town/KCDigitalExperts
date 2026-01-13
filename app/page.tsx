import Image from "next/image";
import { ThemeToggle } from "../components/theme-toggle";

export default function Home() {
  return (
    <>
      <header className="bg-header dark:bg-header-dark sticky top-0 z-50 shadow-sm transition-colors">
        <nav className="max-w-7xl mx-auto px-4 py-4 md:px-8">
          <div className="flex items-center justify-between">
            <div className="font-heading font-bold text-xl md:text-2xl text-heading dark:text-heading-dark">
              ContentGen
            </div>

            <div className="hidden md:flex items-center gap-6">
              <a href="#features" className="text-text dark:text-text-dark hover:text-primary transition-colors">
                Features
              </a>
              <a href="#pricing" className="text-text dark:text-text-dark hover:text-primary transition-colors">
                Preise
              </a>

              {/* Theme Toggle Button */}
              <ThemeToggle />

              <button className="bg-primary hover:bg-primary-hover text-white font-semibold px-4 py-2 rounded-lg transition-all">
                Login
              </button>
            </div>
          </div>
        </nav>
      </header>

      <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">

        <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">

          <section className="bg-surface dark:bg-surface-dark px-4 py-12 md:px-8 md:py-20 lg:py-32 transition-colors">
            <div className="max-w-7xl mx-auto">
              <h1 className="font-heading font-bold text-heading dark:text-heading-dark text-2xl md:text-4xl lg:text-5xl mb-4 md:mb-6">
                Content Creation auf Autopilot
              </h1>

              <p className="text-muted dark:text-muted-dark text-base md:text-lg max-w-2xl mb-6 md:mb-8">
                Generiere psychologisch präzisen Content für Instagram, TikTok & Co.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-primary hover:bg-primary-hover text-white font-semibold px-6 py-3 rounded-lg shadow-md transition-all">
                  Kostenlos testen
                </button>
                <button className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-primary dark:text-primary font-semibold px-6 py-3 rounded-lg border-2 border-primary transition-all">
                  Mehr erfahren
                </button>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
