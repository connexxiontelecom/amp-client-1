export default [
  {
    path: '/products',
    name: 'products',
    component: () => import('@/views/product/Products'),
    meta: {
      authRequired: true,
      title: 'Products - AMP | Powered by Connexxion Telecom',
      pageTitle: 'Products',
      breadcrumb: [
        {
          text: 'Products',
          active: true,
        },
      ],
    },
  },
]
