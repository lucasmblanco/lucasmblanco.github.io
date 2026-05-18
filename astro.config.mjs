import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  // site: 'https://lucasblanco.me',
  integrations: [react({
    experimentalReactChildren: true,
  }), icon()],
  vite: {
    plugins: [tailwindcss()],
  },
});