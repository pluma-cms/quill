<template>
  <div>
    <v-card
      class="mb-5"
      >
      <v-tabs
        class="transparent"
        color="emphasis--medium"
        slider-color="accent"
        >
        <v-tab
          ripple
          key="overview"
          id="overview"
          >
          {{ trans('Overview') }}
        </v-tab>
        <v-tab
          ripple
          key="resources"
          id="overview"
          >
          {{ trans('Resources') }}
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
