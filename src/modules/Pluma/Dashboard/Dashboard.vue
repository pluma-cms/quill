<template>
  <v-container fluid grid-list-lg>
    <v-layout row wrap>
      <v-flex md4 xs12>
        <my-most-popular-courses class="mb-3"></my-most-popular-courses>
      </v-flex>

      <v-flex md4 xs12>
        <!-- <current-course-progress></current-course-progress> -->
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import MyMostPopularCourses from '@/modules/Yggdrasil/Course/widgets/MyMostPopularCourses.vue'
import CurrentCourseProgress from '@/modules/Yggdrasil/Course/widgets/CurrentCourseProgress'

export default {

  components: {
    MyMostPopularCourses,
    CurrentCourseProgress
  },
}
</script>
