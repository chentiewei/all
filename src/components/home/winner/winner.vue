<template>
  <div class="winner">
    <div class="winner_header">
      <router-link :to="{ name:'all' }">全部</router-link>
      <router-link :to="{ name:'going' }">我参与的</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'winner',
    data () {
      return {

      }
    },
    components:{

    }
  }
</script>

<style>
  .winner .winner_header{
    font-size:14px;
    display: flex;
    text-align: center;
  }
  .winner .winner_header a{
    flex: 1;
    border-bottom:1px solid #ddd;
    padding:10px 0;
  }
</style>
