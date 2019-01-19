import Vue from 'vue'
import Router from 'vue-router'
import home from '@/views/home'
import login from '@/views/login'
import red from '@/views/red'
import yellow from '@/views/yellow'
import blue from '@/views/blue'
import all from '@/views/all'
import all1 from '@/views/all1'
import all2 from '@/views/all2'
import F404 from '@/views/F404'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {path: '/404', name: '404', component: F404}
  ]
})
export function powerRouterLazy(name) {
  switch (name) {
    case 'home':
      return {path: '/', name: 'home', component: home}
      break;
    case 'red':
      return {path: '/red', name: 'red', component: red}
      break;
    case 'yellow':
      return {path: '/yellow', name: 'yellow', component: yellow}
      break;
    case 'blue':
      return {path: '/blue', name: 'blue', component: blue}
      break;
    case 'all':
      return {path: '/all', name: 'all', component: all,children: []}
      break;
    case 'all1':
      return {path: '/all1', name: 'all1', component: all1}
      break;
    case 'all2':
      return {path: '/all2', name: 'all2', component: all2}
      break;
    default:
      return {path: '/404', name: '404', component: F404}
  }
}

