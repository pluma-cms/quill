<template>
  <section>
    <v-toolbar
      color="transparent"
      flat
      light
      >
      <v-icon v-if="page.icon">{{ page.icon }}</v-icon>
      <v-toolbar-title>{{ trans(page.title) }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn v-if="!empty" color="primary" :to="{name: 'pages.create'}">{{ trans('Create Course') }}</v-btn>
    </v-toolbar>

    <!-- <v-slide-y-transition mode="out-in">
      <course-empty-state v-show="empty"></course-empty-state>
    </v-slide-y-transition> -->

  </section>
</template>

<script>
import store from './store'
import { mapGetters } from 'vuex'
import CourseEmptyState from './partials/EmptyState'

export default {
  store,

  name: 'Index',

  components: {
    CourseEmptyState,
  },

  computed: {
    ...mapGetters({
      // dataset: 'course/dataset',
    }),

    empty: function () {
      return true // this.dataset.items.length === 0
    },

    page: function () {
      return this.$route.meta
    },
  },
}
</script>
