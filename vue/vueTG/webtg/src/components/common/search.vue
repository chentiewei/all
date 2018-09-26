<template>
  <div class="search">
    <div class="w1000">
      <div class="g-search">
        <input type="text" v-model="name">
        <b @click="search"></b>
      </div>
      <div class="g-phone">
        <i></i>
        <div>
          <b>13123456789</b>
          <span>周一至周日 9:00-17:30</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import bus from "../common/bus.js";
  export default {
    name: 'search',
    data(){
      return {
        name:''
      }
    },   
    methods:{
      search(){
        if(!this.$util.empty(this.name)){
          bus.$emit('onSearch', this.name);
        }
      }
    }
  }
</script>


<style scoped lang="stylus">
.search
  position relative
  height 80px
.g-search
  width 380px
  height 40px
  position absolute
  left calc(50% - 190px)
  bottom 5px
  border 1px solid #dcdcdc
  input 
    width 100%
    height 100%
  b
    position absolute
    width 40px
    height 40px
    right -1px
    top -1px
    background-color #e93644
    background-image url(../../assets/images/search.png)
    background-repeat no-repeat
    background-position center center
.g-phone
  float right
  font-size 0
  margin-top 30px
  i
    display inline-block
    vertical-align middle
    width 50px
    height 50px
    border-radius 50%
    background url(../../assets/images/phone.png) no-repeat center center
    background-color #e93644
    margin-right 10px
  div
    display inline-block
    vertical-align middle
    span
      color #000
      font-size 14px
      display block
    b
      font-size 24px
      color #e93644
      display block
</style>