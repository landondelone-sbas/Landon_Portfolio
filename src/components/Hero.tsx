import FocusMeter from "./FocusMeter";

export default function Hero() {
  return (
    <section
      id="top"
      className="border-b-4 border-ink px-4 pb-16 pt-12 sm:px-6 sm:pt-20"
    >
      <div className="mx-auto max-w-6xl">
        <p className="mb-4 font-display text-sm font-semibold uppercase tracking-[0.3em] text-signal">
          Portfolio
        </p>
        <h1 className="text-balance font-display text-5xl font-bold uppercase leading-[0.95] tracking-tight sm:text-7xl">
          AI Web Developer.
          <br />
          Sports &amp; Media Analyst.
        </h1>
        <p className="mt-6 max-w-2xl text-pretty font-body text-lg leading-relaxed text-mute sm:text-xl">
          I build AI-powered web products, and spend the rest of my time
          breaking down sports performance data and entertainment lore for
          anyone who'll watch or read.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#showcase"
            className="border-2 border-ink bg-ink px-6 py-3 font-display text-sm font-semibold uppercase tracking-widest text-paper transition-colors hover:bg-signal hover:border-signal"
          >
            View Showcase
          </a>
          <a
            href="#contact"
            className="border-2 border-ink px-6 py-3 font-display text-sm font-semibold uppercase tracking-widest text-ink transition-colors hover:bg-paper-dim"
          >
            Get In Touch
          </a>
        </div>

        <div className="mt-14">
          <FocusMeter />
        </div>
      </div>
    </section>
  );
}
