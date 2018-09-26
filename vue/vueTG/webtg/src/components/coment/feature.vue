<template>
  <div class="dot">
    <div class="g-ps">
      <p v-for="p in list" :key="p.id">
      <img :src="p.url">
      </p>
    </div>
  </div>
</template>

<script>
import store from '../../store/store.js'
  export default {
    name: 'dot',
    data(){
      return {
        list:[]
      }
    },
    created() {      
      this.id = this.$route.query.id;
      this.getPhotos();     
    },
    methods:{
      getPhotos(){
        var p = {
          page:1,
          rows:10
        }
        this.$axios.get("/sys/site_photo/list",p).then((res) => {
          this.list = res.rows;         
        })
      }
    }
  }
</script>


<style scoped lang="stylus">
.g-ps
  color #1b1b1b
  font-size 14px
  width 740px
  line-height 130px
  text-align center
  &>>>p
    width 100%
    padding 10px
    color #1b1b1b
    font-size 14px
    img
      width 100%
</style>