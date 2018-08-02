import hover from './hover.js'
import sticky from './sticky.js'
import focus from './focus.js'
import Vue from 'vue'

const directives = {
  install (Vue) {
    Vue.directive(hover.name, hover)
    Vue.directive(sticky.name, sticky)
    Vue.directive(focus.name, focus)
  }
}

Vue.use(directives)
