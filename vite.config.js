import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/kinex/',
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
});
