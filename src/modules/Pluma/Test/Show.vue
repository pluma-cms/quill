<template>
  <section>
    <!-- <v-container fluid grid-list-lg>
      <v-layout row wrap justify-center align-center> -->
        <!-- <v-flex md4 xs12>
          <v-textarea
            v-model="task"
            label="Leave a comment"
            solo
            :href="create"
            >
          </v-textarea>

          <v-btn text-xs-right @click.native.stop="create">
            {{ trans('Submit') }}
          </v-btn>

          <v-card flat class="grey lighten-4">
            <v-card-text>
              <h4 class="grey--text">
                Comments:&nbsp;
                <v-fade-transition leave-absolute>
                  <span :key="`tasks-${tasks.length}`">
                    {{ tasks.length }}
                  </span>
                </v-fade-transition>
              </h4>
            </v-card-text>
          </v-card>
          <v-card
            v-if="tasks.length > 0"
            >
            <v-slide-y-transition
              class="py-0"
              group
              >
              <template v-for="(task, i) in tasks">
                <v-divider
                  v-if="i !== 0"
                  :key="`${i}-divider`"
                  class="grey lighten-4"
                ></v-divider>

                <v-card-text :key="`${i}-${task.text}`">
                  <v-layout>
                    <v-avatar size="40" class="mr-3">
                      <img src="https://images.unsplash.com/photo-1537730170185-27027b73b19c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7060dc523caa30db26a0fa1407328392&auto=format&fit=crop&w=400&q=60">
                    </v-avatar>
                    <v-card flat>
                      <p class="mb-3">
                        <strong class="mr-2">Princess Ellen Alto</strong>
                        <span class="caption grey--text">Today at 5:42PM</span>
                      </p>
                      <p v-html="task.comment"></p>
                    </v-card>
                  </v-layout>
                </v-card-text>
              </template>
            </v-slide-y-transition>
          </v-card>
        </v-flex> -->

        <!-- <v-flex md8 xs12> -->
          <!-- <v-card> -->
            <!-- <v-card-text> -->
              <!-- <display-assignment></display-assignment> -->
            <!-- </v-card-text> -->
          <!-- </v-card> -->
        <!-- </v-flex> -->
      <!-- </v-layout> -->
    <!-- </v-container> -->

    <v-container fluid grid-list-lg>
      <v-layout row wrap justify-center align-center>
        <v-flex md10 xs12>
          <v-card>
            <v-card-title class="emphasis--medium">
              {{ __('Create Course') }}
            </v-card-title>
            <v-layout
              justify-space-between
              pa-3
              >
              <v-flex xs5>
                <v-treeview
                  :active.sync="active"
                  :items="items"
                  :load-children="fetchUsers"
                  :open.sync="open"
                  activatable
                  active-class="primary--text"
                  expand-icon="mdi-chevron-down"
                  open-on-click
                  transition
                  >
                  <v-icon
                    v-if="!item.children"
                    slot="prepend"
                    class="title"
                    slot-scope="{ item, active }"
                    :color="active ? 'primary' : ''"
                    >
                    mdi-play-circle-outline
                  </v-icon>
                </v-treeview>
              </v-flex>
              <v-flex
                d-flex
                text-xs-center
                >
                <v-scroll-y-transition mode="out-in">
                  <div
                    v-if="!selected"
                    class="grey--text text--lighten-1"
                    style="align-self: center;"
                  >
                    {{ __('Select Part to Edit') }}
                  </div>
                  <v-card
                    v-else
                    :key="selected.id"
                    class="pt-4 mx-auto"
                    flat
                    max-width="400"
                    >
                    <!-- <v-card-text>
                      <h4 class="mb-2">
                        {{ selected.name }}
                      </h4>
                      <div class="blue--text mb-2">{{ selected.email }}</div>
                    </v-card-text> -->
                    <v-card-text>
                      <v-text-field outline label="Title"></v-text-field>
                      <v-textarea label="Description" outline></v-textarea>
                    </v-card-text>
                  </v-card>
                </v-scroll-y-transition>
              </v-flex>
            </v-layout>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </section>
</template>

<script>
import store from './store'
import DisplayAssignment from '@/modules/Yggdrasil/Assignment/Assignment.vue'

const pause = ms => new Promise(resolve => setTimeout(resolve, ms))

export default {
  store,

  name: 'TestShow',

  components: {
    DisplayAssignment
  },

  data () {
    return {
      active: [],
      avatar: null,
      open: [],
      users: [],
      tasks: [
        {
          done: false,
          comment: 'Foobar'
        },
        {
          fullname: 'Princess Ellen Alto',
          timestamp: 'Yesterday',
          comment: 'Fizzbuzz'
        },
      ],
      task: null,
      resource: {
        rowsPerPageItems: [3, 6, 9, 12, 'All'],
        pagination: {
          rowsPerPage: 3,
        },
        search: '',
        selected: [],
        items: [],
        data: null,
      },
    }
  },

  computed: {
    completedTasks () {
      return this.tasks.filter(task => task.done).length
    },
    progress () {
      return this.completedTasks / this.tasks.length * 100
    },
    remainingTasks () {
      return this.tasks.length - this.completedTasks
    },
    items () {
      return [
        {
          name: 'Chapter 1',
          children: this.users
        }
      ]
    },
    selected () {
      if (!this.active.length) return undefined

      const id = this.active[0]

      return this.users.find(user => user.id === id)
    }
  },

  methods: {
    create () {
      this.tasks.push({
        done: false,
        comment: this.task,
      })

      this.task = null
    },

    async fetchUsers (item) {
      // Remove in 6 months and say
      // you've made optimizations! :)
      await pause(300)

      return fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(json => (item.children.push(...json)))
        .catch(err => console.warn(err))
    },
  }
}
</script>
