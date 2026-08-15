export type Category = "webdev" | "sports" | "entertainment" | "aiart";

export interface Project {
  id: string;
  category: Category;
  title: string;
  summary: string;
  detail: string;
  tags: string[];
  format: "Project" | "Video" | "Breakdown" | "Dashboard" | "Image";
}

export const categoryMeta: Record<
  Category,
  { label: string; short: string }
> = {
  webdev: { label: "AI Web Development", short: "AI DEV" },
  sports: { label: "Sports Analytics", short: "SPORTS" },
  entertainment: { label: "Entertainment Breakdowns", short: "MEDIA" },
  aiart: { label: "AI Pictures", short: "AI ART" },
};

export const projects: Project[] = [
  {
    id: "proj-1",
    category: "webdev",
    format: "Project",
    title: "Placeholder: Client AI Ops Site",
    summary: "AI-assisted consulting site with automated content pipeline.",
    detail:
      "Replace with a real case study: the problem, your stack, the build process, and the measurable outcome. Swap this block for a live link and screenshots.",
    tags: ["React", "AI Integration", "Design"],
  },
  {
    id: "proj-2",
    category: "webdev",
    format: "Project",
    title: "Placeholder: Internal Tooling Dashboard",
    summary: "Data-driven dashboard built with an LLM-assisted workflow.",
    detail:
      "Drop in a project description here — what you built, why it mattered, and a link to the repo or a live demo.",
    tags: ["TypeScript", "Automation"],
  },
  {
    id: "proj-3",
    category: "sports",
    format: "Dashboard",
    title: "Placeholder: Weekly Performance Metrics",
    summary: "Interactive breakdown of team or player performance data.",
    detail:
      "Embed a real chart or link to your analytics writeup here — advanced stats, trend lines, or a matchup model.",
    tags: ["Data Viz", "Analytics"],
  },
  {
    id: "proj-4",
    category: "sports",
    format: "Breakdown",
    title: "Placeholder: Season Trend Analysis",
    summary: "Long-form breakdown of a statistical trend across a season.",
    detail:
      "Swap in your actual writeup, video, or chart set — this card is a placeholder for a real analytics piece.",
    tags: ["Analytics", "Writeup"],
  },
  {
    id: "proj-5",
    category: "entertainment",
    format: "Video",
    title: "Placeholder: Lore Deep-Dive",
    summary: "Video breakdown mapping a franchise's timeline and lore.",
    detail:
      "Embed your actual YouTube video here once it's live — this is a placeholder slot for the thumbnail and description.",
    tags: ["YouTube", "Lore Mapping"],
  },
  {
    id: "proj-6",
    category: "entertainment",
    format: "Breakdown",
    title: "Placeholder: Media Theory Breakdown",
    summary: "Written or video analysis of a show, film, or series.",
    detail:
      "Replace with a real breakdown — link the video, embed the script excerpt, or summarize the theory.",
    tags: ["Analysis", "Writeup"],
  },
  {
    id: "proj-7",
    category: "aiart",
    format: "Image",
    title: "Placeholder: AI Generated Piece 01",
    summary: "Concept image generated with an AI image model.",
    detail:
      "Swap in a real image, the prompt/model used, and a short note on the idea behind it.",
    tags: ["AI Art", "Midjourney"],
  },
  {
    id: "proj-8",
    category: "aiart",
    format: "Image",
    title: "Placeholder: AI Generated Piece 02",
    summary: "Concept image generated with an AI image model.",
    detail:
      "Swap in a real image, the prompt/model used, and a short note on the idea behind it.",
    tags: ["AI Art"],
  },
];
