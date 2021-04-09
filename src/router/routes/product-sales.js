export default [
  {
    path: '/product-sales',
    name: 'product-sales',
    component: () => import('@/views/product-sales/ProductSales'),
    meta: {
      authRequired: true,
      title: 'Product Sales - AMP | Powered by Connexxion Telecom',
      pageTitle: 'Product Sales',
      breadcrumb: [
        {
          text: 'Product Sales',
          active: true,
        },
      ],
    },
  },
]
