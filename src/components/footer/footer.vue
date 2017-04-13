<template>
  <div class="v_footer">
    <router-link to="/index">
      <i class="iconfont icon-shouye"></i>
      <p>首页</p>
    </router-link>
    <router-link to="/index1">
      <i class="iconfont icon-shizhong"></i>
      <p>最新揭晓</p>
    </router-link>
    <router-link to="/index2">
      <i class="iconfont icon-xiangji1"></i>
      <p>分享晒单</p>
    </router-link>
    <router-link to="/index3">
      <i class="iconfont icon-yonghu"></i>
      <p>个人中心</p>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: 'v_footer',
    data () {
      return {

      }
    }
  }
</script>

<style>
  .v_footer{
    display: flex;
    position: fixed;
    bottom:0;
    width:100%;
    text-align: center;.
    color:#999999;
  }
  .v_footer>a{
    flex:1;
    color:#999999;
  }
  .v_footer i{
    display: block;
    font-size:1.175rem;
    margin-top:0.3rem;
  }
  .v_footer p{
    margin:7px 0 6px 0;
    font-size:0.5rem;
  }
</style>
