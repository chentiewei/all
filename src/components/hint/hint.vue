<template>
  <div class="hint">
    1111
  </div>
</template>

<script>
  export default {
    name: 'hint',
    data(){
      return{

      }
    },
    methods:{

    },
    created() {
    },
    mounted() {
    },
    beforeRouteUpdate(to, from, next){
      console.log()
      next();
    },
    components: {

    },
  }

</script>
<style>
.hint{
  width:100%;
  height:50px;
}
</style>
