import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// 根據環境變量設置不同的 API URL
const API_URL = process.env.NODE_ENV === 'production'
  ? 'https://jia-project.onrender.com'
  : 'http://localhost:6001';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:6001',
        changeOrigin: true,
        secure: false,
      }
    }
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    chunkSizeWarningLimit: 1200,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          ui: ['@ant-design/icons', 'antd'],
          animation: ['framer-motion'],
        }
      }
    }
  },
  define: {
    'process.env.VITE_API_URL': JSON.stringify(API_URL)
  }
});