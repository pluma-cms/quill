export default [
  {
    path: '/admin/assignments',
    component: () => import('@/App.vue'),
    meta: {
      title: 'Assignments',
      sort: 5,
      authenticatable: true,
      icon: 'mdi-book-multiple-variant',
    },
    children: [
      {
        path: 'show',
        name: 'assignments.show',
        component: () => import('../Show.vue'),
        meta: {
          title: 'Show Assignments',
          authenticatable: true,
          icon: 'mdi-book-plus',
        },
      },
    ],
  }
]
