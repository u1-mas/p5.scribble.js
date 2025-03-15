import { defineConfig } from "vite";
import { resolve } from "node:path";

export default defineConfig({
  base: "/p5.scribble.js/",
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
  root: "examples",
  publicDir: "../public",
});
