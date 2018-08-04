export default [
  {
    path: '/courses',
    name: 'courses.all',
    component: () => import('@/components/Layouts/Public.vue'),
    meta: {
      title: 'All Courses',
      sort: 5,
    },
    children: [
      {
        path: '/courses',
        name: 'courses.all',
        component: () => import('../All.vue'),
        meta: {
          title: 'All Courses',
          sort: 5,
          external: true,
          excludeFromRoot: true,
          authenticatable: false,
          icon: 'mdi-book-multiple-variant',
        },
      }
    ]
  }
]
