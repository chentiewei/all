<template>
  <div class="g-product">
   产品详情
      {{a}}
      <button @click="btn">点一下，加一次</button>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data(){
    return{
        a:this.$store.getters.done
    }
  },
  methods:{
      btn(){
          console.log(this.a=this.$store.getters.done);
          this.$store.commit('gi')
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
