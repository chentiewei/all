<template>
  <div class="g-carList">
    <div class="m-title">
      <div class="s-field">热门车型</div>      
      <router-link class="s-more"  :to="{ name: 'buycar' }"><b>更多 ></b></router-link>
    </div>
    <div class="m-list">
      <div class="s-car" v-for="(info,index) in list" :key="index" @click="go(info.id)">
        <div class="carimg">
          <img :src="info.imageUrl+'?x-oss-process=image/resize,w_200'" alt="">
        </div>
        <span>{{info.seriesName}}</span>
      </div>
      
    </div>
  </div>
</template>

<script>
  export default {
    name: 'carList',
    data() {
      return {
        list:[]
      }
    },
    created () {
      this.getList();
    },
    methods:{
      getList(){
        var p = {
          page:1,
          rows:5
        }
        this.$axios.get("/buy_car/hot/list",p).then((res) => {
          this.list = res.rows;
        })
      },
      go(id){
        this.$router.push({name:'cardetails' ,query:{id:id}});        
      }
    }
  }
</script>


<style scoped lang="stylus">
.g-carList
  width 240px
  min-height 200px
  margin-left 20px
  display inline-block
  background #fff
  .m-title
    padding 15px
    border-bottom 5px solid #e93644
    .s-field
      display inline-block
      color #1b1b1b
      font-size 16px
    b
      float right
      font-size 14px
      color #a0a0a0
      margin-top 1px
  .m-list
    padding 20px
    .s-car
      text-align center
      .carimg
        width 200px
        height 130px
        img
          width 100%
          height 100%
      span
        display block
        font-size 16px
        color #000000
        height 40px
        line-height 40px 
</style>
