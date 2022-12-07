/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), vanillaExtractPlugin()],
  build: {
    lib: {
      entry: 'src/index.ts',
      formats: ['cjs','es'],
      fileName: (format)=>`index.${format}.js`,
    },
    rollupOptions: {
      external: (id) => 
        id.startsWith("react") || id.startsWith("@vanilla-extract")
    },
    sourcemap: true,
  },
  test: {
    globals: true,
    environment: "jsdom",
  }
})
