import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Inicio - Se buscan'
    }
  },
  {
    path: '/who-we-are',
    name: 'Who we are',
    component: () => import('../views/WhoWeAre.vue')
  },
  {
    path: '/blog',
    name: 'Blog',
    component: () => import('../views/Blog.vue')
  },
  {
    path: '/app',
    name: 'App',
    component: () => import('../views/OurApp.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
