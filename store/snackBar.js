export const state = () => ({
  snackBar: ''
})

export const mutations = {
  changeSnackBar (state, payload) {
    state.snackBar = payload
  }
}

export const actions = {
  changeSnackBar ({ commit }, payload) {
    if (payload) {
      setTimeout(() => {
        commit('changeSnackBar', '')
      }, 4000)
    }
    commit('changeSnackBar', payload)
    setTimeout(() => {
      commit('changeSnackBar', '')
    }, 10000)
  }
}

export const getters = {
  snackBar: state => state.snackBar
}
