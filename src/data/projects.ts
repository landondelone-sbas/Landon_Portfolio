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
    id: "webdev-tetris",
    category: "webdev",
    format: "Project",
    title: "Tetris",
    summary:
      "A web-based build of the classic Tetris, playable with keyboard or touch.",
    detail:
      "Full falling-block puzzle mechanics — hold piece, hard drop, level progression, and score tracking — built for both keyboard and touch input.",
    tags: ["JavaScript", "Game Dev"],
    url: "https://landondelone-sbas.github.io/Tetris/",
  },
  {
    id: "webdev-server-tracker",
    category: "webdev",
    format: "Dashboard",
    title: "Server Tracker",
    summary: "A dashboard for logging and reviewing server shifts.",
    detail:
      "Shift-management dashboard with an overview view, a form for adding new shifts, historical data, generated reports, and a settings panel — built for tracking server work over time.",
    tags: ["Dashboard", "Shift Tracking"],
    url: "https://landondelone-sbas.github.io/server_tracker/",
  },
  {
    id: "webdev-whiteboard",
    category: "webdev",
    format: "Project",
    title: "Whiteboard",
    summary: "A browser-based drawing app with a full basic toolset.",
    detail:
      "Canvas drawing app with pen, eraser, rectangle, circle, and text tools, adjustable color and brush size, a clear-board action, and PNG export.",
    tags: ["Canvas API", "Drawing Tool"],
    url: "https://landondelone-sbas.github.io/WhiteboardApp/",
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
    id: "entertainment-hotd-finale",
    category: "entertainment",
    format: "Video",
    title:
      "Ulf's Ultimate Betrayal & Aegon's Return! | House of the Dragon Season Three Finale",
    summary:
      "A timeline-mapping breakdown of the House of the Dragon season three finale — Ulf's betrayal and Aegon's return.",
    detail:
      "Part of the Where in the Timeline!? The Stark Side series, tracking House of the Dragon's story beats against the wider timeline as the season three finale plays out.",
    tags: ["YouTube", "House of the Dragon", "Lore"],
    url: "https://youtu.be/UaDwlPllsGM",
  },
  {
    id: "entertainment-andor-s2",
    category: "entertainment",
    format: "Video",
    title: "We gotta talk about the 2nd season of Andor!",
    summary: "A breakdown of Andor season two and where it lands in the Star Wars timeline.",
    detail:
      "Part of the Where in the Timeline!? The Stark Side series, digging into Andor's second season and how it fits into the broader Star Wars lore and chronology.",
    tags: ["YouTube", "Star Wars", "Andor"],
    url: "https://youtu.be/Z1gunEIMmQc",
  },
  {
    id: "entertainment-sw-watch-order",
    category: "entertainment",
    format: "Video",
    title: "Star Wars Chronological Watch Order 2026 (Canon + Legends Explained)",
    summary:
      "A full chronological watch order for Star Wars, covering both canon and Legends continuity.",
    detail:
      "Part of the Where in the Timeline!? The Stark Side series, laying out the complete Star Wars timeline in watch order across both canon and Legends material.",
    tags: ["YouTube", "Star Wars", "Watch Order"],
    url: "https://youtu.be/H3lzYK6lxaQ",
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
