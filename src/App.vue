<template>
  <div id="app">
    <v_header></v_header>
    <router-view></router-view>
  </div>
</template>

<script>
import v_header from './components/header/header';
export default {
  name: 'app',
  data(){
      return{

      }
  },
  methods:{
  },
  components: {
      v_header
  }
}
</script>
<style>
    @import "../static/icon/iconfont.css";
    html{
      font-family: PingFangSC-Regular,'微软雅黑',sans-serif;
    }
</style>
