export default [
  {
    path: '/admin-accounts',
    name: 'admin-accounts',
    component: () => import('@/views/admin/AdminAccounts'),
    meta: {
      authRequired: true,
      title: 'Admin Accounts - AMP | Powered by Connexxion Telecom',
      pageTitle: 'Admin Accounts',
      breadcrumb: [
        {
          text: 'Admin Accounts',
          active: true,
        },
      ],
    },
  },
  {
    path: '/admin-accounts/add-admin',
    name: 'add-admin',
    component: () => import('@/views/admin/AddAdmin'),
    meta: {
      authRequired: true,
      title: 'Add Admin - AMP | Powered by Connexxion Telecom',
      pageTitle: 'Add Admin',
      breadcrumb: [
        {
          text: 'Admin Accounts',
          to: '/admin-accounts',
        },
        {
          text: 'Add Admin',
          active: true,
        },
      ],
      navActiveLink: 'admin-accounts',
    },
  },
  {
    path: '/admin-accounts/view-admin',
    name: 'view-admin',
    component: () => import('@/views/admin/view-admin/ViewAdmin'),
    meta: {
      authRequired: true,
      title: 'View Admin - AMP | Powered by Connexxion Telecom',
      pageTitle: 'View Admin',
      breadcrumb: [
        {
          text: 'Admin Accounts',
          to: '/admin-accounts',
        },
        {
          text: 'View Admin',
          active: true,
        },
      ],
      navActiveLink: 'admin-accounts',
    },
  },
]
