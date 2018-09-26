<template>
  <div class="buycar">
    <brand :hotBrands="hotBrands" @chooseBrand="onChooseBrand"/>
    <div class="g-car-sort">
      <div class="w1000">
        <div class="m-car-num">
          <b>{{cityName}}</b>有<b> {{total}} </b>辆车
        </div>
        <div class="m-sort">
          <span :class="'s-money '+ (order=='guide_price'?'active':'')" @click="order='guide_price';page=1;getList()">指导价<i></i></span>
          <span :class="'s-hot '+ (order=='hot'?'active':'')" @click="order='hot';page=1;getList()">热度<i></i></span>
        </div>
      </div>
    </div>
    <div class="g-car-list">
      <div class="w1000">
        <div class="m-car" v-for="(info,i) in datas" :key="i" :to="{ name: 'cardetails' }">
          <div class="s-img">
            <img :src="info.imageUrl+'?x-oss-process=image/resize,w_210'" alt="">
          </div>
          <div class="s-title">{{info.brandName}} {{info.seriesName}}</div>
          <div class="s-money">指导价：{{info.guidePrice}}</div>
          <div class="s-dt">
            <div><b>{{info.buyerCount}}</b> 人正在购买</div>
            <router-link tag="button" :to="{ name: 'cardetails', query:{id:info.id}}">获取底价</router-link>
          </div>
        </div>
        <page :total="totalPage" :current="page" @changeData="onChangePage"/>       
      </div>
    </div>
  </div>
</template>

<script>
import page from './common/page'
import brand from './common/brand'
import store from '../store/store.js'
import bus from './common/bus'
  export default {
    name: 'buycar',
    data(){
      return {
        brand:0,
        page:1,
        size:12,
        datas:[],
        total:0,
        totalPage:0,
        order:'',
        asc:false,
        brandId:'',
        seriesId:'',
        cityId:'',
        cityName:'',

        searchWord:'',
        hotBrands:[] //热门品牌
      }
    },
    components: {
      page,brand
    },
    created() {
      let bid = this.$route.params.brandId;
      let sid = this.$route.params.seriesId;
      let searchWord = this.$route.params.searchWord;
      if(!this.$util.empty(bid)){
        this.brandId = bid;
      }
      if(!this.$util.empty(sid)){
        this.seriesId = sid;
      }
      if(!this.$util.empty(searchWord)){
        this.searchWord = searchWord;
      }
      let city = store.state.currentCity;
      if(!this.$util.empty(city)){
        this.cityId = city.id;
        this.cityName = city.name;

        this.getList();
      }
      let that = this;
      bus.$on('changeCity', function(city) {
        if(!this.$util.empty(city)){
          that.cityId = city.id;
          that.cityName = city.name;
          that.getList();
        } 
      });
      this.getHotBrand();
    },
    methods:{
      getList(){
        var params = {
          page:this.page,
          rows:this.size,
          asc:this.asc,
          order:this.order,
          brandId:this.brandId,
          seriesId:this.seriesId,
          cityId:this.cityId,
          search:this.searchWord
        }
        this.$axios.get("/buy_car/list",params).then((res) => {
          this.datas = res.rows;
          this.total = res.total;
          this.totalPage = this.$util.toInt((this.total-1)/this.size)+1;
        })
      },
      onChangePage(p){
        this.page = p;
        this.getList();
      },
      onChooseBrand(brandId){
        this.brandId = brandId;
        this.getList();
      },
      getHotBrand(){
        var p = {
          page:1,
          row:20
        }
        this.$axios.get("/index/hot_brand",p).then((res) => {
          this.hotBrands = res.rows;
        })
      }
    },
    computed:{
      city: function () {    
        let city = store.state.currentCity;
        if(!this.$util.empty(city)){
          this.getList();
        }
      }      
    }
  }
</script>


<style scoped lang="stylus">
.g-car-sort
  height 60px
  line-height 60px
  .m-sort,.m-car-num
    float left
  .m-car-num
    font-size 18px
    color #1b1b1b
    b
      color #e93644
      font-size 18px
  .m-sort
    font-size 0
    color #1b1b1b
    float right
    height 60px
    span
      font-size 14px
      margin-left 20px
      i
        display inline-block
        width 15px
        height 15px
        background url(../assets/images/sort.png) no-repeat center center
        vertical-align: sub;
      &.active
        color #e93644
.g-car-list
  font-size 0
  .m-car
    width 235px
    height 280px
    border 1px solid #dcdcdc
    padding 15px
    border-radius 5px 
    display inline-block
    margin-left 15px
    margin-bottom 20px
    &:nth-child(4n)
      margin-right 0
    &>div
      text-align center
    .s-img
      width 205px
      height 135px
      img
        width 100%
        height 100%
    .s-title
      color #1b1b1b
      font-size 18px
      margin-top 15px
    .s-money
      margin-top 15px
      font-size 14px
    .s-dt
      margin-top 15px
      div,button
        display inline-block
      div
        color #1b1b1b
        font-size 14px
        margin-top 15px
        b
          color #e93644
      button
        cursor pointer
        float right
        font-size 16px
        color #fff
        background #e93644
        border 1px solid #e93644
        width 90px
        height 40px
        border-radius 5px
</style>