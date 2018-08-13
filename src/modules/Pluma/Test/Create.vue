<template>
  <section>
    <v-container fluid grid-list-lg>
      <v-layout row wrap>
        <v-flex md4 xs12>
          <!-- <current-course-progress class="mb-3"></current-course-progress> -->

          <!-- <to-do class="mb-3"></to-do> -->

          <!-- <my-students class="mb-3"></my-students> -->

          <my-most-popular-courses></my-most-popular-courses>
        </v-flex>
      </v-layout>
    </v-container>
  </section>
</template>

<style lang="stylus" scoped>
  .v-progress-circular
    margin: 1rem
</style>

<script>
import CurrentCourseProgress from '@/modules/Yggdrasil/Course/widgets/CurrentCourseProgress.vue'
import ToDo from '@/modules/Yggdrasil/Course/widgets/ToDo.vue'
import MyStudents from '@/modules/Yggdrasil/Course/widgets/MyStudents.vue'
import MyMostPopularCourses from '@/modules/Yggdrasil/Course/widgets/MyMostPopularCourses.vue'

export default {
  components: {
    CurrentCourseProgress,
    ToDo,
    MyStudents,
    MyMostPopularCourses
  },
}
</script>
