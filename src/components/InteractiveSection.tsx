import { useEffect, useRef, useState } from "react";
import { gsap, ScrollTrigger } from "../lib/gsap";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

interface Item {
  q: string;
  a: string;
}

// Trimmed from the original 4 items to 3 for the pinned scrollytelling
// layout; the dropped "Availability" copy was folded into Contact.tsx's
// intro paragraph instead of being cut outright.
const ITEMS: Item[] = [
  {
    q: "What I Build",
    a: "AI-integrated web products — dashboards, client sites, and internal tools — built with React, TypeScript, and LLM-assisted workflows that keep the build fast without cutting corners.",
  },
  {
    q: "How I Analyze",
    a: "I turn raw sports performance data and entertainment lore into breakdowns people actually want to watch or read — charts, trend lines, and long-form writeups that lead with the signal.",
  },
  {
    q: "Tools & Stack",
    a: "React, TypeScript, Tailwind, data visualization libraries, video editing tools, and whatever AI model fits the job — I pick tools around the problem, not the other way around.",
  },
];

export default function InteractiveSection() {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <section className="border-b border-line bg-panel px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-3xl sm:max-w-5xl">
        <p className="mb-2 font-display text-sm font-semibold uppercase tracking-[0.3em] text-yellow">
          The Details
        </p>
        <h2 className="mb-8 font-heading text-4xl leading-tight text-ink sm:text-5xl">
          How It Works
        </h2>

        {reducedMotion ? <AccordionFallback /> : <PinnedTabs />}
      </div>
    </section>
  );
}

/** Default motion experience: pin the section and scrub between 3 tabs. */
function PinnedTabs() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const panelRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const panels = panelRefs.current;
    if (!wrapper || panels.some((p) => !p)) return;

    const ctx = gsap.context(() => {
      gsap.set(panels, { autoAlpha: 0, y: 16 });
      gsap.set(panels[0], { autoAlpha: 1, y: 0 });

      let current = 0;

      ScrollTrigger.create({
        trigger: wrapper,
        // Offset by the sticky nav's height, not "top top" — pinning flush
        // against the viewport top puts the pinned content directly behind
        // the sticky header (z-40, semi-transparent), so the heading above
        // it visibly collided with the nav mid-scroll.
        start: () =>
          `top ${document.querySelector("header")?.getBoundingClientRect().height ?? 72}`,
        end: () => "+=" + window.innerHeight * 1.6,
        pin: true,
        scrub: 0.5,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const index = Math.min(
            ITEMS.length - 1,
            Math.floor(self.progress * ITEMS.length),
          );
          if (index === current) return;
          const prev = current;
          current = index;
          setActive(index);
          gsap.to(panels[prev], {
            autoAlpha: 0,
            y: -16,
            duration: 0.35,
            ease: "power2.out",
          });
          gsap.fromTo(
            panels[index],
            { autoAlpha: 0, y: 16 },
            { autoAlpha: 1, y: 0, duration: 0.35, ease: "power2.out" },
          );
        },
      });
    }, wrapper);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="flex min-h-[70vh] flex-col justify-center gap-10 sm:min-h-[60vh] sm:flex-row sm:items-center"
    >
      <div className="flex shrink-0 gap-6 sm:flex-col sm:gap-5">
        {ITEMS.map((item, i) => (
          <div key={item.q} className="flex items-center gap-3">
            <span
              className={`font-display text-sm font-bold transition-colors ${
                active === i ? "text-gold" : "text-mute"
              }`}
            >
              0{i + 1}
            </span>
            <span
              className={`font-display text-sm font-semibold uppercase tracking-widest transition-colors ${
                active === i ? "text-ink" : "text-mute"
              }`}
            >
              {item.q}
            </span>
            <span
              aria-hidden="true"
              className={`hidden h-px flex-1 transition-colors sm:block ${
                active === i ? "bg-gold" : "bg-line"
              }`}
            />
          </div>
        ))}
      </div>

      <div className="relative min-h-[140px] flex-1">
        {ITEMS.map((item, i) => (
          <div
            key={item.q}
            ref={(el) => {
              panelRefs.current[i] = el;
            }}
            className="absolute inset-0"
          >
            <p className="max-w-prose text-pretty font-body text-lg leading-relaxed text-mute sm:text-xl">
              {item.a}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

/** prefers-reduced-motion fallback: the original click-to-expand accordion. */
function AccordionFallback() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-line border-y border-line">
      {ITEMS.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={item.q}>
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
              aria-controls={`accordion-panel-${i}`}
              className="flex w-full items-center justify-between gap-4 py-5 text-left"
            >
              <span className="font-display text-lg font-semibold text-ink sm:text-xl">
                {item.q}
              </span>
              <span
                aria-hidden="true"
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gold text-gold transition-transform duration-300 ${
                  isOpen ? "rotate-45" : ""
                }`}
              >
                +
              </span>
            </button>
            <div
              id={`accordion-panel-${i}`}
              className={`accordion-panel ${isOpen ? "is-open" : ""}`}
            >
              <div>
                <p className="max-w-prose pb-5 text-pretty font-body text-base leading-relaxed text-mute">
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
