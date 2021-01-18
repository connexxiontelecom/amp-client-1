import Vue from 'vue'
import VueRouter from 'vue-router'

import admin from './routes/admin'
import product from './routes/product'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/home/Home.vue'),
      meta: {
        authRequired: true,
        title: 'Home - AMP | Powered by Connexxion Telecom',
        pageTitle: 'Home',
        breadcrumb: [
          {
            text: 'Home',
            active: true,
          },
        ],
      },
    },
    ...admin,
    ...product,
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Login.vue'),
      meta: {
        title: 'Login - AMP | Powered by Connexxion Telecom',
        layout: 'full',
      },
    },
    {
      path: '/error-404',
      name: 'error-404',
      component: () => import('@/views/error/Error404.vue'),
      meta: {
        layout: 'full',
      },
    },
    {
      path: '*',
      redirect: 'error-404',
    },
  ],
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  const token = localStorage.getItem('t')
  if (to.meta.authRequired && !token) {
    router.push('login')
  }
  return next()
})

export default router
