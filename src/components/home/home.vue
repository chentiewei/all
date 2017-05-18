<template>
  <div class="home">
    <transition :name="sil">
      <router-view class="child"></router-view>
    </transition>
    <v_footer></v_footer>
  </div>
</template>

<script>
  import v_footer from './footer/footer';
  export default {
    name: 'home',
    data () {
      return {
        sil:'slide-left',
      }
    },
    components:{
        v_footer
    }
  }
</script>

<style>
  .home:after{
    content:'';
    display: block;
    width:0;
    clear: both;
  }
  .child{
    position: absolute;
    width:100%;
    transition: all .8s cubic-bezier(.55,0,.1,1);
  }
  .sli-left-enter, .sli-right-leave-active {
    opacity: 0;
    -webkit-transform: translate(50px, 0);
    transform: translate(50px, 0);
  }
  .sli-left-leave-active, .sli-right-enter {
    opacity: 0;
    -webkit-transform: translate(-50px, 0);
    transform: translate(-50px, 0);
  }
</style>
