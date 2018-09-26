import Vue from 'vue'
import Router from 'vue-router'

const All = resolve => require(['@/components/all'], resolve);
const home = resolve => require(['@/components/index/index'], resolve);/*首页*/
const car = resolve => require(['@/components/car/car'], resolve);/*买车*/
const tg = resolve => require(['@/components/tg/tg'], resolve);/*团购*/
const userCenter = resolve => require(['@/components/center/usercenter'], resolve);/*个人中心*/

const cardetails = resolve => require(['@/components/car/cardetails'], resolve);/*买车-内页*/
const tgdetails = resolve => require(['@/components/tg/tgdetails'], resolve);/*团购-内页*/
const parameter = resolve => require(['@/components/common/parameter'], resolve);/*内页-参数配置*/
const citychoose = resolve => require(['@/components/common/citychoose'], resolve);/*地址选择*/
const brandchoose = resolve => require(['@/components/common/brandchoose'], resolve);/*品牌选择*/
const contrast = resolve => require(['@/components/contrast/contrast'], resolve);/*车辆对比*/
const carchoose = resolve => require(['@/components/contrast/carchoose'], resolve);/*选择品牌*/
const contrastdetails = resolve => require(['@/components/contrast/contrastdetails'], resolve);/*对比详情页*/

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/all',
      name: 'All',
      component: All,
      redirect: '/home',
      children:[         
        { path: '/home', name: 'home', meta: { title: '首页',keepalive:true }, component: home },
        { path: '/car', name: 'car', meta: { title: '买车',keepalive:true }, component: car },
        { path: '/tg', name: 'tg', meta: { title: '团购',keepalive:true }, component: tg },
        { path: '/userCenter', name: 'userCenter', meta: { title: '个人中心',keepalive:true }, component: userCenter }
      ]
    },

    { path: '/cardetails', name: 'cardetails', meta: { title: '买车内页',keepalive:true }, component: cardetails },
    { path: '/tgdetails', name: 'tgdetails', meta: { title: '团购内页',keepalive:true }, component: tgdetails },
    { path: '/parameter', name: 'parameter', meta: { title: '配置参数',keepalive:true }, component: parameter },
    { path: '/citychoose', name: 'citychoose', meta: { title: '地址选择',keepalive:true }, component: citychoose },
    { path: '/brandchoose', name: 'brandchoose', meta: { title: '品牌选择',keepalive:true }, component: brandchoose },
    { path: '/contrast', name: 'contrast', meta: { title: '车辆对比',keepalive:true }, component: contrast },
    { path: '/carchoose', name: 'carchoose', meta: { title: '选择品牌',keepalive:true }, component: carchoose },
    { path: '/contrastdetails', name: 'contrastdetails', meta: { title: '车型对比',keepalive:true }, component: contrastdetails }
  ]
})
