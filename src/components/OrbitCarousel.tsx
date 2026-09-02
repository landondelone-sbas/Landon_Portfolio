import type { CSSProperties, Ref } from "react";
import HeroCard3D from "./HeroCard3D";

// Literal per-tone classes so Tailwind's scanner can see them.
const TONES = [
  { border: "border-gold/60", glow: "glow-gold" },
  { border: "border-amber/60", glow: "glow-amber" },
  { border: "border-yellow/60", glow: "glow-yellow" },
] as const;

const ITEMS = [
  { label: "AI DEV", ...TONES[0] },
  { label: "SPORTS", ...TONES[1] },
  { label: "STAR WARS", ...TONES[2] },
  { label: "YOUTUBE", ...TONES[0] },
  { label: "CODING", ...TONES[1] },
  { label: "ANALYTICS", ...TONES[2] },
];

interface Props {
  /** Forwarded to the HeroCard3D hub — Hero.tsx animates this on scroll. */
  cardRef: Ref<HTMLDivElement>;
  /** Forwarded to the ring + orbiting pills wrapper — faded out during the scroll morph. */
  ringRef: Ref<HTMLDivElement>;
}

export default function OrbitCarousel({ cardRef, ringRef }: Props) {
  const step = 360 / ITEMS.length;

  return (
    <div
      className="relative mx-auto aspect-square w-full max-w-[420px]"
      style={{ "--r": "clamp(110px, 30vw, 185px)" } as CSSProperties}
      aria-hidden="true"
    >
      <div ref={ringRef}>
        <div className="absolute inset-0 rounded-full border border-line" />

        <div className="orbit-spin absolute inset-0">
          {ITEMS.map((item, i) => {
            const angle = step * i;
            return (
              <div
                key={item.label}
                className="absolute left-1/2 top-1/2"
                style={{
                  transform: `translate(-50%, -50%) rotate(${angle}deg) translate(var(--r)) rotate(${-angle}deg)`,
                }}
              >
                <div className="orbit-counter">
                  <div
                    className={`flex h-20 w-20 items-center justify-center rounded-2xl border bg-panel/90 backdrop-blur-sm sm:h-24 sm:w-24 ${item.border} ${item.glow}`}
                  >
                    <span className="font-display text-[11px] font-semibold uppercase tracking-wider text-ink sm:text-xs">
                      {item.label}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <HeroCard3D ref={cardRef} />
      </div>
    </div>
  );
}
