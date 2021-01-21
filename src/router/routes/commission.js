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
  {
    path: '/commission/plan-commissions',
    name: 'plan-commissions',
    component: () => import('@/views/commission/PlanCommissions'),
    meta: {
      authRequired: true,
      title: 'Plan Commissions - AMP | Powered by Connexxion Telecom',
      pageTitle: 'Plan Commissions',
      breadcrumb: [
        {
          text: 'Commission',
          to: '/commission',
        },
        {
          text: 'Plan Commissions',
          active: true,
        },
      ],
      navActiveLink: 'commission',
    },
  },
]
