<template>
  <div id="app">
    <v_header :siler="silde" :class="silde" ref="se"></v_header>
    <transition :name="silde">
      <keep-alive>
       <router-view class="c_view"></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
import v_header from './components/header/header';
export default {
  name: 'app',
  data(){
      return{
        silde:'s_left',
      }
  },
  methods:{
  },
  created() {
  },
  mounted() {
  },
  beforeRouteUpdate(to, from, next){
    console.log()
    next();
  },
  components: {
      v_header,
  },
}

</script>
<style>
    @import "../static/icon/iconfont.css";
    html {
      font-family: PingFangSC-Regular, '微软雅黑', sans-serif;
    }
    .c_view {
      position: absolute;
      width:100%;
      transition: all .8s cubic-bezier(.55,0,.1,1);
    }
    .s_left-enter, .s_right-leave-active {
      opacity: 0;
      -webkit-transform: translate(50px, 0);
      transform: translate(50px, 0);
    }
    .s_left-leave-active, .s_right-enter {
      opacity: 0;
      -webkit-transform: translate(-50px, 0);
      transform: translate(-50px, 0);
    }
</style>
