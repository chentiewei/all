<template>
    <div class="index">
        <navAll></navAll>
    </div>
</template>

<script>
    import navAll from './navAll.vue'
    export default {
      name: 'index',
      data () {
        return {
          b: '1'
        }
      },
      components: {
        navAll
      }
    }
</script>


<style scoped>

</style>