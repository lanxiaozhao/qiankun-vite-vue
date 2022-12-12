import { createApp } from 'vue'
import router from './router'
import { i18n } from '@/locales/i18n'
import { renderWithQiankun, qiankunWindow, QiankunProps } from 'vite-plugin-qiankun/dist/helper'
import App from './App.vue'
import './assets/iconfonts/iconfont.css'
import './styles/global.scss'
import './styles/reset.scss'
import 'element-plus/es/components/message-box/style/css'
import 'element-plus/es/components/message/style/css'
let instance = null
type AppProps = Partial<QiankunProps>
function render(props: AppProps) {
  const { container } = props
  console.log(container)
  if (container) {
    // 注册主，微应用全局通信
    props.onGlobalStateChange((state, prevState) => {
      console.log(state, prevState)
    })
  }
  instance = createApp(App)
  console.log(router)
  instance.use(i18n).use(router)
  instance.mount(container ? container.querySelector('#app') : '#app')
  if (qiankunWindow.__POWERED_BY_QIANKUN__) {
    console.log('我正在作为子应用运行')
  }
}
renderWithQiankun({
  /**
   * 应用每次进入都会调用 mount 方法，在这里触发应用的渲染方法
   * @param props
   */
  mount(props: QiankunProps) {
    render(props)
  },
  /**
   * bootstrap 只会在微应用初始化的时候调用一次，下次微应用重新进入时会直接调用 mount 钩子
   */
  bootstrap() {
    // 可以在这里做一些全局变量的初始化，比如不会在 unmount 阶段被销毁的应用级别的缓存等。
    console.log('%c ', 'color: green;', 'sub-vite2-vue3 app bootstraped')
  },
  update() {},
  unmount(props: any) {
    instance.unmount()
    instance._container.innerHTML = ''
    instance = null
  }
})
if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render({})
}
