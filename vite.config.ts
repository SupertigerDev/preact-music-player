import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';
import eslint from '@rollup/plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    {
      ...eslint(),
      enforce: 'pre',
      apply: 'build',
    },
    preact(),
  ],
});
