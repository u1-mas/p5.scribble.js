import { defineConfig } from "vite";
import { resolve } from "node:path";

export default defineConfig({
  base: "/p5.scribble.js/",
  build: {
    outDir: "dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'examples/index.html'),
        chart: resolve(__dirname, 'examples/chart.html'),
      }
    }
  },
  publicDir: "public",
});
