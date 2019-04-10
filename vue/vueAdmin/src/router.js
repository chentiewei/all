import Vue from 'vue'
import Router from 'vue-router'
import home from '@/views/home'
import red from '@/views/red'
import yellow from '@/views/yellow'
import blue from '@/views/blue'
import all from '@/views/all'
import all1 from '@/views/all1'
import all2 from '@/views/all2'
import F404 from '@/views/F404'
import Layout from '@/components/layout/Layout'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/login', name: 'login', component: () => import('@/views/login/index')},
    {path: '/404', name: '404', component: () => import('@/views/F404')}
  ]
})

//顶级router,其他router都在他children里面
export function topRouter(name) {
  return {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: '/dashboard',
      name: 'dashboard',
      hidden: true,
      component: () => import('@/views/dashboard/index')
    }]
  }
}

/*
*hidden:是否显示在左侧导航栏（因为不是路由级，而是页面级，不控制方法页面）
* 规则：在导航栏里面显示的一定要在rData中注册
*/
export function powerRouterLazy(name) {
  const rData={
    home:{path: '/home', name: 'home', component: () => import('@/views/home')},
    red:{path: '/red', name: 'red', component: red},
    yellow:{path: '/yellow', name: 'yellow', component: yellow},
    blue:{path: '/blue', name: 'blue', component: blue},
    all:{path: '/all', name: 'all', component: all,  redirect: 'all1'},
    all1:{path: '/all1', name: 'all1', component: all1},
    all2:{path: '/all2', name: 'all2', component: all2, hidden: true},
    default:{path: '/404', name: '404', component: F404, hidden: true}
  }
  return rData[name]?rData[name]:rData['default']
}
