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
<style lang="stylus">
  #app
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
  @keyframes circle
    0%
      transform rotate(0deg)
    100%
      transform rotate(360deg)
</style>
