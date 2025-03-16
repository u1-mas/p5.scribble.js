import { defineConfig } from "vite";
import { resolve } from "node:path";

export default defineConfig(({ command }) => ({
	base: "/p5.scribble.js/",
	root: "examples",
	build: {
		outDir: resolve(__dirname, "dist"),
		emptyOutDir: true,
		rollupOptions: {
			input: {
				main: resolve(__dirname, "examples", "index.html"),
				chart: resolve(__dirname, "examples", "chart.html"),
			},
		},
	},
	publicDir: "public",
}));
