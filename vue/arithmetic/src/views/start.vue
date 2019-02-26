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
          <Swiper></Swiper>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { Swiper } from 'vux'
  export default {
    name: "start",
    components:{
      Swiper
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
</style>
