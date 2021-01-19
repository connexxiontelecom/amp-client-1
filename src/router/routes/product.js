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
  {
    path: '/products/add-product',
    name: 'add-product',
    component: () => import('@/views/product/AddProduct'),
    meta: {
      authRequired: true,
      title: 'Add Product - AMP | Powered by Connexxion Telecom',
      pageTitle: 'Add Product',
      breadcrumb: [
        {
          text: 'Products',
          to: '/products',
        },
        {
          text: 'Add Product',
          active: true,
        },
      ],
      navActiveLink: 'products',
    },
  },
  {
    path: '/products/view-product',
    name: 'view-product',
    component: () => import('@/views/product/view-product/ViewProduct'),
    meta: {
      authRequired: true,
      title: 'View Product - AMP | Powered by Connexxion Telecom',
      pageTitle: 'View Product',
      breadcrumb: [
        {
          text: 'Products',
          to: '/products',
        },
        {
          text: 'View Product',
          active: true,
        },
      ],
      navActiveLink: 'products',
    },
  },
]
