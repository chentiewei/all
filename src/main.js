// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import axios from 'axios';
import store from './assets/js/store';
/*用vue.js写单页面应用时，会出现打包后的JavaScript包非常大，影响页面加载，我们可以利用路由的懒加载去优化这个问题
import home from './components/home/home';
import indexPage from './components/home/indexPage/indexPage';
import winner from './components/home/winner/winner';
import share from './components/home/share/share'
import userCenter from './components/home/userCenter/userCenter';
import moods from './components/home/indexPage/listBody/list/moods';
import plan from './components/home/indexPage/listBody/plan/plan';
import details from './components/details/details';
import all from './components/home/winner/all/all';
import small from './components/home/small/small'*/

/*懒加载*/
const home = resolve=> {require(['@/components/home/home'], resolve)};
const indexPage = resolve=> {require(['@/components//home/indexPage/indexPage'], resolve)};
const winner = resolve=> {require(['@/components/home/winner/winner'], resolve)};
const share = resolve=> {require(['@/components/home/share/share'], resolve)};
const userCenter = resolve=> {require(['@/components/home/userCenter/userCenter'], resolve)};
const moods = resolve=> {require(['@/components/home/indexPage/listBody/list/moods'], resolve)};
const plan = resolve=> {require(['@/components/home/indexPage/listBody/plan/plan'], resolve)};
const details = resolve=> {require(['@/components/details/details'], resolve)};
const all = resolve=> {require(['@/components/home/winner/all/all'], resolve)};
const small = resolve=> {require(['@/components/home/small/small'], resolve)};

Vue.use(VueRouter);/*vue-router*/
Vue.prototype.$http = axios;/*axios*/
Vue.config.productionTip = false;
const going ={template: '<div>going</div>'};
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
        },
        {
          meta:{title:'vue小零件'},
          path:'/small',
          component:small
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
});
/*router更新前*/
router.beforeEach((to, from, next) => {
  document.title=to.meta.title;
  next();
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
}).$mount('#app');

