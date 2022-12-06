import type { RouteConfigsTable } from '@/types/index'
import { i18n } from '@/locales/i18n'
import { RouterView } from 'vue-router'
// @ts-ignore
const t = (val: string) => i18n.global.t(val)
const dashbordRoutes: RouteConfigsTable = {
  path: '/',
  name: 'dashboard',
  redirect: '/overview',
  component: () => import('@/layout/index.vue'),
  children: [
    {
      path: '/terminalManage',
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

export default dashbordRoutes
