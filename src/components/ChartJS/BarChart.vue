<template>
  <canvas :id="name"></canvas>
</template>

<script>
import { Chart } from 'chart.js/dist/Chart.bundle.js'

export default {
  name: 'BarChart',
  props: {
    name: {
      type: [String],
      default: 'statisticsChartData',
    },
    data: {
      type: [Object],
      default: () => { return {} },
    },
    options: {
      type: [Object],
      default: () => { return {} },
    },
    ctx: {
      type: [Object, Array, CanvasRenderingContext2D],
      default: () => { return {} },
    },
  },

  methods: {
    initChart () {
      /*eslint-disable*/
      this.$nextTick(() => {
        var ctx = document.getElementById(this.name).getContext('2d')
        var statisticsChart = new Chart(ctx, {
          type: 'bar',
          data: this.data,
          options: this.options,
        });
      })
    }
  },

  mounted () {
    this.initChart()
  }
}
</script>
