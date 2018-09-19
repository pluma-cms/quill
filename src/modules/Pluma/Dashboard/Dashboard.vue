<template :dark="$store.getters['app/app'].dark">
  <v-container fluid grid-list-lg>
    <v-card-actions>
      <v-btn round class="px-3">
        <v-icon left small color="accent">add</v-icon>
        {{ trans('Add Widget') }}
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn icon><v-icon small>edit</v-icon></v-btn>
      <v-btn icon><v-icon small>list</v-icon></v-btn>
    </v-card-actions>
    <v-layout row wrap>
      <v-flex md4 sm6 xs12>
        <v-card height="100%">
          <v-card-text
            class="text-xs-center">
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
              {{ trans('Over All Users') }}
            </p>
          </v-card-text>
        </v-card>
      </v-flex>

      <v-flex md4 sm6 xs12>
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
                    class="progress-bar"
                    :background-color="app.dark ? 'emphasis--medium' : 'grey lighten-3'">
                  </v-progress-linear>
                  <p>{{ trans('16 days left') }}</p>
                </div>
              </v-flex>
            </v-layout>
          </v-card-text>
        </v-card>
      </v-flex>

      <v-flex md4 sm6 xs12>
        <v-card
          dark
          height="100%"
          hover
          href="/admin"
          class="glance__card--gradient">
          <v-card-text>
            <p class="body-2 px-3">
              <strong>
                {{ trans('Rest of the Traffic') }}
              </strong>
            </p>
            <v-layout row wrap>
              <v-flex xs6>
                <div class="text-xs-center">
                  <v-progress-circular
                    :rotate="360"
                    :size="130"
                    :width="6"
                    :value="60"
                    color="white"
                    >
                    <h1 class="headline">{{ __('60 %') }}</h1>
                  </v-progress-circular>
                </div>
              </v-flex>
              <v-flex xs6>
                <h1 class="display-1 mb-3">
                  {{ __('140 GB') }}
                </h1>
                <p class="mb-2">
                  {{ trans('Spent') }}
                </p>
                <p>
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
        <v-card class="mb-3">
          <v-card-actions class="pa-3">
            <h4
              class="grey--text">
              {{ trans('Course Statistics') }}
            </h4>
            <v-spacer></v-spacer>
            <v-btn icon class="mx-3"><v-icon small>chrome_reader_mode</v-icon></v-btn>
            <v-divider vertical></v-divider>
            <v-btn round small flat class="emphasis--medium px-3 mx-3">View History</v-btn>
          </v-card-actions>
          <v-card-text>
            <bar-chart
              name="statisticsChart"
              :data="statisticsChartData"
              :options="statisticsChartOptions"
              :ctx="ctx"
              >
            </bar-chart>
          </v-card-text>
        </v-card>
      </v-flex>

      <v-flex md4 xs12>
        <v-card class="mb-3">
          <v-card-actions class="pa-3">
            <p class="body-2 grey--text">
              <strong>{{ trans('Server Environment') }}</strong>
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
              {{ trans('System Corner') }}
            </h1>
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
    background: linear-gradient(to right, #e56590, #ffb88c) !important;
  }

  .glance__card--gradient {
    background: linear-gradient(45deg, #e56590 0%, #ffb88c 100%);
  }
</style>

<script>
import store from '@/store'
import { mapGetters } from 'vuex'
import LineChart from '@/components/ChartJS/LineChart.vue'
import BarChart from '@/components/ChartJS/BarChart.vue'
import ToDo from '@/modules/Yggdrasil/Course/widgets/ToDo.vue'

export default {
  store,

  components: {
    LineChart,
    BarChart,
    ToDo,
  },

  computed: {
    ...mapGetters({
      app: 'app/app',
    }),
  },

  mounted () {
    this.statisticsChart()
  },

  methods: {
    statisticsChart () {
      /*eslint-disable*/
      this.ctx = document.getElementById('statisticsChart').getContext("2d");

      var gradient = this.ctx.createLinearGradient(100, 0, 100, 400);
      gradient.addColorStop(0, '#e56590');
      gradient.addColorStop(1, '#ffb88c');

      var gradient2 = this.ctx.createLinearGradient(100, 0, 100, 400);
      gradient2.addColorStop(0, '#4ccbab');
      gradient2.addColorStop(1, '#3e75c8');

      this.statisticsChartData = {
        labels: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
        datasets: [
          {
            label: "Statistics",
            backgroundColor: gradient,
            borderColor: gradient,
            // borderWidth: 3,
            fill: false,
            hoverBackgroundColor: gradient,
            pointBackgroundColor: gradient,
            pointBorderColor: gradient,
            pointBorderWidth: 5,
            pointHoverBackgroundColor: gradient,
            pointHoverBorderColor: gradient,
            // pointHoverBorderWidth: 3,
            pointHoverRadius: 10,
            pointRadius: 6,
            pointWidthRadius: 1,
            data: [170, 80, 100, 120, 170, 120, -70, 140, 180, 100, -40, -70]
          },
          {
            label: "Statistics",
            backgroundColor: gradient2,
            hoverBackgroundColor: gradient2,
            borderColor: gradient2,
            // borderWidth: 3,
            fill: false,
            pointBackgroundColor: gradient2,
            pointBorderColor: gradient2,
            pointBorderWidth: 5,
            pointHoverBackgroundColor: gradient2,
            pointHoverBorderColor: gradient2,
            pointHoverBorderWidth: 3,
            pointHoverRadius: 10,
            pointRadius: 6,
            pointWidthRadius: 1,
            data: [-50, 40, 130, -20, -70, 50, 170, -40, -80, 100, 120, 150]
          },
        ]
      }
      this.statisticsChartOptions = {
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
          yAxes: [{
            ticks: {
              beginAtZero: true,
              maxTicksLimit: 5,
              padding: 20,
              display: true,
            },
            gridLines: {
              drawTicks: false,
              display: false
            },
          }],
          xAxes: [{
            barPercentage: 0.5,
            gridLines: {
              zeroLineColor: "transparent",
              display: false
            },
            ticks: {
              padding: 20,
              display: false,
            }
          }]
        }
      }
    },
  },

  data () {
    return {
      statisticsChartData: null,
      statisticsChartOptions: null,
      ctx: null,
    }
  }
}
</script>
