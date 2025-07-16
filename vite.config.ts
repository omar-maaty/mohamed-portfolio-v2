import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"

export default defineConfig({
  plugins: [react()],
  base: "/mohamed-portfolio-v2/", // مهم جدا جدا!
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src")
    }
  }
})
