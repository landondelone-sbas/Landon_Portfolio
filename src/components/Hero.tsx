import { useEffect, useRef } from "react";
import HeroCard3D from "./HeroCard3D";
import ParticleField from "./ParticleField";
import { gsap, ScrollTrigger } from "../lib/gsap";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const copyRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const section = sectionRef.current;
    const card = cardRef.current;
    const copy = copyRef.current;
    if (!section || !card || !copy || reducedMotion) return;

    const ctx = gsap.context(() => {
      // Scroll-scrubbed morph: the hero card grows from a centered 3D card
      // into a full-bleed backdrop as the hero section scrolls past. Scale
      // is a function so ScrollTrigger's invalidateOnRefresh recomputes it
      // against real measured bounds instead of a guessed constant.
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: 0.6,
          invalidateOnRefresh: true,
        },
      });

      // The copy finishes fading well before the card finishes scaling
      // (duration 0.3 vs. 1, both starting at 0) so the enlarging card only
      // ever grows into space that's already cleared — earlier versions ran
      // both on the same timeline range and the card's edge visibly sliced
      // through still-legible headline text mid-scroll.
      tl.to(
        card,
        {
          scale: () => {
            const sectionRect = section.getBoundingClientRect();
            const cardRect = card.getBoundingClientRect();
            return (
              Math.max(
                sectionRect.width / cardRect.width,
                sectionRect.height / cardRect.height,
              ) * 1.05
            );
          },
          borderRadius: 0,
          ease: "power1.in",
          duration: 1,
        },
        0,
      )
        .to(copy, { autoAlpha: 0, y: -40, ease: "power1.in", duration: 0.3 }, 0)
        .to(
          card.querySelector("[data-monogram]"),
          { autoAlpha: 0, ease: "none", duration: 0.25 },
          0.55,
        );
    }, section);

    return () => ctx.revert();
  }, [reducedMotion]);

  useEffect(() => {
    // Fonts/webfont swap and image loads can shift the hero's measured
    // height after first paint — refresh once everything settles so the
    // scrub's start/end and computed scale stay accurate.
    const id = window.setTimeout(() => ScrollTrigger.refresh(), 300);
    return () => window.clearTimeout(id);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative overflow-hidden border-b border-line px-4 pb-16 pt-16 sm:px-6 sm:pt-24"
    >
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-gold/20 blur-[120px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.1fr_1fr]">
        <div ref={copyRef}>
          <p className="mb-4 font-display text-sm font-semibold uppercase tracking-[0.3em] text-yellow">
            Portfolio
          </p>
          <h1 className="text-balance font-heading text-5xl leading-tight text-ink sm:text-7xl">
            AI Web Developer.
            <br />
            <span className="text-glow-gold text-gold">Sports Analyst &amp; Lore Breakdowns,</span> Nerd.
          </h1>
          <p className="mt-6 max-w-xl text-pretty font-body text-lg leading-relaxed text-mute sm:text-xl">
            I build AI-powered web products, solve problems with code, and
            also operate two Youtube channels, one for sports analytics, and the other
            for deep dives into the lore of Star Wars, Marvel, and ASOIAF. Follow the journey!
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <div className="relative inline-block">
              {/* Sibling before the button, not a child of it — that way
                  the button's own opaque bg-gold naturally covers the
                  particles directly under it, while the overhang around
                  the edges reads as particles "behind" the CTA, with no
                  z-index tug-of-war against the button's own background. */}
              <ParticleField />
              <a
                href="#showcase"
                className="glow-gold rounded-full bg-gold px-7 py-3.5 font-display text-sm font-bold uppercase tracking-widest text-void transition-transform hover:scale-105"
              >
                See My Work
              </a>
            </div>
            <a
              href="#contact"
              className="rounded-full border border-line px-7 py-3.5 font-display text-sm font-semibold uppercase tracking-widest text-ink transition-colors hover:border-amber hover:text-amber"
            >
              Reach Out
            </a>
          </div>
        </div>

        <HeroCard3D ref={cardRef} />
      </div>
    </section>
  );
}
