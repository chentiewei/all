(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7e2d8260"],{"0a09":function(t,s,i){"use strict";var a=i("84c7"),e=i.n(a);e.a},1000:function(t,s,i){"use strict";i.r(s);var a=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"g-details"},[i("div",{staticClass:"m-swiper"},[i("cube-slide",{attrs:{showDots:t.showDots,data:t.items}})],1),i("div",{staticClass:"m-msg"},[i("span",{staticClass:"s-title beyond"},[t._v(t._s(t.bit.proName))]),1==t.bit.sortId?i("div",{staticClass:"s-money"},[i("span",{staticClass:"total"},[t._v("\n        积分："+t._s(t.bit.price)+"\n      ")]),i("span",{staticClass:"pv"},[t._v("\n        PV:"+t._s(t.bit.integral)+"\n      ")])]):i("div",{staticClass:"s-money"},[i("span",{staticClass:"total"},[t._v("\n        元宝："+t._s(t.bit.price)+"\n      ")])]),i("div",{staticClass:"s-ps"},[i("span",{staticClass:"volume"},[t._v("\n        销量："+t._s(t.bit.saleVolume||0)+"件\n      ")])])]),i("div",{staticClass:"m-border"}),1==t.bit.sortId?i("router-link",{staticClass:"m-shop",attrs:{to:{name:"classifyDetails",query:{titlename:t.shop.name,shopId:t.shop.id}},tag:"div"}},[i("div",{staticClass:"s-img"},[i("img",{attrs:{src:t.shop.icon,alt:""}})]),i("div",{staticClass:"s-name"},[t._v(t._s(t.shop.name))]),i("div",{staticClass:"s-btn"},[t._v("\n      进入店铺\n      "),i("i")])]):t._e(),i("div",{staticClass:"m-border"}),i("div",{staticClass:"m-content"},[i("div",{staticClass:"s-title"},[t._v("\n      图文详情\n    ")]),i("div",{staticClass:"s-content"},t._l(t.pics,function(t,s){return i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"https://fx18.oss-cn-hangzhou.aliyuncs.com/"+t,expression:"'https://fx18.oss-cn-hangzhou.aliyuncs.com/'+v"}],key:s,attrs:{alt:""}})}))]),i("buyfixed",{attrs:{member:t.shop.username,proName:t.bit.proName,price:t.bit.price,sortId:t.bit.sortId,pic:t.bit.carousels[0]}})],1)},e=[],n=(i("ac6a"),i("a6f9")),o={name:"detail",data:function(){return{showDots:!1,bit:{carousels:[],proName:"",sortId:""},shop:{username:"请联系APP客服"},items:[],pics:[],shopName:""}},created:function(){this.details()},methods:{details:function(){var t=this;this.$post(this.$bee+"/api/product/productDetail",{id:this.$route.query.id}).then(function(s){200==s.code?(s.data.shop&&(t.shop=s.data.shop),t.bit=s.data.pro,t.pics=s.data.pro.pics,s.data.pro.carousels.forEach(function(s){t.items.push({url:"javascript:void(0)",image:"https://fx18.oss-cn-hangzhou.aliyuncs.com/"+s})})):t.$createToast({txt:s.message,type:"txt"}).show()})}},components:{buyfixed:n["a"]},beforeRouteLeave:function(t,s,i){"classifyDetails"==t.name&&(t.meta.title=this.shopName),i()}},c=o,r=(i("febb"),i("2877")),l=Object(r["a"])(c,a,e,!1,null,"40eb11b7",null);l.options.__file="detail.vue";s["default"]=l.exports},"2e6b":function(t,s,i){"use strict";var a=i("9374"),e=i.n(a);e.a},"7d98":function(t,s,i){"use strict";var a=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"allbk",style:{background:t.scolor}})},e=[],n={name:"allbk",props:["scolor"]},o=n,c=(i("2e6b"),i("2877")),r=Object(c["a"])(o,a,e,!1,null,"f4dddcea",null);r.options.__file="allBk.vue";s["a"]=r.exports},"84c7":function(t,s,i){},9374:function(t,s,i){},"93e1":function(t,s){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkZDMjQzREQ1RTk1MTExRThBNTRFRTQ2NjM5RUVEMzVBIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkZDMjQzREQ2RTk1MTExRThBNTRFRTQ2NjM5RUVEMzVBIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RkMyNDNERDNFOTUxMTFFOEE1NEVFNDY2MzlFRUQzNUEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RkMyNDNERDRFOTUxMTFFOEE1NEVFNDY2MzlFRUQzNUEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5Kks7JAAAByElEQVR42uyXO1LDMBCGLcWQ8LgCJRUFE5r05ASpnKukZZjhAhzCaUhLEx8gTULLNTK8iYXMKIxRVtZqJRsKa2YnGdmSP/+7q10zcReFGKL0P5fWQa8cCXCaB4DaAHumvpvyAFDQHom0+V+BvVjWX/ooRwV7k9bT5h6kPQPKkeBiwppPILgX0gYG9ybqd1ynYhsAalqCitT13Fc5F7AcuH9qUKIDZKtTQmDBHqUxJFQ5TN6pCYEBW0k7dYTajq60V4pbbWDFBufaXOYYyAeUmOMWqARQakjIZOeEYIZaOVfxQHGf61GTyXo5xCiW1gRlTogZS22KmdwXAkovZ72d54zEGAKDoDJiTFEbgB+4LVhTSmHgvmOuAIM6tQtpy6iZ8STtUG88oeC/bRCq6GCPgEOYmRT7dVNNSB9V3Q2mJPVrAottJ79NkTPD/Fp9hFTZmviyWWxwV9m9J4YWCOPiY3Wg7lvijIVorSeOcben1nj3/DaZrwkvU71mxiYhen6OzFrh4xke/dPRgrVgLVjDYxkC7AYoR67DeU2MeJuV6mZ9VOZaWbrSrt9jP9+Ew0MxJ7+tWUQX8UWDHSxzibEB0O7WMYwCfAkwAPi4e9NwDts7AAAAAElFTkSuQmCC"},"9e91":function(t,s,i){},a6f9:function(t,s,i){"use strict";var a=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"g-buyfixed"},[a("div",{staticClass:"m-fixed"},[a("router-link",{staticClass:"s-home",attrs:{to:{name:"index"},tag:"div"}},[a("img",{attrs:{src:i("93e1"),alt:""}}),a("span",[t._v("首页")])]),a("div",{staticClass:"s-serve",on:{click:t.finding}},[t._v("联系客服")]),a("div",{staticClass:"s-buy",on:{click:t.showState}},[t._v("立即购买")])],1),a("transition",{attrs:{name:"slide-fade"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.showdia,expression:"showdia"}],staticClass:"dialog-box"},[a("div",{staticClass:"m-choose"},[a("div",{staticClass:"top"},[a("div",{staticClass:"s-img"},[a("img",{attrs:{src:"https://fx18.oss-cn-hangzhou.aliyuncs.com/"+t.pic,alt:""}})]),a("div",{staticClass:"s-msg"},[a("div",{staticClass:"name beyond"},[t._v(t._s(t.proName))]),1==t.sortId||2==t.sortId?a("span",[t._v("积分："+t._s(t.price))]):a("span",[t._v("元宝："+t._s(t.price))])])]),a("div",{staticClass:"center after"},[a("div",{staticClass:"s-number"},[t._v("数量")]),a("div",{staticClass:"s-adjustment"},[a("span",{staticClass:"sub",on:{click:function(s){t.count("sub")}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.number,expression:"number"}],attrs:{type:"number",pattern:"[0-9]*"},domProps:{value:t.number},on:{blur:t.reduceCartNum,input:function(s){s.target.composing||(t.number=s.target.value)}}}),a("span",{staticClass:"add",on:{click:function(s){t.count("add")}}})])]),a("div",{staticClass:"bottom s-btn",on:{click:t.orderGo}},[t._v("确认")]),a("i",{staticClass:"s-close",on:{click:t.showState}})])])]),a("allbk",{directives:[{name:"show",rawName:"v-show",value:t.showdia,expression:"showdia"}]})],1)},e=[],n=(i("cadf"),i("551c"),i("097d"),i("7d98")),o={name:"buyfixed",props:["member","price","proName","sortId","activityId","pic"],data:function(){return{showdia:!1,number:1}},methods:{showState:function(){this.showdia=!this.showdia},count:function(t){"add"==t?this.number++:"sub"==t&&this.number>1&&this.number--},reduceCartNum:function(){this.number<=0&&(this.number=1,this.$createToast({txt:"不能小于0哦",type:"warn"}).show())},finding:function(){var t=this;this.$createDialog({type:"alert",title:"会员号："+t.member}).show()},orderGo:function(){this.$store.commit("ORDERSAVE",{number:this.number,proId:this.$route.query.id,activityId:this.activityId}),this.$router.push({name:"orderConfirm"})}},components:{allbk:n["a"]}},c=o,r=(i("0a09"),i("2877")),l=Object(r["a"])(c,a,e,!1,null,"586de5a6",null);l.options.__file="buyfixed.vue";s["a"]=l.exports},febb:function(t,s,i){"use strict";var a=i("9e91"),e=i.n(a);e.a}}]);
//# sourceMappingURL=chunk-7e2d8260.0891d900.js.map