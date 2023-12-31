import react from '@astrojs/react';
import tailwind from "@astrojs/tailwind";
import { defineConfig } from 'astro/config';
// import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: 'http://lucasblanco.me',
  
  integrations: [tailwind(), react({
    experimentalReactChildren: true,
  })]
});