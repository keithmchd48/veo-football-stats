import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths';
import tailwindcss from "tailwindcss";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3006,
  },
  plugins: [tsconfigPaths(), react()],
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
});