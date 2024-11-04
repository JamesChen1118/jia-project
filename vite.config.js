import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    proxy: {
      "/news": {
        target: "http://localhost:1999",
        changeOrigin: true
      },
      "/products": {
        target: "http://localhost:1999",
        changeOrigin: true
      },
      "/categories": {
        target: "http://localhost:1999",
        changeOrigin: true
      }
    }
  }
})
