<template>
  <v-app :dark="$store.getters['app/app'].dark">
    <v-snackbar
      :color="app.dark ? 'white' : 'dark'"
      :timeout="course.snackbarTimeout"
      bottom
      right
      v-model="course.snackbar"
      >
      <span
        class="subheading"
        :class="app.dark ? 'black--text' : 'white--text'"
        >
        {{ trans('You have already finished this part of the lesson') }}
      </span>
      <v-btn
        @click="course.snackbar = false"
        icon
        >
        <v-icon
          :class="app.dark ? 'black--text' : 'white--text'"
          >
          close
        </v-icon>
      </v-btn>
    </v-snackbar>
  </v-app>
</template>

<script>
import store from '@/store'
import { mapGetters } from 'vuex'

export default {
  store,

  name: 'CourseCompleted',

  computed: {
    ...mapGetters({
      app: 'app/app',
    }),
  },

  data () {
    return {
      course: {
        snackbar: true,
        snackbarTimeout: 0,
      },
    }
  }
}
</script>
