<template>
  <div class="contrastdetails" ref="contrastdetails">
    <div class="sticky" ref="sticky">
      <section class="compare">
        <div class="left" @click="equal">
          <div>
            <img v-if="!equaling" src="../../assets/images/equal.png" alt="">
            <img v-else src="../../assets/images/equalHover.png" alt="">
          </div>
          <p v-if="!equaling">隐藏相同</p>
          <p v-else>查看相同</p>
        </div>
        <div class="main" ref="compare">
          <div class="slide" ref="compare_list">
            <div class="column" v-for="(v,i) in list">
              <h4>{{v.name}}</h4>
              <p class="price">{{v.money}}</p>
              <span @click="removed(i)"></span>
            </div>
            <div class="column columnadd">
              <i class="add"></i>
              <b>添加车型</b>
            </div>
          </div>
        </div>
      </section>
      <section v-show="false" class="markbar">
        <strong>基本参数</strong>
        <span class="markup">
          <em><i class="doted"></i>标配</em>
          <em><i class="dot"></i>选配</em>
          <em><i class="dotno"></i>无</em>
        </span>
      </section>
    </div>
    <div>
      <section class="details">
        <div class="left">
          <div class="group" v-for="(v,i) in nameList" v-show="v.groupshow" >
            <div class="h4div" :class="{h4fixed:v.h4Show}" ref="h4">
              <h4>
                <strong>{{v.name}}</strong>
                <span class="markup">
                  <em><i class="doted"></i>标配</em>
                  <em><i class="dot"></i>选配</em>
                  <em><i class="dotno"></i>无</em>
                </span>
              </h4>
            </div>
            <div class="item" v-for="(k,j) in v.data" v-show="k.show"><span class="inner item-differ highlight">{{k.name}}</span></div>
          </div>
        </div>
        <div class="main" ref="detail">
          <div class="slide" ref="detail_list">
            <div class="data">
              <div class="group" v-for="(v,i) in nameList"  v-show="v.groupshow" :id="'anchor-'+v.id">
                <div class="item" v-for="(k,j) in v.data" v-if="k.show">
                  <span class="inner item-differ" v-for="(s,z) in k.mlist"><strong>{{s}}</strong></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <div class="nav-dia" @click="navshow=0" v-show="navshow"></div>
    <div class="fixed-navcontent"  v-show="navshow">
      <ul>
        <li v-for="(v,i) in nameList" v-show="v.groupshow" @click="goAnchor('#anchor-'+v.id,v.id)" :class="{'active':activeBtn==(i+1)}">{{v.name}}</li>
      </ul>
    </div>
    <div class="fixed-nav" @click="navshow=1" v-show="!navshow"></div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name: "contrastdetails",
    data(){
      return {
        equaling:1,/*查看相同*/
        navshow:0,/*锚点导航状态*/
        activeBtn: 1,/*锚点按钮激活*/
        nameList:[],
        // nameList:[{
        //   name:'基本参数1',/*组名称*/
        //   groupshow:1,/*是否显示组*/
        //   id:1,/*id*/
        //   h4Show:false,/*h4是否为true,为true添加class*/
        //   data:{
        //     1:{
        //       name:'厂商指导价(元)1',
        //       mlist:['110.00万','110.00万','110.00万','110.00万'],
        //       show:1/*是否显示该栏目*/
        //     },
        //     2:{
        //       name:'厂商指导价(元)2',
        //       mlist:['110.00万','110.00万','110.00万','110.00万'],
        //       show:1
        //     },
        //     3:{
        //       name:'厂商指导价(元)3',
        //       mlist:['110.00万','110.00万','110.00万','110.00万'],
        //       show:1
        //     },
        //     4:{
        //       name:'厂商指导价(元)4',
        //       mlist:['110.00万','110.00万','110.00万','110.00万'],
        //       show:1
        //     },
        //     5:{
        //       name:'厂商指导价(元)5',
        //       mlist:['110.00万','110.00万','110.00万','110.00万'],
        //       show:1
        //     },
        //     6:{
        //       name:'厂商指导价(元)6',
        //       mlist:['110.00万','110.00万','110.00万','110.00万'],
        //       show:1
        //     },
        //     7:{
        //       name:'厂商指导价(元)7',
        //       mlist:['110.00万','110.00万','110.00万','110.00万'],
        //       show:1
        //     },
        //     8:{
        //       name:'厂商指导价(元)8',
        //       mlist:['110.00万','110.00万','110.00万','110.00万'],
        //       show:1
        //     },
        //     9:{
        //       name:'厂商指导价(元)9',
        //       mlist:['110.00万','110.00万','110.00万','110.00万'],
        //       show:1
        //     },
        //     10:{
        //       name:'厂商指导价(元)10',
        //       mlist:['110.00万','110.00万','110.00万','110.00万'],
        //       show:1
        //     },
        //   }
        // },{
        //   name:'基本参数2',
        //   groupshow:1,
        //   id:2,
        //   h4Show:false,
        //   data:{
        //     1:{
        //       name:'厂商指导价(元)1',
        //       mlist:['110.00万','110.00万','110.00万','110.00万'],
        //       show:1
        //     },
        //     2:{
        //       name:'厂商指导价(元)2',
        //       mlist:['110.00万','110.00万','110.00万','110.00万'],
        //       show:1
        //     },
        //     3:{
        //       name:'厂商指导价(元)3',
        //       mlist:['110.00万','110.00万','110.00万','110.00万'],
        //       show:1
        //     },
        //     4:{
        //       name:'厂商指导价(元)4',
        //       mlist:['110.00万','110.00万','110.00万','110.00万'],
        //       show:1
        //     },
        //     5:{
        //       name:'厂商指导价(元)5',
        //       mlist:['110.00万','110.00万','110.00万','110.00万'],
        //       show:1
        //     },
        //     6:{
        //       name:'厂商指导价(元)6',
        //       mlist:['110.00万','110.00万','110.00万','110.00万'],
        //       show:1
        //     },
        //     7:{
        //       name:'厂商指导价(元)7',
        //       mlist:['110.00万','110.00万','110.00万','110.00万'],
        //       show:1
        //     },
        //     8:{
        //       name:'厂商指导价(元)8',
        //       mlist:['110.00万','110.00万','110.00万','110.00万'],
        //       show:1
        //     },
        //     9:{
        //       name:'厂商指导价(元)9',
        //       mlist:['110.00万','110.00万','110.00万','110.00万'],
        //       show:1
        //     },
        //     10:{
        //       name:'厂商指导价(元)10',
        //       mlist:['110.00万','110.00万','110.00万','110.00万'],
        //       show:1
        //     },
        //   }
        // },{
        //   name:'基本参数3',
        //   groupshow:1,
        //   id:3,
        //   h4Show:false,
        //   data:{
        //     1:{
        //       name:'厂商指导价(元)1',
        //       mlist:['110.00万','110.00万','110.00万','110.00万'],
        //       show:1
        //     },
        //     2:{
        //       name:'厂商指导价(元)2',
        //       mlist:['110.00万','110.00万','110.00万','110.00万'],
        //       show:1
        //     },
        //     3:{
        //       name:'厂商指导价(元)3',
        //       mlist:['110.00万','110.00万','110.00万','110.00万'],
        //       show:1
        //     },
        //     4:{
        //       name:'厂商指导价(元)4',
        //       mlist:['110.00万','110.00万','110.00万','110.00万'],
        //       show:1
        //     },
        //     5:{
        //       name:'厂商指导价(元)5',
        //       mlist:['110.00万','110.00万','110.00万','110.00万'],
        //       show:1
        //     },
        //     6:{
        //       name:'厂商指导价(元)6',
        //       mlist:['110.00万','110.00万','110.00万','110.00万'],
        //       show:1
        //     },
        //     7:{
        //       name:'厂商指导价(元)7',
        //       mlist:['110.00万','110.00万','110.00万','110.00万'],
        //       show:1
        //     },
        //     8:{
        //       name:'厂商指导价(元)8',
        //       mlist:['110.00万','110.00万','110.00万','110.00万'],
        //       show:1
        //     },
        //     9:{
        //       name:'厂商指导价(元)9',
        //       mlist:['110.00万','110.00万','110.00万','110.00万'],
        //       show:1
        //     },
        //     10:{
        //       name:'厂商指导价(元)10',
        //       mlist:['110.001万','110.00万','110.00万','110.00万'],
        //       show:1
        //     },
        //   }
        // },{
        //   name:'基本参数4',
        //   groupshow:1,
        //   id:4,
        //   h4Show:false,
        //   data:{
        //     1:{
        //       name:'厂商指导价(元)1',
        //       mlist:['110.00万','110.00万','110.00万','110.00万'],
        //       show:1
        //     },
        //     2:{
        //       name:'厂商指导价(元)2',
        //       mlist:['110.00万','110.00万','110.00万','110.00万'],
        //       show:1
        //     },
        //     3:{
        //       name:'厂商指导价(元)3',
        //       mlist:['110.00万','110.00万','110.00万','110.00万'],
        //       show:1
        //     },
        //     4:{
        //       name:'厂商指导价(元)4',
        //       mlist:['110.00万','110.00万','110.00万','110.00万'],
        //       show:1
        //     },
        //     5:{
        //       name:'厂商指导价(元)5',
        //       mlist:['110.00万','110.00万','110.00万','110.00万'],
        //       show:1
        //     },
        //     6:{
        //       name:'厂商指导价(元)6',
        //       mlist:['110.00万','110.00万','110.00万','110.00万'],
        //       show:1
        //     },
        //     7:{
        //       name:'厂商指导价(元)7',
        //       mlist:['110.00万','110.00万','110.00万','110.00万'],
        //       show:1
        //     },
        //     8:{
        //       name:'厂商指导价(元)8',
        //       mlist:['110.00万','110.00万','110.00万','110.00万'],
        //       show:1
        //     },
        //     9:{
        //       name:'厂商指导价(元)9',
        //       mlist:['110.00万','110.00万','110.00万','110.00万'],
        //       show:1
        //     },
        //     10:{
        //       name:'厂商指导价(元)10',
        //       mlist:['110.00万','110.00万','110.00万','110.00万'],
        //       show:1
        //     },
        //   }
        // }],
        // list:[{
        //   name:'AC Schnitzer X5 201511111111111111111111111111111款 ACS35 35i',
        //   money:'110.00万',
        //   id:1
        // },{
        //   name:'AC Schnitzer X5 201511111111111111111111111111111款 ACS35 35i',
        //   money:'110.00万',
        //   id:1
        // },{
        //   name:'AC Schnitzer X5 201511111111111111111111111111111款 ACS35 35i',
        //   money:'110.00万',
        //   id:1
        // },{
        //   name:'AC Schnitzer X5 201511111111111111111111111111111款 ACS35 35i',
        //   money:'110.00万',
        //   id:1
        // }],
        list:[],
        detail:'',
        compare:'',

        datas:[],
        index:0
      }
    },
    created(){
      var ids = this.$route.query.ids;   
      this.getInfo(ids);
    },
    mounted (){
      this.$nextTick(() => {
        this.widthSet();
        this._initScroll();
        this.scrolled();
        window.addEventListener('scroll',this.scrolled,true);
      })
    },
    methods:{
      _initScroll(){/*对比车型左右滑动*/
        this.compare = new BScroll(this.$refs.compare, {
          probeType: 3,
          eventPassthrough: true,
          scrollX: true,
          scrollY: false
        })

        this.detail = new BScroll(this.$refs.detail, {
          probeType: 3,
          eventPassthrough: true,
          scrollX: true,
          scrollY: true
        })
        this.detail.on('scroll', (pos) => {
          this.compare.scrollTo(pos.x, 0)
        })
        this.compare.on('scroll', (pos) => {
          this.detail.scrollTo(pos.x, 0)
        })
      },
      removed(_i){/*删除特定元素*/
        this.list.splice(_i,1);
        this.nameList.forEach((v,i)=>{
          for(let i in v.data){
            v.data[i].mlist.splice(_i,1)
          }
        })
        this.$nextTick(() => {/*重置宽度*/
          this.widthSet();
        })
      },
      widthSet(){/*设置宽度*/
        let widthStyle =this.$refs.compare_list.offsetWidth
        this.$refs.detail_list.style.width=widthStyle+'px'
        /*出去元素时使位置一致*/
        let _transform=this.$refs.compare_list.style.transform
        this.$refs.detail_list.style.transform=_transform
      },
      scrolled(){/*fixed-tab添加class(h4fixed)*/
        var _this=this;
        this.$refs.h4.forEach((v,i)=>{
          if(v.getBoundingClientRect().top<(this.$refs.sticky.getBoundingClientRect().height+v.getBoundingClientRect().height+v.getBoundingClientRect().height/2)){
            this.nameList[i].h4Show=1;
          }else{
            this.nameList[i].h4Show=0;
          }
        })
      },
      equal(){/*查看隐藏异同*/
        let _this=this;
        this.equaling=!this.equaling;
        function equals(arr){/*判断元素是否相同*/
          let bool=true;
          for(let i=1,len=arr.length;i<len;i++){
            if(arr[i]!==arr[0]){bool=false}
          }
          return bool
        }
        if(this.equaling){/*隐藏相同*/
          this.nameList.forEach((v,i)=>{
            let kid=1;
            for(let j in v.data){
              if(equals(v.data[j].mlist)){
                v.data[j].show=0;
              }else{
                v.data[j].show=1;
                kid=0;
              }
            }
            if(kid){
              v.groupshow=0;
            }
          })
        }else{/*查看不同*/
          this.nameList.forEach((v,i)=>{
            for(let j in v.data){
              v.data[j].show=1;
              v.groupshow=1;
            }
          })
        }
        this.scrolled();
      },
      goAnchor(selector,index) {/*锚点跳转*/
        let anchor = this.$el.querySelector(selector)
        window.scroll(0, anchor.offsetTop)
        this.navshow=0;
        this.activeBtn=index;
      },
      getInfo(ids){
        var cabs = ids.split(",");
        for(var i = 0 ; i < cabs.length ; i ++){
          this.$axios.get("/sys/car_type/config",{carTypeId:cabs[i]}).then((res) => {
            this.index ++;
            if(!this.$util.empty(res)){
              this.datas.push(res);
            }
            if (this.index == cabs.length) {
              this.showInfo();
            }
          })
        }     
      },
      showInfo(){
        if(this.datas.length>0){
          var item = this.datas[0];
          var paramtypeitems = item.data1.result.paramtypeitems;
          var n = 0;
          for(var j = 0 ; j < paramtypeitems.length ; j ++){
            var pmname = paramtypeitems[j].name;
            var pms = paramtypeitems[j].paramitems;
            var pm = {name:pmname,groupshow:1,id:j+1,h4Show:false,data:{}};

            for(var m = 0 ; m < pms.length ; m ++){
              pm.data[m+1] = {name:pms[m].name,mlist:[pms[m].valueitems[0].value],show:1};
            }
            this.nameList.push(pm);
            n++;
          }
          var configtypeitems = item.data2.result.configtypeitems;
          for(var j = 0 ; j < configtypeitems.length ; j ++){
            var pmname = configtypeitems[j].name;
            var pms = configtypeitems[j].configitems;
            var pm = {name:pmname,groupshow:1,id:n+j+1,h4Show:false,data:{}};
            for(var m = 0 ; m < pms.length ; m ++){
              pm.data[m+1] = {name:pms[m].name,mlist:[pms[m].valueitems[0].value],show:1};
            }
            this.nameList.push(pm);
          }
        }
       
        // for(var i = 1 ; i < this.datas.length ; i ++){
        //   var item = this.datas[i];
        //   var paramtypeitems = item.data1.result.paramtypeitems;
        //   var hasSameName = false;
        //   var n = 0;
        //   for(var j = 0 ; j < paramtypeitems.length ; j ++){
        //     var pmname = paramtypeitems[j].name;
        //     var pms = paramtypeitems[j].paramitems;
        //     var pm = {name:pmname,groupshow:1,id:j+1,h4Show:false,data:{}};

        //     for(var m = 0 ; m < pms.length ; m ++){
        //       pm.data[m+1] = {name:pms[m].name,mlist:[pms[m].valueitems[0].value],show:1};
        //     }
        //     this.nameList.push(pm);
        //     n++;
        //   }
        //   var configtypeitems = item.data2.result.configtypeitems;
        //   for(var j = 0 ; j < configtypeitems.length ; j ++){
        //     var pmname = configtypeitems[j].name;
        //     var pms = configtypeitems[j].configitems;
        //     var pm = {name:pmname,groupshow:1,id:n+j+1,h4Show:false,data:{}};
        //     for(var m = 0 ; m < pms.length ; m ++){
        //       pm.data[m+1] = {name:pms[m].name,mlist:[pms[m].valueitems[0].value],show:1};
        //     }
        //     this.nameList.push(pm);
        //   }
        // }
        this.datas.forEach(element=>{
          this.list.push({name:element.data3.brandName+" "+element.data3.seriesName+" "+element.data3.carTypeName ,money:element.data3.guidePrice+"万元",id:element.data3.id});          
        })
      }
    },
    destroyed(){
      window.removeEventListener('scroll',this.scrolled);
    }
  }
</script>

<style scoped lang="stylus">
  .sticky
    position fixed
    top 145px
    z-index 100
  .compare
    height 250px
    background #fff
    .left
      text-align center
      width 300px
      height 250px
      display table-cell
      vertical-align middle
      background #fafafa
      border-bottom solid #d4d4d4 1px
      &>div
        width 110px
        height 85px
        line-height 85px
        margin 0 auto
      img
        width 110px
        vertical-align middle
      p
        font-size 33px
        margin-top 30px
        color #1b1b1b
    .main
      position: relative;
      display: table-cell;
      width 780px
      overflow: hidden;
      .slide
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        font-size: 0;
        white-space: nowrap;
      .column
        position relative
        width 350px
        display inline-block
        height 100%
        vertical-align top
        border-right solid #d4d4d4 1px
        box-sizing border-box
        border-bottom solid #d4d4d4 1px
        h4
          height 3em
          padding 0 35px
          margin-top 65px
          color #1b1b1b
          font-size 32px
          line-height 1.5
          overflow hidden
          display -webkit-box
          white-space normal
          -webkit-line-clamp 2
          -webkit-box-orient vertical
        p
          color #e83644
          font-size 32px
          text-align center
          margin-top 20px
        span
          position: absolute;
          top: 20px;
          right: 20px;
          z-index: 10;
          width: 40px
          height: 40px
          color: #eee;
          background url(../../assets/images/close.png) no-repeat center center
          background-size 100% 100%
        i
          position: absolute;
          top: 40%;
          left: 50%;
          width: 65px
          height: 65px
          margin-left -32.5px
          margin-top -32.5px
          color: #999;
          background url(../../assets/images/add.png) no-repeat center center
          background-size 100% 100%
        b
          width 100%
          display inline-block
          font-weight normal
          color #bfbfbf
          font-size 32px
          margin-top 170px
          text-align center
  .markbar
    position relative
    z-index 1
    width 100vw
    height 90px
    padding 25px 0
    font-size 36px
    color #fff
    background-color #a0a0a0
    pointer-events none
    box-sizing border-box
    strong
      margin-left 40px
    .markup
      position: absolute;
      top: 25px
      right: 40px
      font-size: 0;
      em
        font-size: 36px
        margin-left: 45px
        font-style: normal;
        i
          width 20px
          height 20px
          display inline-block
          vertical-align middle
          margin-right 10px
          &.dot
            background url(../../assets/images/dot.png) no-repeat center center
            background-size 100% 100%
          &.doted
            background url(../../assets/images/doted.png) no-repeat center center
            background-size 100% 100%
          &.dotno
            width 25px
            height 8px
            background url(../../assets/images/dotno.png) no-repeat center center
            background-size 100% 100%
  .details
    display: table;
    width: 100%;
    background-color: #fff;
    margin-top 395px
    .left
      .item
        width 300px
    .group
      width 300px
      .h4div
        position relative
        z-index 1
        width 100vw
        height 90px
        box-sizing border-box
        &.h4fixed
          h4
            position fixed
            top 395px
      h4
        position relative
        z-index 1
        width 100vw
        height 90px
        padding 25px 0
        font-size 36px
        color #fff
        background-color #a0a0a0
        pointer-events none
        box-sizing border-box
        strong
          margin-left 40px
        .markup
          position: absolute;
          top: 25px
          right: 40px
          font-size: 0;
          em
            font-size: 36px
            margin-left: 45px
            font-style: normal;
            i
              width 20px
              height 20px
              display inline-block
              vertical-align middle
              margin-right 10px
              &.dot
                background url(../../assets/images/dot.png) no-repeat center center
                background-size 100% 100%
              &.doted
                background url(../../assets/images/doted.png) no-repeat center center
                background-size 100% 100%
              &.dotno
                width 25px
                height 8px
                background url(../../assets/images/dotno.png) no-repeat center center
                background-size 100% 100%
      .item
        display: table;
        background: #fafafa;
        .inner
          display: table-cell;
          height: 150px
          padding: 0 40px
          font-size: 32px
          color: #1b1b1b;
          line-height: 1.3;
          text-align: center;
          vertical-align: middle;
          white-space: normal;
          border-top: solid #d7d7d7 1px;
          box-sizing border-box
    .main
      position: relative;
      display: table-cell;
      overflow: hidden;
      width 780px
      .slide
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        font-size: 0;
        white-space: nowrap;
      .data
        position: relative;
        height: 100%;
      .group
        width auto
        /*&:first-child
          .item
            &:first-child
              margin-top: 0;*/
        .item
          //table-layout: fixed;
          width: 350px
          background #fff
          height: 150px
          overflow hidden
          &:first-child
            margin-top: 90px
          .inner
            width: 350px
            color: #1b1b1b;
            border-right: solid #d7d7d7 1px;
            overflow hidden
            padding 20px
          strong
            color: #f43531;
            width: 350px
            height: 150px
            word-wrap: break-word;
            word-break: break-all;
            overflow hidden
  .fixed-nav
    position fixed
    bottom 80px
    right 80px
    width 80px
    height 80px
    background url(../../assets/images/3bit.png) no-repeat center center
    background-size 60% 45%
    background-color #e83644
    border-radius 10px
    z-index 1000
  .nav-dia
    position fixed
    top 0
    bottom 0
    left 0
    right 0
    background rgba(255,255,255,0)
    z-index 1000
  .fixed-navcontent
    position fixed
    bottom 80px
    right 80px
    width 320px
    max-height 1200px
    background #fff
    border-radius 10px
    z-index 1001
    ul
      border-radius 10px
      overflow auto
      li
        font-size 32px
        height 80px
        line-height 80px
        text-align center
        &.active
          background #e83644
          color #fff
</style>
