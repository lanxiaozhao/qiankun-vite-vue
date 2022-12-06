import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
import { defineConfig, loadEnv } from 'vite'
import basicSsl from '@vitejs/plugin-basic-ssl'
// const https = require('node:https')
// const fs = require('node:fs')

// const options = {
//   pfx: fs.readFileSync('test/fixtures/test_cert.pfx'),
//   passphrase: 'sample'
// }

// https.createServer(options, (req, res) => {
//   res.writeHead(200)
//   res.end('hello world\n')
// })

export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }
  return defineConfig({
    base: process.env.VITE_PUBLIC_PATH,
    server: {
      host: '0.0.0.0'
      // https: true,
      // todo 各个分应用中配置
      // proxy: {
      //   '/cgi-bin/luci': {
      //     target: 'https://172.16.3.197',
      //     changeOrigin: true,
      //     secure: false,
      //     headers: {
      //       referer: 'https://172.16.3.197'
      //     }
      //   }
      // }
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/styles/element.scss" as *;`
        }
      }
    },
    plugins: [
      vue(),
      vueJsx(),
      AutoImport({
        imports: ['vue', 'vue-router', 'pinia', '@vueuse/core'],
        resolvers: [ElementPlusResolver()]
      }),
      Components({
        resolvers: [
          ElementPlusResolver({
            importStyle: 'sass'
            // directives: true,
            // version: "2.1.5",
          })
        ],
        dts: true,
        include: [/\.vue$/, /\.vue\?vue/, /\.md$/]
      }),
      basicSsl()
    ]
  })
}
