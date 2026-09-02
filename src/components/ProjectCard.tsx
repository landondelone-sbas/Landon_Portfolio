import type { Project } from "../data/projects";
import { categoryMeta } from "../data/projects";
import { getYouTubeId, getYouTubeThumbnail } from "../lib/youtube";
import { withBase } from "../lib/assets";
import { categoryAccent } from "../lib/theme";

interface Props {
  project: Project;
  onOpen: (project: Project) => void;
}

export default function ProjectCard({ project, onOpen }: Props) {
  const meta = categoryMeta[project.category];
  const accent = categoryAccent[project.category];
  const youtubeId = project.url ? getYouTubeId(project.url) : null;
  const thumbnailSrc = youtubeId
    ? getYouTubeThumbnail(youtubeId)
    : project.image
      ? withBase(project.image)
      : undefined;

  return (
    <article className="mb-6 break-inside-avoid">
      <button
        type="button"
        onClick={() => onOpen(project)}
        className={`block w-full rounded-2xl border bg-panel text-left transition-all duration-300 ${accent.border} ${accent.glow}`}
      >
        <div className="relative flex h-40 items-center justify-center overflow-hidden rounded-t-2xl border-b border-line bg-panel-2">
          {thumbnailSrc ? (
            <>
              <img
                src={thumbnailSrc}
                alt=""
                loading="lazy"
                className="h-full w-full object-cover"
              />
              {youtubeId && (
                <span
                  aria-hidden="true"
                  className="absolute flex h-12 w-12 items-center justify-center rounded-full bg-void/70 text-xl text-ink backdrop-blur-sm"
                >
                  ▶
                </span>
              )}
            </>
          ) : (
            <span
              className={`select-none font-display text-5xl font-bold uppercase opacity-20 ${accent.text}`}
            >
              {project.format}
            </span>
          )}
          <span
            aria-hidden="true"
            className={`absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full border bg-void text-sm ${accent.badge}`}
          >
            ✦
          </span>
        </div>

        <div className="p-5">
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <span
              className={`rounded-full border px-2 py-0.5 font-display text-xs font-bold uppercase tracking-widest ${accent.badge}`}
            >
              {meta.short}
            </span>
            <span className="font-display text-xs font-semibold uppercase tracking-widest text-mute">
              {project.format}
            </span>
            {project.builtByMe && (
              <span className="rounded-full border border-gold/60 bg-gold/10 px-2 py-0.5 font-display text-xs font-bold uppercase tracking-widest text-gold">
                Built by Me
              </span>
            )}
          </div>

          <h3 className="font-display text-xl font-semibold text-ink">
            {project.title}
          </h3>
          <p className="mt-2 text-pretty font-body text-base leading-relaxed text-mute">
            {project.summary}
          </p>

          <ul className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-line px-2 py-0.5 font-body text-xs text-mute"
              >
                {tag}
              </li>
            ))}
          </ul>

          <span
            className={`mt-4 inline-block font-display text-sm font-semibold uppercase tracking-widest ${accent.text}`}
          >
            View Details →
          </span>
        </div>
      </button>
    </article>
  );
}
