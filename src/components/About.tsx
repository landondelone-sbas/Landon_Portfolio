import { withBase } from "../lib/assets";

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
    <section id="about" className="border-b border-line px-4 py-16 sm:px-6">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[minmax(0,1fr)_320px]">
        <div>
          <p className="mb-2 font-display text-sm font-semibold uppercase tracking-[0.3em] text-yellow">
            About
          </p>
          <h2 className="font-heading text-4xl leading-tight text-ink sm:text-5xl">
            Landon Delone
          </h2>

          <div className="mt-6 max-w-prose space-y-4 text-pretty font-body text-lg leading-relaxed text-mute">
            <p>
              I'm Landon Delone, a software developer and digital creator with a passion 
              for building automated systems and engaging communities. On the technical 
              side, my recent focus has been on workflow automation and AI integration. 
              I work primarily with Python, JavaScript, and TypeScript, utilizing tools 
              like Docker, Supabase, and Render to build streamlined backend workflows. 
              Whether I'm engineering custom contexts for LLMs or developing full-stack 
              applications, I love turning complex bottlenecks into hands-off solutions.
            </p>
            <p>
              When I'm not writing code, I'm researching and producing content for my two 
              YouTube channels. On Crash Against the Spread, I apply a data-driven approach 
              to sports handicapping and advanced betting metrics. On Where in the 
              Timeline?! The Stark Side, I shift gears to storytelling, unpacking the rich 
              lore of Star Wars, Marvel, and the A Song of Ice and Fire universes. For me, 
              software development and content creation are driven by the exact same 
              curiosity: digging into complex systems and understanding how all the pieces 
              fit together.
            </p>
          </div>

          <div className="mt-8">
            <h3 className="mb-3 font-display text-sm font-semibold uppercase tracking-widest text-gold">
              Skills &amp; Tools
            </h3>
            <ul className="flex flex-wrap gap-2">
              {SKILLS.map((skill) => (
                <li
                  key={skill}
                  className="rounded-full border border-line px-3 py-1.5 font-body text-sm text-ink"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="overflow-hidden rounded-3xl border border-line bg-panel">
          <img
            src={withBase("/images/landon-portrait.jpg")}
            alt="AI-generated portrait of Landon Delone as an Imperial officer"
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
