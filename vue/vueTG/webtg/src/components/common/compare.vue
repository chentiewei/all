<template>
  <div class="compare">
    <div class="g-title">车型对比</div>
    <i @click="emitcompared"></i>
    <div class="g-gidt">
      <div class="input-free" >
       <div @click="activefun(0)">{{brand.text}}/{{series.text}}/{{spec.text}}<i></i></div>
       <ul v-show="brand.show">
        <li v-for="(v,i) in brandList" :key="i" @click="bindfun(i,brand,brandList,series)">{{v.text}}</li>
      </ul>
      <ul v-show="series.show">
        <li v-for="(v,i) in seriesList" :key="i" @click="bindfun(i,series,seriesList,spec)">{{v.text}}</li>
      </ul>
      <ul v-show="spec.show">
        <li v-for="(v,i) in specList" :key="i" @click="bindfun(i,spec,specList,'',1)">{{v.text}}</li>
      </ul>
      </div>
    </div>
    <div class="g-box-s">
      <div v-for="(v,i) in compareList" :key="i"><span>{{v.text}}</span> <i @click="removeThis(i)">×</i> </div>
    </div>
    <div class="g-ps">注：最多添加6款车型</div>
    <div class="g-button">
      <span @click="removeThis('all')">清空</span>
      <b @click="blink">开始对比</b>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'compare',
    data() {
      return {
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
        compareList:[]/*比较列表*/
      }
    },
    methods:{
      emitcompared(){
        this.$emit('compared');
      },
      bindfun(_i,_kind,_list,_last,_reset){/*当前点击下标,当前改变data值,当前列表项,下次弹出项,是否重置选择项*/
        var _this=this;
        _list.forEach((el,j) => {
          j==_i&&(_kind.text=el.text,_kind.value=el.id);
        });
        _kind.show=0;
        _kind.active=1;
        if(_last){
          _last.show=1;
        }
        if(_reset){
          var _thisjson={text:_list[_i].text,id:_list[_i].id};
          var k=0;
          for(var i in _this.compareList){
            if(_this.compareList[i].id == _thisjson.id || _this.compareList.length>=6){
              k=1;
              break;
            }
          }
          if(k==0){
            _this.compareList.push(_thisjson)
          }
          _this.activefun(1)
        }
      },
      activefun(_resestActive){/*当前激活项,传参重置active*/
        var _arr=[this.brand,this.series,this.spec];
        for(var i in _arr){
          if(_resestActive){
            _arr[i].active=0;
          }else if(_arr[i].active!=1){
            _arr[i].show=!_arr[i].show;
            return;
          }
        }
      },
      removeThis(_i){/*移除比较车型*/
        if(_i=='all'){
          this.compareList=[];
        }else{
          this.compareList.splice(_i,1);
        }
      },
      blink(){/*跳转页面*/
        this.$router.push({name:'comparedetails'});
      }
    }
  }
</script>

<style scoped lang="stylus">
.compare
  width 275px
  min-height 600px
  position fixed
  right 5px
  top 220px
  background #fff
  border-top 5px solid #e93644
  padding 0 20px
  .g-title
    color #000000
    font-size 24px
    text-align center
    margin-top 20px
  &>i
    position absolute
    background url(../../assets/images/close.png) no-repeat center center
    background-size 100% 100%
    width 24px
    height 24px
    top 25px
    left 20px
  .g-gidt
    background #fff
    position relative
    z-index 100
    .input-free
      margin-top 15px
      width 100%
      height 50px
      display inline-block
      vertical-align middle
      cursor pointer
      div
        width 100%
        height 100%
        line-height 50px
        font-size 14px
        color #1b1b1b
        text-indent 15px
        position relative
        border 1px solid #dcdcdc
        white-space:nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        i
          position absolute
          width 20px
          height 20px
          bottom 0
          right 0
          background url(../../assets/images/arrow-right.png) no-repeat center center
      ul
        width 100%
        height 200px
        overflow auto
        background #fff
        text-indent 15px
        border 1px solid #dcdcdc
        border-top 0
        li
          font-size 14px
          line-height 40px
          line-height 40px
          cursor pointer
          &:hover,&.active
            background #e93644
            color #fff
  .g-box-s
    height 400px
    overflow auto
    &>div
      height 50px
      border-bottom 1px dotted #dcdcdc
      position relative
      span 
        display inline-block
        height 50px
        line-height 50px
        vertical-align middle
        font-size 14px
        width 210px
        white-space nowrap
        overflow hidden
        text-overflow ellipsis
      i
        position absolute
        font-style normal
        width 16px
        height 16px
        text-align center
        right 0
        top calc(50% - 8px)
        vertical-align middle
        font-size 16px
        cursor pointer
        color #a0a0a0
  .g-ps
    color #a0a0a0
    font-size 14px
    width 100%
    text-align center
  .g-button
    font-size 0
    margin-top 20px
    span 
      display inline-block
      width 80px
      height 40px
      line-height 40px
      border-radius 5px
      color #fff
      font-size 18px
      background #a0a0a0
      text-align center
      margin-right 10px
      cursor pointer
    b
      display inline-block
      background #e93644
      color #fff
      font-size 18px
      width 145px
      height 40px
      line-height 40px
      text-align center
      border-radius 5px
      cursor pointer
</style>
