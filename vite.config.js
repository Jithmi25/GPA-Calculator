import { resolve } from 'path'

export default {
  root: '.',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        login: resolve(__dirname, 'login.html'),
        dashboard: resolve(__dirname, 'dashboard.html')
      }
    }
  },
  server: {
    middlewareMode: false,
    open: '/index.html'
  }
}
