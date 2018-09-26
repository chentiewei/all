// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store'
import fastclick from 'fastclick'
import 'lib-flexible/flexible.js' /*flexible（rem）*/
import VueWechatTitle from 'vue-wechat-title' /*title更换*/
import './assets/css/reset.styl' /*重置css*/
import Common from './utils/global.js' /*全局自定义方法*/
import Vant from 'vant';/*vant */
import 'vant/lib/vant-css/index.css';/*vantcss */

import util from "../static/js/util"
import axios from "../static/js/axiosConfig"
import moment from 'moment';

Vue.use(Vant);
Vue.use(VueWechatTitle)
Vue.use(Common)
fastclick.attach(document.body)
Vue.config.productionTip = false

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
