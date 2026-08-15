import type { CSSProperties } from "react";

const ITEMS = [
  { label: "AI DEV", glow: "glow-green", border: "border-green/60" },
  { label: "SPORTS", glow: "glow-purple", border: "border-purple/60" },
  { label: "MEDIA", glow: "glow-pink", border: "border-pink/60" },
  { label: "AI ART", glow: "glow-green", border: "border-green/60" },
  { label: "BUILD", glow: "glow-purple", border: "border-purple/60" },
  { label: "ANALYZE", glow: "glow-pink", border: "border-pink/60" },
];

export default function OrbitCarousel() {
  const step = 360 / ITEMS.length;

  return (
    <div
      className="relative mx-auto aspect-square w-full max-w-[420px]"
      style={{ "--r": "clamp(110px, 30vw, 185px)" } as CSSProperties}
      aria-hidden="true"
    >
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

      <div className="absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-green/50 bg-panel glow-green sm:h-28 sm:w-28">
        <span className="font-display text-2xl font-bold text-green">LD</span>
      </div>
    </div>
  );
}
