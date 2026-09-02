import type { Category } from "../data/projects";

/**
 * Shared gold/black accent cycle. One tone per project category so
 * ProjectCard and ProjectModal both pull from the same source instead of
 * two separate hardcoded color maps.
 */
export const categoryAccent: Record<
  Category,
  {
    text: string;
    border: string;
    borderStrong: string;
    glow: string;
    badge: string;
  }
> = {
  webdev: {
    text: "text-gold",
    border: "border-gold/40 hover:border-gold",
    borderStrong: "border-gold/60",
    glow: "hover:glow-gold",
    badge: "border-gold/60 text-gold",
  },
  sports: {
    text: "text-amber",
    border: "border-amber/40 hover:border-amber",
    borderStrong: "border-amber/60",
    glow: "hover:glow-amber",
    badge: "border-amber/60 text-amber",
  },
  entertainment: {
    text: "text-yellow",
    border: "border-yellow/40 hover:border-yellow",
    borderStrong: "border-yellow/60",
    glow: "hover:glow-yellow",
    badge: "border-yellow/60 text-yellow",
  },
  logos: {
    text: "text-champagne",
    border: "border-champagne/40 hover:border-champagne",
    borderStrong: "border-champagne/60",
    glow: "hover:glow-champagne",
    badge: "border-champagne/60 text-champagne",
  },
};
