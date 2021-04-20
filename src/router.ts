import {
  createRouter,
  createWebHistory,
  Router,
  RouterOptions,
} from 'vue-router'

// Добавляем роуты
const routes = [
  {
    path: '/',
    component: () => import('./pages/Home.vue'),
  },
  {
    path: '/about',
    component: () => import('./pages/About.vue'),
  },
]

// Создаем объект конфигурации роутера
const options: RouterOptions  = {
  routes,
  history: createWebHistory(),
}

// Создаем экземпляр роутера
const router: Router = createRouter(options)

export default router
