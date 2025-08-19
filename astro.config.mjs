// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://track.waterloo.digital',
  output: 'static',
  build: {
    format: 'file'
  }
});
