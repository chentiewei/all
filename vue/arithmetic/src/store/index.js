import Vue from 'vue'
import Vuex from 'vuex'
import dialog from './modules/dialog'
import reportBit from "./modules/reportBit"
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    dialog,
    reportBit
  },
  getters
})

export default store
