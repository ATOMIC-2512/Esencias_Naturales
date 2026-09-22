import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Vite config - static build output goes to /dist, ready for any static host
// (Netlify, Vercel, S3 + CloudFront, GitHub Pages, etc.)
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
  },
  build: {
    outDir: "dist",
    sourcemap: false,
  },
});
