<template>
  <div class="navAll">
    <router-link :to="{name:'home'}">
      <i class="home"></i>
      首页
    </router-link>
    <router-link :to="{name:'car'}">
      <i class="car"></i>
      买车
    </router-link>
    <router-link :to="{name:'tg'}">
      <i class="tg"></i>
      团购
    </router-link>
    <!-- <router-link :to="{name:'userCenter'}">
      <i class="center"></i>
      个人中心
    </router-link> -->
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'navAll',
  data () {
    return {
    }
  },
  created(){
  },
  methods:{
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.navAll
  position fixed
  display flex
  width 100%
  height 160px
  bottom 0
  text-align center
  background #fff
  border-top 1px solid #cccccc
  z-index 10
  a
    flex 1
    color rgba(51, 51, 51, 0.5)
    font-size 10px
    i
      display block
      width 65px
      height 65px
      color #919191
      font-size 33px
      text-align center
      margin 30px auto 20px
      background url(../../assets/images/nav.png) no-repeat
      background-size 800px 135px
      &.home
        background-position 0 -75px
      &.car
        background-position -245px -75px
      &.tg
        background-position -492px -75px
      &.center
        background-position -735px -75px
  a.router-link-active
    color #e83644
    i
      background-position-y 0
</style>
