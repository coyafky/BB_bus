import { fileURLToPath, URL } from 'node:url'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { VantResolver, VantImports } from '@vant/auto-import-resolver';
import Icons from 'unplugin-icons/vite'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver(),VantResolver()],
      imports: [VantImports()],
      
    }),
    Components({
      resolvers: [ElementPlusResolver(),VantResolver()],
      
    }),
    Icons({autoInstall: true, }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  devServer: {
    before: require('./mock/cities.js') // 引入mock数据文件
  }
})
