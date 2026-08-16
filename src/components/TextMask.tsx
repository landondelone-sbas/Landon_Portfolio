const BADGES = [
  { label: "React", pos: "left-[4%] top-[12%] sm:left-[10%]", glow: "glow-green", border: "border-green/60 text-green" },
  { label: "AI", pos: "right-[4%] top-[18%] sm:right-[10%]", glow: "glow-purple", border: "border-purple/60 text-purple" },
  { label: "Sports", pos: "left-[8%] bottom-[14%] sm:left-[14%]", glow: "glow-pink", border: "border-pink/60 text-pink" },
  { label: "Lore", pos: "right-[8%] bottom-[10%] sm:right-[14%]", glow: "glow-green", border: "border-green/60 text-green" },
];

export default function TextMask() {
  return (
    <section className="relative overflow-hidden border-b border-line px-4 py-24 sm:px-6 sm:py-32">
      <div className="relative mx-auto flex max-w-6xl items-center justify-center">
        <h2 className="text-mask-fill select-none text-center font-heading text-[18vw] leading-[1.05] sm:text-[14vw] lg:text-[160px]">
          Signal
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
        Signal over noise — in the code I ship and the breakdowns I publish.
      </p>
    </section>
  );
}
