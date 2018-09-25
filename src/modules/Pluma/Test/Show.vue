<template>
  <section>
    <v-container fluid grid-list-lg>
      <v-layout row wrap>
        <v-flex md4 xs12>
          <v-card>
            <v-textarea
              v-model="task"
              label="Leave a comment"
              solo
              rows="5"
              flat
              background-color="grey lighten-3"
              @keydown.enter="create"
              >
            </v-textarea>

            <v-btn @click="create">
              {{ trans('Submit') }}
            </v-btn>

            <h2 class="subheading pl-3 mb-3">
              Comments:&nbsp;
              <v-fade-transition leave-absolute>
                <span :key="`tasks-${tasks.length}`">
                  {{ tasks.length }}
                </span>
              </v-fade-transition>
            </h2>

            <v-card flat v-if="tasks.length > 0">
              <v-slide-y-transition
                class="py-0"
                group
                tag="v-list"
                >
                <template v-for="(task, i) in tasks">
                  <v-list-tile :key="`${i}-${task.text}`">
                    <v-list-tile-avatar size="30">
                      <img src="https://images.unsplash.com/photo-1537730170185-27027b73b19c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7060dc523caa30db26a0fa1407328392&auto=format&fit=crop&w=400&q=60" alt="">
                    </v-list-tile-avatar>
                    <v-list-tile-content>
                      <v-list-tile-title
                        v-html="task.text"
                        >
                      </v-list-tile-title>
                    </v-list-tile-content>
                    <v-spacer></v-spacer>
                    <v-scroll-x-transition>
                      <v-icon
                        v-if="task.done"
                        color="success"
                        >
                        check
                      </v-icon>
                    </v-scroll-x-transition>
                  </v-list-tile>
                </template>
              </v-slide-y-transition>
            </v-card>
          </v-card>
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
      tasks: [
        {
          done: false,
          text: 'Foobar'
        },
        {
          done: false,
          text: 'Fizzbuzz'
        }
      ],
      task: null
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
    }
  },

  methods: {
    create () {
      this.tasks.push({
        done: false,
        text: this.task
      })

      this.task = null
    }
  }
}
</script>
