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
</style>
