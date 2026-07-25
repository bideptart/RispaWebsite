import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // base: '/RispaWebsite/', // uncomment this if deploying to GitHub Pages at /RispaWebsite/
  server: {
    historyApiFallback: true,
  },
})
