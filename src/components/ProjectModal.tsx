import { useEffect, useRef } from "react";
import type { Project } from "../data/projects";
import { categoryMeta } from "../data/projects";

const ACCENT: Record<Project["category"], { badge: string; ring: string }> = {
  webdev: { badge: "border-green/60 text-green", ring: "glow-green" },
  sports: { badge: "border-purple/60 text-purple", ring: "glow-purple" },
  entertainment: { badge: "border-pink/60 text-pink", ring: "glow-pink" },
  aiart: { badge: "border-green/60 text-green", ring: "glow-green" },
};

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
  const accent = ACCENT[project.category];

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
        className={`max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-line bg-panel ${accent.ring}`}
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
            className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-pink hover:text-pink"
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

          <div className="mt-4 flex h-48 items-center justify-center rounded-2xl border border-line bg-panel-2">
            <span className="font-display text-sm font-semibold uppercase tracking-widest text-mute">
              {project.format} preview placeholder
            </span>
          </div>

          <p className="mt-6 text-pretty font-body text-lg leading-relaxed text-mute">
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
        </div>
      </div>
    </div>
  );
}
