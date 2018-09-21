<template>
  <section>
    <toolbar-menu :items="toolbar"></toolbar-menu>

    <v-container fluid grid-list-lg>
      <v-layout row wrap>
        <v-flex xs12>
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

  name: 'FormIndex',

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
            title: 'Develop Personal Effectiveness at Operations Level',
            slug: 'DPE OPS',
            author: 'Lemony Snicket',
            created: '2 hours ago',
            modified: '2 hours ago',
          },
          {
            id: '2',
            title: 'Solve Problems and Make Decisions at Supervisory Level',
            slug: 'DPE OPS',
            author: 'Lemony Snicket',
            created: '2 hours ago',
            modified: '2 hours ago',
          },
          {
            id: '3',
            title: 'Communicate and Relate Effectively at the Workplace at Operations Level',
            slug: 'DPE OPS',
            author: 'Lemony Snicket',
            created: '2 hours ago',
            modified: '2 hours ago',
          },
          {
            id: '4',
            title: 'Develop Personal Effectiveness at Supervisory Level',
            slug: 'DPE OPS',
            author: 'Lemony Snicket',
            created: '2 hours ago',
            modified: '2 hours ago',
          },
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
