import { useState } from "react";

interface Item {
  q: string;
  a: string;
}

const ITEMS: Item[] = [
  {
    q: "What I Build",
    a: "AI-integrated web products — dashboards, client sites, and internal tools — built with React, TypeScript, and LLM-assisted workflows that keep the build fast without cutting corners.",
  },
  {
    q: "How I Analyze",
    a: "I turn raw sports performance data and entertainment lore into breakdowns people actually want to watch or read — charts, trend lines, and long-form writeups that lead with the signal.",
  },
  {
    q: "Tools & Stack",
    a: "React, TypeScript, Tailwind, data visualization libraries, video editing tools, and whatever AI model fits the job — I pick tools around the problem, not the other way around.",
  },
  {
    q: "Availability",
    a: "Open to freelance builds, collaborations, and the occasional deep-dive breakdown request. Send a message on the contact section below.",
  },
];

export default function InteractiveSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="border-b border-line bg-panel px-4 py-16 sm:px-6">
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[380px_1fr]">
        <div className="mx-auto w-full max-w-[280px]">
          <div className="glow-purple relative rounded-[2.5rem] border border-line bg-void p-3">
            <div className="mx-auto mb-2 h-1.5 w-16 rounded-full bg-line" />
            <div className="flex aspect-[9/18] flex-col justify-between rounded-[1.75rem] bg-panel-2 p-4">
              <div>
                <div className="mb-3 h-3 w-20 rounded-full bg-green/60" />
                <div className="space-y-2">
                  <div className="h-16 rounded-xl border border-green/40 bg-void" />
                  <div className="h-16 rounded-xl border border-purple/40 bg-void" />
                  <div className="h-16 rounded-xl border border-pink/40 bg-void" />
                </div>
              </div>
              <div className="h-10 rounded-full bg-green/90" />
            </div>
          </div>
        </div>

        <div>
          <p className="mb-2 font-display text-sm font-semibold uppercase tracking-[0.3em] text-pink">
            The Details
          </p>
          <h2 className="mb-8 font-display text-4xl font-bold uppercase tracking-tight text-ink sm:text-5xl">
            How It Works
          </h2>

          <div className="divide-y divide-line border-y border-line">
            {ITEMS.map((item, i) => {
              const isOpen = openIndex === i;
              return (
                <div key={item.q}>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`accordion-panel-${i}`}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  >
                    <span className="font-display text-lg font-semibold text-ink sm:text-xl">
                      {item.q}
                    </span>
                    <span
                      aria-hidden="true"
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-green text-green transition-transform duration-300 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    >
                      +
                    </span>
                  </button>
                  <div
                    id={`accordion-panel-${i}`}
                    className={`accordion-panel ${isOpen ? "is-open" : ""}`}
                  >
                    <div>
                      <p className="max-w-prose pb-5 text-pretty font-body text-base leading-relaxed text-mute">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
