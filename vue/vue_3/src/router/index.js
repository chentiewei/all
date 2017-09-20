import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import apply from '@/components/review/apply_for'
import approve from '@/components/review/approve'
import dark from '@/components/review/small_dark'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: index,
      redirect: 'apply',
      children: [
        { path: '/apply', name: 'apply', component: apply },
        { path: '/approve', name: 'approve', component: approve },
        { path: '/dark', name: 'dark', component: dark }
      ]
    }
  ]
})
