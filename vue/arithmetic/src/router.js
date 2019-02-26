import Vue from 'vue'
import Router from 'vue-router'
const home = () => import('./views/home')
const start = () => import('./views/start')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/start',
      meta: {title: '微算面相', keepalive: false},
      name: 'start',
      component: start
    }
  ]
})
