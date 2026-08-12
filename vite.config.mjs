import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  base: '/', // Критично! Говорит Vite: "сайт будет лежать в корне домена"
  build: {
    emptyOutDir: true, // Очищать папку dist перед сборкой
  },
});
