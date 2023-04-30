import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: { port: 3000 },
  build: {
    minify: false
  },
  root: '',
  test: {
    globals: true,
    watch: false,
    threads: false,
    reporters: 'verbose',
    setupFiles: ['tests/setup.ts'],
    environment: 'jsdom'
  }
});
