import Vue from 'vue'
import Vuex from 'vuex'
import { create } from './modules/create/create'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    create,
  },
  strict: process.env.NODE_ENV !== 'production'
})
