import type { RouteConfigsTable } from '@/types/index'
import dashboardRoutes from './dashboardRoutes'
const routes: Array<RouteConfigsTable> = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue')
  },
  dashboardRoutes
]
export default routes
