// @ts-check
import { defineConfig, envField } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import node from '@astrojs/node';

import sitemap from '@astrojs/sitemap';

import robotsTxt from 'astro-robots-txt';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  server: {
    host: '0.0.0.0',
    port: 3013
  },
  i18n: {
    locales: ['es', 'en'],
    defaultLocale: 'es',
    routing: {
      prefixDefaultLocale: false
    }
  },

  vite: {
    plugins: [tailwindcss()]
  },

  env: {
    schema: {
      SCORE_API_ENDPOINT: envField.string({ context:'server', access:'public' })
    }
  },

  adapter: node({
    mode: 'standalone'
  }),
  site: "https://yapura.dev",
  integrations: [sitemap(), robotsTxt()]
});