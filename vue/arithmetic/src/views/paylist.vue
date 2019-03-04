<template>
  <div class="paylist">
    <div class="g-paylist-friendlist">
      <div class="m-list-name">我的报告</div>
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
  display none
  .m-list-name
    font-size: 0.37333333rem;
    font-weight: 600;
    color: #ffffff;
    height: 0.72rem;
    background: #969696;
    border-radius: 0.37333333rem;
    line-height: 0.72rem;
    text-align: center;
    padding: 0 0.26666667rem;
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
