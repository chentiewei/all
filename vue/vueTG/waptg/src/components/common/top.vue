<template>
  <div class="top">
    <van-icon name="arrow-left" class="back" @click="back"/>
    <span>{{getTitle()}}</span>
    <router-link tag="b" :to="{name:'citychoose'}">
      <i></i> 
      <span>{{city}}</span>
    </router-link>
  </div>
</template>

<script type="text/ecmascript-6">

import store from '../../store/store.js'
import bus from "../common/bus.js";

export default {
  name: 'top',
  data () {
    return {
      cityList:[],
      city:'',
      cityId:'',
      datas:[],
      title:''
    }
  },
  created () {
    let citys = store.state.cityList;
    if(this.$util.empty(citys)){
      this.getCityList();      
    }
    let that = this;
    bus.$on('changeTitle', function(title) {
      if(!that.$util.empty(title)){
        that.title = title;
      } 
    });
    bus.$on('changeCity', function(city) {
        if(!that.$util.empty(city)){
          that.cityId = city.id;
          that.city = city.name;
        } 
      });
  },
  methods:{
    back(){
      this.$router.back(-1);
    },
    getTitle(){
      let _path=this.$route.fullPath;
      if(_path.indexOf('cardetails')>=0 || _path.indexOf('tgdetails')>=0){
        return this.title;
      }else{
        return this.$route.meta.title;
      }
    },
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
          store.dispatch('setCitys',this.cityList);
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
  },
  components: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.top
  position fixed
  top 0
  height 145px
  background #1b1b1b
  width 100%
  z-index 100
  text-align center
  &>span
    color #ffffff
    font-size 50px
    margin-top 40px
    width 500px
    display inline-block
    white-space nowrap
    overflow hidden
    text-overflow ellipsis
  .back
    position absolute
    top calc(50% - 35px)
    font-size 60px
    color #fff
    display inline-block
    left 40px
  b
    position absolute
    top calc(50% - 35px)
    right 40px
    font-size 0
    i
      display inline-block
      width 55px
      height 60px
      background url(../../assets/images/vt.png) no-repeat center center 
      background-size 100% 100%
      vertical-align middle
      margin-right 20px
    span
      color #fff
      font-size 45px
      vertical-align middle
</style>
