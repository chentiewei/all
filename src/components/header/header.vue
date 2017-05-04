<template>
  <div class="v_header">
    <i class="iconfont icon-xiangzuo1" @click="goback"></i>
    <div>{{$route.meta.title}}</div>
  </div>
</template>

<script>
  export default {
    name: 'v_header',
    data () {
      return {

      }
    },
    methods: {
      goback () {
        window.history.go(-1);
      }
    },
    created:function () {

    },
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
