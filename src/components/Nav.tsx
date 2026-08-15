import { useState } from "react";

const LINKS = [
  { href: "#showcase", label: "Showcase" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-void/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <a
          href="#top"
          className="font-display text-xl font-bold uppercase tracking-tight text-ink"
        >
          Landon<span className="text-green">.</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-display text-sm font-medium uppercase tracking-widest text-mute transition-colors hover:text-green"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="glow-green rounded-full bg-green px-5 py-2 font-display text-sm font-semibold uppercase tracking-widest text-void transition-transform hover:scale-105"
          >
            Let's Talk
          </a>
        </nav>

        <button
          type="button"
          className="rounded-full border border-line px-3 py-2 font-display text-sm font-medium uppercase tracking-widest text-ink md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <nav
          id="mobile-menu"
          aria-label="Primary"
          className="flex flex-col border-t border-line bg-void md:hidden"
        >
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="border-b border-line/60 px-4 py-4 font-display text-base font-medium uppercase tracking-widest text-ink"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="bg-green px-4 py-4 text-center font-display text-base font-semibold uppercase tracking-widest text-void"
          >
            Let's Talk
          </a>
        </nav>
      )}
    </header>
  );
}
