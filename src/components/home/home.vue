<template>
  <div class="home">
    <transition :name="silde">
      <keep-alive>
        <router-view class="child-view"></router-view>
      </keep-alive>
    </transition>
    <v_footer></v_footer>
  </div>
</template>

<script>
  import v_footer from './footer/footer';
  export default {
    name: 'home',
    props:['show'],
    data () {
      return {
        silde:'slide-left',
      }
    },
    created() {
      console.log(this.$store.state.a);
    },
    beforeRouteUpdate(to, from, next){
      let isBack = this.$router.isBack
      if (isBack) {
        this.silde = 'slide-right';
      } else {
        this.silde = 'slide-left';
      }
      this.$router.isBack = false;
      next();
    },
    components:{
        v_footer
    },
  }
</script>

<style>
  .home{
    min-height:calc( 100% - 45px );
  }
  .home:after{
    content:'';
    display: block;
    width:0;
    clear: both;
  }
  .child-view {
    position: absolute;
    width:100%;
    transition: all .8s cubic-bezier(.55,0,.1,1);
  }
  .child-view:after{
    content:'';
    display:block;
    clear:both;
  }
  .slide-left-enter, .slide-right-leave-active {
    opacity: 0;
    transform: translate(50px, 0);
  }
  .slide-left-leave-active, .slide-right-enter {
    opacity: 0;
    transform: translate(-50px, 0);
  }
</style>
