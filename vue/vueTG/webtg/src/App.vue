<template>
  <div id="app">
    <search v-if="searchShow()"/>
    <top/>
    <keep-alive>
      <transition>
      <router-view v-wechat-title='$route.meta.title' v-if="$route.meta.keepalive"/>
      </transition>
    </keep-alive>
    <transition>
      <router-view v-wechat-title='$route.meta.title' v-if="!$route.meta.keepalive"/>
    </transition>
    <bottom/>
  </div>
</template>

<script>
  import search from '@/components/common/search'
  import top from '@/components/common/top'
  import bottom from '@/components/common/bottom'
  export default {
    name: 'App',
    methods:{
      searchShow(){
        let _path=this.$route.fullPath;
        return (_path.indexOf('cardetails')>=0||_path.indexOf('teamdetails')>=0)&&true;
      }
    },
    components: {
      search,
      top,
      bottom
    }
  }
</script>

<style scoped lang="stylus">
  #app
    min-width 1000px
    color #000
</style>
