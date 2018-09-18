<template>
  <canvas :id="name"></canvas>
</template>

<script>
import { Chart } from 'chart.js/dist/Chart.bundle.js'

export default {
  name: 'LineChart',
  props: {
    name: {
      type: [String],
      default: 'lineChart',
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
      var ctx = document.getElementById(this.name).getContext('2d')
      console.log(this.data, this.options)
      var statisticsChart = new Chart(ctx, {
        type: 'bar',
        data: this.data,
        options: this.options,
      });
    }
  },

  mounted () {
    this.initChart()
  }
}
</script>
