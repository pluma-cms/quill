<template>
  <section>
    <v-toolbar
      flat
      v-sticky
      >
      <v-tooltip bottom>
        <v-btn slot="activator" icon exact :to="{name: 'courses.index'}"><v-icon>arrow_back</v-icon></v-btn>
        {{ __('Back to all courses') }}
      </v-tooltip>

      <!-- <v-icon v-if="page.icon">{{ page.icon }}</v-icon> -->
      <v-toolbar-title class="subheading">{{ __(page.title) }}</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn color="primary">{{ __('Save') }}</v-btn>
    </v-toolbar>

    <create-course-form></create-course-form>

    <v-footer inset fixed height="auto" dark style="z-index:99999">
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
import CreateCourseForm from './partials/CreateForm'

export default {
  name: 'Create',

  components: {
    CreateCourseForm,
  },

  computed: {
    page: function () {
      return this.$route.meta
    },
  },
}
</script>
