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
              <display-assignment></display-assignment>
            <!-- </v-card-text> -->
          <!-- </v-card> -->
        <!-- </v-flex> -->
      <!-- </v-layout> -->
    <!-- </v-container> -->
  </section>
</template>

<script>
import store from './store'
import DisplayAssignment from '@/modules/Yggdrasil/Assignment/Assignment.vue'

export default {
  store,

  name: 'TestShow',

  components: {
    DisplayAssignment
  },

  data () {
    return {
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
        comment: this.task,
      })

      this.task = null
    }
  }
}
</script>
