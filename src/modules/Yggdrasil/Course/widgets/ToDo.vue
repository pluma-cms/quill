<template :dark="$store.getters['app/app'].dark">
  <v-card>
    <v-card-text>
      <v-card-actions class="px-0">
        <v-card flat class="transparent">
          <h3>
            {{ __('Thursday,') }}
            <span class="subheading">
              {{ __('10th') }}
            </span>
          </h3>
          <p class="grey--text">{{ __('December 2018') }}</p>
        </v-card>
        <v-spacer></v-spacer>
        <p class="body-2 grey--text">
          <v-fade-transition leave-absolute>
            <span :key="`tasks-${tasks.length}`">
              {{ tasks.length }}
            </span>
          </v-fade-transition>
          {{ __('Tasks') }}
        </p>
      </v-card-actions>

      <v-text-field
        hide-details
        v-model="task"
        label="Create New Task"
        solo
        flat
        background-color="emphasis--medium"
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
    </v-card-text>
    <v-card
      class="py-3"
      flat
      v-if="tasks.length > 0"
      >
      <v-slide-y-transition
        class="py-0"
        group
        tag="v-list"
        >
        <template v-for="(task, i) in tasks">
          <v-list-tile :key="`${i}-${task.text}`">
            <v-list-tile-action>
              <v-checkbox
                v-model="task.done"
                color="accent"
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
    <v-card-actions class="px-0">
      <span class="mx-3 grey--text body-1">
        {{ trans('Remaining:') }} {{ remainingTasks }}
      </span>
    </v-card-actions>
  </v-card>
</template>

<script>
import store from '@/store'
import { mapGetters } from 'vuex'

export default {
  store,
  name: 'ToDo',

  computed: {
    ...mapGetters({
      app: 'app/app',
    }),
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
  },

  data () {
    return {
      tasks: [
        {
          done: false,
          text: 'Foobar'
        },
      ],
      task: null,
    }
  }
}
</script>
