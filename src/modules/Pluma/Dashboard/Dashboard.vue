<template :dark="$store.getters['app/app'].dark">
  <v-container fluid grid-list-lg>
    <v-layout row wrap>
      <v-flex md4 xs12>
        <!-- <my-most-popular-courses class="mb-3"></my-most-popular-courses> -->

        <v-card height="100%">
          <v-card-text class="py-5 text-xs-center">
            <v-avatar color="emphasis--medium">
              <v-icon>mdi-account</v-icon>
            </v-avatar>
            <h1 class="display-1 mb-3">{{ __('179081') }}</h1>
            <p class="body-1 grey--text">{{ trans('Account Number') }}</p>
          </v-card-text>
        </v-card>
      </v-flex>

      <v-flex md4 xs12>
        <!-- <current-course-progress></current-course-progress> -->
        <v-card height="100%">
          <v-card-actions class="px-3">
            <span class="px-2 pb-2">
              <v-icon small>mdi-book-open-page-variant</v-icon>
            </span>
            <strong class="grey--text body-2">
              {{ trans('CONTINUE COURSE') }}
            </strong>
            <v-spacer></v-spacer>
            <v-btn icon small>
              <v-icon small>more_horiz</v-icon>
            </v-btn>
          </v-card-actions>
          <v-card-text>
            <v-layout row wrap>
              <v-flex xs6>
                <div class="text-xs-center">
                  <h1 class="display-1 mb-2">{{ trans('12 340') }}</h1>
                  <v-btn round small depressed class="emphasis--medium">{{ trans('Continue') }}</v-btn>
                </div>
              </v-flex>
              <v-flex xs6>
                <div class="grey--text">
                  <p class="body-2">
                    <strong>{{ trans('My Course Progress') }}</strong>
                  </p>
                  <p class="title">{{ trans('34%') }}</p>
                  <v-progress-linear
                    value="50"
                    class="progress-bar"
                    height="10"
                    :background-color="app.dark ? 'emphasis--medium' : 'grey lighten-3'"></v-progress-linear>
                  <p>{{ trans('16 days left') }}</p>
                </div>
              </v-flex>
            </v-layout>
          </v-card-text>
        </v-card>
      </v-flex>

      <v-flex md4 xs12>
        <v-card height="100%">
          <v-card-actions class="px-3">
            <span class="px-2 pb-2">
              <v-icon small>mdi-book-open-page-variant</v-icon>
            </span>
            <strong class="grey--text body-2">
              {{ trans('CONTINUE COURSE') }}
            </strong>
            <v-spacer></v-spacer>
            <v-btn icon small>
              <v-icon small>more_horiz</v-icon>
            </v-btn>
          </v-card-actions>
          <v-card-text>
            <v-layout row wrap>
              <v-flex xs6>
                <div class="text-xs-center">
                  <v-progress-circular
                    :rotate="360"
                    :size="100"
                    :width="10"
                    :value="30"
                    color="primary"
                    >
                    34
                  </v-progress-circular>
                </div>
              </v-flex>
              <v-flex xs6>
                <div class="grey--text">
                  <p class="body-2">
                    <strong>{{ trans('My Course Progress') }}</strong>
                  </p>
                  <p class="title">{{ trans('34%') }}</p>
                  <v-progress-linear
                    value="50"
                    class="progress-bar"
                    height="10"
                    :background-color="app.dark ? 'emphasis--medium' : 'grey lighten-4'"></v-progress-linear>
                  <p>{{ trans('16 days left') }}</p>
                </div>
              </v-flex>
            </v-layout>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<style>
  .progress-bar .v-progress-linear__bar__determinate {
    background: linear-gradient(to right, #0c5689, #b53f9c) !important;
  }

  .progress-bar {
    color: linear-gradient(to right, #0c5689, #b53f9c) !important;
  }
</style>

<script>
import { mapGetters } from 'vuex'
import MyMostPopularCourses from '@/modules/Yggdrasil/Course/widgets/MyMostPopularCourses.vue'
import CurrentCourseProgress from '@/modules/Yggdrasil/Course/widgets/CurrentCourseProgress'

export default {
  components: {
    MyMostPopularCourses,
    CurrentCourseProgress
  },

  computed: {
    ...mapGetters({
      app: 'app/app',
    }),
  },

  data () {
    return {}
  }
}
</script>
