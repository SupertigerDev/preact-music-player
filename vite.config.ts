import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';
import eslint from '@rollup/plugin-eslint';
import path from 'path';

const resolveFixup = {
  name: 'resolve-fixup',
  setup(build) {
    build.onResolve({ filter: /react-virtualized/ }, async () => ({
      path: path.resolve('./node_modules/react-virtualized/dist/umd/react-virtualized.js'),
    }));
  },
};

// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: {
    esbuildOptions: {
      plugins: [resolveFixup],
    },
  },
  plugins: [
    {
      ...eslint(),
      enforce: 'pre',
      apply: 'build',
    },
    preact(),
  ],
});
