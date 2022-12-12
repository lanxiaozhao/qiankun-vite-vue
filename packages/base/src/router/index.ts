import { apps } from './../utils/microAppsConfig/microApps'
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const Components: IObject<() => Promise<typeof import('*.vue')>> = Object.assign(
  {},
  {
    Layout: (() => import('@/layout/index.vue')) as unknown as () => Promise<typeof import('*.vue')>
  }
)

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/local'
    },
    {
      path: '/local',
      component: Components.Layout
    },
    {
      path: '/local/:morePath',
      component: Components.Layout
    },
    {
      path: '/whole',
      component: Components.Layout
    },
    {
      path: '/whole/:morePath',
      component: Components.Layout
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login/index.vue')
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
