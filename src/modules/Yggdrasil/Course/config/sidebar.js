export default [
  {
    code: 'courses',
    name: 'courses',
    meta: {
      title: 'Courses',
      icon: 'mdi-book-multiple-variant',
      authenticatable: true,
      sort: 5,
    },
    children: [
      // Admin Courses
      {
        code: 'courses.index',
        name: 'courses.index',
        meta: {
          title: 'All Courses',
          icon: 'mdi-book-multiple-variant',
          authenticatable: true,
          sort: 5,
        },
      },
      // Public Courses
      {
        code: 'courses.all',
        name: 'courses.all',
        meta: {
          title: 'All Courses',
          icon: 'mdi-book-multiple-variant',
          external: false, // external === target=_blank attribute
          authenticatable: false,
          hideFromAdmins: true,
          sort: 5,
        },
      },

      // Create
      {
        code: 'courses.create',
        name: 'courses.create',
        meta: {
          title: 'Create Course',
          icon: 'mdi-book-plus',
          authenticatable: true,
          sort: 6,
        },
      },

      // Divider
      {
        code: 'divider:courses/create.trashed',
        name: 'divider:courses/create.trashed',
        meta: {
          divider: true,
        }
      },

      // Archived
      {
        code: 'courses.archived',
        name: 'courses.archived',
        meta: {
          title: 'Archived Courses',
          icon: 'mdi-delete-empty',
          authenticatable: true,
          sort: 8,
        },
      },
    ],
  }
]
