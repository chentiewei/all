<template>
  <div class="comparedetails" ref="comparedetails">
    <div class="g-title">
      <div class="w1000">
        <div>
          当前位置：车主流>买车>车型对比
        </div>
      </div>
    </div>
    <div class="g-column">
      <div class="w1000">
        <div class="m-title">
          车型对比
        </div>
      </div>
    </div>
    <div class="g-sticky">
      <div class="w1000 after">
        <div class="left">
          <div class="m-configure">
            <p>配置状况</p>
            <div>
              ● 标配  ○ 选配  - 无
            </div>
          </div>
          <div class="btn-equal" @click="equal" :class="{'active': equaling}">隐藏相同选项</div>
          <div class="kitted">车型信息</div>
          <div class="kitted">参考价(元)</div>
        </div>
        <div class="right">
          <div class="m-med" v-for="(v,i) in list">
            <div class="s-img" @click="deteled(i)">
              <img :src="v.img" alt="">
              <img class="detel" src="../assets/images/detelimg.png" alt="">
            </div>
            <div class="s-gidt">
              <div class="input-free" >
                <div @click="activefun(0,i)">{{chooselist[i].brand.text}}/{{chooselist[i].series.text}}/{{chooselist[i].spec.text}}<i></i></div>
                <ul v-show="chooselist[i].brand.show">
                  <li v-for="(k,j) in brandList" :key="j" @click="bindfun(j,i,chooselist[i].brand,brandList,chooselist[i].series)">{{k.text}}</li>
                </ul>
                <ul v-show="chooselist[i].series.show">
                  <li v-for="(k,j) in seriesList" :key="j" @click="bindfun(j,i,chooselist[i].series,seriesList,chooselist[i].spec)">{{k.text}}</li>
                </ul>
                <ul v-show="chooselist[i].spec.show">
                  <li v-for="(k,j) in specList" :key="j" @click="bindfun(j,i,chooselist[i].spec,specList,'',1)">{{k.text}}</li>
                </ul>
              </div>
            </div>
            <div class="kitt">{{v.name}}</div>
            <div class="kitt">{{v.money}}</div>
          </div >
          <div class="m-med" v-for="(v,i) in (4-list.length)">
            <div class="s-img">
              <img src="../assets/images/addimg.png" alt="">
            </div>
            <div class="s-gidt">
              <div class="input-free" >
                <div @click="activefun(0,3-i)">{{chooselist[3-i].brand.text}}/{{chooselist[3-i].series.text}}/{{chooselist[3-i].spec.text}}<i></i></div>
                <ul v-show="chooselist[3-i].brand.show">
                  <li v-for="(k,j) in brandList" :key="j" @click="bindfun(j,3-i,chooselist[3-i].brand,brandList,chooselist[3-i].series)">{{k.text}}</li>
                </ul>
                <ul v-show="chooselist[3-i].series.show">
                  <li v-for="(k,j) in seriesList" :key="j" @click="bindfun(j,3-i,chooselist[3-i].series,seriesList,chooselist[3-i].spec)">{{k.text}}</li>
                </ul>
                <ul v-show="chooselist[3-i].spec.show">
                  <li v-for="(k,j) in specList" :key="j" @click="bindfun(j,3-i,chooselist[3-i].spec,specList,'',1)">{{k.text}}</li>
                </ul>
              </div>
            </div>
            <div class="kitt">{{v.name}}</div>
            <div class="kitt">{{v.money}}</div>
          </div >
        </div>
        <div class="g-nav">
          <div class="m-list" v-for="(v,i) in detailslist" v-show="v.groupshow"  @click="goAnchor('#anchor-'+v.id,v.id)">
            <div class="s-bit" :class="{'active':activeBtn==(i+1)}">{{v.name}}</div>
          </div>
        </div>
        <div class="g-nav-right">添加车型</div>
      </div>
    </div>
    <div class="g-details">
      <div class="w1000">
        <div class="m-list" v-for="(v,i) in detailslist" :key="i"  v-show="v.groupshow" :class="{'active':v.h4Show}" @click="v.h4Show=!v.h4Show" :id="'anchor-'+v.id" ref="anchor">
          <h4> <span>{{v.name}}</span> <i></i></h4>
          <div class="s-content" v-for="(k,j) in v.data" v-if="k.show">
            <div class="kitted">{{k.name}}</div>
            <div class="kitt" v-for="(w,z) in k.mlist">{{w}}</div>
            <div class="kitt" v-for="(w,z) in (4-k.mlist.length)"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'comparedetails',
    data(){
      return {
        detailslist:[
          {
            name: '基本参数1', /*组名称*/
            groupshow: 1, /*是否显示组*/
            id: 1, /*id*/
            h4Show: true, /*h4是否为true,为true添加class*/
            data: {
              1: {
                name: '厂商指导价(元)1',
                mlist: ['110.00万', '110.00万', '110.00万', '110.00万'],
                show: 1/*是否显示该栏目*/
              },
              2: {
                name: '厂商指导价(元)2',
                mlist: ['110.00万', '110.00万', '110.00万', '110.00万'],
                show: 1
              },
              3: {
                name: '厂商指导价(元)3',
                mlist: ['110.00万', '110.00万', '110.00万', '110.00万'],
                show: 1
              },
              4: {
                name: '厂商指导价(元)4',
                mlist: ['110.00万', '110.00万', '110.00万', '110.00万'],
                show: 1
              },
              5: {
                name: '厂商指导价(元)5',
                mlist: ['110.00万', '110.00万', '110.00万', '110.00万'],
                show: 1
              },
              6: {
                name: '厂商指导价(元)6',
                mlist: ['110.00万', '110.00万', '110.00万', '110.00万'],
                show: 1
              },
              7: {
                name: '厂商指导价(元)7',
                mlist: ['110.00万', '110.00万', '110.00万', '110.00万'],
                show: 1
              },
              8: {
                name: '厂商指导价(元)8',
                mlist: ['110.00万', '110.00万', '110.00万', '110.00万'],
                show: 1
              },
              9: {
                name: '厂商指导价(元)9',
                mlist: ['110.00万', '110.00万', '110.00万', '110.00万'],
                show: 1
              },
              10: {
                name: '厂商指导价(元)10',
                mlist: ['110.00万', '110.00万', '110.00万', '110.00万'],
                show: 1
              },
            }
          }, {
            name: '基本参数2',
            groupshow: 1,
            id: 2,
            h4Show: true,
            data: {
              1: {
                name: '厂商指导价(元)1',
                mlist: ['110.00万', '110.00万', '110.00万', '110.00万'],
                show: 1
              },
              2: {
                name: '厂商指导价(元)2',
                mlist: ['110.00万', '110.00万', '110.00万', '110.00万'],
                show: 1
              },
              3: {
                name: '厂商指导价(元)3',
                mlist: ['110.00万', '110.00万', '110.00万', '110.00万'],
                show: 1
              },
              4: {
                name: '厂商指导价(元)4',
                mlist: ['110.00万', '110.00万', '110.00万', '110.00万'],
                show: 1
              },
              5: {
                name: '厂商指导价(元)5',
                mlist: ['110.00万', '110.00万', '110.00万', '110.00万'],
                show: 1
              },
              6: {
                name: '厂商指导价(元)6',
                mlist: ['110.00万', '110.00万', '110.00万', '110.00万'],
                show: 1
              },
              7: {
                name: '厂商指导价(元)7',
                mlist: ['110.00万', '110.00万', '110.00万', '110.00万'],
                show: 1
              },
              8: {
                name: '厂商指导价(元)8',
                mlist: ['110.00万', '110.00万', '110.00万', '110.00万'],
                show: 1
              },
              9: {
                name: '厂商指导价(元)9',
                mlist: ['110.00万', '110.00万', '110.00万', '110.00万'],
                show: 1
              },
              10: {
                name: '厂商指导价(元)10',
                mlist: ['110.00万', '110.00万', '110.00万', '110.00万'],
                show: 1
              },
            }
          }, {
            name: '基本参数3',
            groupshow: 1,
            id: 3,
            h4Show: true,
            data: {
              1: {
                name: '厂商指导价(元)1',
                mlist: ['110.00万', '110.00万', '110.00万', '110.00万'],
                show: 1
              },
              2: {
                name: '厂商指导价(元)2',
                mlist: ['110.00万', '110.00万', '110.00万', '110.00万'],
                show: 1
              },
              3: {
                name: '厂商指导价(元)3',
                mlist: ['110.00万', '110.00万', '110.00万', '110.00万'],
                show: 1
              },
              4: {
                name: '厂商指导价(元)4',
                mlist: ['110.00万', '110.00万', '110.00万', '110.00万'],
                show: 1
              },
              5: {
                name: '厂商指导价(元)5',
                mlist: ['110.00万', '110.00万', '110.00万', '110.00万'],
                show: 1
              },
              6: {
                name: '厂商指导价(元)6',
                mlist: ['110.00万', '110.00万', '110.00万', '110.00万'],
                show: 1
              },
              7: {
                name: '厂商指导价(元)7',
                mlist: ['110.00万', '110.00万', '110.00万', '110.00万'],
                show: 1
              },
              8: {
                name: '厂商指导价(元)8',
                mlist: ['110.00万', '110.00万', '110.00万', '110.00万'],
                show: 1
              },
              9: {
                name: '厂商指导价(元)9',
                mlist: ['110.00万', '110.00万', '110.00万', '110.00万'],
                show: 1
              },
              10: {
                name: '厂商指导价(元)10',
                mlist: ['110.001万', '110.00万', '110.00万', '110.00万'],
                show: 1
              },
            }
          }, {
            name: '基本参数4',
            groupshow: 1,
            id: 4,
            h4Show: true,
            data: {
              1: {
                name: '厂商指导价(元)1',
                mlist: ['110.00万', '110.00万', '110.00万', '110.00万'],
                show: 1
              },
              2: {
                name: '厂商指导价(元)2',
                mlist: ['110.00万', '110.00万', '110.00万', '110.00万'],
                show: 1
              },
              3: {
                name: '厂商指导价(元)3',
                mlist: ['110.00万', '110.00万', '110.00万', '110.00万'],
                show: 1
              },
              4: {
                name: '厂商指导价(元)4',
                mlist: ['110.00万', '110.00万', '110.00万', '110.00万'],
                show: 1
              },
              5: {
                name: '厂商指导价(元)5',
                mlist: ['110.00万', '110.00万', '110.00万', '110.00万'],
                show: 1
              },
              6: {
                name: '厂商指导价(元)6',
                mlist: ['110.00万', '110.00万', '110.00万', '110.00万'],
                show: 1
              },
              7: {
                name: '厂商指导价(元)7',
                mlist: ['110.00万', '110.00万', '110.00万', '110.00万'],
                show: 1
              },
              8: {
                name: '厂商指导价(元)8',
                mlist: ['110.00万', '110.00万', '110.00万', '110.00万'],
                show: 1
              },
              9: {
                name: '厂商指导价(元)9',
                mlist: ['110.00万', '110.00万', '110.00万', '110.00万'],
                show: 1
              },
              10: {
                name: '厂商指导价(元)10',
                mlist: ['110.00万', '110.00万', '110.00万', '110.00万'],
                show: 1
              },
            }
          }
        ],
        list: [
          {
            name: 'AC Schnitzer X5 201511111111111111111111111111111款 ACS35 35i',
            money: '110.00万',
            img:'http://webimg01.new4s.com//tuan/scene/2018-08-23/20180823154839',
            id: 1
          }, {
            name: 'AC Schnitzer X5 201511111111111111111111111111111款 ACS35 35i',
            money: '110.00万',
            img:'http://webimg01.new4s.com//tuan/scene/2018-08-23/20180823154839',
            id: 1
          }, {
            name: 'AC Schnitzer X5 201511111111111111111111111111111款 ACS35 35i',
            money: '110.00万',
            img:'http://webimg01.new4s.com//tuan/scene/2018-08-23/20180823154839',
            id: 1
          }, {
            name: 'AC Schnitzer X5 201511111111111111111111111111111款 ACS35 35i',
            money: '110.00万',
            img:'http://webimg01.new4s.com//tuan/scene/2018-08-23/20180823154839',
            id: 1
          }
        ],
        chooselist:[
          {
            brand:{
              active:0,/*是否选择*/
              show:0,/*是否展示*/
              value:0,
              text:'选择品牌'
            },
            series:{
              active:0,/*是否选择*/
              show:0,/*是否展示*/
              value:0,
              text:'车系'
            },
            spec:{
              active:0,/*是否选择*/
              show:0,/*是否展示*/
              value:0,
              text:'车型'
            },
          },
          {
            brand:{
              active:0,/*是否选择*/
              show:0,/*是否展示*/
              value:0,
              text:'选择品牌'
            },
            series:{
              active:0,/*是否选择*/
              show:0,/*是否展示*/
              value:0,
              text:'车系'
            },
            spec:{
              active:0,/*是否选择*/
              show:0,/*是否展示*/
              value:0,
              text:'车型'
            },
          },
          {
            brand:{
              active:0,/*是否选择*/
              show:0,/*是否展示*/
              value:0,
              text:'选择品牌'
            },
            series:{
              active:0,/*是否选择*/
              show:0,/*是否展示*/
              value:0,
              text:'车系'
            },
            spec:{
              active:0,/*是否选择*/
              show:0,/*是否展示*/
              value:0,
              text:'车型'
            },
          },
          {
            brand:{
              active:0,/*是否选择*/
              show:0,/*是否展示*/
              value:0,
              text:'选择品牌'
            },
            series:{
              active:0,/*是否选择*/
              show:0,/*是否展示*/
              value:0,
              text:'车系'
            },
            spec:{
              active:0,/*是否选择*/
              show:0,/*是否展示*/
              value:0,
              text:'车型'
            },
          }
        ],
        brandList:[/*品牌列表*/
          {'text':'1测试数据01','id':'1'},
          {'text':'1测试数据02','id':'2'},
          {'text':'1测试数据03','id':'3'},
          {'text':'1测试数据04','id':'4'},
          {'text':'1测试数据05','id':'5'},
          {'text':'1测试数据06','id':'6'}],
        seriesList:[/*车系列表*/
          {'text':'2测试数据01','id':'1'},
          {'text':'2测试数据02','id':'2'},
          {'text':'2测试数据03','id':'3'},
          {'text':'2测试数据04','id':'4'},
          {'text':'2测试数据05','id':'5'},
          {'text':'2测试数据06','id':'6'}],
        specList:[/*车型列表*/
          {'text':'3测试数据01','id':'1'},
          {'text':'3测试数据02','id':'2'},
          {'text':'3测试数据03','id':'3'},
          {'text':'3测试数据04','id':'4'},
          {'text':'3测试数据05','id':'5'},
          {'text':'3测试数据06','id':'6'}],
        compareList:[],/*比较列表*/
        equaling: 1, /*查看相同*/
        activeBtn: 1, /*锚点按钮激活*/
      }
    },
    mounted (){
      this.$nextTick(() => {
        window.addEventListener('scroll',this.scrolled,true);
      })
    },
    methods:{
      bindfun(_j,_i,_kind,_list,_last,_reset){/*当前点击下标,chooselist的下标,当前改变data值,当前列表项,下次弹出项,是否重置选择项*/
        let _this=this;
        _list.forEach((el,j) => {
          j==_j&&(_kind.text=el.text,_kind.value=el.id);
        });
        _kind.show=0;
        _kind.active=1;
        if(_last){
          _last.show=1;
        }
        if(_reset){
          let _thisjson={text:_list[_j].text,id:_list[_j].id};
          let k=0;
          for(let i in _this.compareList){
            if(_this.compareList[i].id == _thisjson.id || _this.compareList.length>=6){
              k=1;
              break;
            }
          }
          if(k==0){
            _this.compareList.push(_thisjson)
          }
          _this.activefun(1,_i)
        }
      },
      activefun(_resestActive,_i){/*当前激活项,传参重置active*/
        let _arr=[this.chooselist[_i].brand,this.chooselist[_i].series,this.chooselist[_i].spec];
        for(let i in _arr){
          if(_resestActive){
            _arr[i].active=0;
          }else if(_arr[i].active!=1){
            _arr[i].show=!_arr[i].show;
            return;
          }
        }
      },
      equal() {/*查看隐藏异同*/
        let _this = this;
        this.equaling = !this.equaling;

        function equals(arr) {/*判断元素是否相同*/
          let bool = true;
          for (let i = 1, len = arr.length; i < len; i++) {
            if (arr[i] !== arr[0]) {
              bool = false
            }
          }
          return bool
        }

        if (this.equaling) {/*隐藏相同*/
          this.detailslist.forEach((v, i) => {
            let kid = 1;
            for (let j in v.data) {
              if (equals(v.data[j].mlist)) {
                v.data[j].show = 0;
              } else {
                v.data[j].show = 1;
                kid = 0;
              }
            }
            if (kid) {
              v.groupshow = 0;
            }
          })
        } else {/*查看不同*/
          this.detailslist.forEach((v, i) => {
            for (let j in v.data) {
              v.data[j].show = 1;
              v.groupshow = 1;
            }
          })
        }
        this.detailslist.forEach((v, i) => {
          v.h4Show=1
        })
      },
      goAnchor(selector, index) {/*锚点跳转*/
        let anchor = this.$el.querySelector(selector)
        window.scroll(0, anchor.offsetTop)
        /*let top=anchor.offsetTop
        let step=20;
        let timer=setInterval(()=>{
          if(step>0){
            window.scroll(0, top/20*(20-step))
          }else{
            clearInterval(timer)
          }
          step--;
        },40)*/
        this.activeBtn = index;
      },
      deteled(_i){
        this.list.splice(_i, 1);
        this.detailslist.forEach((v, i) => {
          for (let i in v.data) {
            v.data[i].mlist.splice(_i, 1)
          }
        })
      },
      scrolled(){
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        if(scrollTop<455){
          this.activeBtn=1
          return ;
        }
        this.$refs.anchor.forEach((v,i)=>{
          if(v.offsetTop<=scrollTop+455){
            this.activeBtn=i
          }
        })
      }
    }
  }
</script>


<style scoped lang="stylus">
.comparedetails
  background #f0f3f5
  padding-bottom 25px
  .g-title
    height 50px
    line-height 50px
    div
      color #1b1b1b
      font-size 14px
  .g-column
    .m-title
      text-indent 20px
      background #fff
      height 50px
      line-height 50px
      font-size 16px
      color #1b1b1b
      border-bottom 5px solid #e93644
  .g-sticky
    .left
      width 200px
      border-right 1px solid #dcdcdc
      float left
      .m-configure
        height 155px
        text-align center
        background #fff
        padding-top 50px
        border-bottom 1px solid #dcdcdc
        div
          margin-top 30px
      .btn-equal
        color #1b1b1b
        font-size 14px
        height 40px
        line-height 40px
        text-align center
        background #fff
        border-bottom 1px solid #dcdcdc
        cursor pointer
        &.active,&:hover
          color #fff
          background #e93644
    .right
      background #fff
      display flex
      .m-med
        flex 1
        box-sizing border-box
        width 200px
        &:last-child
          .s-img,.s-gidt,.kitt
            border-right 0
        .kitt
          padding 0 5px
        .s-img
          width 200px
          height 155px
          text-align center
          line-height 155px
          border-bottom 1px solid #dcdcdc
          border-right 1px solid #dcdcdc
          padding 2.5%
          position relative
          cursor pointer
          img
            width 100%
            height 100%
          .detel
            display none
            position absolute
            top 0
            left 0
            right 0
            bottom 1px
          &:hover
            img.detel
              display block
        .s-gidt
          background #fff
          position relative
          z-index 100
          width 200px
          height 40px
          border-bottom 1px solid #dcdcdc
          border-right 1px solid #dcdcdc
          .input-free
            width 100%
            height 100%
            display inline-block
            vertical-align middle
            cursor pointer
            div
              width 100%
              height 100%
              line-height 40px
              font-size 14px
              color #1b1b1b
              padding 0 15px
              position relative
              white-space:nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
              i
                position absolute
                width 20px
                height 20px
                bottom 0
                right 0
                background url(../assets/images/arrow-right.png) no-repeat center center
            ul
              width 100%
              height 200px
              overflow auto
              background #fff
              text-indent 15px
              border 1px solid #dcdcdc
              border-top 0
              color #1b1b1b
              li
                font-size 14px
                line-height 40px
                line-height 40px
                cursor pointer
                &:hover,&.active
                  background #e93644
                  color #fff
   .g-details
    .m-list
      h4
        height 40px
        line-height 40px
        background #fff
        font-size 0
        text-indent 20px
        border-bottom 1px solid #dcdcdc
        cursor pointer
        span
          color #1b1b1b
          font-size 14px
          vertical-align middle
        i
          display: inline-block;
          width: 10px;
          height: 5px;
          background url(../assets/images/arrow-bottom.png) no-repeat center center
          background-size 100% 100%
          transition: all 0.5s;
          vertical-align middle
          margin-left 10px
      .s-content
        background #fff
        font-size 0
        display none
        div
          display inline-block
          vertical-align middle
          &:last-child
            border-right 0
    .m-list.active
      h4
        i
          transform: rotate(180deg);
      .s-content
        display block
  .kitted
    width 200px
    height 40px
    line-height 40px
    color #1b1b1b
    font-size 14px
    background #eeeeee
    text-indent 20px
    border-bottom 1px solid #dcdcdc
    border-right 1px solid #dcdcdc
  .kitt
    width 200px
    height 40px
    line-height 40px
    text-align center
    color #1b1b1b
    font-size 14px
    border-bottom 1px solid #dcdcdc
    border-right 1px solid #dcdcdc
    white-space:nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  .g-nav
    max-height 600px
    width 160px
    text-align center
    color #1b1b1b
    font-size 14px
    position fixed
    top 175px
    background #fff
    margin-left -180px
    .m-list
      border-bottom 1px solid #dcdcdc
      &:last-child
        border-bottom 0
      div
        height 40px
        line-height 40px
        cursor pointer
        &.active,&:hover
          color #fff
          background #e93644
  .g-nav-right
    width 40px
    height 80px
    background #e93644
    color #fff
    font-size 14px
    position fixed
    margin-left 1000px
    padding 10px 15px
    top 185px
    border-top-right-radius 5px
    border-bottom-right-radius 5px
</style>
