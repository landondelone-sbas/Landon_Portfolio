import { useState } from "react";

const LINKS = [
  { href: "#showcase", label: "Showcase" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b-4 border-ink bg-paper">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <a
          href="#top"
          className="font-display text-xl font-semibold uppercase tracking-tight"
        >
          Landon DeLone
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-display text-sm font-medium uppercase tracking-widest text-ink transition-colors hover:text-signal"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="border-2 border-ink bg-ink px-4 py-2 font-display text-sm font-medium uppercase tracking-widest text-paper transition-colors hover:bg-signal hover:border-signal"
          >
            Let's Talk
          </a>
        </nav>

        <button
          type="button"
          className="border-2 border-ink px-3 py-2 font-display text-sm font-medium uppercase tracking-widest md:hidden"
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
          className="flex flex-col border-t-4 border-ink md:hidden"
        >
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="border-b border-line/30 px-4 py-4 font-display text-base font-medium uppercase tracking-widest"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="bg-ink px-4 py-4 text-center font-display text-base font-medium uppercase tracking-widest text-paper"
          >
            Let's Talk
          </a>
        </nav>
      )}
    </header>
  );
}
