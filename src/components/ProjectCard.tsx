import type { Project } from "../data/projects";
import { categoryMeta } from "../data/projects";

const THUMB_STYLES: Record<Project["category"], string> = {
  webdev: "bg-ink",
  sports: "bg-signal",
  entertainment: "bg-paper-dim",
  aiart: "bg-ink",
};

const THUMB_TEXT: Record<Project["category"], string> = {
  webdev: "text-paper/30",
  sports: "text-paper/40",
  entertainment: "text-ink/20",
  aiart: "text-signal/60",
};

interface Props {
  project: Project;
  onOpen: (project: Project) => void;
}

export default function ProjectCard({ project, onOpen }: Props) {
  const meta = categoryMeta[project.category];

  return (
    <article className="mb-6 break-inside-avoid border-4 border-ink bg-paper">
      <button
        type="button"
        onClick={() => onOpen(project)}
        className="block w-full text-left"
      >
        <div
          className={`flex h-40 items-center justify-center border-b-4 border-ink ${THUMB_STYLES[project.category]}`}
        >
          <span
            className={`select-none font-display text-6xl font-bold uppercase ${THUMB_TEXT[project.category]}`}
          >
            {project.format}
          </span>
        </div>

        <div className="p-5">
          <div className="mb-3 flex items-center gap-2">
            <span className="border-2 border-ink bg-paper px-2 py-0.5 font-display text-xs font-bold uppercase tracking-widest">
              {meta.short}
            </span>
            <span className="font-display text-xs font-semibold uppercase tracking-widest text-mute">
              {project.format}
            </span>
          </div>

          <h3 className="font-display text-xl font-semibold uppercase leading-tight">
            {project.title}
          </h3>
          <p className="mt-2 text-pretty font-body text-base leading-relaxed text-mute">
            {project.summary}
          </p>

          <ul className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <li
                key={tag}
                className="border border-ink/40 px-2 py-0.5 font-body text-xs text-mute"
              >
                {tag}
              </li>
            ))}
          </ul>

          <span className="mt-4 inline-block font-display text-sm font-semibold uppercase tracking-widest text-signal">
            View Details →
          </span>
        </div>
      </button>
    </article>
  );
}
