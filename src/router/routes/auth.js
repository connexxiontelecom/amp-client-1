export default [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/auth/Login.vue'),
    meta: {
      title: 'Login - AMP | Powered by Connexxion Telecom',
      layout: 'full',
    },
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/auth/Register'),
    meta: {
      title: 'Register - AMP | Powered by Connexxion Telecom',
      layout: 'full',
    },
  },
]
