export default [
  {
    path: '/admin/announcements',
    component: () => import('@/App.vue'),
    meta: {
      title: 'Announcements',
      sort: 6,
      authenticatable: true,
      icon: 'mdi-book-multiple-variant',
    },
    children: [
      {
        path: '',
        name: 'announcements.index',
        component: () => import('../Index.vue'),
        meta: {
          title: 'All Announcements',
          sort: 6,
          authenticatable: true,
          icon: 'mdi-book-multiple-variant',
        },
      },
      {
        path: 'create',
        name: 'announcements.create',
        component: () => import('../Create.vue'),
        meta: {
          title: 'Create Announcement',
          authenticatable: true,
          icon: 'mdi-book-plus',
        },
      },
      {
        path: 'edit',
        name: 'announcements.edit',
        component: () => import('../Edit.vue'),
        meta: {
          title: 'Edit Announcement',
          authenticatable: true,
          icon: 'mdi-book-plus',
        },
      },
      {
        path: 'archived',
        name: 'announcements.archived',
        component: () => import('../Archived.vue'),
        meta: {
          title: 'Archived Announcements',
          authenticatable: true,
          icon: 'mdi-delete-empty',
        },
      },
    ],
  }
]
