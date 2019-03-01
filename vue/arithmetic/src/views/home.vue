<template>
  <div class="home">
    <div class="g-title">微算面相</div>
    <div class="g-swiper">
      <swiper loop auto height="100%" dots-class="dots" dots-position="center">
        <swiper-item v-for="(v,i) in swiperList" class="black">
          <div>
            <img :src="v.img" alt="">
          </div>
        </swiper-item>
      </swiper>
    </div>
    <div class="g-home-tab">
      <div class="m-tab">
        <div class="s-box" style="background: rgb(67, 71, 110);">
          <p class="textPs1">面相</p>
          <p class="textPs2">报告</p>
          <img src="../assets/images/page1.png" mode="widthFix" class="home-page__tab-item--img">
        </div>
        <div class="s-box" style="background: rgb(255, 204, 0);">
          <p class="textPs1">大师</p>
          <p class="textPs2">看相</p>
          <img src="../assets/images/page3.png" mode="widthFix" class="home-page__tab-item--img">
        </div>
      </div>
    </div>
    <div class="g-addReport">
      <div class="m-addBox" @click="showDiaContent">
        <img src="../assets/images/add.svg">
      </div>
      <p>添加面相报告</p>
    </div>
    <div class="g-bottom">
      <router-link :to="{name:'userCenter'}" tag="div" class="s-box">
        <img src="../assets/images/tabl.png">
      </router-link>
      <div class="s-box">
        <img src="../assets/images/tabr.png">
      </div>
    </div>
    <diaps :showdia="showdia" @showDiaContent="showDiaContent"/>
  </div>
</template>

<script>
  import {Swiper, SwiperItem} from 'vux'
  import diaps from '../components/diaPs'
  export default {
    name: 'home',
    data() {
      return {
        showdia: false,
        swiperList: [{
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
    methods: {
      showDiaContent() {
        this.showdia = !this.showdia;
      }
    },
    components: {
      diaps,
      Swiper,
      SwiperItem
    }
  }
</script>
<style scoped lang="stylus">
  .home
    position relative
    height 100vh

  .g-title
    color #fff
    font-size: 25px;
    animation fadein 0.5s linear
    position: absolute;
    top: 0.69333333rem;
    left: 0.4rem;
    width: 4rem;
    z-index: 80;
    animation fadein 1s linear
  .g-swiper
    height: 12.33333333rem;
    position relative
    >>> .vux-slider
      height 100%
      overflow hidden
      img
        width 100%
      .dots
        position: absolute;
        bottom: 2.2rem;
        z-index: 100;
        width: 100%;
        height: 0.4rem;
        display: flex;
        -webkit-box-pack: center;
        justify-content: center;
        i
          background: #DADADA;
          width: 1.06666667rem;
          height: 0.08rem;
          margin: 0 0.13333333rem;
          vertical-align top
          &.active
            background #F8E71C

  .g-home-tab
    background: linear-gradient(rgba(220, 220, 220, 0) 0%, #ffffff 50%);
    padding: 0.4rem 0 0;
    z-index: 10;
    width: 10rem;
    height: 3.2rem;
    position: absolute;
    top: 10rem
    overflow-x: scroll;
    -webkit-overflow-scrolling: touch;
    padding 0 10px
    box-sizing border-box
    .m-tab
      display flex
      .s-box
        flex 1
        height: 2.4rem;
        font-size: 0.37333333rem;
        color: #fff;
        margin: 0.26666667rem 0.53333333rem;
        border-radius: 0.18666667rem;
        padding: 0.26666667rem;
        position relative
        box-sizing border-box
        box-shadow: 6px 8px 20px 0px rgba(52, 143, 200, 0.21);
        p
          &.textPs2
            font-weight: 500;
            font-size: 16px;
            line-height: 0.66666667rem;
        img
          width: 0.53333333rem;
          position: absolute;
          right: 0.26666667rem;
          bottom: 0.26666667rem;

  .g-addReport
    text-align: center;
    font-size: 0.37333333rem;
    padding-top: 1.6rem;
    padding-bottom 1rem
    width: 100%;
    background: #fff;
    z-index: 997;
    .m-addBox
      height: 1.73333333rem;
      width: 1.73333333rem;
      border-radius: 100%;
      text-align: center;
      line-height: 2.26666667rem;
      box-shadow: 0.01333333rem 0.05333333rem 0.26666667rem 0 rgba(0, 0, 0, 0.12);
      margin: 0 auto 0.13333333rem;
      img
        width: 0.8rem;
        height: 0.8rem;

  .g-bottom
    position fixed
    bottom 0
    left 0
    right 0
    .s-box
      width: 1.33333333rem;
      height: 1.33333333rem;
      line-height: 1.33333333rem;
      position: relative;
      text-align center
      vertical-align middle
      float left
      img
        height: 0.46666667rem;
        width: 0.46666667rem;
      &:nth-child(2)
        float right
</style>
