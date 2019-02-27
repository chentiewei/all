<template>
  <div class="home">
    <div class="g-title">微算面相</div>
    <div class="g-swiper">
      <swiper :list="swiperList"></swiper>
    </div>
  </div>
</template>

<script>
  import { Swiper,SwiperItem } from 'vux'
export default {
  name: 'home',
  data(){
    return {
      swiperList:[{
        url: 'javascript:',
        img: 'http://face-plus.oss-cn-hangzhou.aliyuncs.com/UI_IMG/banner1a.png'
      }, {
        url: 'javascript:',
        img: 'https://faceplus.qqwechat.com/UI_IMG/HEHUOREN.png'
      }, {
        url: 'javascript:',
        img: 'https://faceplus.qqwechat.com/UI_IMG/YINGSIANQUAN.png'
      }]
    }
  },
  components: {
    Swiper,
    SwiperItem
  }
}
</script>
<style scoped lang="stylus">
.g-title
  color #fff
  font-size: 25px;
  padding-top: 20px;
  margin-left: 20px;
  animation fadein 0.5s linear
.g-swiper
  height: 13.33333333rem;
  >>>.vux-slider
    height 100%
</style>
