export default [
  {
    path: '/admin/tests',
    component: () => import('@/App.vue'),
    meta: {
      title: 'Tests',
      sort: 5,
      authenticatable: true,
      icon: 'mdi-book-multiple-variant',
    },
    children: [
      {
        path: '',
        name: 'tests.index',
        component: () => import('../Index.vue'),
        meta: {
          title: 'All Tests',
          authenticatable: true,
          icon: 'mdi-book-multiple-variant',
        },
      },
      {
        path: 'create',
        name: 'tests.create',
        component: () => import('../Create.vue'),
        meta: {
          title: 'Create Test',
          authenticatable: true,
          icon: 'mdi-book-plus',
        },
      },
      {
        path: 'show',
        name: 'tests.show',
        component: () => import('../Show.vue'),
        meta: {
          title: 'Show Test',
          authenticatable: true,
          icon: 'mdi-book-plus',
        },
      },
      {
        path: 'archived',
        name: 'tests.archived',
        component: () => import('../Archived.vue'),
        meta: {
          title: 'Archived Tests',
          authenticatable: true,
          icon: 'mdi-delete-empty',
        },
      },
    ],
  }
]