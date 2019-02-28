<template>
  <div class="userCenter">
    <div class="">
      <ul class="listNav">
        <li>
          <div>
            <img src="../assets/images/yinsi.png" alt="">
          </div>
          <div>隐私协议(更新)</div>
        </li>
        <li></li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "userCenter"
  }
</script>

<style scoped lang="stylus">
.userCenter
  box-sizing border-box
  height 100vh
  background #F6F6F6
  padding 0.26666667rem 0
  .listNav
    padding: 0.13333333rem 0 0.06666667rem 0.66666667rem;
    background: #fff;
    li
      border-bottom: 0.01333333rem solid rgba(66, 82, 105, 0.1);
      display: flex;
      font-size: 0.37333333rem;
      line-height: 1.17333333rem;
      color: #000;
      height: 1.17333333rem;
</style>
