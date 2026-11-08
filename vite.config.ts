/// <reference types="vitest/config" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// VITE_BASE_PATH is set in CI for GitHub Pages project sites (e.g. "/repo-name/").
export default defineConfig({
  base: process.env['VITE_BASE_PATH'] ?? '/',
  plugins: [react()],
  test: {
    environment: 'jsdom',
    pool: 'threads',
    globals: true,
    setupFiles: ['./tests/setup.ts'],
    include: ['src/**/*.test.{ts,tsx}', 'tests/**/*.test.{ts,tsx}'],
    css: { modules: { classNameStrategy: 'non-scoped' } },
  },
});
