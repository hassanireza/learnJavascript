import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Using a relative base ("./") together with HashRouter in the app means
// this build works when hosted at the root of a domain, in a GitHub Pages
// project subpath (https://user.github.io/repo/), or behind any reverse
// proxy, without any extra configuration.
export default defineConfig({
  base: './',
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
});
