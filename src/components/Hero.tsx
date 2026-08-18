import OrbitCarousel from "./OrbitCarousel";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-line px-4 pb-16 pt-16 sm:px-6 sm:pt-24"
    >
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-purple/20 blur-[120px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <p className="mb-4 font-display text-sm font-semibold uppercase tracking-[0.3em] text-pink">
            Portfolio
          </p>
          <h1 className="text-balance font-heading text-5xl leading-tight text-ink sm:text-7xl">
            AI Web Developer.
            <br />
            <span className="text-glow-green text-green">Sports Analyst &amp; Lore Breakdowns,</span> Nerd.
          </h1>
          <p className="mt-6 max-w-xl text-pretty font-body text-lg leading-relaxed text-mute sm:text-xl">
            I build AI-powered web products, solve problems with code, and
            also operate two Youtube channels, one for sports analytics, and the
            for deep dives into the lore of Star Wars, Marvel, and ASOIAF. Follow the journey!
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#showcase"
              className="glow-green rounded-full bg-green px-7 py-3.5 font-display text-sm font-bold uppercase tracking-widest text-void transition-transform hover:scale-105"
            >
              See My Work
            </a>
            <a
              href="#contact"
              className="rounded-full border border-line px-7 py-3.5 font-display text-sm font-semibold uppercase tracking-widest text-ink transition-colors hover:border-purple hover:text-purple"
            >
              Reach Out
            </a>
          </div>
        </div>

        <OrbitCarousel />
      </div>
    </section>
  );
}
