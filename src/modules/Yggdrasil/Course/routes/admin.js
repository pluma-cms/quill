export default [
  {
    path: '/admin/courses',
    component: () => import('@/App.vue'),
    meta: {
      title: 'Courses',
      sort: 6,
      authenticatable: true,
      icon: 'mdi-book-multiple-variant',
    },
    children: [
      {
        path: '',
        name: 'courses.index',
        component: () => import('../Index.vue'),
        meta: {
          title: 'Manage Courses',
          sort: 6,
          authenticatable: true,
          icon: 'mdi-book-multiple-variant',
        },
      },
      {
        path: '/my/courses',
        name: 'courses.my',
        component: () => import('../My.vue'),
        meta: {
          title: 'My Courses',
          authenticatable: true,
          icon: 'mdi-bookmark-check',
        },
      },
      {
        path: 'create',
        name: 'courses.create',
        component: () => import('../Create.vue'),
        meta: {
          title: 'Create Course',
          authenticatable: true,
          icon: 'mdi-book-plus',
        },
      },
      {
        path: 'show',
        name: 'courses.show',
        component: () => import('../Show.vue'),
        meta: {
          title: 'Show Course',
          authenticatable: true,
          icon: 'mdi-book-plus',
        },
      },
      {
        path: 'archived',
        name: 'courses.archived',
        component: () => import('../Archived.vue'),
        meta: {
          title: 'Archived Courses',
          authenticatable: true,
          icon: 'mdi-delete-empty',
        },
      },
    ],
  }
]
