import { user, logout } from '@/utils/user'

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
          icon: 'mdi-account-key',
        },
        beforeEnter: (to, from, next) => {
          if (user()) {
            next({name: 'admin'})
          } else {
            next()
          }
        },
      },
      {
        path: '/logout',
        name: 'login.logout',
        meta: {
          title: 'Signout',
          sort: 0,
          icon: 'mdi-account-key',
        },
        beforeEnter: (to, from, next) => {
          logout()
          console.log('asdsd')
          next({name: 'login.show'})
        },
      },
    ],
  },
]
