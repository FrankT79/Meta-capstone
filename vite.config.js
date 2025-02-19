import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/Meta-capstone",
  plugins: [react()],
   test: {
    setupFiles: 'src/setupTests.js',
    globals: true,
    environment: "jsdom",
     
  },
})
