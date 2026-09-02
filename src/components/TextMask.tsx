import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "../lib/gsap";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

const BADGES = [
  { label: "React", pos: "left-[4%] top-[12%] sm:left-[10%]", glow: "glow-gold", border: "border-gold/60 text-gold" },
  { label: "AI", pos: "right-[4%] top-[18%] sm:right-[10%]", glow: "glow-amber", border: "border-amber/60 text-amber" },
  { label: "Sports", pos: "left-[8%] bottom-[14%] sm:left-[14%]", glow: "glow-yellow", border: "border-yellow/60 text-yellow" },
  { label: "Lore", pos: "right-[8%] bottom-[10%] sm:right-[14%]", glow: "glow-champagne", border: "border-champagne/60 text-champagne" },
];

export default function TextMask() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const heading = headingRef.current;
    if (!heading || reducedMotion) return;

    // A single scroll-triggered sweep instead of an infinite loop — this
    // section sits right after the new pinned tabs, so it gets one
    // deliberate shimmer and then holds still, giving the page real
    // breathing room instead of two dynamic moments back to back.
    const ctx = gsap.context(() => {
      gsap.fromTo(
        heading,
        { backgroundPosition: "0% 50%" },
        {
          backgroundPosition: "100% 50%",
          duration: 1.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: heading,
            start: "top 75%",
            once: true,
          },
        },
      );
    }, heading);

    return () => ctx.revert();
  }, [reducedMotion]);

  useEffect(() => {
    const id = window.setTimeout(() => ScrollTrigger.refresh(), 300);
    return () => window.clearTimeout(id);
  }, []);

  return (
    <section className="relative overflow-hidden border-b border-line px-4 py-24 sm:px-6 sm:py-32">
      <div className="relative mx-auto flex max-w-6xl items-center justify-center">
        <h2
          ref={headingRef}
          className="text-mask-fill select-none text-center font-heading text-[18vw] leading-[1.05] sm:text-[14vw] lg:text-[160px]"
        >
          Solutions
        </h2>

        {BADGES.map((badge) => (
          <span
            key={badge.label}
            aria-hidden="true"
            className={`absolute hidden rounded-full border bg-panel px-4 py-2 font-display text-xs font-semibold uppercase tracking-widest sm:block ${badge.pos} ${badge.glow} ${badge.border}`}
          >
            {badge.label}
          </span>
        ))}
      </div>

      <p className="relative mx-auto mt-8 max-w-md text-balance text-center font-body text-mute">
        Focus mixed in with fun.
      </p>
    </section>
  );
}
