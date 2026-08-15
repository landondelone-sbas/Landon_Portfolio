interface Segment {
  label: string;
  value: number;
  barClass: string;
  dotClass: string;
}

const SEGMENTS: Segment[] = [
  {
    label: "AI Web Development",
    value: 50,
    barClass: "bg-green text-void",
    dotClass: "bg-green",
  },
  {
    label: "Sports Analytics",
    value: 25,
    barClass: "bg-purple text-ink",
    dotClass: "bg-purple",
  },
  {
    label: "Entertainment Breakdowns",
    value: 25,
    barClass: "bg-pink text-ink",
    dotClass: "bg-pink",
  },
];

export default function FocusMeter() {
  return (
    <div className="w-full max-w-xl">
      <p className="mb-3 font-display text-xs font-semibold uppercase tracking-[0.2em] text-mute">
        Focus Allocation
      </p>

      <div
        className="flex h-10 w-full overflow-hidden rounded-full border border-line"
        role="img"
        aria-label="Focus split: 50% AI web development, 25% sports analytics, 25% entertainment breakdowns"
      >
        {SEGMENTS.map((seg) => (
          <div
            key={seg.label}
            className={`flex items-center justify-center ${seg.barClass}`}
            style={{ width: `${seg.value}%` }}
          >
            <span className="font-display text-sm font-bold">
              {seg.value}%
            </span>
          </div>
        ))}
      </div>

      <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-2">
        {SEGMENTS.map((seg) => (
          <li
            key={seg.label}
            className="flex items-center gap-2 font-body text-sm text-mute"
          >
            <span
              aria-hidden="true"
              className={`inline-block h-3 w-3 rounded-full ${seg.dotClass}`}
            />
            {seg.label}
          </li>
        ))}
      </ul>
    </div>
  );
}
