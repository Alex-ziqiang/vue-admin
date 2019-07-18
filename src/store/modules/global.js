export default {
  state: {
    loading: false
  },
  mutations: {
    SET_LOADING: (state, value) => {
      state.loading = value
    }
  }
}
