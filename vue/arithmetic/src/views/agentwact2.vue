<template>
  <div class="agentwact">
    <img src="../assets/images/agentwact2.png" alt="">
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
      width: 4.66666667rem;
      height: 4.66666667rem;
      position: absolute;
      top: 8rem;
      left: 50%;
      -webkit-transform: translate(-50%);
      transform: translate(-50%);
</style>
