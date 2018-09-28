export default [
  {
    path: '/admin/forms',
    component: () => import('@/App.vue'),
    meta: {
      title: 'Forms',
      sort: 6,
      authenticatable: true,
      icon: 'mdi-book-multiple-variant',
    },
    children: [
      {
        path: '',
        name: 'forms.index',
        component: () => import('../Index.vue'),
        meta: {
          title: 'All Forms',
          sort: 6,
          authenticatable: true,
          icon: 'mdi-book-multiple-variant',
        },
      },
      {
        path: 'create',
        name: 'forms.create',
        component: () => import('../Create.vue'),
        meta: {
          title: 'Create Form',
          authenticatable: true,
          icon: 'mdi-book-plus',
        },
      },
      {
        path: 'edit',
        name: 'forms.edit',
        component: () => import('../Edit.vue'),
        meta: {
          title: 'Edit Form',
          authenticatable: true,
          icon: 'mdi-book-plus',
        },
      },
      {
        path: 'archived',
        name: 'forms.archived',
        component: () => import('../Archived.vue'),
        meta: {
          title: 'Archived Forms',
          authenticatable: true,
          icon: 'mdi-delete-empty',
        },
      },
    ],
  }
]
