// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'

Vue.use(VueRouter);
Vue.config.productionTip = false;

import home from './components/home/home';
import indexPage from './components/home/indexPage/indexPage';
import winner from './components/home/winner/winner';
const index2 = { template: '<div>index1</div>' };
import userCenter from './components/home/userCenter/userCenter';
import moods from './components/home/indexPage/listBody/list/moods';
import plan from './components/home/indexPage/listBody/plan/plan';
import details from './components/details/details';

const all = { template: '<div>all</div>' };
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
          path:'indexPage',
          component:indexPage,
          children:[
            { path: '/', redirect: 'moods' },
            {
              name:'moods',
              path:'moods',
              component:moods
            },
            {
              name:'plan',
              path:'plan',
              component:plan
            },
          ]
        },
        { path: '/userCenter', component: userCenter },
        {
          path: '/winner',
          component: winner,
          children:[
            { path: '/', redirect: 'all' },
            {
              name:'all',
              path:'all',
              component:all
            },
            {
              name:'going',
              path:'going',
              component:going
            },
          ]
        },
        { path: '/index2', component: index2 }
      ]
    },
    { path: '/details', component: details }
  ],
  linkActiveClass: 'footer_active',
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
}).$mount('#app')
