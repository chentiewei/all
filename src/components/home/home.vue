<template>
  <div class="home">
    <transition :name="silde">
      <router-view class="child-view"></router-view>
    </transition>
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
        silde:'slide-left',
      }
    },
    components:{
        indexPage,
        v_footer
    }
  }
</script>

<style>
  .child-view {
    position: absolute;
    width:100%;
    transition: all .8s cubic-bezier(.55,0,.1,1);
  }
  .slide-left-enter, .slide-right-leave-active {
    opacity: 0;
    -webkit-transform: translate(50px, 0);
    transform: translate(50px, 0);
  }
  .slide-left-leave-active, .slide-right-enter {
    opacity: 0;
    -webkit-transform: translate(-50px, 0);
    transform: translate(-50px, 0);
  }
</style>
