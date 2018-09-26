<template>
  <div id="app" v-cloak>
    <top/>
    <keep-alive>
    <router-view v-wechat-title='$route.meta.title' v-if="$route.meta.keepalive"/>
    </keep-alive>
    <transition>
    <router-view v-wechat-title='$route.meta.title' v-if="!$route.meta.keepalive"/>
    </transition>
  </div>
</template>

<script>
import top from './components/common/top'
export default {
  name: 'App',
  beforeRouteLeave(to, from, next) { 
    let position = window.scrollY //记录离开页面的位置 
    if (position == null) position = 0 
    this.$store.commit('changeRecruitScrollY', position) //离开路由时把位置存起来 
    next() 
  }, 
  watch: { 
    '$route' (to, from) { 
      if (to.name === '你想要保存跳转位置的路由') {
        let recruitScrollY = this.$store.state.recruitScrollY
        window.scroll(0, recruitScrollY) 
      }else{
        window.scroll(0, 0) 
      }
    } 
  },
  components: {
    top
  }
}
</script>

<style scoped lang="stylus">
#app 
  margin-top 145px
</style>
