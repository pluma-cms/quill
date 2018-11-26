<template>
  <section>
    <toolbar-archived :items="toolbar"></toolbar-archived>
    <v-container fluid grid-list-lg>
      <v-layout row wrap>
        <v-flex xs12>
          <v-data-table
            v-model="resource.selected"
            :headers="resource.headers"
            :items="resource.items"
            :pagination.sync="resource.pagination"
            select-all
            item-key="title"
            class="elevation-1"
            >
            <template slot="headerCell" slot-scope="props">
              <span>
                {{ trans(props.header.text) }}
              </span>
            </template>
            <template slot="items" slot-scope="props">
              <tr :active="props.selected" @click="props.selected = !props.selected">
                <td>
                  <v-checkbox
                    :input-value="props.selected"
                    primary
                    hide-details
                  ></v-checkbox>
                </td>
                <td v-html="props.item.id"></td>
                <td class="table--ellipsis">
                  <v-tooltip
                    max-width="300px"
                    bottom
                    >
                    <span slot="activator" v-html="trans(props.item.title)"></span>
                    <span v-html="trans(props.item.title)"></span>
                  </v-tooltip>
                </td>
                <td v-html="props.item.author"></td>
                <td v-html="props.item.categoryname"></td>
                <td v-html="props.item.removed"></td>
                <td class="layout mx-0 justify-center">
                  <v-tooltip bottom>
                    <v-btn
                      slot="activator"
                      icon
                      >
                      <v-icon
                        small
                        class="mx-3"
                        >
                        mdi-restore
                      </v-icon>
                    </v-btn>
                    <span>{{ trans('Restore') }}</span>
                  </v-tooltip>
                  <v-form
                    method="POST"
                    action="/api/v1/announcements/{id}/delete"
                    @submit.prevent="deleteDestroy"
                    >
                    <v-tooltip bottom>
                      <v-btn
                        slot="activator"
                        icon
                        type="submit"
                        >
                        <v-icon
                          small
                          class="mx-3"
                          >
                          mdi-delete-forever
                        </v-icon>
                      </v-btn>
                      <span>{{ trans('Permanently Delete') }}</span>
                    </v-tooltip>
                  </v-form>
                </td>
              </tr>
            </template>
          </v-data-table>
        </v-flex>
      </v-layout>
    </v-container>
  </section>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Archived',

  mounted () {
    /*eslint-disable*/
    axios.get('/api/v1/announcements/archived').then(response => {
      this.resource.items = response.data.data
    })
  },

  data () {
    return {
      toolbar: {
        title: 'Trashed Announcements',
        homeBtn: {
          name: 'announcements.index',
        }
      },
      resource: {
        items: [],
        data: null,
        pagination: {
          sortBy: 'title'
        },
        selected: [],
        headers: [
          { text: 'ID', align: 'left', value: 'id' },
          { text: 'Title', align: 'left', value: 'title' },
          { text: 'Author', align: 'left', value: 'author' },
          { text: 'Category', align: 'left', value: 'categoryname' },
          { text: 'Removed', align: 'left', value: 'deleted_at' },
          { text: 'Actions', align: 'center', sortable: false },
        ],
      },
    }
  },

  methods: {
    toggleAll () {
      if (this.resource.selected.length) this.resource.selected = []
      else this.resource.selected = this.items.slice()
    },

    changeSort (column) {
      if (this.resource.pagination.sortBy === column) {
        this.resource.pagination.descending = !this.resource.pagination.descending
      } else {
        this.resource.pagination.sortBy = column
        this.resource.pagination.descending = false
      }
    },

    deleteDestroy () {
      console.log(this.resource.items, 'data.resource')
      axios.delete('/api/v1/announcements/{announcement}/delete', this.resource)
    }
  }
}
</script>
