<template>
  <section>
    <v-toolbar
      flat
      v-sticky
      >
      <v-icon v-if="page.icon">{{ page.icon }}</v-icon>
      <v-toolbar-title>{{ __(page.title) }}</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn color="primary">{{ __('Save') }}</v-btn>
    </v-toolbar>

    <create-course-form></create-course-form>

  </section>
</template>

<script>
import CreateCourseForm from './partials/CreateCourseForm'

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
