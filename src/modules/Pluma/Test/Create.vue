<template :dark="$store.getters['app/app'].dark">
  <section>
    <v-container fluid grid-list-lg>
      <v-layout row wrap>
        <v-flex md6 xs12>
         <!--  <current-course-progress class="mb-3"></current-course-progress>
          <to-do class="mb-3"></to-do>
          <my-students class="mb-3"></my-students>
          <my-most-popular-courses></my-most-popular-courses> -->
          <!-- <responses class="mb-3"></responses> -->
          <single-response class="mb-3"></single-response>
        </v-flex>
        <v-flex md6 xs12>
          <single-response-chart class="mb-3"></single-response-chart>
        </v-flex>
      </v-layout>
    </v-container>
  </section>
</template>

<script>
import CurrentCourseProgress from '@/modules/Yggdrasil/Course/widgets/Student/CurrentCourseProgress.vue'
import ToDo from '@/modules/Yggdrasil/Course/widgets/Student/ToDo.vue'
import MyStudents from '@/modules/Yggdrasil/Course/widgets/Trainer/MyStudents.vue'
import MyMostPopularCourses from '@/modules/Yggdrasil/Course/widgets/Trainer/MyMostPopularCourses.vue'
import Responses from '@/modules/Submission/Responses.vue'
import SingleResponse from '@/modules/Submission/SingleResponse.vue'
import SingleResponseChart from '@/modules/Submission/SingleResponseChart.vue'

export default {

  components: {
    CurrentCourseProgress,
    MyMostPopularCourses,
    MyStudents,
    ToDo,
    Responses,
    SingleResponse,
    SingleResponseChart,
  },

  data () {
    return {
    }
  }
}
</script>
