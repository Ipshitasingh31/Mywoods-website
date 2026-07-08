import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import cmsApi from './server/index.js'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), {
    name: 'cms-api',
    configureServer(server) {
      server.middlewares.use(cmsApi)
    },
  }],
})
