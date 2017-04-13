<template>
  <div id="app">
    <v_header></v_header>
    <v_footer></v_footer>
    <router-view></router-view>
  </div>
</template>

<script>
import v_footer from './components/footer/footer.vue'
export default {
  name: 'app',
  components: {
    v_footer,
    v_header,
  }
}
</script>
<style>
    html{
      font-family: PingFangSC-Regular, sans-serif,'微软雅黑';
    }
</style>
