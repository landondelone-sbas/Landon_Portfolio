interface ValueCard {
  heading: string;
  body: string;
  bg: string;
  text: string;
  ringColor: string;
}

const CARDS: ValueCard[] = [
  {
    heading: "I Build.",
    body: "AI-powered web products — from idea to shipped product, using modern React and LLM-assisted workflows to move fast without cutting corners.",
    bg: "bg-green",
    text: "text-void",
    ringColor: "border-void/20",
  },
  {
    heading: "I Analyze.",
    body: "Sports performance data and entertainment lore, turned into breakdowns people actually want to watch or read — signal over noise, every time.",
    bg: "bg-[#c9a6ff]",
    text: "text-void",
    ringColor: "border-void/20",
  },
];

export default function SplitValueProps() {
  return (
    <section className="border-b border-line px-4 py-16 sm:px-6">
      <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
        {CARDS.map((card) => (
          <div
            key={card.heading}
            className={`relative overflow-hidden rounded-3xl p-8 sm:p-10 ${card.bg} ${card.text}`}
          >
            <div
              aria-hidden="true"
              className={`absolute -right-10 -top-10 h-40 w-40 rounded-full border-8 ${card.ringColor}`}
            />
            <div
              aria-hidden="true"
              className={`absolute -right-4 -top-4 h-24 w-24 rounded-full border-8 ${card.ringColor}`}
            />

            <h3 className="relative font-display text-4xl font-bold tracking-tight sm:text-5xl">
              {card.heading}
            </h3>
            <p className="relative mt-4 max-w-sm text-pretty font-body text-base leading-relaxed opacity-80 sm:text-lg">
              {card.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
