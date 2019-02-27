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

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
