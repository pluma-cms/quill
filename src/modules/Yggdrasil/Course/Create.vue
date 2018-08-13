<template>
  <section>
    <v-toolbar
      class="elevation-1"
      >
      <v-tooltip bottom>
        <v-btn slot="activator" icon exact :to="{name: 'courses.index'}"><v-icon>arrow_back</v-icon></v-btn>
        {{ __('Back to all courses') }}
      </v-tooltip>

      <!-- <v-icon v-if="page.icon">{{ page.icon }}</v-icon> -->
      <v-toolbar-title class="subheading">{{ __(page.title) }}</v-toolbar-title>

      <v-spacer></v-spacer>

      <!-- <v-btn color="primary">{{ __('Save') }}</v-btn> -->
    </v-toolbar>

    <create-course-form></create-course-form>
    <dialogbox v-model="dialogbox.model"></dialogbox>

    <v-footer inset app fixed height="auto" dark class="elevation-10">
      <v-spacer></v-spacer>
      <v-card flat color="transparent">
        <v-card-actions>
          <v-btn large color="primary">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-footer>
  </section>
</template>

<script>
import CreateCourseForm from './partials/CreateCourseForm'
import { mapGetters } from 'vuex'
import store from '@/store'

export default {
  store,

  name: 'Create',

  components: {
    CreateCourseForm,
  },

  computed: {
    ...mapGetters({
      dialogbox: 'dialogbox/dialogbox',
      sidebar: 'sidebar/sidebar',
    }),

    page: function () {
      return this.$route.meta
    },
  },

  mounted () {
    this.$store.dispatch('sidebar/toggle', {model: false})
  },
}
</script>
