import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import compress from 'astro-compress';

// https://astro.build/config
export default defineConfig({
  site: 'https://websnabb.github.io',
  base: '/websnabb.github.io',
  integrations: [tailwind(), compress()],
});
