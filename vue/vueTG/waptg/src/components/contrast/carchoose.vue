<template>
  <div class="g-brandChoose">
    <div class="m-list">
      <template v-for="v in brandList">
        <div class="s-title" :id="v.fletter" :key="v.fletter">{{v.fletter}}</div>
        <div class="s-div" :key="v.fletter+'d'">
          <div v-for="data in v.datas" :key="data.id" @click="seriesed(data)">{{data.name}}</div>
        </div>
      </template>
    </div>
    <van-popup v-model="serieshow" position="right" :lock-scroll='lock'>
      <div class="m-series">
        <div class="s-tilte">
          <van-icon name="arrow-left" class="back" @click="serieshow=false"/>
          <span>选择车系</span>
        </div>
        <div class="s-seriesList">
          <div v-for="(v,i) in seriesList" @click="sepcsed(v)">{{v.title}}</div>
        </div>
      </div>
    </van-popup>
    <van-popup v-model="sepcshow" position="right" :lock-scroll='lock'>
      <div class="m-series">
        <div class="s-tilte">
          <van-icon name="arrow-left" class="back" @click="sepcshow=false"/>
          <span>选择车型</span>
        </div>
        <div class="s-seriesList">
          <div v-for="(v,i) in sepcList" @click="submit(v)">{{v.title}}</div>
        </div>
      </div>
    </van-popup>
    <div class="m-rightnav">
      <div v-for="brand in brandList" :key="brand.fletter" :class="{'active':tipString==brand.fletter}" @click="naver(brand.fletter)">{{brand.fletter}}</div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">

  import store from '../../store/store.js'
  import bus from '../common/bus'

  export default {
    name: 'g-cityChoose',
    data (){
      return {
        tipString:"A",
        brandList:[],
        serieshow:false,
        seriesList:[],
        sepcshow:false,
        sepcList:[],
        lock:true,

        chooseBrand:{},
        chooseSeries:{},
        chooseCarType:{}
      }
    },
    created (){
      this.getBrand();
    },
    methods:{
      naver (id) { // 点击右边字母滚动
        this.tipString = id
        let obj = document.getElementById(id)
        let tip = document.getElementById('tip')
        let oPos = obj.offsetTop
        return window.scrollTo(0, oPos )
      },
      seriesed(data){
        this.serieshow=!this.serieshow;
        this.chooseBrand = data;
        this.$axios.get("/sys/series/list",{brandId:data.id}).then((res) => {
          this.seriesList = res;
        })
      },
      sepcsed(data){
        this.sepcshow=!this.sepcshow;
        this.chooseSeries = data;
        this.$axios.get("/sys/car_type/list",{seriesId:data.id}).then((res) => {
          this.sepcList = res;
        })
      },
      submit(data){
        this.chooseCarType = data;
        data.title = this.chooseBrand.name + " "+ this.chooseSeries.title + " "+ data.title;
        bus.$emit('addCar', data);
        this.$router.go(-1);
      },
      getBrand(){        
        this.$axios.get("/sys/brand/list",null).then((res) => {
          res.forEach(element => {
            this.hasBrandGroup(element);
          });
        })
      },
      hasBrandGroup(b){
        var has = false;
        this.brandList.forEach(element => {
          if(element.fletter == b.fletter){
            has = true;
            element.datas.push({fletter:b.fletter,name:b.title,id:b.id});
          }
        });
        if(!has){
          this.brandList.push({fletter:b.fletter,datas:[{fletter:b.fletter,name:b.title,id:b.id}]});
        }
      },
      getSeries(){

      },
      getCarType(){

      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
  .g-brandChoose
    position relative
    .m-now
      padding 0 40px
      height 120px
      line-height 120px
      span
        color #1b1b1b
        font-size 39px
      b
        font-size 45px
        color #e83644
      &>>>i
        float right
        font-size 39px
        margin-top 40px
    .m-list
      .s-title
        height 40px
        line-height 40px
        background #eee
        font-size 33px
        color #a0a0a0
        padding-left 40px
      .s-div
        div
          height 90px
          line-height 90px
          padding-left 40px
          color #1b1b1b
          font-size 39px
          border-bottom 1px solid #d4d4d4
          &:last-child
            border 0
    .m-rightnav
      position fixed
      right 0
      top 265px
      width 60px
      text-align center
      div
        height 40px
        color #a0a0a0
        font-size 39px
        margin-bottom 30px
        &:last-child
          margin-bottom 0
        &.active
          color #e83644
    .van-popup
      width 800px
      height 100%
    .m-series
      width 800px
      .s-tilte
        height 145px
        line-height 145px
        background #313131
        &>>>.van-icon
          color #fff
          font-size 51px
          vertical-align middle
          margin-left 40px
        span
          font-size 51px
          color #fff
          margin-left 85px
          vertical-align middle
      .s-seriesList
        position absolute
        top 145px
        bottom 0
        right 0
        left 0
        overflow auto
        div
          color #1b1b1b
          font-size 36px
          border-bottom 1px solid #d4d4d4
          height 88px
          line-height 88px
          padding 0 40px
          white-space nowrap
          overflow hidden
          text-overflow ellipsis
</style>
