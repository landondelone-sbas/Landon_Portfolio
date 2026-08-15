const ITEMS = [
  { label: "AI DEV", border: "border-green/50", text: "text-green" },
  { label: "SPORTS", border: "border-purple/50", text: "text-purple" },
  { label: "MEDIA", border: "border-pink/50", text: "text-pink" },
  { label: "AI ART", border: "border-green/50", text: "text-green" },
  { label: "REACT", border: "border-purple/50", text: "text-purple" },
  { label: "DATA VIZ", border: "border-pink/50", text: "text-pink" },
  { label: "VIDEO", border: "border-green/50", text: "text-green" },
  { label: "ANALYTICS", border: "border-purple/50", text: "text-purple" },
];

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
