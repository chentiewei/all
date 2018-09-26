<template>
  <div class="brand">
    <div class="g-brand">
      <div class="m-list">
        <template v-if="type == 0">
          <router-link :key="index" v-for="(info,index) in hotBrands" :to="{ name: 'tg',params:{brandId:info.brandId} }">
            <div>
              <img :src="'http://image.isite.new4s.com/car_logos/logo_' + info.brandId + '.jpg'" alt="">
            </div>
          </router-link>
        </template>
        <template v-if="type == 1">
          <div v-for="(info,index) in hotBrands" :key="index">
            <img @click="chooseBrand(info)" :src="'http://image.isite.new4s.com/car_logos/logo_' + info.brandId + '.jpg'" alt="">
          </div>
        </template>        
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import bus from "../common/bus.js";
export default {
  name: 'brand',
   data () {
    return {
      hotBrands:[]
    }
  },
  created() {
    this.getHotBrand();
  },
  methods:{
    getHotBrand(){
      var p = {
        page:1,
        rows:20
      }
      this.$axios.get("/index/hot_brand",p).then((res) => {
        this.hotBrands = res.rows;
      })
    },
    chooseBrand(info){
      var j = {id:info.brandId,name:info.brandName}
      bus.$emit('changeBrand', j);
    }
  },
  props:["type"]   
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.g-brand
  .m-list
    width 1000px
    display flex
    flex-wrap wrap
    margin 0 auto 50px
    div
      width 200px
      height 175px
      margin-top 50px
      text-align center
      img
        max-width 200px
        max-height 175px
</style>
