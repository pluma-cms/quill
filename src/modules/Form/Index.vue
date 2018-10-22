<template>
  <section>
    <v-container fluid grid-list-lg>
      <v-layout row wrap>
        <v-flex xs12>
          <toolbar-menu class="mb-3" :items="toolbar"></toolbar-menu>
          <data-table :items="dataset"></data-table>
        </v-flex>
      </v-layout>
    </v-container>
  </section>
</template>

<script>
import store from '@/store'
import { mapGetters } from 'vuex'

export default {
  store,

  name: 'Index',

  data () {
    return {
      toolbar: {
        title: 'All Forms',
        sort: false,
        filter: false,
        gridview: false,
        listview: false,
      },

      dataset: {
        category: false,
        singleCheckbox: false,
        part: false,
        status: false,
        selected: [],
        bulkDestroy: false,
        selectAll: true,
        search: '',
        avatar: false,
        cardLink: '/admin',
        chip: true,
        hover: true,
        lg3: false,
        titleLink: '/admin/forms/preview',
        showMimetype: false,
        showToolbar: false,
        headers: [
          { text: 'ID', value: 'id' },
          { text: 'Title', value: 'title' },
          { text: 'Code', value: 'code' },
          { text: 'Author', value: 'author' },
          { text: 'Created', value: 'created' },
          { text: 'Modified', value: 'modified' },
          {
            text: 'Actions',
            value: 'actions',
            sortable: false,
            align: 'center'
          },
        ],
        items: [
          {
            id: '1',
            title: 'Post-workshop Evaluation Form',
            slug: 'Post-workshop-evaluation-form',
            author: 'Lemony Snicket',
            created: '2 hours ago',
            modified: '2 hours ago',
          },
          {
            id: '2',
            title: 'PDPC E-learning Programme Assessment',
            slug: 'pdpc-e-elarning-programme-assessment',
            author: 'Lemony Snicket',
            created: '2 hours ago',
            modified: '2 hours ago',
          }
        ]
      }
    }
  },

  computed: {
    ...mapGetters({
      toggletoolbar: 'toolbar/toolbar'
    })
  }
}
</script>
