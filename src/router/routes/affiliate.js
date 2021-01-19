export default [
  {
    path: '/affiliate-accounts',
    name: 'affiliate-accounts',
    component: () => import('@/views/affiliate/AffiliateAccounts'),
    meta: {
      authRequired: true,
      title: 'Affiliate Accounts - AMP | Powered by Connexxion Telecom',
      pageTitle: 'Affiliate Accounts',
      breadcrumb: [
        {
          text: 'Affiliate Accounts',
          active: true,
        },
      ],
    },
  },
]
