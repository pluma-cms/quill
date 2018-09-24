<template>
  <section>
    <v-container fluid grid-list-lg>
      <v-layout row wrap>
        <v-flex md8 xs12>
          <data-table :items="courses"></data-table>
        </v-flex>
      </v-layout>
    </v-container>
  </section>
</template>

<script>
import store from './store'

export default {
  store,

  name: 'TestShow',

  data () {
    return {
      courses: {
        selected: [],
        bulkDestroy: false,
        selectAll: true,
        search: '',
        cardLink: '/admin/courses/show',
        chip: true,
        hover: true,
        lg3: false,
        showMimetype: false,
        showToolbar: false,
        headers: [
          { text: 'ID', value: 'id' },
          { text: 'Featured', value: 'thumbnail' },
          { text: 'Title', value: 'title' },
          { text: 'Category', value: 'category' },
          { text: 'Timestamp', value: 'timestamp' },
          { text: 'Part', value: 'part' },
          { text: 'Status', value: 'status' },
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
            thumbnail: '//preview.ibb.co/cMCYYz/card_Media.png',
            category: 'DPE OPS',
            timestamp: '2 hours ago',
            description: 'Apply knowledge and skills such as establishing personal goals and relating them to workplace goals. Far far away, behind the word',
            part: '6',
            status: 'enrolled'
          },
          {
            id: '2',
            title: 'Solve Problems and Make Decisions at Supervisory Level',
            thumbnail: '//cdn.dribbble.com/users/904433/screenshots/2994633/animation_fin.gif',
            category: 'DPE OPS',
            timestamp: '2 hours ago',
            description: 'Apply knowledge and skills such as establishing personal goals and relating them to workplace goals. Far far away, behind the word',
            part: '6',
          },
          {
            id: '3',
            title: 'Communicate and Relate Effectively at the Workplace at Operations Level',
            thumbnail: '//i.pinimg.com/564x/74/2b/8e/742b8e6e87ef56e698b9c8bc4e930dae.jpg',
            category: 'DPE OPS',
            timestamp: '2 hours ago',
            description: 'Apply knowledge and skills such as establishing personal goals and relating them to workplace goals. Far far away, behind the word',
            part: '6',
          },
          {
            id: '4',
            title: 'Develop Personal Effectiveness at Supervisory Level',
            thumbnail: '//cdn.dribbble.com/users/2559/screenshots/3145041/illushome_1x.png',
            category: 'DPE OPS',
            timestamp: '2 hours ago',
            description: 'Apply knowledge and skills such as establishing personal goals and relating them to workplace goals. Far far away, behind the word',
            part: '6',
          },
        ]
      },
    }
  },
}
</script>
