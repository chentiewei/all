<template>
  <div class="listBody">
    <div class="listBody_top">
      <router-link :to="{name:'moods'}">人气</router-link>
      <router-link :to="{name:'plan'}">进度</router-link>
    </div>
    <router-view></router-view>
  </div>
  </div>
</template>

<script>
  export default {
    name: 'lisyBody',
    data(){
      return{

      }
    },
    methods:{
    },
    components: {
    }
  }
</script>
<style>
  .listBody_top{
    display:flex;
  }
  .listBody_top a{
    flex:1;
    text-align: center;
    color:#333;
    font-size: 14px;
    padding:5px 0;
  }
</style>
