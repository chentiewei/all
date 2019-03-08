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
  @import "/assets/css/animation.styl"
  #app
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
</style>
