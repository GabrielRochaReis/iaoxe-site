import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://iaoxe.com.br',
  markdown: {
    shikiConfig: { theme: 'github-light', wrap: true }
  }
});
