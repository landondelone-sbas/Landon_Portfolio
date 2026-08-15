const SKILLS = [
  "React / TypeScript",
  "AI-assisted development",
  "Data visualization",
  "Sports analytics",
  "Video breakdown & editing",
  "Long-form writeups",
];

export default function About() {
  return (
    <section id="about" className="border-b-4 border-ink px-4 py-16 sm:px-6">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[minmax(0,1fr)_320px]">
        <div>
          <p className="mb-2 font-display text-sm font-semibold uppercase tracking-[0.3em] text-signal">
            About
          </p>
          <h2 className="font-display text-4xl font-bold uppercase tracking-tight sm:text-5xl">
            Landon DeLone
          </h2>

          <div className="mt-6 max-w-prose space-y-4 text-pretty font-body text-lg leading-relaxed text-mute">
            <p>
              Placeholder bio — replace with your real story. Lead with who
              you are, what you build, and what pulls you toward sports
              data and entertainment analysis outside of work.
            </p>
            <p>
              Mention how the AI development work and the analyst work
              inform each other: the same instinct for finding the signal
              in the data shows up whether you're shipping a product or
              breaking down a box score.
            </p>
          </div>

          <div className="mt-8">
            <h3 className="mb-3 font-display text-sm font-semibold uppercase tracking-widest">
              Skills &amp; Tools
            </h3>
            <ul className="flex flex-wrap gap-2">
              {SKILLS.map((skill) => (
                <li
                  key={skill}
                  className="border-2 border-ink px-3 py-1.5 font-body text-sm"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex h-64 items-center justify-center border-4 border-ink bg-paper-dim lg:h-full">
          <span className="font-display text-sm font-semibold uppercase tracking-widest text-mute">
            Photo placeholder
          </span>
        </div>
      </div>
    </section>
  );
}
