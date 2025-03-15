import { defineConfig } from 'vite';

export default defineConfig({
  base: '/p5.scribble.js/',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: 'examples/index.html',
        chart: 'examples/chart.html'
      }
    }
  }
});
