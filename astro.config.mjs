import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://lionceauagre.com', // Remplace par ton vrai domaine plus tard
});