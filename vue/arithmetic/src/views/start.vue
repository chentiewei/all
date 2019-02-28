<template>
  <div class="start">
    <div class="g-banner">
      <div class="m-title">微算面相</div>
      <img class="m-bannerImg" src="../assets/images/group2.svg">
      <img class="m-bannerBk" src="../assets/images/Combined.png">
      <div class="m-bannerContent">
        <div class="s-leftBem">
          <div class="title">面相报告</div>
          <div class="content">已生成9160份</div>
        </div>
        <div class="s-rightBem">
          <swiper loop auto height="aspect-ratio" :show-dots="dots">
            <swiper-item class="black"><span>123afasd是的反思</span><b>已获取面相报告</b><div class="div-box"><img src="https://faceplus.qqwechat.com/2019-02-27_b51200423584200c02bb08064f704632.png?x-oss-process=image/crop,x_8,y_65,w_272,h_272" alt=""></div></swiper-item>
            <swiper-item class="black"><span>阿斯顿发送到发的</span><b>已获取面相报告</b><div class="div-box"><img src="https://faceplus.qqwechat.com/2019-02-27_64d4e7deaa87e5f4ae2c27e9bdfde37e.png?x-oss-process=image/crop,x_234,y_80,w_485,h_485" alt=""></div></swiper-item>
            <swiper-item class="black"><span>阿斯顿发送到发的</span><b>已获取面相报告</b><div class="div-box"><img src="https://faceplus.qqwechat.com/2019-02-27_64d4e7deaa87e5f4ae2c27e9bdfde37e.png?x-oss-process=image/crop,x_234,y_80,w_485,h_485" alt=""></div></swiper-item>
          </swiper>
        </div>
      </div>
    </div>
    <div class="g-synopsis">
      <div class="m-title">人工智能看面相</div>
      <div class="m-content">相由心生，境随心转。面相学通过观看面部特征来解码人生命运，微算面相程序则利用人工智能深度神经网络学习技术与人脸识别定位技术将这一中国传统文化重新呈现</div>
      <div class="m-icon">
        <div class="s-item">
          <img src="../assets/images/Group8.svg" alt="">
          <div>面相学</div>
        </div>
        <div class="s-item">
          <img src="../assets/images/rgzn.svg" alt="">
          <div>人工智能</div>
        </div>
        <div class="s-item">
          <img src="../assets/images/rldw.svg" alt="">
          <div>人脸定位</div>
        </div>
      </div>
      <div class="m-btn" @click="showDiaContent">免费在线获取面相报告</div>
    </div>
    <diaps :showdia="showdia" @showDiaContent="showDiaContent"/>
  </div>
</template>

<script>
  import { Swiper,SwiperItem } from 'vux'
  import diaps from '../components/diaPs'
  export default {
    name: "start",
    data(){
      return {
        dots:false,
        showdia:false
      }
    },
    methods:{
      showDiaContent(){
        this.showdia=!this.showdia;
      }
    },
    components:{
      diaps,
      Swiper,
      SwiperItem
    }
  }
</script>

<style scoped lang="stylus">
.start
  .g-banner
    height 320px
    background url(../assets/images/startBanner.png) no-repeat center top
    background-size 100%
    background-position 0 -50px
    position relative
    .m-title
      color #fff
      font-size: 25px;
      padding-top: 20px;
      margin-left: 20px;
      animation fadein 0.5s linear
    .m-bannerImg
      position: absolute;
      top: -150px;
      left: -168px;
      width: 440px;
      height: 440px;
      animation circle 100s linear infinite
    .m-bannerBk
      position: absolute;
      top: 5.33333333rem;
      width: 100%;
    .m-bannerContent
      height: 1.06666667rem;
      width: 8.61333333rem;
      margin: 0 auto;
      position: absolute;
      bottom: 1.6rem;
      left: 0.4rem;
      background: #fff;
      padding: 0.26666667rem;
      display: flex;
      box-shadow 0 0.02666667rem 0.06666667rem 0.04rem rgba(0, 0, 0, 0.13)
      .s-leftBem
        width: 2.4rem;
        display: flex;
        flex-direction: column;
        border-right: 0.01333333rem solid #eee;
        margin-right: 0.26666667rem;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        .title
          font-size: 0.48rem;
          font-family: Bitstream;
        .content
          font-size: 0.32rem;
          color: #c8c7cc;
      .s-rightBem
        flex: 1;
        line-height: 1.06666667rem;
        font-size: 0.37333333rem;
        overflow: hidden;
        >>>.vux-slider
          span,b,.div-box
            vertical-align middle
          b
            font-weight normal
          span
            display inline-block
            width: 50px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            text-align: center;
          div.div-box
            display inline-block
            width: 1.06666667rem;
            height: 1.06666667rem;
            margin-left: 0.42666667rem;
            border-radius: 100%;
            overflow: hidden;
            img
              width 100%
              height 100%
              filter: blur(1px);
  .g-synopsis
    width: 7.76rem;
    background: #ffffff;
    box-shadow: 0rem 0.02666667rem 0.13333333rem 0rem rgba(0, 0, 0, 0.12);
    border-radius: 0.04rem;
    margin: -1.06666667rem auto 1.33333333rem;
    padding: 0 0.69333333rem;
    overflow: hidden;
    position: relative;
    .m-title
      height: 0.64rem;
      font-size: 20px;
      color: #4a4a4a;
      line-height: 0.64rem;
      margin-top: 0.37333333rem;
      text-align center
    .m-content
      font-size: 14px;
      color: #717171;
      line-height: 0.53333333rem;
      margin-top: 0.29333333rem;
      text-align: left;
    .m-icon
      display flex
      margin: 1rem 0;
      width: 100%;
      .s-item
        flex 1
        text-align center
        img
          height: 0.66666667rem;
          width: 0.53333333rem;
        div
          font-size: 14px;
    .m-btn
      width: 6.66666667rem;
      line-height: 1.17333333rem;
      background: #1B1B1B;
      border-radius: 0.93333333rem;
      font-size: 0.4rem;
      color: #fff;
      margin: 10px auto 20px;
      padding: 0 0.13333333rem;
      text-align center

</style>
