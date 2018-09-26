<template>
  <div class="g-cityChoose">
    <div class="m-now">
      <span>当前品牌 : </span>
      <b>{{brandName}}</b>
      <van-icon name="arrow" />
    </div>
    <div class="m-list">
      <template v-for="city in brandList">
        <div class="s-title" :id="city.fletter" :key="city.fletter">{{city.fletter}}</div>
        <div class="s-div" :key="city.fletter+'d'">
          <div v-for="data in city.datas" :key="data.id" @click="chooseCity(data)">{{data.title}}</div>         
        </div>
      </template>
    </div>
    <div class="m-rightnav">
      <div v-for="city in brandList" :key="city.fletter" :class="{'active':tipString==city.fletter}" @click="naver(city.fletter)">{{city.fletter}}</div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import store from '../../store/store.js'
import bus from "../common/bus.js";
export default {
  name: 'g-cityChoose',
  data (){
    return {
      tipString:"A",
      brandList:[],
      brandName:'',
      brandId:''
    }
  },
  created (){
    this.brandList = store.state.brandList;  
    if(this.$util.empty(this.brandList)){
      this.getBrandList();      
    }  
  },
  methods:{
    naver (id) { // 点击右边字母滚动
      this.tipString = id
      let obj = document.getElementById(id)
      let tip = document.getElementById('tip')
      let oPos = obj.offsetTop
      return window.scrollTo(0, oPos )
    },
    chooseCity(j){
      this.brandName=j.title;
      this.brandId = j.id;
      bus.$emit('changeBrand', j);
    },
    getBrandList(){
      this.$axios.get("/sys/brand/list").then((res) => {
        this.brandList = [];
        res.forEach(element => {
          var hasAttr = false;
          this.brandList.forEach(item=>{
            if(item.fletter == element.fletter){
              hasAttr = true;
              item.datas.push(element);
            }
          })
          if(!hasAttr){
            var item = {fletter:element.fletter,datas:[element]};
            this.brandList.push(item);
          }
        });
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.g-cityChoose
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
</style>
