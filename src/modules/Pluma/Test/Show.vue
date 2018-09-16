<template>
  <section>
    <v-container fluid grid-list-lg>
      <v-layout row wrap order-md1>
        <v-flex
          :md8="course.md8"
          xs12
          >
          <v-card
            height="100"
            color="grey lighten-3"
            >
            {{ trans('> Interavtive Media') }}
          </v-card>
          <v-card-actions color="grey lighten-3">
            <v-spacer></v-spacer>
            <v-btn icon @click="viewMode">
              <v-icon>fullscreen</v-icon>
            </v-btn>
          </v-card-actions>
        </v-flex>
        <v-flex md4 xs12 order-md2>
          <v-card height="100" color="teal lighten-3">
            {{ trans('> Playlist') }}
          </v-card>
        </v-flex>
        <v-flex md8 xs12 order-md3>
          <v-card height="100" color="grey lighten-3">
            {{ trans('> Resources Tab') }}
          </v-card>
        </v-flex>
        <v-flex md8 xs12 order-md4>
          <v-card height="100" color="grey lighten-3">
            {{ trans('> Comment Section') }}
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
      course: {
        md8: true,
      }
    }
  },

  methods: {
    viewMode () {
      this.course.md8 = !this.course.md8
    }
  }
}
</script>
