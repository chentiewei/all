<template>
  <div class="report">
    <div class="g-title">
      <p>面相报告</p>
      <div class="m-face-img">
        <div class="s-face-content">
          <img src="https://faceplus.qqwechat.com/2019-02-27_cbff441075c43a15348d0362252da1fd.png?x-oss-process=image/crop,x_87,y_156,w_534,h_534">
        </div>
        <div class="face-result-line" style="top: 1.08rem; left: 4.9706rem;"></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "report"
  }
</script>

<style scoped lang="stylus">
.g-title
  height: 10.4rem;
  background: #1b1b1b;
  overflow: auto;
  padding-top: 0.8rem;
  p
    color #fff
    text-align center
    font-size: 0.8rem;
    font-family: PingFangSC-Regular;
    color: #ffffff;
    line-height: 0.88rem;
    animation: leftinto 2s;
  .m-face-img
    margin-top: 0.8rem;
    height: 6.66666667rem;
    overflow: hidden;
    position: relative;
    .s-face-content
      width: 4.73333333rem;
      height: 4.73333333rem;
      margin: 0.86666667rem auto;
      border: 0.13333333rem solid #666;
      overflow: hidden;
      background: #fff;
      border-radius: 100%;
      animation: fadein 2s;
      img
        width: 100%;
        filter: blur(5px);
    .face-result-line
      width: 4rem;
      height: 1px;
      border-bottom: 1px solid #B0B0B0;
      position: absolute;
      animation: widthshow 2s;
@keyframes leftinto
  0%
    margin-left: 1rem;
    opacity: 0.5;
  100%
    margin-left: 0
    opacity: 1;
</style>
