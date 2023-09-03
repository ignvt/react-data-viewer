import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    manifest: true,
    minify: true,
    reportCompressedSize: true,
    cssCodeSplit: true,
    lib: {
      entry: path.resolve(__dirname, 'src/index.jsx'),
      formats: ["es", "cjs"],
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React'
        }
      }
    }
  }
})
