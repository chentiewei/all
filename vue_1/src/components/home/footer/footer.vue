<template>
  <div class="v_footer">
    <router-link :to="{path:'/home'}" >
      <i class="iconfont" :class="icon_arr[0]"></i>
      <p>首页</p>
    </router-link>
    <router-link :to="{path:'/winner'}">
      <i class="iconfont" :class="icon_arr[1]"></i>
      <p>最新揭晓</p>
    </router-link>
    <router-link :to="{path:'/share'}">
      <i class="iconfont" :class="icon_arr[2]"></i>
      <p>分享晒单</p>
    </router-link>
    <router-link :to="{path:'/userCenter'}">
      <i class="iconfont" :class="icon_arr[3]"></i>
      <p>个人中心</p>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: 'v_footer',
    data () {
      return {
        icon_arr:['icon-shouye','icon-shizhong','icon-xiangji1','icon-yonghu'],
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
    background:#f8f8f8;
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
  .footer_active{
    color:#ed702d !important;
  }
</style>
