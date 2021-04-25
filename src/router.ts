import {
  createRouter,
  createWebHistory,
  Router, RouteRecordRaw,
  RouterOptions,
} from 'vue-router'

// Добавляем роуты
export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('./pages/Home.vue'),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('./pages/About.vue'),
  },
  {
    path: '/chess',
    name: 'Chess',
    component: () => import('./pages/Chess.vue'),
  },
]

// Создаем объект конфигурации роутера
const options: RouterOptions  = {
  routes,
  history: createWebHistory('/'),
}

// Создаем экземпляр роутера
const router: Router = createRouter(options)

export default router
