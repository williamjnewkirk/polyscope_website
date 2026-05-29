import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { copyFileSync, mkdirSync } from 'fs'
import { resolve } from 'path'

const SPA_ROUTES = ['privacy', 'terms', 'eula', 'support']

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'spa-route-files',
      closeBundle() {
        SPA_ROUTES.forEach(route => {
          const dir = resolve(__dirname, `dist/${route}`)
          mkdirSync(dir, { recursive: true })
          copyFileSync(resolve(__dirname, 'dist/index.html'), `${dir}/index.html`)
        })
      },
    },
  ],
  base: '/',
})
