import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { viteSingleFile } from 'vite-plugin-singlefile'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), viteSingleFile()],
  base: '/',
  build: {
    rollupOptions: {
      output: {
        format: 'iife',
        name: 'TechCureApp',
        inlineDynamicImports: true,
      },
    },
  },
})
