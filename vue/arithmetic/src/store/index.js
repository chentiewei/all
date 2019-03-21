import Vue from 'vue'
import Vuex from 'vuex'
import dialog from './modules/dialog'
import bit from "./modules/bit"
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    dialog,
    bit
  },
  getters
})

export default store
