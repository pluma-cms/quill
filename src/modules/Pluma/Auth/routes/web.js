export default [
  {
    path: '/authentications',
    name: 'auth',
    redirect: { name: 'login.show' },
    component: () => import('@/components/Layouts/Auth.vue'),
    meta: {
      title: 'Login',
      sort: 0,
      authenticatable: false,
      icon: 'mdi-account-key',
    },
    children: [
      {
        path: '/login',
        name: 'login.show',
        component: () => import('../Signin.vue'),
        meta: {
          title: 'Signin',
          sort: 0,
          authenticatable: false,
          icon: 'mdi-account-key',
        },
      },
    ],
  },
]
