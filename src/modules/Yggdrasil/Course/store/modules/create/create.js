export const state = () => ({
  course: {
    model: true,
    items: [],
    chapters: [
      {
        title: '',
        lessons: [],
      },
    ],
  },
})

export const getters = {
  course: state => state.course
}

export const mutations = {
  'SET' (state, payload) {
    state.course.items = payload.items
  },

  'TOGGLE' (state, payload) {
    state.course.model = payload.model
  },
}

export const actions = {
  set: ({commit}, payload) => {
    commit('SET', payload)
  },

  toggle: ({commit}, payload) => {
    commit('TOGGLE', payload)
  },
}

export const create = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
