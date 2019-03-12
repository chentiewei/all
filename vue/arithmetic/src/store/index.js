import Vue from 'vue'
import Vuex from 'vuex'
import dialog from './modules/dialog'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    dialog
  },
  getters
})

export default store
