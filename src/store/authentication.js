import VM from '@/mixins/localstorage'
import axios from 'axios'

export const state = () => ({
  tokens: {
    csrf: VM.methods.localstorage('auth.csrf_token', null),
    api: VM.methods.localstorage('auth.api_token', null),
  },
  auth: {
    status: '',
    meta: {},
    register: {},
    password: {},
    login: {},
    isLoggedIn: false,
    user: {},
  },
})

export const getters = {
  auth: state => state.auth,
  tokens: state => state.tokens,
}

export const mutations = {
  'LOGIN' (state, payload) {
    // state.auth.login = payload
  },

  'ATTEMPT' (state, payload) {
    // state.auth.login = payload
  },

  'SUCCESS' (state, payload) {
    state.tokens = {
      csrf: payload.csrfToken,
      api: payload.apiToken,
    }

    state.auth.user = payload.user
  },

  'FAILED' (state, payload) {
    state.tokens = {
      csrf: null,
      api: null,
    }

    state.auth.user = {}
  },

  'LOGOUT' (state) {
    state.tokens.csrf = null
    state.tokens.api = null
    // logout
  },
}

export const actions = {
  login: ({commit, dispatch}, payload) => {
    return new Promise((resolve, reject) => {
      commit('ATTEMPT', payload)
      axios({url: '/login', data: payload, method: 'POST'})
        .then(response => {
          const apiToken = response.data.api_token
          const csrfToken = response.data.csrf_token
          const user = response.data.user
          const payload = {apiToken, csrfToken, user}

          axios.defaults.headers.common['Authorization'] = apiToken

          VM.methods.localstorage('auth.api_token', apiToken)

          commit('SUCCESS', payload)
          resolve(response)
        })
        .catch(err => {
          commit('FAILED', payload)
          localStorage.removeItem('auth.api_token')
          reject(err)
        })
    })
  },

  logout: ({commit}) => {
    commit('LOGOUT')
  },
}

export const authentication = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
}
