export const state = () => ({
  timeline: {
    model: true,
    monthYear: 'Aug 2018',
    dateToday: 'August 01, 2018',
    items: [
      {
        user: 'Lemony Snicket'
      }
    ]
  }
})

export const getters = {
  timeline: state => state.timeline
}

export const mutations = {
  emptyState () {
    this.replaceState({ timeline: null })
  }
}

export const timeline = {
  namespaced: true,
  state,
  getters,
  mutations
}
