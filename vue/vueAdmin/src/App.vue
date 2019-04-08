<template>
  <div id="app" v-cloak>
    <div class="adise">
      <adise/>
    </div>
    <div class="main-container">
      <navbar/>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
  import adise from './components/adise'
  import navbar from './components/navbar'
  export default {
    name: "app",
    data(){
      return{
      }
    },
    created(){

    },
    computed: {

    },
    methods:{

    },
    components: {
      adise,
      navbar
    }
  };
</script>
<style lang="stylus">
  body
    margin 0
  .main-container
    min-height: 100%;
    transition: margin-left .28s;
    margin-left: 180px;
    position: relative;
</style>
