import { defineConfig, loadConfigFromFile, mergeConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'
import packageConfig from './package.json'
import qiankun from 'vite-plugin-qiankun'
import { resolve } from 'path'

const pathResolve = (dir: string): string => {
  return resolve(__dirname, '.', dir)
}

const useDevMode = true // 如果是在主应用中加载子应用 vite, 必须打开这个, 否则vite加载不成功, 单独运行没影响
// https://vitejs.dev/config/
export default defineConfig(async ({ command, mode }) => {
  const base = (await loadConfigFromFile({ command, mode }, pathResolve('../../vite.config.ts')))!
    .config

  const config = {
    server: { port: 5175 },
    plugins: [qiankun(`${packageConfig.name}`, { useDevMode })],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        'vue-i18n': 'vue-i18n/dist/vue-i18n.cjs.js'
      }
    }
  }
  return mergeConfig(base, config)
})
