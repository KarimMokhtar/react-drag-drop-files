import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    watch: false,
    threads: false,
    reporters: 'verbose',
    setupFiles: ['tests/setup.ts'],
    environment: 'jsdom'
  }
});
