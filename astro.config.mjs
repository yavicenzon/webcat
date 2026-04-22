import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';

export default defineConfig({
  output: 'server',
  integrations: [react()],
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
    includeFiles: ['cat-market.db'],
  }),
  vite: {
    plugins: [tailwindcss()],
    ssr: {
      external: ['better-sqlite3']
    }
  }
});