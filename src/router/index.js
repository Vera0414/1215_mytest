import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes:
    [
      {
        path: '/',
        name: 'home',
        component: () => import('@/views/HomePage')
      },
      {
        path: '/about',
        name: 'about',
        component: () => import('@/views/AboutPage.vue')
      },
      {
        path: '/data',
        name: 'data',
        component: () => import('@/views/DataPage.vue')
      },
      {
        path: '/login',
        name: 'login',
        component: () => import('@/views/LoginPage.vue')
      }
    ]
})

export default router;