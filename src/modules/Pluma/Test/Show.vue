<template>
  <section>
    <v-container fluid grid-list-lg>
      <v-layout row wrap>
        <v-flex md4 xs12>
          <v-card>

            <!-- <v-textarea
              v-model="task"
              label="Post a Comment"
              solo
              flat
              name="input-7-4"
              background-color="grey lighten-3"
              @keydown.enter="create"
              >
              <v-fade-transition slot="append">
                <v-icon
                  v-if="task"
                  @click="create"
                >
                  add_circle
                </v-icon>
              </v-fade-transition>
            </v-textarea> -->

            <v-text-field
              v-model="task"
              label="Post a comment"
              solo
              rows="5"
              flat
              background-color="grey lighten-3"
              @keydown.enter="create"
              >
              <v-fade-transition slot="append">
                <v-icon
                  v-if="task"
                  @click="create"
                  >
                  add_circle
                </v-icon>
              </v-fade-transition>
            </v-text-field>

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
                  <v-divider
                    v-if="i !== 0"
                    :key="`${i}-divider`"
                    >
                  </v-divider>

                  <v-list-tile :key="`${i}-${task.text}`">
                    <v-list-tile-action>
                      <v-checkbox
                        v-model="task.done"
                        color="info darken-3"
                        >
                        <div
                          slot="label"
                          :class="task.done && 'grey--text' || 'text--primary'"
                          class="ml-3"
                          v-text="task.text"
                        ></div>
                      </v-checkbox>
                    </v-list-tile-action>
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
