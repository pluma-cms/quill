export const state = () => ({
  datatable: {
    searchTable: '',
    selected: [],
    headers: [],
    selectAll: false,
    bulkdestroy: false,
    avatar: true,
    category: true,
    slug: true,
    created: true,
    modified: true,
    part: true,
    status: true,
    author: true,
  },
  toolbar: {
    bulkdestroy: true,
  },
})

export const getters = {
  datatable: state => state.datatable
}

export const mutations = {
  PROMPT_DIALOG (state, payload) {
    payload = Object.assign(state.datatable, payload)
    state.datatable = payload
  },

  emptyState () {
    this.replaceState({ datatable: null })
  }
}

export const datatable = {
  namespaced: true,
  state,
  getters,
  mutations
}
