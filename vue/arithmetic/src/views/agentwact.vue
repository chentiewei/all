<template>
  <div class="agentwact">
    <img src="../assets/images/agentwact1.png" alt="">
    <img class="g-appcode" src="http://face-plus.oss-cn-hangzhou.aliyuncs.com/UI_daili/gh_b3e6cf21200a_258.jpg" alt="">
  </div>
</template>

<script>
  export default {
    name: "agentwact",
    data(){
      return {

      }
    }
  }
</script>

<style scoped lang="stylus">
.agentwact
  text-align: center;
  position: relative;
  font-size: 0;
  img
    width 100%
    &.g-appcode
      width: 2rem;
      height: 2rem;
      position: absolute;
      top: 11.73333333rem;
      left: 50%;
      -webkit-transform: translate(-50%);
      transform: translate(-50%);
</style>
