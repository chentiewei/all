const dialog = {
  state: {
    isLoading: false,/*loading弹框-app.vue*/
    isToast:{/*toast弹框-app.vue*/
      state:false,
      text:'错误了！'
    }
  },
  mutations: {
    updateLoadingStatus (state, payload) {
      state.isLoading = payload.isLoading
    },
    updateToastStatus (state, payload) {
      state.isToast.state = payload.state
      state.isToast.text = payload.text
    }
  },
  actions: {

  }
}

export default dialog
