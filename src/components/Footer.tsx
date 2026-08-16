export default function Footer() {
  return (
    <footer className="relative">
      <div className="footer-dome" aria-hidden="true" />

      <div className="bg-panel px-4 pb-10 pt-4 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
            <div>
              <p className="font-signature text-2xl text-ink">
                Landon<span className="text-green">.</span>
              </p>
              <p className="mt-1 font-body text-sm text-mute">
                AI Dev · Sports Analytics · Media Breakdowns
              </p>
            </div>

            <nav
              className="flex flex-wrap items-center justify-center gap-6"
              aria-label="Footer"
            >
              <a
                href="#showcase"
                className="font-display text-sm font-medium uppercase tracking-widest text-mute hover:text-green"
              >
                Showcase
              </a>
              <a
                href="#about"
                className="font-display text-sm font-medium uppercase tracking-widest text-mute hover:text-purple"
              >
                About
              </a>
              <a
                href="#contact"
                className="glow-green rounded-full bg-green px-5 py-2 font-display text-sm font-semibold uppercase tracking-widest text-void transition-transform hover:scale-105"
              >
                Let's Talk
              </a>
            </nav>
          </div>

          <p className="mt-8 text-center font-display text-xs font-semibold uppercase tracking-widest text-mute sm:text-left">
            © {new Date().getFullYear()} Landon Delone
          </p>
        </div>
      </div>
    </footer>
  );
}
