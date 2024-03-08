import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // server: {
  //   port: 3000,
  //   proxy: {
  //     "/books": {
  //       target: "http://localhost:4000",
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/books/, "/books"),
  //     },
  //   },
  // },
  // server: {
  //   port: 3000,
  //   proxy: {
  //     "/books/delete": {
  //       target: "http://localhost:4000/books/delete/id",
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/books/, "/books"),
  //     },
  //   },
  // },
})
