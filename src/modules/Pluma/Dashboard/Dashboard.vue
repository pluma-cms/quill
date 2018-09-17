<template :dark="$store.getters['app/app'].dark">
  <v-container fluid grid-list-lg>
    <v-layout row wrap>
      <v-flex md4 xs12>
        <!-- <my-most-popular-courses class="mb-3"></my-most-popular-courses> -->
        <v-card height="100%">
          <v-card-text class="py-5 text-xs-center">
            <v-avatar color="emphasis--medium" class="mb-3">
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
            <span class="grey--text px-2 pb-2">
              <v-icon small>mdi-book-open-page-variant</v-icon>
            </span>
            <p class="body-2 grey--text">
              <strong>{{ trans('Continue Course') }}</strong>
            </p>
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
                    {{ trans('My Course Progress') }}
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
            <p class="body-2 grey--text">
              <strong>{{ trans('Rest of the Traffic') }}</strong>
            </p>
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
                    :width="6"
                    :value="30"
                    color="primary lighten-1"
                    >
                    {{ __('85 %') }}
                  </v-progress-circular>
                </div>
              </v-flex>
              <v-flex xs6>
                <h1 class="display-1 mb-3">{{ __('140 GB') }}</h1>
                <p class="grey--text mb-2">{{ trans('Spent') }}</p>
                <p class="grey--text">{{ trans('-10.356 MB') }}</p>
              </v-flex>
            </v-layout>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>

    <v-layout row wrap>
      <v-flex md8 xs12>
        <v-card>
          <line-chart :data="lineChart" :options="lineChart.options"></line-chart>
        </v-card>
      </v-flex>

      <v-flex md4 xs12>
        <v-card>
          <v-list dense>
            <v-list-tile>
              <v-list-tile-avatar>
                <v-icon small color="primary lighten-2">mdi-camera-account</v-icon>
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title>
                  {{ trans('Traffic Quality') }}
                </v-list-tile-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-list-tile-title>
                  {{ trans('100.50 GB') }}
                </v-list-tile-title>
              </v-list-tile-action>
            </v-list-tile>
            <v-list-tile>
              <v-list-tile-avatar>
                <v-icon small color="secondary">mdi-download</v-icon>
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title>
                  {{ trans('Download') }}
                </v-list-tile-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-list-tile-title>
                  {{ trans('10.76 MBps') }}
                </v-list-tile-title>
              </v-list-tile-action>
            </v-list-tile>
            <v-list-tile>
              <v-list-tile-avatar>
                <v-icon small color="accent">mdi-upload</v-icon>
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title>
                  {{ trans('Upload') }}
                </v-list-tile-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-list-tile-title>
                  {{ trans('15.80 MBps') }}
                </v-list-tile-title>
              </v-list-tile-action>
            </v-list-tile>
          </v-list>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<style>
  .progress-bar .v-progress-linear__bar__determinate {
    background: linear-gradient(to right, #0c5689, #b53f9c) !important;
  }
</style>

<script>
import LineChart from '@/components/ChartJS/LineChart.js'
import store from '@/store'
import { mapGetters } from 'vuex'
import MyMostPopularCourses from '@/modules/Yggdrasil/Course/widgets/MyMostPopularCourses.vue'
import CurrentCourseProgress from '@/modules/Yggdrasil/Course/widgets/CurrentCourseProgress'

export default {
  store,

  components: {
    MyMostPopularCourses,
    CurrentCourseProgress,
    LineChart,
  },

  computed: {
    ...mapGetters({
      app: 'app/app',
    }),
  },

  data () {
    return {
      lineChart: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'Statistics',
            backgroundColor: '#23CCAB', // pink lighten-2,
            data: [40, 39, 10, 40, 39, 80, 40]
          }
        ],
        options: {
          scales: {
            xAxes: [{
              gridLines: {
                display: false,
              }
            }],
            yAxes: [{
              gridLines: {
                display: false,
              }
            }]
          },
          responsive: true,
          maintainAspectRatio: false,
        },
      },
    }
  }
}
</script>
