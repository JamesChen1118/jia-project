import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path";

// 讀取實際使用的後端端口
const BACKEND_PORT = process.env.PORT || 1999;

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    proxy: {
      "/products": {
        target: `http://localhost:${BACKEND_PORT}`,
        changeOrigin: true
      },
      "/categories": {
        target: `http://localhost:${BACKEND_PORT}`,
        changeOrigin: true
      },
      "/news": {
        target: `http://localhost:${BACKEND_PORT}`,
        changeOrigin: true
      }
    }
  }
})
