import Vue from 'vue'
import Router from 'vue-router'
const index = resolve => require(['@/components/index'], resolve);/*首页*/
const buycar = resolve => require(['@/components/buycar'], resolve);/*买车*/
const teambuying = resolve => require(['@/components/teambuying'], resolve);/*团购*/
const exhibition = resolve => require(['@/components/exhibition'], resolve);/*展厅*/
const comparedetails = resolve => require(['@/components/comparedetails'], resolve);/*车辆对比*/
const teamdetails = resolve => require(['@/components/teamdetails'], resolve);/*买车-车辆详情*/
const cardetails = resolve => require(['@/components/cardetails'], resolve);/*买车-车辆详情*/
const configure = resolve => require(['@/components/coment/configure'], resolve);/*车辆详情-配置参数*/
const dot = resolve => require(['@/components/coment/dot'], resolve);/*车辆详情-车量亮点*/
const flow = resolve => require(['@/components/coment/flow'], resolve);/*车辆详情-购车流程*/
const customer = resolve => require(['@/components/coment/customer'], resolve);/*车辆详情-报名客户*/
const dealer = resolve => require(['@/components/coment/dealer'], resolve);/*车辆详情-认证经销商*/
const feature = resolve => require(['@/components/coment/feature'], resolve);/*车辆详情-现场花絮*/

Vue.use(Router)

export default new Router({
  linkActiveClass:'active',
  routes: [
    {path: '/',redirect: '/index'},
    {path: '/index',name: 'index', meta: { title: '首页',keepalive:true },component: index},
    {path: '/buycar',name: 'buycar', meta: { title: '买车',keepalive:true },component: buycar},
    {path: '/teambuying',name: 'teambuying', meta: { title: '团购',keepalive:true },component: teambuying},
    {path: '/exhibition',name: 'exhibition', meta: { title: '数字智能展厅',keepalive:true },component: exhibition},
    {path: '/comparedetails',name: 'comparedetails', meta: { title: '车辆对比',keepalive:true },component: comparedetails},
    {
      path: '/cardetails',
      name: 'cardetails',
      meta: { title: '车辆详情',keepalive:true,actived:true },
      component: cardetails,
      redirect: '/cardetails/dot',
      children:[
        // { path: 'configure', name: 'configure', component: configure },
        { path: 'dot', name: 'dot', component: dot ,meta: { caractived:true }},
        { path: 'flow', name: 'flow', component: flow ,meta: { caractived:true }},
        { path: 'customer', name: 'customer', component: customer ,meta: { caractived:true }},
      ]
    },
    {
      path: '/teamdetails',
      name: 'teamdetails',
      meta: { title: '车辆详情',keepalive:true },
      component: teamdetails,
      redirect: '/teamdetails/teamDealer',
      children:[
        // { path: 'teamConfigure', name: 'teamConfigure', component: configure },
        { path: 'teamDot', name: 'teamDot', component: dot ,meta: { teamactived:true }},
        { path: 'teamFlow', name: 'teamFlow', component: flow ,meta: { teamactived:true }},
        { path: 'teamCustomer', name: 'teamCustomer', component: customer ,meta: { teamactived:true }},
        { path: 'teamDealer', name: 'teamDealer', component: dealer ,meta: { teamactived:true }},
        { path: 'teamFeature', name: 'teamFeature', component: feature ,meta: { teamactived:true }},
      ]
    }
  ]
})
