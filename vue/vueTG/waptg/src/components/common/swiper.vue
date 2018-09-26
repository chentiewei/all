<template>
  <div class="g-swiper" :class="{'detailH':heighted==1}">
      <van-swipe :autoplay="3000" class='slide-ul'>
        <van-swipe-item v-for="(list,index) in slideList" :key="index">
          <a :href="list.redirectUrl==''?'#':list.redirectUrl" >
            <img :src="list.imageUrl" />
          </a>
        </van-swipe-item>
      </van-swipe>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'g-border',
  props:["slideList","heighted"],
  data () {
    return {
    }
  },
  created() {
    },
    methods:{
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.g-swiper
  width 100%
  height 360px
  background-color #fff
  overflow hidden
  position relative
  &.detailH
    height 720px
  .slide-ul
    width 100%
    height 100%
    a
      position absolute
      width 100%
      height 100%
      img
        width 100%
        height 100%
  &>>>.van-swipe__indicators
    i
      display inline-block
      width 30px
      height 30px
      background #959595
      border-radius 50%
      margin-right 20px
      &.van-swipe__indicator--active
        background #e83644
      &:last-child
        margin-right 0
</style>
