<template>
  <div class="agentwact">
    <img src="../assets/images/agentwact3.png" alt="">
    <img class="g-qrcode" src="https://faceplus.qqwechat.com/UI_daili/geek878787.jpeg">
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
    &.g-qrcode
      width: 4rem;
      height: 4rem;
      position: absolute;
      top: 27.33333333rem;
      left: 50%;
      -webkit-transform: translate(-50%);
      transform: translate(-50%);
</style>
