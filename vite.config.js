import { defineConfig } from 'vite'
import plugin_checker from "vite-plugin-checker"
import plugin_style_svg from "vite-plugin-style-svg"
import plugin_dts from "vite-plugin-dts"
import plugin_inspect from "vite-plugin-inspect"

import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    plugin_checker(), 
    plugin_style_svg(),
    plugin_dts(),
    plugin_inspect()
  ],
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
  resolve: {
    alias: {
      '@components': '/src/components',  // Alias for components
      '@utils': '/src/utils',            // Alias for utility functions
    }
  },
  define: {
    'process.env.API_URL': JSON.stringify(process.env.API_URL || 'http://localhost:5000'),
  }
})