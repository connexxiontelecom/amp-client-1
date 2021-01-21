export default [
  {
    path: '/commission',
    name: 'commission',
    component: () => import('@/views/commission/Commission'),
    meta: {
      authRequired: true,
      title: 'Commission - AMP | Powered by Connexxion Telecom',
      pageTitle: 'Commission',
      breadcrumb: [
        {
          text: 'Commission',
          active: true,
        },
      ],
    },
  },
]
