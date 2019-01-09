import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { powerRouter } from './router';
import store from './store'
import './plugins/element.js'

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  let _role=store.getters.role
  if(_role){ //判断role 是否存在
    if(store.getters.newrouter.length !== 0){
      next();
    }else{
      let newrouter=[];
      _role.forEach((i)=>{
        powerRouter.forEach((k)=>{
          if(k.name==i.name){
            newrouter.push(k)
          }
        })
      })
      router.addRoutes(newrouter) //添加动态路由
      store.dispatch('Roles',newrouter).then(res => {
        next({ ...to })
      }).catch(() => {

      })
    }
  }else{
    if (['/login'].indexOf(to.path) !== -1) {
      next()
    } else {
      next('/login')
    }
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
