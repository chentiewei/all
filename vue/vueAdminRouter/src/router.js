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

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login
    }
  ]
})

export const powerRouter = [
  {path: '/', name: 'home', component: home},
  {path: '/red', name: 'red', component: red},
  {path: '/yellow', name: 'yellow', component: yellow},
  {path: '/blue', name: 'blue', component: blue},
  {
    path: '/all', name: 'all', component: all,
    children: [
      {path: '/all1', name: 'all1', component: all1,},
      {path: '/all2', name: 'all2', component: all2,}
    ]
  }
];
