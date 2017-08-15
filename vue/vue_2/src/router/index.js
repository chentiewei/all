import Vue from 'vue'
import Router from 'vue-router'

/*footer组件*/
import index from '@/components/footer'
/*首页*/
import center from '@/components/serviceCenter'
/*维修*/
import maintenance from '@/components/maintenanceService'
/*装修*/
import repair from '@/components/repairService'
/*个人中心*/
import personal from '@/components/personalCenter'
import editUser from '@/components/userCenter/editUser'
import myOreder from '@/components/userCenter/myOrder'
import userDraw from '@/components/userCenter/userDraw'
/*我的订单详情*/
import orderDetail from '@/components/userCenter/orderDetail'
/*产品详情*/
import produictList from '../components/productList'
Vue.use(Router)

export default new Router({
    linkActiveClass: 'active',
    mode: 'history',
    routes: [
        {
            path: '/',component: index,
            redirect: 'maintenance',
            children: [
                {path: 'center', name: 'center', component: center},
                {path: 'maintenance', name: 'maintenance', component: maintenance},
                {path: 'repair', name: 'repair', component: repair},
                {path: 'personal', name: 'personal', component: personal},
            ]
        },
        {path:'/editUser',name:'editUser',component:editUser},
        {path:'/myOreder',name:'myOreder',component:myOreder},
        {path:'/userDraw',name:'userDraw',component:userDraw},
        {path:'/orderDetail/:orderid',name:'orderDetail',component:orderDetail},
        {path:'/productList',name:'productList',component:produictList},
    ]
})
