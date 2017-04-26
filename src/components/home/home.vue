<template>
  <div class="home">
    <router-view></router-view>
    <v_footer></v_footer>
  </div>
</template>

<script>
  import indexPage from './indexPage/indexPage';
  import v_footer from './footer/footer';
  export default {
    name: 'home',
    data () {
      return {

      }
    },
    components:{
        indexPage,
        v_footer
    }
  }
</script>

<style>
</style>
