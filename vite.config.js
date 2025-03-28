import { defineConfig } from "vite";
import { resolve } from "node:path";

export default defineConfig(({ command }) => ({
  base: "/p5.scribble.js/",
  root: "examples",
  assetsInclude: ["**/*.js"],
  build: {
    outDir: resolve(__dirname, "dist"),
    emptyOutDir: true,
    rollupOptions: {
      input: {
        index: resolve(__dirname, "examples/index.html"),
        chart: resolve(__dirname, "examples/chart.html")
      }
    }
  },
  publicDir: "public"
}));
