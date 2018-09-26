<template>
  <div class="exhibition">
    <div class="w1000">
      <div class="g-content">
        <span class="m-title">杭州推荐 4S 店</span>
        <div class="m-shopList">
          <div class="s-shop" v-for="(info,index) in datas" :key="index">
            <a target="_blank" :href="getUrl(info.distributorCode)">
            <div class="shopimg"><img :src="info.imageUrl+'?x-oss-process=image/resize,w_280'" alt=""></div>
            <span>{{info.cityName}} {{info.distributorName}}</span>
            <div class="shopDetails">
              <i></i>
              <span>{{info.address}} </span>
            </div>
            <div class="shopDetails">
              <i class="phone"></i>
              <span>{{info.phone}} </span>
            </div>
            </a>
          </div>
          
        </div>
        <page :total="totalPage" :current="page" @changeData="onChangePage"/>      
      </div>
    </div>
  </div>
</template>

<script>
import page from './common/page'
  export default {
    name: 'exhibition',
    data(){
      return {
        page:1,
        size:9,
        datas:[],
        total:0,
        totalPage:0,
        order:'',
        asc:false
      }
    },
    components: {
      page
    },
    created() {
      this.getList();
    },
    methods:{
      getList(){
        var params = {
          page:this.page,
          rows:this.size,
          asc:this.asc,
          order:this.order
        }
        this.$axios.get("/ieh/list",params).then((res) => {
          this.datas = res.rows;
          this.total = res.total;
          this.totalPage = this.$util.toInt((this.total-1)/this.size)+1;
        })
      },
      onChangePage(p){
        this.page = p;
        this.getList();
      },
      getUrl(code){
        return "http://"+code+".isite.new4s.com";
      }
    }
  }
</script>


<style scoped lang="stylus">
.g-content
  .m-title
    display block
    height 60px
    line-height 60px
    color #1b1b1b
    font-size 18px
  .m-shopList
    font-size 0
    .s-shop
      display inline-block
      width 320px
      height 320px
      padding 20px
      border 1px solid #dcdcdc
      border-radius 5px
      margin-bottom 20px
      &:nth-child(3n-1)
        margin-left 15px
        margin-right 15px
      .shopimg
        width 280px
        height 185px
        img
          width 100%
          height 100%
      &>span
        display block
        height 45px
        line-height 45px
        color #1b1b1b
        font-size 18px
        border-bottom 1px dotted #dcdcdc
      .shopDetails
        margin-top 10px
        i
          display inline-block
          width 16px
          height 16px
          background url(../assets/images/lout.png) no-repeat center center
          vertical-align middle
          margin-right 10px
          &.phone
            background-image url(../assets/images/phoned.png)
        span
          vertical-align middle
          color #1b1b1b
          font-size 14px
</style>