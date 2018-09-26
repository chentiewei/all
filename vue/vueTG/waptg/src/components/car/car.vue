<template>
  <div class="car">
    <div class="title">
      <div></div>
      <span>{{cityName}}热门品牌</span>
      <router-link tag="i" :to="{name:'brandchoose'}">
      <>全部品牌 <van-icon name="arrow" /></>
      </router-link>
    </div>
    <brand :type="1"/>
    <border/>
    <div class="title titled">
      <div></div>
      <span>{{cityName}}热销车型</span>
      <i>
        <span :class="{'active':order=='hot'}" @click="order='hot';getList()">热度</span>
        <b :class="{'active':order=='guide_price'}" @click="order='guide_price';getList()">指导价</b>
      </i>
    </div>
    <div class="g-carList">      
      <div class="m-list">
        <van-list
          v-model="loading"
          :finished="finished"
          @load="onLoad"
        >
          <van-cell v-for="info in datas" :key="info.id"  >
          <div class="s-details">
            <div class="carimg">
              <img :src="info.imageUrl+'?x-oss-process=image/resize,w_210'" alt="">
            </div>
            <div class="carcontent">
              <span>{{info.brandName}} {{info.seriesName}}</span>
              <p>指导价：{{info.guidePrice}}</p>
              <b><i>{{info.buyerCount}}</i>人正在购买</b>
            </div>
            <router-link :to="{ name: 'cardetails', query:{id:info.id}}" tag="button">获取底价</router-link>
          </div>
          </van-cell>
        </van-list>

        
      </div>
    </div>
  </div>
</template>

<script>
import border from '../common/border'
import brand from '../common/brand'

import store from '../../store/store.js'
import bus from '../common/bus'
export default {
  name: 'car',
  data () {
    return {
      carshow:0,/*车型*/
      datas: [],
      loading: false,
      finished: false,
      page:1,
      size:10,
      order:'',
      asc:false,
      brandId:'',
      seriesId:'',
      cityId:'',
      cityName:''
    }
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
      }
      let that = this;
      bus.$on('changeCity', function(city) {
        console.log("aaaaaaaaaaaaaaaa"+city.id);
        if(!this.$util.empty(city)){
          that.cityId = city.id;
          that.cityName = city.name;
          that.getList();
        } 
      });
      bus.$on('changeBrand', function(brand) {
        if(!that.$util.empty(brand)){
          that.brandId = brand.id;
          that.getList();
        } 
      });
  },
  methods:{
    getList(){
      this.page = 1;
      this.finished = false;
      this.datas = [];
      this.onLoad();
    },
    onLoad() {
      this.loading = true;
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
          this.loading = false;
          for(var i = 0 ; i < res.rows.length; i ++){
            this.datas.push(res.rows[i]);   
          }
          this.totalPage = this.$util.toInt((res.total-1)/this.size)+1;
          if(this.totalPage<=this.page){
            this.finished = true;
          }
          this.page ++;
        })     
    }
  },
  components: {
    border,
    brand
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.titled
  i
    font-size 0
    span,b
      display inline-block
      vertical-align bottom
      font-size 39px
    span
      color #959595
      margin-right 20px
      &.active
       color #e83644
    b
      width 160px
      background url(../../assets/images/sort.png) no-repeat right center
      background-size 30px 45px
      &.active
        color #e83644
        background url(../../assets/images/sortc.png) no-repeat right center
        background-size 30px 45px
.g-carList
  .m-list
    .s-details
      padding 40px 40px
      display flex
      border-bottom 1px solid #d4d4d4
      &:last-child
        border 0
      .carimg
        width 270px
        height 180px
        img
          width 100%
          height 100%
      .carcontent
        margin-left 40px
        width 410px
        span
          display block
          font-size 39px
          color #1b1b1b
          margin-top 15px
        p
          font-size 36px
          color #959595
          margin-top 20px
        b
          display block
          color #959595
          margin-top 25px
          i
            color #e83644
            font-size 36px
            font-style normal
      button
        width 210px
        height 90px
        border 0
        background #e83644
        color #fff
        border-radius 10px
        margin-top 45px
        margin-left 75px
</style>
