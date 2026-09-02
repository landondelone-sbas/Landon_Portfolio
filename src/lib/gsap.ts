import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// registerPlugin is idempotent — GSAP checks the plugin name internally
// and no-ops on repeat calls, so this is safe to re-run under Vite HMR.
gsap.registerPlugin(ScrollTrigger);

export { gsap, ScrollTrigger };
