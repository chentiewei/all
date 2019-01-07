import Vue from 'vue'
import Router from 'vue-router'
import home from '@/views/home'
import login from '@/views/login'
import red from '@/views/red'
import yellow from '@/views/yellow'
import blue from '@/views/blue'

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

export const powerRouter =[
  { path: '/', name: 'home',component: home},
  { path: '/red', name: 'red', component: red},
  { path: '/yellow', name: 'yellow', component: yellow},
  { path: '/blue', name: 'blue', component: blue}
];
