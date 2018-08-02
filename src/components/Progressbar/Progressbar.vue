<template>
  <v-slide-x-transition mode="out-in">
    <v-progress-linear v-show="progressbar.visible" class="main-progress" :value="progressbar.value" :height="progressbar.height"></v-progress-linear>
  </v-slide-x-transition>
</template>

<script>
import store from '@/store'
import { mapGetters, mapActions } from 'vuex'

export default {
  store,

  name: 'Progressbar',

  computed: {
    ...mapGetters({
      progressbar: 'progressbar/progressbar',
    }),
  },

  created () {
    this.$router.beforeResolve((to, from, next) => {
      this.increment(20)
      next()
    })

    this.$router.afterEach((to, from) => {
      this.done()
    })
  },

  methods: {
    ...mapActions({
      increment: 'progressbar/increment',
      done: 'progressbar/done',
    }),
  },
}
</script>

<style lang="stylus">
.main-progress,
.main-progress.v-progress-linear {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  margin: 0;
  z-index: 9999;
}
</style>
