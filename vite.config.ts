import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  base: './',
  server: {
    port: 4000, // 设置开始后启动的端口号
    open: true, // 设置是否自动打开浏览器
    cors: true, // 允许跨域
    proxy: {
      '/api': {
        target: 'https://preproduction.com',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace('/api/', '/')
      }
    }
  }
})
