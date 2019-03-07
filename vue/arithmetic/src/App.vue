<template>
  <div id="app">
    <keep-alive>
      <router-view
              v-wechat-title="$route.meta.title"
              v-if="$route.meta.keepalive"
      />
    </keep-alive>
    <router-view
            v-wechat-title="$route.meta.title"
            v-if="!$route.meta.keepalive"
    />
  </div>
</template>
<script>
  export default {
    name: "app",
    created(){
    },
    methods:{

    }
  };
</script>
<style lang="less">
  @import '~vux/src/styles/reset.less';
</style>

<style lang="stylus">
  #app
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
  /*缓慢下降*/
  .slide-fade-enter-active, .slide-fade-leave-active
    transition: all 0.8s
  .slide-fade-enter, .slide-fade-leave-to
    transform: translateY(-10px);
    opacity: 0;
  /*转圈-正向*/
  @keyframes circle
    0%
      transform rotate(0deg)
    100%
      transform rotate(360deg)
  /*转圈-逆向*/
  @keyframes circleR
    0%
      transform rotate(360deg)
    100%
      transform rotate(0deg)
  /*渐显*/
  @keyframes fadein
    0%
      opacity: 0;
    100%
      opacity: 1;
  /*移入*/
  @keyframes showtitleanima
    0%
      margin-left: 1rem;
    100%
      margin-left: 0
  /*渐渐移入*/
  @keyframes leftinto
    0%
      margin-left: 1rem;
      opacity: 0.5;
    100%
      margin-left: 0
      opacity: 1;
</style>
