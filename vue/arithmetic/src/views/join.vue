<template>
  <div class="join">
    <div class="g-join-title">
      <p>欢迎成为</p>
      <p>微算面相推广合伙人</p>
    </div>
    <div class="g-join-project">
      <div class="m-title">推广产品：</div>
      <div class="m-img">
        <img src="../assets/images/logo.png" alt="">
      </div>
      <div>微算面相</div>
    </div>
    <div class="g-join-text">
      <div class="m-join-title">收益最高可拿50%</div>
      <div class="m-join-content">
        <img src="../assets/images/dian.png" alt="">
        <div class="">推广佣金40% + 推荐代理分成佣金10%</div>
      </div>
    </div>
    <div class="g-join-text">
      <div class="m-join-title">用户裂变能力极强</div>
      <div class="m-join-content">
        <img src="../assets/images/dian.png" alt="">
        <div class="">产品新颖接受度高 用户分享意愿高</div>
      </div>
      <div class="m-join-content">
        <img src="../assets/images/dian.png" alt="">
        <div class="">提现即时到账微信零钱</div>
      </div>
    </div>
    <div class="g-join-but">
      <div class="m-top">
        <div>发朋友圈日赚上百</div>
        <div>认真推广收益可上千</div>
      </div>
      <router-link :to="{name:'agentdetails'}" tag="div" class="m-bottom">
        <div>开始赚钱</div>
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: "join"
  }
</script>

<style scoped lang="stylus">
.join
  height: 100vh;
  background: url(../assets/images/joinbg.4a190551.png) no-repeat center center;
  background-size: 100% 100%;
  position: relative;
  overflow: auto;
  .g-join-title
    color: #fff;
    padding-top: 1.01333333rem;
    padding-left: 0.56rem;
    text-align: left;
    font-size: 20px;
    font-weight: 600;
    p:nth-child(2)
      font-size: 32px;
  .g-join-project
    margin-top: 0.46666667rem;
    &>div
      font-size 12px
      display inline-block
      vertical-align middle
    .m-title
      color: #fff;
      text-align: right;
      margin-left: 0.56rem;
      line-height: 0.88rem;
    .m-img
      width 33px
      height 33px
      img
        width 100%
        height 100%
  .g-join-text
    text-align: left;
    padding-left: 0.56rem;
    margin-top: 0.93333333rem;
    color: #fff;
    .m-join-title
      font-size: 20px;
      font-weight: 600;
    .m-join-content
      display: flex;
      align-items: center;
      font-size: 16px;
      img
        width: 0.13333333rem;
        height: 0.13333333rem;
        margin-right: 0.32rem;
  .g-join-but
    width: 9.04rem;
    height: 7.33333333rem;
    background: url(../assets/images/joinbut.39ec3b31.png) no-repeat center center;
    background-size: 100% 100%;
    margin: 0 auto 0.66666667rem;
    .m-top
      padding: 3.06666667rem 0 0.4rem 0;
      margin: 0 0.26666667rem;
      height: 0.8rem;
      font-size: 22px;
      line-height: 0.8rem;
      text-align: center;
      color: #FE7823;
    .m-bottom
      height: 0.85333333rem;
      padding: 1.53333333rem 0;
      border-radius: 0.53333333rem;
      font-size: 14px;
      div
        line-height: 0.85333333rem;
        color: #fff;
        text-align: center;
</style>
