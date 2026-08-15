import { useEffect, useRef } from "react";
import type { Project } from "../data/projects";
import { categoryMeta } from "../data/projects";

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

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink/70 p-4"
      onClick={onClose}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onClick={(e) => e.stopPropagation()}
        className="max-h-[85vh] w-full max-w-2xl overflow-y-auto border-4 border-ink bg-paper"
      >
        <div className="flex items-center justify-between border-b-4 border-ink px-6 py-4">
          <span className="border-2 border-ink px-2 py-0.5 font-display text-xs font-bold uppercase tracking-widest">
            {meta.short}
          </span>
          <button
            ref={closeBtnRef}
            type="button"
            onClick={onClose}
            aria-label="Close dialog"
            className="border-2 border-ink px-3 py-1 font-display text-sm font-semibold uppercase tracking-widest transition-colors hover:bg-ink hover:text-paper"
          >
            Close ✕
          </button>
        </div>

        <div className="p-6 sm:p-8">
          <h2
            id="modal-title"
            className="text-balance font-display text-3xl font-bold uppercase leading-tight"
          >
            {project.title}
          </h2>

          <div className="mt-4 flex h-48 items-center justify-center border-4 border-ink bg-paper-dim">
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
                className="border-2 border-ink px-3 py-1 font-body text-sm"
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
