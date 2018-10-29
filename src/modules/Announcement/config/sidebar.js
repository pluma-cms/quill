export default [
  {
    code: 'announcements',
    name: 'announcements',
    meta: {
      title: 'Announcement',
      icon: 'mdi-book-multiple-variant',
      authenticatable: true,
      sort: 5,
    },
    children: [
      // Admin Announcement
      {
        code: 'announcements.index',
        name: 'announcements.index',
        meta: {
          title: 'All Announcements',
          icon: 'mdi-book-multiple-variant',
          authenticatable: true,
          sort: 5,
        },
      },
      // Create
      {
        code: 'announcements.create',
        name: 'announcements.create',
        meta: {
          title: 'Create Announcement',
          icon: 'mdi-book-plus',
          authenticatable: true,
          sort: 6,
        },
      },

      // Divider
      {
        code: 'divider:announcements/create.trashed',
        name: 'divider:announcements/create.trashed',
        meta: {
          divider: true,
          sort: 7,
        },
      },

      // Archived
      {
        code: 'announcements.archived',
        name: 'announcements.archived',
        meta: {
          title: 'Archived Announcement',
          icon: 'mdi-delete-empty',
          authenticatable: true,
          sort: 8,
        },
      },
    ],
  }
]
