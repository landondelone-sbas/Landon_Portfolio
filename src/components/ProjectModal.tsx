import { useEffect, useRef } from "react";
import type { Project } from "../data/projects";
import { categoryMeta } from "../data/projects";
import { getYouTubeEmbedUrl, getYouTubeId } from "../lib/youtube";
import { withBase } from "../lib/assets";
import { categoryAccent } from "../lib/theme";

interface Props {
  project: Project;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: Props) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<Element | null>(null);

  useEffect(() => {
    triggerRef.current = document.activeElement;
    closeBtnRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key !== "Tab") return;

      const focusable = dialogRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      if (!focusable || focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
      (triggerRef.current as HTMLElement | null)?.focus?.();
    };
  }, [onClose]);

  const meta = categoryMeta[project.category];
  const accent = categoryAccent[project.category];
  const youtubeId = project.url ? getYouTubeId(project.url) : null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-void/80 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onClick={(e) => e.stopPropagation()}
        className={`max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-line bg-panel ${accent.glow.replace("hover:", "")}`}
      >
        <div className="flex items-center justify-between border-b border-line px-6 py-4">
          <span
            className={`rounded-full border px-2 py-0.5 font-display text-xs font-bold uppercase tracking-widest ${accent.badge}`}
          >
            {meta.short}
          </span>
          <button
            ref={closeBtnRef}
            type="button"
            onClick={onClose}
            aria-label="Close dialog"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-yellow hover:text-yellow"
          >
            ✕
          </button>
        </div>

        <div className="p-6 sm:p-8">
          <h2
            id="modal-title"
            className="text-balance font-display text-3xl font-bold text-ink"
          >
            {project.title}
          </h2>

          {youtubeId ? (
            <div className="mt-4 aspect-video w-full overflow-hidden rounded-2xl border border-line">
              <iframe
                className="h-full w-full"
                src={getYouTubeEmbedUrl(youtubeId)}
                title={project.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          ) : project.image ? (
            <div className="mt-4 overflow-hidden rounded-2xl border border-line bg-panel-2">
              <img
                src={withBase(project.image)}
                alt=""
                loading="lazy"
                className="w-full object-cover"
              />
            </div>
          ) : (
            <div className="mt-4 flex h-48 items-center justify-center rounded-2xl border border-line bg-panel-2">
              <span className="font-display text-sm font-semibold uppercase tracking-widest text-mute">
                {project.format} preview placeholder
              </span>
            </div>
          )}

          {project.builtByMe && (
            <p className="mt-4 font-display text-xs font-bold uppercase tracking-widest text-gold">
              Built by Me — Solo Project
            </p>
          )}

          <p className="mt-4 text-pretty font-body text-lg leading-relaxed text-mute">
            {project.detail}
          </p>

          <ul className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-line px-3 py-1 font-body text-sm text-ink"
              >
                {tag}
              </li>
            ))}
          </ul>

          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`mt-6 inline-block font-display text-sm font-semibold uppercase tracking-widest ${accent.text}`}
            >
              {youtubeId ? "Watch on YouTube ↗" : "View Live Project ↗"}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
