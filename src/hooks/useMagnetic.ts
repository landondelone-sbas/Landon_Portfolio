import { useEffect, useRef } from "react";
import { gsap } from "../lib/gsap";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";

interface MagneticOptions {
  /** How far the element travels toward the cursor, in px. */
  strength?: number;
  /** Radius (px) around the element within which the pull is active. */
  radius?: number;
}

/**
 * Applies a magnetic hover-lift: the element eases toward the cursor while
 * the pointer is within `radius` of its bounds, and springs back on leave.
 * No-ops entirely under prefers-reduced-motion.
 */
export function useMagnetic<T extends HTMLElement>({
  strength = 14,
  radius = 60,
}: MagneticOptions = {}) {
  const ref = useRef<T>(null);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el || reducedMotion) return;

    const xTo = gsap.quickTo(el, "x", { duration: 0.5, ease: "power3.out" });
    const yTo = gsap.quickTo(el, "y", { duration: 0.5, ease: "power3.out" });

    const handlePointerMove = (e: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const dx = e.clientX - centerX;
      const dy = e.clientY - centerY;
      const distance = Math.hypot(dx, dy);
      const reach = Math.max(rect.width, rect.height) / 2 + radius;

      if (distance < reach) {
        const pull = 1 - distance / reach;
        xTo(dx * pull * (strength / reach) * 4);
        yTo(dy * pull * (strength / reach) * 4);
      } else {
        xTo(0);
        yTo(0);
      }
    };

    const handlePointerLeave = () => {
      xTo(0);
      yTo(0);
    };

    window.addEventListener("pointermove", handlePointerMove);
    el.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      el.removeEventListener("pointerleave", handlePointerLeave);
      gsap.set(el, { x: 0, y: 0 });
    };
  }, [reducedMotion, strength, radius]);

  return ref;
}
