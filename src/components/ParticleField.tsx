import { useEffect, useRef } from "react";
import { gsap } from "../lib/gsap";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
}

const GOLD_TONES = [
  "232,183,49", // gold
  "221,200,98", // amber
  "241,228,19", // yellow
  "217,200,140", // champagne
];

/**
 * Lightweight Canvas2D particle field (no WebGL) meant to sit behind a
 * single CTA button. Particles drift, then ease away from the cursor
 * within a small radius. Driven by gsap.ticker so it shares one frame
 * clock with the rest of the page's GSAP-driven motion.
 */
export default function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || reducedMotion) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let particles: Particle[] = [];
    let pointer = { x: -9999, y: -9999 };
    let running = true;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.round((width * height) / 1800);
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: Math.random() * 1.6 + 0.6,
      }));
    };

    // Listen on window rather than the canvas itself: the CTA button sits
    // visually on top of this canvas (it's a -z-10 backdrop), so a listener
    // scoped to the canvas would never fire while the cursor is over the
    // button — the very spot the effect needs to react to.
    const handlePointerMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      pointer =
        x >= 0 && x <= width && y >= 0 && y <= height
          ? { x, y }
          : { x: -9999, y: -9999 };
    };
    const handlePointerLeave = () => {
      pointer = { x: -9999, y: -9999 };
    };

    const tick = () => {
      if (!running) return;
      ctx.clearRect(0, 0, width, height);

      for (const p of particles) {
        const dx = p.x - pointer.x;
        const dy = p.y - pointer.y;
        const dist = Math.hypot(dx, dy);
        const reach = 70;

        if (dist < reach) {
          const push = (1 - dist / reach) * 0.6;
          p.x += (dx / (dist || 1)) * push;
          p.y += (dy / (dist || 1)) * push;
        }

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        const tone = GOLD_TONES[Math.floor(p.r * 10) % GOLD_TONES.length];
        ctx.beginPath();
        ctx.fillStyle = `rgba(${tone},0.55)`;
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    resize();
    const observer = new ResizeObserver(resize);
    observer.observe(canvas);

    // Only run the loop while the canvas is actually on-screen.
    const intersection = new IntersectionObserver(
      ([entry]) => {
        running = entry.isIntersecting;
      },
      { threshold: 0 },
    );
    intersection.observe(canvas);

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerleave", handlePointerLeave);
    gsap.ticker.add(tick);

    return () => {
      gsap.ticker.remove(tick);
      observer.disconnect();
      intersection.disconnect();
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, [reducedMotion]);

  if (reducedMotion) return null;

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute -inset-x-10 -inset-y-8"
    />
  );
}
