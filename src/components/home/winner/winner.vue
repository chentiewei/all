<template>
  <div class="winner">
    <div>
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
</style>
