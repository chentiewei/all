import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { powerRouterLazy,topRouter } from './router';//添加一个powerRouterLazy加载
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import "@/assets/css/common.styl"

let generaMenu = (obj,data) =>{
  data.forEach((v,i)=>{
    let bit=powerRouterLazy(v.name);
    obj.push(bit)
    if(v.children){
      if(!obj[i+1].children){obj[i+1].children=[]}//没有children则赋值
      generaMenu(obj[i+1].children,v.children)//递归children
    }
  })
}

router.beforeEach((to, from, next) => {
  let _role=store.getters.role
  if(_role){ //判断role 是否存在
    if(store.getters.newrouter.length !== 0){//判断newrouter是否为空
      next()
    }else{
      let newrouter=[topRouter()]
      generaMenu(newrouter[0].children,_role)/*router循环*/
      router.addRoutes(newrouter) //添加动态路由
      store.dispatch('Roles',newrouter).then(res => {
        next({...to})
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

Vue.config.productionTip = false
Vue.use(ElementUI)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
