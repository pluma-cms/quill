<template>
  <section>
    <v-container fluid grid-list-lg>
      <v-layout row wrap>
        <v-flex md8 xs12>
          <v-card height="100" color="grey lighten-3">
            {{ trans('> Interactive Media') }}
          </v-card>
        </v-flex>
        <v-flex md4 xs12>
          <v-card height="100" color="grey lighten-3">
            {{ trans('> Playlist') }}
          </v-card>
        </v-flex>
        <v-flex md8 xs12>
          <v-card height="100" color="grey lighten-3">
            {{ trans('> Resources Tab') }}
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

  name: 'TestShow'
}
</script>
