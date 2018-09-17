<template :dark="$store.getters['app/app'].dark">
  <v-container fluid grid-list-lg>
    <v-layout row wrap>
      <v-flex md4 xs12>
        <!-- <my-most-popular-courses class="mb-3"></my-most-popular-courses> -->
        <v-card height="100%">
          <v-card-text
            class="py-5 text-xs-center">
            <v-avatar
              color="emphasis--medium"
              class="mb-3"
              >
              <v-icon>mdi-account</v-icon>
            </v-avatar>
            <h1 class="display-1 mb-3">
              {{ __('179081') }}
            </h1>
            <p class="body-1 grey--text">
              {{ trans('Account Number') }}
            </p>
          </v-card-text>
        </v-card>
      </v-flex>

      <v-flex md4 xs12>
        <!-- <current-course-progress></current-course-progress> -->
        <v-card height="100%">
          <v-card-actions class="px-3">
            <span class="grey--text px-2 pb-2">
              <v-icon
                small
                class="grey--text"
                >
                mdi-book-open-page-variant
              </v-icon>
            </span>
            <p class="body-2 grey--text">
              <strong>
                {{ trans('Continue Course') }}
              </strong>
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
                  <h1
                    class="display-1 mb-2"
                    >
                    {{ trans('12 340') }}
                  </h1>
                  <v-btn
                    round
                    small
                    depressed
                    class="emphasis--medium"
                    >
                    {{ trans('Continue') }}
                  </v-btn>
                </div>
              </v-flex>
              <v-flex xs6>
                <div class="grey--text">
                  <p class="body-2">
                    {{ trans('My Course Progress') }}
                  </p>
                  <p class="title">
                    {{ trans('34%') }}
                  </p>
                  <v-progress-linear
                    value="50"
                    height="6"
                    color="primary"
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
              <strong>
                {{ trans('Rest of the Traffic') }}
              </strong>
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
                    color="secondary"
                    >
                    {{ __('85 %') }}
                  </v-progress-circular>
                </div>
              </v-flex>
              <v-flex xs6>
                <h1 class="display-1 mb-3">
                  {{ __('140 GB') }}
                </h1>
                <p class="grey--text mb-2">
                  {{ trans('Spent') }}
                </p>
                <p class="grey--text">
                  {{ trans('-10.356 MB') }}
                </p>
              </v-flex>
            </v-layout>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>

    <v-layout row wrap>
      <v-flex md8 xs12>
        <v-card>
          <v-card-text>
            <h4
              class="grey--text">
              {{ trans('Course Statistics') }}
            </h4>
          </v-card-text>
          <v-card-text>
            <line-chart
              :data="lineChart"
              :options="lineChart.options"
              >
            </line-chart>
          </v-card-text>
        </v-card>
      </v-flex>

      <v-flex md4 xs12>
        <v-card class="mb-3">
          <v-card-actions class="pa-3">
            <p class="body-2 grey--text">
              <strong>{{ trans('The Current Plan') }}</strong>
            </p>
            <v-spacer></v-spacer>
            <v-btn
              small
              round
              class="emphasis--medium px-3"
              flat
              >
              {{ trans('Change Plan') }}
            </v-btn>
          </v-card-actions>
          <v-card-text>
            <h1 class="headline mb-2">
              <span class="px-2">
                <v-icon size="20" class="pb-2 grey--text">dashboard</v-icon>
              </span>
              {{ trans('Fast Furious') }}
            </h1>
            <v-divider></v-divider>
          </v-card-text>
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
        <to-do></to-do>
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
import ToDo from '@/modules/Yggdrasil/Course/widgets/ToDo.vue'

export default {
  store,

  components: {
    MyMostPopularCourses,
    CurrentCourseProgress,
    LineChart,
    ToDo
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
            backgroundColor: 'transparent',
            data: [3, 5, 3, 4, 2, 4, 2],
            borderColor: '#23CCAB', // accent
            borderWidth: 3,
            pointRadius: 6,
            pointWidthRadius: 1,
          },
          {
            label: 'Statistics',
            backgroundColor: 'transparent',
            data: [4, 2, 4, 2, 3, 5, 3],
            borderColor: '#0C5689', // accent
            borderWidth: 3,
            pointRadius: 6,
            pointWidthRadius: 1,
          },
        ],
        options: {
          layout: {
            padding: {
              top: 10,
              bottom: 10,
              left: 10,
              right: 10,
            }
          },
          legend: {
            display: false,
          },
          scales: {
            xAxes: [{
              gridLines: {
                display: false,
              },
              ticks: {
                display: false,
                beginAtZero: true,
              }
            }],
            yAxes: [{
              gridLines: {
                display: false,
              },
              ticks: {
                display: false,
                beginAtZero: true,
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
