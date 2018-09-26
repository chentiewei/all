// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//import axios from 'axios'
import fastclick from 'fastclick'/*点击事件*/
import store from './store/store'/*vuex*/
import Common from './utils/global.js' /*全局自定义方法*/
import VueWechatTitle from 'vue-wechat-title' /*title更换*/
import './assets/css/reset.styl' /*重置css*/
import ElementUI from 'element-ui';/*element-ui*/
import 'element-ui/lib/theme-chalk/index.css';/*element-ui.css*/

import util from "../static/js/util"
import axios from "../static/js/axiosConfig"
import moment from 'moment';

Vue.config.productionTip = false
Vue.use(Common)
Vue.use(VueWechatTitle)
Vue.use(ElementUI);
fastclick.attach(document.body)
Vue.prototype.$axios = axios;
Vue.prototype.$moment = moment;
Vue.prototype.$util = util;

Vue.filter('filterTime', function (value,formatType) {
  if (!value) return '';
  if(!formatType) formatType = "YYYY-MM-DD HH:mm";
  return moment(value).format(formatType);
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
