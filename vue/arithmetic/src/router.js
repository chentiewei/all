import Vue from 'vue'
import Router from 'vue-router'
const home = () => import('./views/home')
const start = () => import('./views/start')
const uploadImage = () => import('./views/uploadImage')
const userCenter = () => import('./views/userCenter')
const privacy = () => import('./views/privacy')
const explain = () => import('./views/explain')
const join = () => import('./views/join')
const agentdetails = () => import('./views/agentdetails')
const agentwact = () => import('./views/agentwact')
const agentwact3 = () => import('./views/agentwact3')
const paylist = () => import('./views/paylist')
const dictionaries = () => import('./views/dictionaries')
const reportlist = () => import('./views/reportlist')
const report = () => import('./views/report')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      meta: {title: '微算面相-首页', keepalive: false},
      name: 'home',
      component: home
    },
    {
      path: '/start',
      meta: {title: '微算面相', keepalive: false},
      name: 'start',
      component: start
    },
    {
      path: '/uploadImage',
      meta: {title: '微算面相-上传面相', keepalive: false},
      name: 'uploadImage',
      component: uploadImage
    },
    {
      path: '/userCenter',
      meta: {title: '微算面相-个人中心', keepalive: false},
      name: 'userCenter',
      component: userCenter
    },
    {
      path: '/privacy',
      meta: {title: '微算面相-隐私协议(更新)', keepalive: false},
      name: 'privacy',
      component: privacy
    },
    {
      path: '/explain',
      meta: {title: '微算面相-使用协议', keepalive: false},
      name: 'explain',
      component: explain
    },
    {
      path: '/join',
      meta: {title: '微算面相-推广渠道招募', keepalive: false},
      name: 'join',
      component: join
    },
    {
      path: '/agentdetails',
      meta: {title: '微算面相-合伙人收益', keepalive: false},
      name: 'agentdetails',
      component: agentdetails
    },
    {
      path: '/agentwact',
      meta: {title: '微算面相-推荐合伙人', keepalive: false},
      name: 'agentwact',
      component: agentwact
    },
    {
      path: '/agentwact3',
      meta: {title: '微算面相-大流量渠道合作', keepalive: false},
      name: 'agentwact3',
      component: agentwact3
    },
    {
      path: '/paylist',
      meta: {title: '微算面相-支付列表', keepalive: false},
      name: 'paylist',
      component: paylist
    },
    {
      path: '/dictionaries',
      meta: {title: '微算面相-面相报告', keepalive: false},
      name: 'dictionaries',
      component: dictionaries
    },
    {
      path: '/reportlist',
      meta: {title: '微算面相-报告列表', keepalive: false},
      name: 'reportlist',
      component: reportlist
    },
    {
      path: '/report',
      meta: {title: '微算面相-报告', keepalive: false},
      name: 'report',
      component: report
    }
  ]
})
