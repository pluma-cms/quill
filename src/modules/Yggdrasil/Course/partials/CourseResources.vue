<template>
  <div>
    <v-card
      flat
      class="mb-5 transparent"
      height="400"
      >
      <v-tabs
        slider-color="accent"
        color="transparent"
        >
        <v-tab
          ripple
          key="overview"
          id="overview"
          >
          <strong>{{ trans('Overview') }}</strong>
        </v-tab>
        <v-tab
          ripple
          key="resources"
          id="overview"
          >
          <strong>{{ trans('Resources') }}</strong>
        </v-tab>

        <v-tab-item href="#overview">
          <course-overview></course-overview>
        </v-tab-item>
        <v-tab-item ref="#resources">
          <assignment></assignment>
        </v-tab-item>
      </v-tabs>
    </v-card>

    <comment></comment>
  </div>
</template>

<script>
import Assignment from './Assignment.vue'
import CourseOverview from './CourseOverview.vue'

export default {
  name: 'CourseResources',

  components: {
    Assignment,
    CourseOverview,
  },

  data () {
    return {}
  }
}
</script>
