// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import axios from 'axios'
/*vue-router*/
Vue.use(VueRouter);
/*axios*/
Vue.prototype.$http = axios
Vue.config.productionTip = false;

import home from './components/home/home';
import indexPage from './components/home/indexPage/indexPage';
import winner from './components/home/winner/winner';
import share from './components/home/share/share'
import userCenter from './components/home/userCenter/userCenter';
import moods from './components/home/indexPage/listBody/list/moods';
import plan from './components/home/indexPage/listBody/plan/plan';
import details from './components/details/details';
import all from './components/home/winner/all/all';
const going ={template: '<div>going</div>'}

const router = new VueRouter({
  routes:[
    { path: '/', redirect: '/home' },
    {
      path: '/home',
      component: home,
      children:[
        { path: '/', redirect: 'indexPage' },
        {
          meta: { title:'首页' },
          path:'indexPage',
          component:indexPage,
          children:[
            { path: '/', redirect: 'moods' },
            {
              meta: { title:'首页' },
              name:'moods',
              path:'moods',
              component:moods
            },
            {
              meta: { title:'首页' },
              name:'plan',
              path:'plan',
              component:plan
            },
          ]
        },
        {
          meta: { title:'用户中心' },
          path: '/userCenter',
          component: userCenter
        },
        {
          meta: { title:'最新揭晓' },
          path: '/winner',
          component: winner,
          children:[
            { path: '/', redirect: 'all' },
            {
              meta: { title:'最新揭晓' },
              name:'all',
              path:'all',
              component:all
            },
            {
              meta: { title:'最新揭晓' },
              name:'going',
              path:'going',
              component:going
            },
          ]
        },
        {
          meta: { title:'分享晒单' },
          path: '/share',
          component: share
        }
      ]
    },
    {
      meta: { title:'详情' },
      path: '/details',
      component: details
    }
  ],
  linkActiveClass: 'footer_active',
})
/*router更新前*/
router.beforeEach((to, from, next) => {
  document.title=to.meta.title;
  next();
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
}).$mount('#app')
