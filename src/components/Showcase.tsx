import { useMemo, useState } from "react";
import type { Category, Project } from "../data/projects";
import { categoryMeta, projects } from "../data/projects";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

type Filter = Category | "all";

const FILTERS: { id: Filter; label: string }[] = [
  { id: "all", label: "All" },
  { id: "webdev", label: categoryMeta.webdev.short },
  { id: "sports", label: categoryMeta.sports.short },
  { id: "entertainment", label: categoryMeta.entertainment.short },
  { id: "logos", label: categoryMeta.logos.short },
];

export default function Showcase() {
  const [filter, setFilter] = useState<Filter>("all");
  const [active, setActive] = useState<Project | null>(null);

  const visible = useMemo(
    () =>
      filter === "all"
        ? projects
        : projects.filter((p) => p.category === filter),
    [filter],
  );

  return (
    <section id="showcase" className="border-b border-line px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="mb-2 font-display text-sm font-semibold uppercase tracking-[0.3em] text-yellow">
              Showcase
            </p>
            <h2 className="font-heading text-4xl leading-tight text-ink sm:text-5xl">
              Selected Work
            </h2>
            <p className="mt-2 max-w-xl font-body text-mute">
              Shipped web projects, sports analytics breakdowns,
              entertainment lore videos, and logo design work.
            </p>
          </div>

          <div
            className="flex flex-wrap gap-2"
            role="group"
            aria-label="Filter by category"
          >
            {FILTERS.map((f) => {
              const isActive = filter === f.id;
              return (
                <button
                  key={f.id}
                  type="button"
                  onClick={() => setFilter(f.id)}
                  aria-pressed={isActive}
                  className={`rounded-full border px-4 py-2 font-display text-sm font-semibold uppercase tracking-widest transition-colors ${
                    isActive
                      ? "border-gold bg-gold text-void"
                      : "border-line text-mute hover:border-gold hover:text-gold"
                  }`}
                >
                  {f.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="columns-1 gap-6 sm:columns-2 lg:columns-3">
          {visible.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpen={setActive}
            />
          ))}
        </div>
      </div>

      {active && (
        <ProjectModal project={active} onClose={() => setActive(null)} />
      )}
    </section>
  );
}
