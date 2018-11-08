<template>
  <section>
    <v-container grid-list-lg>
      <v-layout row wrap justify-center align-center>
        <v-flex md10 xs12>
          <v-card flat class="grey lighten-4">
            <strong>Tabs</strong> / Tab 1 (Course Title, Description) > Tab 2 (Meta) > Tab 3 (Playlist)
            <v-card-text>
             <!--  <h4 class="grey--text">
                Comments:&nbsp;
                <v-fade-transition leave-absolute>
                  <span :key="`tasks-${tasks.length}`">
                    {{ tasks.length }}
                  </span>
                </v-fade-transition>
              </h4> -->

              Chapter 1
            </v-card-text>
          </v-card>


          <v-card
            class="mb-3"
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

                <v-card-text
                  class="pa-4"
                  :key="`${i}-${task.text}`"
                  >
                  <v-layout row align-center>
                    <v-avatar size="60" class="mr-3">
                      <img src="https://images.unsplash.com/photo-1541603617355-5f53b42522f9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1b7f9c25a0cce01cea8650d30a588629&auto=format&fit=crop&w=375&q=80" alt="">
                    </v-avatar>
                    <div>
                      <p><strong v-html="task.title"></strong></p>
                      <p v-html="task.body"></p>
                    </div>
                    <v-spacer></v-spacer>
                    <v-tooltip bottom>
                      <v-btn icon slot="activator">
                        <v-icon small color="secondary">edit</v-icon>
                      </v-btn>
                      <span>{{ __('Edit') }}</span>
                    </v-tooltip>
                  </v-layout>
                </v-card-text>

                <!-- edit-dialog -->
                <v-edit-dialog
                  :return-value.sync="task.name"
                  large
                  lazy
                  persistent
                  @save="save"
                  @cancel="cancel"
                  @open="open"
                  @close="close"
                >
                  <div>{{ task.name }}</div>
                  <div slot="input" class="mt-3 title">{{ __('Update') }}</div>
                  <v-text-field
                    slot="input"
                    v-model="task.name"
                    label="Edit"
                    single-line
                    counter
                    autofocus
                  ></v-text-field>
                </v-edit-dialog>
              </template>
            </v-slide-y-transition>
          </v-card>

          <!-- editor -->
          <form
            action=""
            @submit.prevent="create"
            >
            <v-text-field
              v-model='title'
              required
              label="Part Title"
              outline
              >
            </v-text-field>

            <v-textarea
              v-model='body'
              label="Part Description"
              outline
              >
            </v-textarea>

            <v-btn type="submit" class="ma-0" outline>
              {{ trans('Add') }}
            </v-btn>
          </form>

          Chapter 2 Editor
        </v-flex>

        <!-- <v-flex md8 xs12> -->
          <!-- <v-card> -->
          <!-- <v-card> -->
            <!-- <v-card-text> -->
              <!-- <display-assignment></display-assignment> -->
            <!-- </v-card-text> -->
          <!-- </v-card> -->
        <!-- </v-flex> -->
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

  name: 'Show',

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
          title: 'Foobar',
          body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro totam nisi nostrum ipsam? Inventore provident at accusamus aut, optio cum reprehenderit explicabo sed in. Odio rem enim asperiores voluptatem adipisci.'
        },
      ],
      task: null,
      title: null,
      body: null,
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
        title: this.title,
        body: this.body,
      })

      this.task = null
      this.title = null
      this.body = null
    },

    save () {
      this.snack = true
      this.snackColor = 'success'
      this.snackText = 'Data saved'
    },
    cancel () {
      this.snack = true
      this.snackColor = 'error'
      this.snackText = 'Canceled'
    },
    open () {
      this.snack = true
      this.snackColor = 'info'
      this.snackText = 'Dialog opened'
    },
    close () {
      console.log('Dialog closed')
    }
  }
}
</script>
