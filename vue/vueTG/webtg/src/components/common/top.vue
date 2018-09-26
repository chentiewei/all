<template>
  <div class="top">
    <div class="w1000">
      <div class="g-logo">
        <img src="../../assets/images/logo.png" alt="logo">
      </div>
      <div class="g-city" @click="isDis=!isDis">
        <img src="../../assets/images/suffix.png" alt="位置">
        <span>{{city}}</span>
        <i :class="{'go':!isDis}"></i>
        <div class="m-choose-city" :class="{ dis: isDis }" @mouseleave="isDis=true">
          <div class="s-city-details" v-for="(v,i) in cityList" :key="i">
            <b>{{v.fletter}}</b>
            <ul>
              <li v-for="(j,k) in v.datas" :key="k" @click="chooseCity(j)">{{j.name}}</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="g-nav">
        <router-link class="g-god" :to="{ name: 'index' }">首页</router-link>
        <router-link class="g-god" :to="{ name: 'buycar' }" :class="{'active':$route.meta.caractived}">买车</router-link>
        <router-link class="g-god" :to="{ name: 'teambuying' }" :class="{'active':$route.meta.teamactived}">团购</router-link>
        <router-link class="g-god" :to="{ name: 'exhibition' }">数字智能展厅</router-link>
      </div>
      <div class="g-bik">
        <img src="../../assets/images/logoing.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import store from '../../store/store.js'
import bus from "../common/bus.js";
  export default {
    name: 'top',
    data() {
      return {
        cityList:[],
        city:'',//杭州市
        cityId:'',
        isDis:true,
        datas:[]
      }
    },
    created () {
      this.getCityList();      
    },
    methods:{
      getCityList(){
        this.$axios.get("/sys/city/list").then((res) => {
          this.datas = res;
          this.cityList = [];
          let that = this;
          res.forEach(element => {
            var hasAttr = false;
            that.cityList.forEach(item=>{
              if(item.fletter == element.fletter){
                hasAttr = true;
                item.datas.push(element);
              }
            })
            if(!hasAttr){
              var item = {fletter:element.fletter,datas:[element]};
              that.cityList.push(item);
            }
          });
          this.getCurrentCity();
        })
      },
      chooseCity(j){
        this.city=j.name;
        this.cityId = j.id;
        store.dispatch('setCurrentCity',j);
        bus.$emit('changeCity', j);
      },
      getCurrentCity(){
        this.$util.getLocation().then((res)=>{
          let name = res.name;
          let that = this;
          let hasSame = false;
          this.datas.forEach(element => {
            if(element.name == name){
              hasSame = true;
              that.chooseCity(element);              
            }
          });
          if(!hasSame){
            if(this.datas.length>0)
              this.chooseCity(this.datas[0]);
          }
        });
      }
    }
  }
</script>


<style scoped lang="stylus">
  .top
    width 100%
    height 80px
    font-size 0
    .g-logo, .g-city, .g-nav, .g-bik
      display inline-block
    .g-logo
      width 80px
      height 80px
      line-height 80px
      img
        width 100%
        vertical-align middle
    .g-city
      font-size 16px
      vertical-align middle
      margin-left 35px
      border 1px solid #dcdcdc
      border-radius 15px
      padding 5px 10px
      margin-right 75px
      cursor pointer
      position relative
      .m-choose-city
        background-color #fff
        overflow auto
        position absolute
        left 0
        top 30px
        width 300px
        height 450px
        border 1px solid #dcdcdc
        padding 25px 20px
        cursor auto
        z-index 1
      img
        vertical-align top
      i
        display inline-block
        width 10px
        height 5px
        background url(../../assets/images/arrow-bottom.png) no-repeat center center
        vertical-align middle
        transition all 0.5s
        &.go
          transform rotate(180deg)
      .s-city-details
        b
          display inline-block
          width 14px
          height 14px
          color #e93644
          font-size 16px
          font-weight bold
        ul
          display inline-block
          width 220px
          font-size 0
          vertical-align top
          li
            display inline-block
            font-size 14px
            color #1b1b1b
            margin 0 15px 20px
            cursor pointer
    .g-nav
      font-size 18px
      color #1b1b1b
      height 80px
      line-height 80px
      vertical-align middle
      a
        display inline-block
        margin 0 25px
        height 100%
        &.active, &:hover
          color #e93644
          border-bottom 5px solid #e93644
    .g-bik
      width 75px
      float right
      height 80px
      line-height 80px
      img
        vertical-align middle
        width 100%
</style>
