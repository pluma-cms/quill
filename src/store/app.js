import config from '@/config/app'
import VM from '@/mixins/localstorage'

export const state = () => ({
  app: {
    dark: VM.methods.localstorage('app.dark', config.dark) || config.dark,
  },
})

export const getters = {
  app: state => state.app,
}

export const mutations = {
  'TOGGLE_DARK_THEME' (state, payload) {
    state.app.dark = payload.dark
  },
}

export const actions = {
  theme: ({commit}, payload) => {
    VM.methods.localstorage({'app.dark': payload.dark})
    commit('TOGGLE_DARK_THEME', payload)
  },
}

export const app = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
}
