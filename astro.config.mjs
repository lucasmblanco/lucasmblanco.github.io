import react from '@astrojs/react';
import tailwind from "@astrojs/tailwind";
import { defineConfig } from 'astro/config';
import icon from "astro-icon";
// import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  // site: 'https://lucasblanco.me',
  integrations: [tailwind(), react({
    experimentalReactChildren: true,
  }), icon()]
});