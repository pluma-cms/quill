<template>
  <section>
  </section>
</template>

<script>
import store from './store'

export default {
  store,

  name: 'TestShow',

  data () {
    return {
      course: {
        md8: true,
      }
    }
  },

  methods: {
    viewMode () {
      this.course.md8 = !this.course.md8
    }
  }
}
</script>
