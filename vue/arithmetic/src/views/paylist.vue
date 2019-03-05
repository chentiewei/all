<template>
  <div class="paylist">
    <div class="g-paylist-friendlist">
      <div class="m-box">
        <div class="s-top">
          <div class="pic">
            <img src="../assets/images/garde.png" alt="" mode="widthFix" class="paylist-content-box-top-pic--img">
          </div>
          <div class="box">
            <p>鼻相解读</p>
            <span>鼻子相学解释</span>
          </div>
        </div>
        <div class="s-bottom">
          2元解锁
        </div>
      </div>
      <div class="m-paylist-box">
        <div class="paylist-box-cause">
          <div class="result-detail">
            <div class="result-detail__title">面相事业运程报告</div>
            <div class="result-detail__text">面相上看事业运和财运怎么样？是否适合创业？应该选择哪一类工作？</div>
            <div class="result-detail__submit caree">解锁报告</div> <!----></div>
        </div>
        <div class="paylist-box-love">
          <div class="result-detail">
            <div class="result-detail__title">面相情感运程报告</div>
            <div class="result-detail__text">眉眼、嘴巴都隐藏着一个人的爱情密码。什么时候能遇上正缘？与伴侣能不能相伴永久？面相可以告诉你 …</div>
            <div class="result-detail__submit love">解锁报告</div>
          </div>
        </div>
      </div>
    </div>
    <div class="g-paylist-noresult">
      <img src="../assets/images/noresult.png" class="m-noresult-img">
      <p class="m-title">报告空缺</p>
      <p class="m-content">系统检测到您删除了您的面相报告，快去重新生成吧！</p>
      <div class="m-noresult-button">重新生成我的面相报告</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "paylist"
  }
</script>

<style scoped lang="stylus">
  .paylist
    background: #f6f6f6;
    height: 100vh;
    overflow: hidden;

  .g-paylist-friendlist
    padding 10px
    .m-box
      flex: 1;
      height: 4.42666667rem;
      background: #ffffff;
      box-shadow: 0rem 0rem 0.53333333rem 0rem rgba(0, 0, 0, 0.06);
      border-radius: 0.08rem;
      position: relative;
      margin-bottom: 0.4rem
      .s-top
        display: flex;
        -ms-flex-pack: justify;
        justify-content: space-between;
        padding: 0.58666667rem 0.53333333rem 0 0.48rem;
      .s-bottom
        width: 1.97333333rem;
        height: 0.8rem;
        background: #c52b2b;
        border-radius: 2.66666667rem;
        position: absolute;
        bottom: 0.34666667rem;
        right: 0.53333333rem;
        text-align: center;
        font-size: 0.37333333rem;
        font-weight: 400;
        color: #ffffff;
        line-height: 0.8rem;
      .pic
        width: 0.4rem;
        margin: 0.18666667rem 0 0 0.13333333rem;
        height: 0.50666667rem;
        img
          width: 0.4rem;
          height: 0.50666667rem;
      .box
        margin-left: 0.53333333rem;
        p
          font-size: 0.53333333rem;
          color: #4a4a4a;
          line-height: 0.64rem;
          text-align: right;
        span
          font-size: 0.34666667rem;
          color: #9b9b9b;
          line-height: 0.42666667rem;

    .m-paylist-box
      position: relative;
      padding-bottom: 0.26666667rem;
      padding-bottom: 0.66666667rem;
      .paylist-box-cause,.paylist-box-love
        background: url(https://faceplus.qqwechat.com/UI_IMG/careereport1.png) no-repeat;
        background-size: 100%;
        width: 8.66666667rem;
        border-radius: 0.08rem;
        padding: 0 0.4rem 0 0.4rem;
        margin: 0 auto 0.4rem;
      .paylist-box-love
        background: url(https://faceplus.qqwechat.com/UI_IMG/lovereport.png) no-repeat;
      .result-detail
        width: 8.26666667rem;
        margin: 0 auto;
        border-radius: 0.08rem;
        .result-detail__title
          width: 7.33333333rem;
          height: 0.37333333rem;
          font-size: 18px;
          font-weight: 600;
          color: #ffffff;
          line-height: 0.37333333rem;
          padding-top: 0.66666667rem;
          padding-bottom: 0.29333333rem;
          text-align: left;
        .result-detail__text
          width: 5.09333333rem;
          font-size: 14px;
          font-weight: 300;
          color: #ffffff;
          line-height: 16px;
          text-align: left;
        .result-detail__submit
          width: 2.70666667rem;
          height: 0.8rem;
          background: #ffffff;
          border-radius: 1.33333333rem;
          font-size: 14px;
          font-weight: 400;
          line-height: 0.8rem;
          text-align: center;
          position: relative;
          right: -5.6rem;
          top: -0.3rem;
  .g-paylist-noresult
    margin-top: 2.16rem;
    text-align: center;
    img
      width 100%
    p.m-title
      width: 6.66666667rem;
      margin: -2.66666667rem auto 0.26666667rem;
      font-size: 20px;
      color: #4A4A4A;
    p.m-content
      width: 6.66666667rem;
      margin: 0.26666667rem auto 0.26666667rem;
      font-size: 12px;
      color: #9B9B9B;
    .m-noresult-button
      background: #C52B2B;
      text-align: center;
      width: 6.24rem;
      height: 1.17333333rem;
      border-radius: 0.58666667rem;
      color: #fff;
      font-size: 16px;
      line-height: 1.17333333rem;
      margin: 0.53333333rem auto;
      z-index: 10;
      position: relative;
</style>
