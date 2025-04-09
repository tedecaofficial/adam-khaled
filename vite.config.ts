import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    port: 8000,
    host: '0.0.0.0',
  },
  preview: {
    port: 8000,
    host: '0.0.0.0',
  },
});
