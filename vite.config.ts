import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // Only GitHub Pages needs the repo-name subpath; Vercel/Netlify and
  // local dev serve from root, so this only kicks in when the Pages
  // workflow sets GITHUB_PAGES=true.
  base: process.env.GITHUB_PAGES ? '/Landon_Portfolio/' : '/',
  plugins: [react(), tailwindcss()],
})
