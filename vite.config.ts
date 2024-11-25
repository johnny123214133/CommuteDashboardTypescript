import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import pluginChecker from 'vite-plugin-checker'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // pluginChecker({
    //   typescript: true,
    // })
  ],
})
