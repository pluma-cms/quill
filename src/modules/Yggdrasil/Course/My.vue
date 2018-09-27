<template>
  <section>
    <v-toolbar
      color="transparent"
      flat
      light
      >
      <v-icon v-if="page.icon">{{ page.icon }}</v-icon>
      <v-toolbar-title>{{ trans(page.title) }}</v-toolbar-title>
    </v-toolbar>
  </section>
</template>

<script>
import store from './store'
import { mapGetters } from 'vuex'

export default {
  store,

  name: 'My',

  computed: {
    ...mapGetters({
      // dataset: 'course/dataset',
    }),

    empty: function () {
      return false // this.dataset.items.length === 0
    },

    page: function () {
      return this.$route.meta
    },
  },
}
</script>
