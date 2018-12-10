<template>
  <section>
    <v-toolbar flat>
      <v-toolbar-title>
        {{ __('Create Course') }}
      </v-toolbar-title>
    </v-toolbar>
  </section>
</template>

<script>
export default {
  name: 'Create',

  computed: {
    page: function () {
      return this.$route.meta
    },
  },
}
</script>
