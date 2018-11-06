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
        props: true,
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
        path: '/announcements/:code',
        props: true,
        name: 'announcements.show',
        component: () => import('../Show.vue'),
        meta: {
          title: 'Show Announcement',
          authenticatable: true,
          icon: 'mdi-book-plus',
        },
      },
      {
        path: 'create',
        props: true,
        name: 'announcements.create',
        component: () => import('../Create.vue'),
        meta: {
          title: 'Create Announcement',
          authenticatable: true,
          icon: 'mdi-book-plus',
        },
      },
      {
        path: ':code/edit',
        props: true,
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
        props: true,
        name: 'announcements.archived',
        component: () => import('../Archived.vue'),
        meta: {
          title: 'Archived Announcement',
          authenticatable: true,
          icon: 'mdi-delete-outline'

        }
      }
    ],
  }
]
