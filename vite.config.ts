import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const IS_LIB_BUILD = process.env.VITE_BUILD_MODE === 'lib';

export default defineConfig({
  base: '', // use relative paths
  plugins: [react()],
  define: { 'process.env.NODE_ENV': "'production'" }, // for react
  build: {
    sourcemap: true,
    emptyOutDir: IS_LIB_BUILD,
    lib: IS_LIB_BUILD && {
      entry: resolve(import.meta.dirname, 'src/index-plugin.tsx'),
      formats: ['es'],
      fileName: 'iD-plugin',
    },
  },

  // specific to this app:
  esbuild: { legalComments: 'none' },
  resolve: {
    alias: {
      // bc of https://github.com/tabler/tabler-icons/issues/1233#issuecomment-2428245119
      '@tabler/icons-react': '@tabler/icons-react/dist/esm/icons/index.mjs',
    },
  },
});
