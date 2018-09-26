<template>
  <div class="dot">
    <div class="g-ps" v-html="features">
    </div>
  </div>
</template>

<script>
import store from '../../store/store.js'
  export default {
    name: 'dot',
    data(){
      return {
      }
    },
    computed:{
      features: function () {      
        let features = store.state.features;
        if(!this.$util.empty(features)){
          return store.state.features
        }else{
          return "";
        }
      }      
    }
  }
</script>


<style scoped lang="stylus">
.g-ps
  color #1b1b1b
  font-size 14px
  width 740px
  text-align center
  &>>>p
    width 100%
    padding 10px
    color #1b1b1b
    font-size 14px
    text-align left
    img
      width 100%
</style>