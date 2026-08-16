export type Category = "webdev" | "sports" | "entertainment" | "logos";

export interface Project {
  id: string;
  category: Category;
  title: string;
  summary: string;
  detail: string;
  tags: string[];
  format: "Project" | "Video" | "Breakdown" | "Dashboard" | "Image";
  url?: string;
  image?: string;
  builtByMe?: boolean;
}

export const categoryMeta: Record<
  Category,
  { label: string; short: string }
> = {
  webdev: { label: "AI Web Development", short: "AI DEV" },
  sports: { label: "Sports Analytics", short: "SPORTS" },
  entertainment: { label: "Entertainment Breakdowns", short: "MEDIA" },
  logos: { label: "Logo Design", short: "LOGOS" },
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
      "Designed and built solo, end to end. Full falling-block puzzle mechanics — hold piece, hard drop, level progression, and score tracking — built for both keyboard and touch input.",
    tags: ["JavaScript", "Game Dev"],
    url: "https://landondelone-sbas.github.io/Tetris/",
    image: "/images/projects/tetris.jpg",
    builtByMe: true,
  },
  {
    id: "webdev-server-tracker",
    category: "webdev",
    format: "Dashboard",
    title: "Server Tracker",
    summary: "A dashboard for logging and reviewing server shifts.",
    detail:
      "Designed and built solo, end to end. Shift-management dashboard with an overview view, a form for adding new shifts, historical data, generated reports, and a settings panel — built for tracking server work over time.",
    tags: ["Dashboard", "Shift Tracking"],
    url: "https://landondelone-sbas.github.io/server_tracker/",
    image: "/images/projects/server-tracker.jpg",
    builtByMe: true,
  },
  {
    id: "webdev-whiteboard",
    category: "webdev",
    format: "Project",
    title: "Whiteboard",
    summary: "A browser-based drawing app with a full basic toolset.",
    detail:
      "Designed and built solo, end to end. Canvas drawing app with pen, eraser, rectangle, circle, and text tools, adjustable color and brush size, a clear-board action, and PNG export.",
    tags: ["Canvas API", "Drawing Tool"],
    url: "https://landondelone-sbas.github.io/WhiteboardApp/",
    image: "/images/projects/whiteboard.jpg",
    builtByMe: true,
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
    id: "logo-stark-1",
    category: "logos",
    format: "Image",
    title: "The Stark Side — Concept 1",
    summary: "A wordmark blending a Stark direwolf with a lightsaber accent.",
    detail:
      "Logo concept designed for The Stark Side channel — a direwolf head worked into the lettering with a lightsaber standing in for the 'I', tying the Game of Thrones and Star Wars halves of the brand together in one mark.",
    tags: ["Logo Design", "Branding"],
    image: "/images/logos/stark-side-logo-1.png",
  },
  {
    id: "logo-stark-2",
    category: "logos",
    format: "Image",
    title: "The Stark Side — Concept 2",
    summary: "A poster-style mark with a wolf crest and a glowing lightsaber beam.",
    detail:
      "Logo concept designed for The Stark Side channel — a starfield poster treatment with a wolf crest above the wordmark and a lightsaber beam arcing through the type, leaning harder into the Star Wars side of the brand.",
    tags: ["Logo Design", "Branding"],
    image: "/images/logos/stark-side-logo-2.jpg",
  },
  {
    id: "logo-stark-3",
    category: "logos",
    format: "Image",
    title: "The Stark Side — Concept 3",
    summary: "A monogram 'S' combining a direwolf, a lightsaber, and a clock hand.",
    detail:
      "Logo concept designed for The Stark Side channel — a single monogram 'S' built from a direwolf silhouette, a lightsaber, and a clock hand, nodding to the channel's timeline-mapping format in one compact icon.",
    tags: ["Logo Design", "Branding"],
    image: "/images/logos/stark-side-logo-3.png",
  },
  {
    id: "logo-stark-4",
    category: "logos",
    format: "Image",
    title: "The Stark Side — Concept 4",
    summary: "A collegiate-style wordmark layering direwolf, saber, and helmet icons into the letterforms.",
    detail:
      "Logo concept designed for The Stark Side channel — a bolder, collegiate-style wordmark that layers a direwolf, a lightsaber, and Star Wars helmet iconography directly into the letterforms for a more emblematic look.",
    tags: ["Logo Design", "Branding"],
    image: "/images/logos/stark-side-logo-4.jpg",
  },
];
