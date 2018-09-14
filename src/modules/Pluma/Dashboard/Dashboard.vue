<template>
  <v-container fluid grid-list-lg>
    <v-layout row wrap>
      <v-flex md4 xs12>
        <!-- <my-most-popular-courses class="mb-3"></my-most-popular-courses> -->

        <v-card>
          <v-layout row wrap fill-height justify-center align-center>
            <v-card-text class="py-5 text-xs-center">
              <v-avatar color="emphasis--medium">
                <v-icon>mdi-account</v-icon>
              </v-avatar>
              <h1>{{ __('179081') }}</h1>
              <p class="body-1 grey--text">{{ trans('Account Number') }}</p>
            </v-card-text>
          </v-layout>
        </v-card>
      </v-flex>

      <v-flex md4 xs12>
        <!-- <current-course-progress></current-course-progress> -->
        <v-card>
          <v-card-actions class="px-2">
            <span class="px-2 pb-2">
              <v-icon small>mdi-book-open-page-variant</v-icon>
            </span>
            <strong class="grey--text body-1">
              {{ trans('MY COURSES') }}
            </strong>
            <v-spacer></v-spacer>
            <v-btn icon>
              <v-icon>more_horiz</v-icon>
            </v-btn>
          </v-card-actions>
          <v-card-text>
          </v-card-text>
        </v-card>
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
