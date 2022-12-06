import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import routes from './routes'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: routes as RouteRecordRaw[]
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
