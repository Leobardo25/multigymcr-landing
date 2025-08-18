import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // ✅ AÑADE ESTA SECCIÓN PARA ARREGLAR LA RECARGA AUTOMÁTICA
  server: {
    watch: {
      usePolling: true,
    },
  },
})