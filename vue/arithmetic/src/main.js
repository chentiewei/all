import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueWechatTitle from "vue-wechat-title"
import "amfe-flexible"
import "@/assets/css/common.styl"
import weui from 'weui.js'
import 'weui'

Vue.config.productionTip = false

Vue.use(VueWechatTitle)

Vue.prototype.$weui = weui

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
