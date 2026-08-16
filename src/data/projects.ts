export type Category = "webdev" | "sports" | "entertainment" | "aiart";

export interface Project {
  id: string;
  category: Category;
  title: string;
  summary: string;
  detail: string;
  tags: string[];
  format: "Project" | "Video" | "Breakdown" | "Dashboard" | "Image";
  url?: string;
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
    id: "sports-dvoa",
    category: "sports",
    format: "Video",
    title: '"What is DVOA? NFL Betting’s Secret Weapon Explained"',
    summary:
      "Breaking down DVOA (Defense-adjusted Value Over Average) and why it's one of the sharpest efficiency metrics in NFL analytics.",
    detail:
      "Part of the Crash Against the Spread series breaking down the advanced stats behind sports betting and team evaluation — this one covers DVOA, how it's calculated, and why it holds up better than raw yardage or points.",
    tags: ["YouTube", "NFL", "Analytics"],
    url: "https://youtu.be/_hFRqLB0W28",
  },
  {
    id: "sports-ortg",
    category: "sports",
    format: "Video",
    title: "What is Offensive Rating (ORtg) & How to Calculate It?",
    summary:
      "A walkthrough of Offensive Rating — how it's calculated and why it's a better read on scoring efficiency than points per game.",
    detail:
      "Part of the Crash Against the Spread series breaking down the advanced stats behind sports betting and team evaluation — this one covers Offensive Rating (ORtg), the formula behind it, and how to use it to judge NBA offenses.",
    tags: ["YouTube", "NBA", "Analytics"],
    url: "https://youtu.be/VAdO4RfR8ZM",
  },
  {
    id: "sports-woba",
    category: "sports",
    format: "Video",
    title: "What is wOBA? Baseball’s Ultimate Hitting Metric Explained",
    summary:
      "Explaining wOBA (Weighted On-Base Average) and why it's become the go-to stat for measuring real hitting value.",
    detail:
      "Part of the Crash Against the Spread series breaking down the advanced stats behind sports betting and team evaluation — this one covers wOBA, how it weights each outcome at the plate, and why it beats batting average as a measure of hitting.",
    tags: ["YouTube", "MLB", "Analytics"],
    url: "https://youtu.be/zZH6KjN4eWo",
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
