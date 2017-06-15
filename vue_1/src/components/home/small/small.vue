<template>
  <div class="small">
    <div @click="message">点击出现提示框</div>
  </div>
</template>

<script>
  export default {
    name: 'small',
    data(){
      return{

      }
    },
    methods:{
      message(){
        console.log(this.$parent.$emit('message'));
      }
    },
    computed: {

    },
    components: {}
  }
</script>
<style>

</style>
