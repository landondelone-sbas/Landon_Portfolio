import { forwardRef, useEffect, useRef } from "react";
import { gsap } from "../lib/gsap";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

/**
 * The hero's centerpiece: a CSS-3D tilting card (no WebGL) that sits at rest
 * next to the headline, then becomes the target of Hero.tsx's
 * scroll-triggered morph into a full-bleed backdrop. Previously sat at the
 * hub of an always-spinning OrbitCarousel; that carousel animated forever
 * regardless of scroll position or visibility and was pulled out as the
 * prime suspect in a real-world GPU/compositor crash headless testing
 * couldn't reproduce — this card alone only animates on pointer movement
 * or during the scroll-morph, never continuously.
 */
const HeroCard3D = forwardRef<HTMLDivElement>((_, forwardedRef) => {
  const tiltRef = useRef<HTMLDivElement>(null);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const tilt = tiltRef.current;
    if (!tilt || reducedMotion) return;

    const rotateX = gsap.quickTo(tilt, "rotateX", {
      duration: 0.6,
      ease: "power3.out",
    });
    const rotateY = gsap.quickTo(tilt, "rotateY", {
      duration: 0.6,
      ease: "power3.out",
    });

    const handlePointerMove = (e: PointerEvent) => {
      const rect = tilt.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      const distance = Math.hypot(
        e.clientX - (rect.left + rect.width / 2),
        e.clientY - (rect.top + rect.height / 2),
      );
      if (distance > Math.max(rect.width, rect.height) * 1.6) {
        rotateX(0);
        rotateY(0);
        return;
      }
      rotateY(px * 24);
      rotateX(-py * 24);
    };

    window.addEventListener("pointermove", handlePointerMove);
    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      gsap.set(tilt, { rotateX: 0, rotateY: 0 });
    };
  }, [reducedMotion]);

  return (
    <div
      ref={forwardedRef}
      className="relative z-10 mx-auto h-52 w-52 sm:h-72 sm:w-72"
      style={{ perspective: "800px" }}
    >
      <div
        ref={tiltRef}
        className="relative h-full w-full rounded-3xl border border-gold/60 bg-gradient-to-br from-panel-2 to-void glow-gold"
        style={{ transformStyle: "preserve-3d" }}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-[3px] rounded-[calc(1.5rem-3px)] border border-champagne/25"
        />
        <div
          data-monogram
          className="absolute inset-0 flex items-center justify-center"
          style={{ transform: "translateZ(24px)" }}
        >
          <span className="font-display text-5xl font-bold text-gold sm:text-6xl">
            LD
          </span>
        </div>
      </div>
    </div>
  );
});

HeroCard3D.displayName = "HeroCard3D";

export default HeroCard3D;
