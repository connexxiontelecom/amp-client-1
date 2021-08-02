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
  {
    path: '/privacy-policy',
    name: 'privacy',
    component: () => import('@/views/auth/PrivacyPolicy'),
    meta: {
      title: 'Privacy Policy - AMP | Powered by Connexxion Telecom',
      layout: 'full',
    },
  },
  {
    path: '/verify-*',
    name: 'verify',
    component: () => import('@/views/auth/Verify'),
    meta: {
      title: 'Verify - AMP | Powered by Connexxion Telecom',
      layout: 'full',
    },
  },
  {
    path: '/forgot-password',
    name: 'forgot-password',
    component: () => import('@/views/auth/ForgotPassword'),
    meta: {
      title: 'Forgot Password - AMP | Powered by Connexxion Telecom',
      layout: 'full',
    },
  },
  {
    path: '/reset-password-*',
    name: 'reset-password',
    component: () => import('@/views/auth/ResetPassword'),
    meta: {
      title: 'Reset Password - AMP | Powered by Connexxion Telecom',
      layout: 'full',
    },
  },
]
