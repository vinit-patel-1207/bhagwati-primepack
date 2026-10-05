import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'node:path'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  envPrefix: ['VITE_', 'WEB3FORMS_'], // Only expose env vars prefixed with VITE_ or WEB3FORMS_KEY to the client.
  resolve: {
    alias: { '@': path.resolve(import.meta.dirname, 'src') },
  },
})
