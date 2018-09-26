<template>
  <div class="dealer">
    <a :key="car.distributorCode" v-for="car in list" target="_blank" :href="getUrl(car.distributorCode)">
    <div class="g-content"  >
      <div class="m-img">
        <img :src="car.imageUrl+'?x-oss-process=image/resize,w_160'" alt="">
      </div>
      <div class="m-details">
        <p class="s-shopName">{{car.distributorName}} <i></i></p>
        <div class="s-shopDetails">
          <i></i>
          <span>{{car.address}} </span>
        </div>
        <div class="s-shopDetails">
          <i class="phone"></i>
          <span>{{car.phone}} </span>
        </div>
      </div>
    </div>
    </a>
  </div>
</template>

<script>
  export default {
    name: 'dealer',
    data(){
      return {
        list:[]
      }
    },
    created() {      
      this.id = this.$route.query.id;
      this.getDistributor();     
    },
    methods:{
      getDistributor(){
        var p = {
          page:1,
          rows:10
        }
        this.$axios.get("/sys/distributor/certified/list",p).then((res) => {
          this.list = res.rows;         
        })
      },
      getUrl(code){
        return "http://"+code+".isite.new4s.com/";
      }
    }
  }
</script>


<style scoped lang="stylus">
.g-content
  padding 20px
  display flex
  flex-wrap wrap
  .m-img
    width 150px
    height 100px
    img
      width 100%
      height 100%
  .m-details
    width calc(100% - 150px)
    padding-left 20px
    .s-shopName
      font-size 18px
      color #1b1b1b
      height 40px
      line-height 40px
      border-bottom 1px dotted #dcdcdc
      display block
    .s-shopDetails
      margin-top 10px
      i
        display inline-block
        width 16px
        height 16px
        background url(../../assets/images/lout.png) no-repeat center center
        vertical-align middle
        margin-right 10px
        &.phone
          background-image url(../../assets/images/phoned.png)
      span
        vertical-align middle
        color #1b1b1b
        font-size 14px
</style>