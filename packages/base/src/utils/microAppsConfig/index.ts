import { getLang } from './../../../../whole-network/src/locales/i18n'
import {
  registerMicroApps,
  runAfterFirstMounted,
  addGlobalUncaughtErrorHandler,
  start,
  MicroAppStateActions,
  initGlobalState
} from 'qiankun'
import type { MicroApps } from './microApps'
import { localLanguage } from '@/locales/i18n'

/**
 * @name 声明子应用挂载dom，不需要做keep-alive，只需要一个dom即可；
 */
const appContainer = '#subapp-viewport'

const startQiankun = (microApps: MicroApps[]) => {
  console.log(microApps)
  const apps: any = [] //子应用数组
  // let defaultApp = null;//默认注册应用路由前缀
  const isDev = process.env.NODE_ENV === 'development' // 根据开发环境|线上环境加载不同entry
  microApps.forEach((app: any) => {
    apps.push({
      name: app.module,
      entry: isDev ? app.devEntry : app.depEntry,
      container: app.container ? app.container : appContainer,
      activeRule: app.routerBase,
      props: {
        data: {},
        routerBase: app.routerBase,
        container: app.container ? app.container : appContainer
      }
    })
  })
  console.log(apps)
  /**
   * @name 注册子应用
   * @param {Array} list subApps
   */
  registerMicroApps(apps, {
    //qiankun 生命周期钩子 - 加载前
    beforeLoad: [
      (app) => {
        console.log('[qiankun] before load %c%s', 'color: green;', app.name)
        return Promise.resolve()
      }
    ],
    beforeMount: [
      (app) => {
        console.log('[qiankun] before mount %c%s', 'color: green;', app.name)
        return Promise.resolve()
      }
    ],
    //qiankun加载子应用完后
    afterUnmount: [
      (app) => {
        console.log('[qiankun] after unmount %c%s', 'color: green;', app.name)
        return Promise.resolve()
      }
    ]
  })
  /**
   * 添加全局的未捕获异常处理器
   */
  addGlobalUncaughtErrorHandler((event) => {
    console.log('[qiankun] addGlobalUncaughtErrorHandler', event)
    const { msg }: any = event
    // 加载失败时提示
    if (msg && msg.includes('died in status LOADING_SOURCE_CODE')) {
      console.log('[qiankun] 微应用加载失败，请检查应用是否可运行')
    }
  })
  /**
   * @description 通信实例
   */
  const initialState = { localLanguage: getLang.value }
  const actions: MicroAppStateActions = initGlobalState(initialState)

  /**
   * @description 微前端启动进入第一个子应用后回调函数
   * @param 要执行的函数
   */
  runAfterFirstMounted(() => console.info('first app mounted'))

  /**
   * @description 启动微前端
   * @param prefetch 是否在第一次安装子应用程序后预取子应用程序的资产,默认为 true
   * @param jsSandbox 是否启用沙盒，当沙盒启用时，我们可以保证子应用程序是相互隔离的,默认为 true
   * @param singular 是否在一个运行时只显示一个子应用程序，这意味着子应用程序将等待挂载，直到卸载之前,默认为 true
   * @param fetch 设置一个fetch function,默认为 window.fetch
   */
  start({
    prefetch: true,
    sandbox: {
      experimentalStyleIsolation: true
    }
  })
  actions.onGlobalStateChange((state, prevState) => {
    // state变更后状态。prevState:变更前状态
    console.log('state', state)
    actions.setGlobalState(state)
  })
}

export default startQiankun
