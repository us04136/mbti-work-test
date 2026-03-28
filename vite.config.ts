import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  // Vercel 환경에서는 루트('/')를 사용하고, GitHub Pages 등에서는 서브경로를 사용합니다.
  base: process.env.VERCEL ? '/' : '/mbti-work-test/',
})
