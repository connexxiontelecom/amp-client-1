import Vue from 'vue'
import VueRouter from 'vue-router'

import admin from './routes/admin'
import product from './routes/product'
import affiliate from './routes/affiliate'
import commission from './routes/commission'
import auth from './routes/auth'

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
    {
      path: '/error-404',
      name: 'error-404',
      component: () => import('@/views/error/Error404.vue'),
      meta: {
        layout: 'full',
        title: 'Error 404 - AMP | Powered by Connexxion Telecom',
      },
    },
    {
      path: '*',
      redirect: 'error-404',
    },
    ...admin,
    ...product,
    ...affiliate,
    ...commission,
    ...auth,
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
