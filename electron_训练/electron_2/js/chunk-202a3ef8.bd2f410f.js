(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-202a3ef8"],{"3acf":function(t,i,s){"use strict";s.r(i);var e=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"g-bill"},[s("div",{staticClass:"m-tab"},[s("div",{class:{active:1==t.tabs},on:{click:function(i){t.tabed(1)}}},[t._v("积分")]),s("div",{class:{active:2==t.tabs},on:{click:function(i){t.tabed(2)}}},[t._v("元宝")])]),s("div",{staticClass:"m-panel scroll-list-wrap"},[s("cube-scroll",{ref:"scroll",attrs:{data:t.list,options:t.options},on:{"pulling-down":t.onPullingDown,"pulling-up":t.onPullingUp}},[s("ul",t._l(t.list,function(i,e){return s("li",{key:e,staticClass:"tab-panel-li"},[s("span",{staticClass:"time"},[t._v(t._s(i.createTimeStr))]),s("span",{staticClass:"action"},[t._v("\n            "+t._s("1"==i.type?"充值":"2"==i.type?"消费":"3"==i.type?"分成":"收入")+"\n          ")]),s("span",{staticClass:"number"},[t._v(t._s(i.money))])])}))])],1)])},n=[],a={name:"bill",data:function(){return{tabs:1,list:[],options:{scrollbar:{fade:!0},pullUpLoad:{txt:{noMore:"没有更多数据了"}},pullDownRefresh:{stopTime:0,txt:" "}},bit:{username:sessionStorage.getItem("userid"),page:1,pageSize:100,currency:1}}},created:function(){this.jf()},methods:{tabed:function(t){this.tabs=t,this.bit.currency=t,this.bit.page=1,this.list=[],1==t?this.jf():this.yb()},onPullingDown:function(){this.bit.page=1,this.list=[],1==this.bit.currency?this.jf():this.yb()},onPullingUp:function(){1==this.bit.currency?this.jf():this.yb()},jf:function(){var t=this;this.bit.currency=1,this.$post(this.$bee+"/api/user/listBill",this.bit).then(function(i){200==i.code&&0!=i.data.records.length?(t.list=i.data.records,t.bit.page++):t.$refs.scroll.forceUpdate()})},yb:function(){var t=this;this.bit.currency=2,this.$post(this.$bee+"/api/user/listBill",this.bit).then(function(i){200==i.code&&0!=i.data.records.length?(t.list=i.data.records,t.bit.page++):t.$refs.scroll.forceUpdate()})}}},c=a,l=(s("41a2"),s("2877")),o=Object(l["a"])(c,e,n,!1,null,"567dbce2",null);o.options.__file="bill.vue";i["default"]=o.exports},"41a2":function(t,i,s){"use strict";var e=s("ccd2"),n=s.n(e);n.a},ccd2:function(t,i,s){}}]);
//# sourceMappingURL=chunk-202a3ef8.bd2f410f.js.map