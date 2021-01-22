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
  {
    path: '/affiliate-accounts/add-affiliate',
    name: 'add-affiliate',
    component: () => import('@/views/affiliate/AddAffiliate'),
    meta: {
      authRequired: true,
      title: 'Add Affiliate - AMP | Powered by Connexxion Telecom',
      pageTitle: 'Add Affiliate',
      breadcrumb: [
        {
          text: 'Affiliate Accounts',
          to: '/affiliate-accounts',
        },
        {
          text: 'Add Affiliate',
          active: true,
        },
      ],
      navActiveLink: 'affiliate-accounts',
    },
  },
  {
    path: '/affiliate-accounts/view-affiliate',
    name: 'view-affiliate',
    component: () => import('@/views/affiliate/view-affiliate/ViewAffiliate'),
    meta: {
      authRequired: true,
      title: 'View Affiliate - AMP | Powered by Connexxion Telecom',
      pageTitle: 'View Affiliate',
      breadcrumb: [
        {
          text: 'Affiliate Accounts',
          to: '/affiliate-accounts',
        },
        {
          text: 'View Affiliate',
          active: true,
        },
      ],
      navActiveLink: 'affiliate-accounts',
    },
  },
  {
    path: '/account',
    name: 'account',
    component: () => import('@/views/affiliate/account/Account'),
    meta: {
      authRequired: true,
      title: 'Account - AMP | Powered by Connexxion Telecom',
      pageTitle: 'Account',
      breadcrumb: [
        {
          text: 'Account',
          active: true,
        },
      ],
    },
  },
  {
    path: '/affiliates',
    name: 'affiliates',
    component: () => import('@/views/affiliate/affiliates/Affiliates'),
    meta: {
      authRequired: true,
      title: 'Affiliates - AMP | Powered by Connexxion Telecom',
      pageTitle: 'Affiliates',
      breadcrumb: [
        {
          text: 'Affiliates',
          active: true,
        },
      ],
    },
  },
  {
    path: '/affiliates/add-affiliate',
    name: 'add-downstream-affiliate',
    component: () => import('@/views/affiliate/affiliates/AddAffiliate'),
    meta: {
      authRequired: true,
      title: 'Add Affiliate - AMP | Powered by Connexxion Telecom',
      pageTitle: 'Add Affiliate',
      breadcrumb: [
        {
          text: 'Affiliates',
          to: '/affiliates',
        },
        {
          text: 'Add Affiliate',
          active: true,
        },
      ],
      navActiveLink: 'affiliates',
    },
  },
]
