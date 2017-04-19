<template>
  <div class="v_header">
    <i class="iconfont icon-xiangzuo1"></i>
    <div>{{title}}</div>
  </div>
</template>

<script>
  export default {
    name: 'v_header',
    data () {
      return {
        title:'首页',
      }
    }
  }
</script>

<style>
  .v_header{
    height:44px;
    color:#333;
  }
  .v_header i{
    position:absolute;
    height:44px;
    line-height:44px;
    padding-left:12px;
    font-size:18px;
  }
  .v_header>div{
    width:100%;
    height:100%;
    line-height:44px;
    text-align:center;
    color:#333;
    font-weight:bold;
    font-size:18px;
  }
</style>
