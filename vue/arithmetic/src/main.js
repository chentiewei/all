import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueWechatTitle from "vue-wechat-title"
import "amfe-flexible"
import "@/assets/css/common.styl"

Vue.config.productionTip = false
const FastClick = require('fastclick')
FastClick.attach(document.body)
Vue.use(VueWechatTitle)


router.beforeEach(function (to, from, next) {
  store.commit('updateLoadingStatus', {isLoading: true})
  next()
})

router.afterEach(function (to) {
  store.commit('updateLoadingStatus', {isLoading: false})
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
