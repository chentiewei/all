<template>
  <div id="app">
    <v_header></v_header>
    <transition :name="silde">
      <router-view class="child-view"></router-view>
    </transition>
  </div>
</template>

<script>
import v_header from './components/header/header';
export default {
  name: 'app',
  data(){
      return{
        silde:'slide-left',
      }
  },
  methods:{
  },
  created() {
  },
  components: {
      v_header
  },
}

</script>
<style>
    @import "../static/icon/iconfont.css";
    html {
      font-family: PingFangSC-Regular, '微软雅黑', sans-serif;
    }
    .child-view {
      position: absolute;
      width:100%;
      transition: all .8s cubic-bezier(.55,0,.1,1);
    }
    .slide-left-enter, .slide-right-leave-active {
      opacity: 0;
      -webkit-transform: translate(50px, 0);
      transform: translate(50px, 0);
    }
    .slide-left-leave-active, .slide-right-enter {
      opacity: 0;
      -webkit-transform: translate(-50px, 0);
      transform: translate(-50px, 0);
    }
</style>
