export default [
  {
    path: '/admin/assignments',
    component: () => import('@/App.vue'),
    meta: {
      title: 'Assignments',
      sort: 1,
      authenticatable: true,
      icon: 'mdi-book-multiple-variant',
    },
    children: [
      {
        path: 'show',
        name: 'assignments.show',
        component: () => import('../Show.vue'),
        meta: {
          title: 'Show Assignment',
          authenticatable: true,
          icon: 'mdi-book-plus',
        },
      },
    ],
  }
]
