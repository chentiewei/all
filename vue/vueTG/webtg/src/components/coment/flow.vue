<template>
  <div class="flow">
    <div class="g-content">
      <img v-if="$route.query.tg" src="../../assets/images/tgflow.png" alt="">
      <img v-else src="../../assets/images/flow.png" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'flow',
    data(){
      return {
      }
    }
  }
</script>


<style scoped lang="stylus">
.g-content
  img
    width 100%
</style>