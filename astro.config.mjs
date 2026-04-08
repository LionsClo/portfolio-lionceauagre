import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  integrations: [tailwind()],

  // Remplace par ton vrai domaine plus tard
  site: 'https://lionceauagre.com',

  vite: {
    plugins: [tailwindcss()]
  }
});