<template>
  <div id="app">
    <v_header :siler="silde" :class="silde" ref="se"></v_header>
    <transition :name="silde">
      <keep-alive>
       <router-view class="c_view" @message="mess"></router-view>
      </keep-alive>
    </transition>
    <hint :show="show"></hint>
  </div>
</template>

<script>
import v_header from './components/header/header';
import hint from './components/hint/hint'
export default {
  name: 'app',
  data(){
      return{
        silde:'s_left',
        show:false,
        se:0,
      }
  },
  methods:{
      mess(){
        this.show=!this.show;
        console.log(this.show)
      }
  },
  created() {

  },
  mounted() {
      console.log('refs')
      console.log(this.$refs.se.a)
  },
  components: {
      v_header,
      hint:hint,
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
    .c_view:after{
      display: block;
      content:'';
      clear:both;
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
