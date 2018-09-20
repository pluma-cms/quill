<template>
  <v-container
    fluid
    grid-list-lg
    align-center
    justify-center
    >
    <v-layout
      row
      wrap
      align-center
      justify-center
      >
      <v-flex
        xs12
        class="text-xs-center"
        >
        <man-with-devices
          width="300"
          height="300"
          >
        </man-with-devices>
        <blockquote class="quotation-block text--disabled">
          <em>
            <span class="quotation-block__icon">&ldquo;</span>
            {{ __(quote.text) }}
          </em>
          <br>
          <cite>
            <strong>&mdash;{{ quote.cited }}</strong>
          </cite>
        </blockquote>

        <div class="my-4">
          <v-btn
            large
            color="primary"
            exact
            :to="{name: 'courses.create'}"
            >
            {{ __('Create New Course') }}
          </v-btn>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'CourseEmptyState',

  computed: {
    quote: function () {
      return {
        text: 'Education is the kindling of a flame, not the filling of a vessel.',
        cited: 'Socrates',
      }
    },
  },
}
</script>

<style lang="stylus">
.quotation-block {
  &__icon {
    font-size: 4rem;
    font-family: Georgia, serif;
  }
}
</style>
