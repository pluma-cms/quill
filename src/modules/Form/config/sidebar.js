export default [
  {
    code: 'forms',
    name: 'forms',
    meta: {
      title: 'Form',
      icon: 'mdi-book-multiple-variant',
      authenticatable: true,
      sort: 5,
    },
    children: [
      // Admin Form
      {
        code: 'forms.index',
        name: 'forms.index',
        meta: {
          title: 'All Forms',
          icon: 'mdi-book-multiple-variant',
          authenticatable: true,
          sort: 5,
        },
      },
      // Create
      {
        code: 'forms.create',
        name: 'forms.create',
        meta: {
          title: 'Create Form',
          icon: 'mdi-book-plus',
          authenticatable: true,
          sort: 6,
        },
      },

      // Divider
      {
        code: 'divider:forms/create.trashed',
        name: 'divider:forms/create.trashed',
        meta: {
          divider: true,
          sort: 7,
        },
      },

      // Archived
      {
        code: 'forms.archived',
        name: 'forms.archived',
        meta: {
          title: 'Archived Form',
          icon: 'mdi-delete-empty',
          authenticatable: true,
          sort: 8,
        },
      },
    ],
  }
]
