// Tailwind's scanner needs literal class strings, so the accent cycle is
// spelled out per-tone here rather than built with a template literal.
const TONES = [
  { border: "border-gold/50", text: "text-gold" },
  { border: "border-amber/50", text: "text-amber" },
  { border: "border-yellow/50", text: "text-yellow" },
  { border: "border-champagne/50", text: "text-champagne" },
] as const;

const LABELS = [
  "AI DEV",
  "SPORTS",
  "STAR WARS",
  "MARVEL",
  "ASOIAF",
  "ANALYTICS",
  "YOUTUBE",
  "CODING",
];

const ITEMS = LABELS.map((label, i) => ({
  label,
  ...TONES[i % TONES.length],
}));

export default function Marquee() {
  const loop = [...ITEMS, ...ITEMS];

  return (
    <div className="overflow-hidden border-y border-line bg-panel py-6">
      <div className="marquee-track flex w-max items-center gap-6">
        {loop.map((item, i) => (
          <div
            key={`${item.label}-${i}`}
            className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-full border bg-void text-center sm:h-20 sm:w-20 ${item.border}`}
          >
            <span
              className={`font-display text-[10px] font-bold uppercase leading-tight ${item.text}`}
            >
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
