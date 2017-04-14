<template>
  <div id="app">
    <v_header></v_header>
    <router-view></router-view>
    <div class="v_footer">
      <router-link :to="{name:'home'}" >
        <i class="iconfont" :class="icon_arr[0]" @click="fill"></i>
        <p>首页</p>
      </router-link>
      <router-link to="/index1">
        <i class="iconfont" :class="icon_arr[1]"></i>
        <p>最新揭晓</p>
      </router-link>
      <router-link to="/index2">
        <i class="iconfont" :class="icon_arr[2]"></i>
        <p>分享晒单</p>
      </router-link>
      <router-link to="/index3">
        <i class="iconfont" :class="icon_arr[3]"></i>
        <p>个人中心</p>
      </router-link>
    </div>
  </div>
</template>

<script>
import v_header from './components/header/header'
export default {
  name: 'app',
  data(){
      return{
        icon_arr:['icon-shouye','icon-shizhong','icon-xiangji1','icon-yonghu'],
      }
  },
  methods:{
      fill:function(e){
      }
  },
  components: {
    v_header,
  }
}
</script>
<style>
    @import "../static/icon/iconfont.css";
    html{
      font-family: PingFangSC-Regular,'微软雅黑',sans-serif;
    }
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
    .footer_active{
      color:#ed702d !important;
    }
</style>
