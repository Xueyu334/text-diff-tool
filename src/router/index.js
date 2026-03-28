import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    redirect: '/home' // 根路径自动重定向到 /home，符合业务规范
  },
  {
    path: '/home',
    name: 'home',
    component: Home // 真实的首页组件
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
