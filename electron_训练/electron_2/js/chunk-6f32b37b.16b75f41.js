(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6f32b37b"],{"8e09":function(s,t,i){"use strict";var a=i("e550"),e=i.n(a);e.a},cc14:function(s,t,i){"use strict";i.r(t);var a=function(){var s=this,t=s.$createElement,i=s._self._c||t;return i("div",{staticClass:"g-extension scroll-list-wrap"},[i("cube-scroll",{ref:"scroll",attrs:{data:s.list,options:s.options},on:{"pulling-down":s.onPullingDown,"pulling-up":s.onPullingUp}},[i("div",{staticClass:"m-title"},[i("div",{staticClass:"s-img"},[i("img",{attrs:{src:s.user.pic,alt:""}})]),i("div",{staticClass:"s-msg"},[i("div",{staticClass:"name"},[s._v(s._s(s.user.username))]),i("div",{staticClass:"level"},[s._v(s._s(1==s.user.vip?"普通会员":2==s.user.vip?"vip会员":"超级VIP会员"))])])]),i("div",{staticClass:"m-Profit"},[i("div",{staticClass:"s-today"},[i("div",{staticClass:"title"},[s._v("今日收益")]),i("div",{staticClass:"jf"},[s._v("积分："+s._s(s.today.integral||0))]),i("div",{staticClass:"yb"},[s._v("元宝："+s._s(s.today.ingots||0))])]),i("div",{staticClass:"s-all"},[i("div",{staticClass:"title"},[s._v("累计收益")]),i("div",{staticClass:"jf"},[s._v("积分："+s._s(s.all.integral||0))]),i("div",{staticClass:"yb"},[s._v("元宝："+s._s(s.all.ingots||0))])])]),i("div",{staticClass:"m-border"}),i("div",{staticClass:"m-bill"},[i("div",{staticClass:"s-title"},[s._v("收益明细")]),s._l(s.list,function(t,a){return i("div",{staticClass:"s-details"},[i("div",{staticClass:"img"},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.subordinateHead,expression:"v.subordinateHead"}],attrs:{alt:""}})]),i("div",{staticClass:"usermsg"},[i("span",{staticClass:"level"},[s._v(s._s(1==t.rank?"一级":"二级"))]),i("span",{staticClass:"phone"},[s._v(s._s(t.subordinateId))])]),i("div",{staticClass:"orderDetails"},[i("span",{staticClass:"orderNumber"},[s._v("订单号："+s._s(t.orderNumber))]),i("span",{staticClass:"time"},[s._v(s._s(t.createTimeStr))])]),i("div",{staticClass:"earn"},[i("span",[s._v(s._s(1==t.currency?"积分 ":"元宝"))]),i("span",[s._v(s._s(t.money))])])])})],2)])],1)},e=[],l=(i("ac6a"),{name:"extension",data:function(){return{list:[],today:{},all:{},user:{},options:{scrollbar:{fade:!0},pullUpLoad:{txt:{noMore:"没有更多数据了"}},pullDownRefresh:{stopTime:0,txt:" "}},bit:{page:1,username:sessionStorage.getItem("userid")}}},created:function(){this.userMsg(),this.billList()},methods:{userMsg:function(){var s=this;this.$post(this.$bee+"/api/user/userDetail",{username:this.bit.username}).then(function(t){200==t.code?s.user=t.data.user:s.$refs.scroll.forceUpdate()})},billList:function(){var s=this;this.$post(this.$bee+"/api/user/listPromotion",this.bit).then(function(t){200==t.code&&0!=t.data.records.length?(s.today=t.data.today,s.all=t.data.all,t.data.records.forEach(function(t){s.list.push(t)}),s.bit.page++):s.$refs.scroll.forceUpdate()})},onPullingDown:function(){this.bit.page=1,this.list=[],this.billList()},onPullingUp:function(){this.billList()}}}),n=l,r=(i("8e09"),i("2877")),o=Object(r["a"])(n,a,e,!1,null,"494d32da",null);o.options.__file="extension.vue";t["default"]=o.exports},e550:function(s,t,i){}}]);
//# sourceMappingURL=chunk-6f32b37b.16b75f41.js.map