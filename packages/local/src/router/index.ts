import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import { i18n } from '@/locales/i18n'
import { qiankunWindow } from 'vite-plugin-qiankun/dist/helper'
import packageConfig from '../../package.json'
// @ts-ignore
const t = (val: string) => i18n.global.t(val)
const prefix = qiankunWindow.__POWERED_BY_QIANKUN__ ? `/${packageConfig.name}/` : '/'
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: `${prefix}`,
      redirect: `${prefix}terminalManage`,
      component: () => import('@/layout/index.vue'),
      children: [
        {
          path: `${prefix}terminalManage`,
          name: 'terminalManage',
          meta: {
            title: t('menu.terminal'),
            showLink: true,
            icon: 'icon-overview'
          },
          component: () => import('@/views/terminalManage/index.vue')
        }
      ]
    }
  ] as RouteRecordRaw[]
})

router.beforeEach((to, _from, next) => {
  const isLogin = localStorage.getItem('cookie')
  if (isLogin) {
    next()
  } else {
    // if (to.path !== '/login') {
    //   next({ path: '/login' })
    // } else {
    //   next()
    // }
    next()
  }
})

export default router
