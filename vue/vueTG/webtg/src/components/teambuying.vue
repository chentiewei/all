<template>
  <div class="teambuying">
  <brand :hotBrands="hotBrands" @chooseBrand="onChooseBrand"/>
  <div class="g-car-list">
    <div class="w1000">
      <div class="m-car" v-for="(info,index) in datas" :key="index">
          <div class="s-img">
            <img :src="info.imageUrl" alt="">
          </div>
          <div class="s-title after">
            <i>
              <img :src="'http://image.isite.new4s.com/car_logos/logo_' + info.brandId + '.jpg'" alt="">
            </i>
            <span>{{info.brandName}}团购会</span>
          </div>
          <div class="s-audi">
            <span v-for="(series,i) in info.seriesList" :key="i">{{series.name}}</span>
          </div>
          <div class="s-team-details">
            <div class="bitter after">
              <span>
                <b>{{info.tuanerCount}}</b>
                <i>人已参团</i>
              </span>
              <router-link tag="button" :to="{ name: 'teamdetails',query:{id:info.id} }">查看</router-link>
            </div>
            <div class="time">
              <template v-if="info.leftTime == -1">
                已结束
              </template>
              <template v-else-if="info.leftTime == -2">
                未开始
              </template>
              <template v-else>
                剩余 <span :id="info.id"></span>                
              </template>
            </div>
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
    name: 'teambuying',
    data(){
      return {
        page:1,
        size:12,
        datas:[],
        total:0,
        totalPage:0,
        order:'',
        asc:false,
        brandId:'',

        cityId:'',
        cityName:'',
        searchWord:'',
        hotBrands:[], //热门品牌.

        timer:null
      }
    },
    components: {
      page,brand
    },
    created() {
      let searchWord = this.$route.params.searchWord;
      let b = this.$route.params.brandId;
      if(!this.$util.empty(b)){
        this.brandId = b;
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

      this.getList();
      this.getHotBrand();

      this.timer = setInterval(() => {
        this.changeTime();
      }, 1000)     
    },
    destroyed () {  
      clearTimeout(this.timer)
    },
    methods:{
      getList(){
        var params = {
          page:this.page,
          rows:this.size,
          asc:this.asc,
          order:this.order,
          brandId:this.brandId,
          cityId:this.cityId,
          search:this.searchWord
        }
        this.$axios.get("/tuan/list",params).then((res) => {
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
      },
      getTime(value){
        var str = "<b>"+parseInt(value) + "</b>秒"; 
          if( parseInt(value )> 60){    
            var second = parseInt(value) % 60;  
            var min = parseInt(value / 60);  
            str = "<b>"+min + "</b>分<b>" + second + "</b>秒";  
              
            if( min > 60 ){  
                min = parseInt(value / 60) % 60;  
                var hour = parseInt( parseInt(value / 60) /60 );  
                str = "<b>"+hour + "</b>小时<b>" + min + "</b>分<b>" + second + "</b>秒";  
          
                if( hour > 24 ){  
                    hour = parseInt( parseInt(value / 60) /60 ) % 24;  
                    var day = parseInt( parseInt( parseInt(value / 60) /60 ) / 24 );  
                    str = "<b>"+day + "</b>天<b>" + hour + "</b>小时<b>" + min + "</b>分<b>" + second + "</b>秒";  
                }  
            }  
          }  
          return str;
      },
      changeTime(){
        let that = this;
        this.datas.forEach(function(item){
          if(item.leftTime>0){
            item.leftTime --;
            document.getElementById(item.id).innerHTML=that.getTime(item.leftTime);
          }
        })
      }
    },
    filters: {
        formatTime(value) {
          var str = "<b>"+parseInt(value) + "</b>秒"; 
          if( parseInt(value )> 60){    
            var second = parseInt(value) % 60;  
            var min = parseInt(value / 60);  
            str = "<b>"+min + "</b>分<b>" + second + "</b>秒";  
              
            if( min > 60 ){  
                min = parseInt(value / 60) % 60;  
                var hour = parseInt( parseInt(value / 60) /60 );  
                str = "<b>"+hour + "</b>小时<b>" + min + "</b>分<b>" + second + "</b>秒";  
          
                if( hour > 24 ){  
                    hour = parseInt( parseInt(value / 60) /60 ) % 24;  
                    var day = parseInt( parseInt( parseInt(value / 60) /60 ) / 24 );  
                    str = "<b>"+day + "</b>天<b>" + hour + "</b>小时<b>" + min + "</b>分<b>" + second + "</b>秒";  
                }  
            }  
          }  
          return str;
        }
    }
  }
</script>


<style scoped lang="stylus">
.g-car-list
  font-size 0
  margin-top 20px
  .m-car
    width 320px
    border 1px solid #dcdcdc
    padding 20px
    border-radius 5px 
    display inline-block
    margin-bottom 20px
    &:nth-child(3n-1)
      margin-left 15px
      margin-right 15px
    &>div
      text-align center
    .s-img
      width 280px
      height 185px
      img
        width 100%
        height 100%
    .s-title
      height 25px
      margin-top 10px
      margin-bottom 15px
      i
        float left
        img
          height 25px
      span
        float right 
        font-size 18px
        color #414141
        margin-top 4px
    .s-audi
      text-align left
      border-bottom 1px dotted #dcdcdc
      height 50px
      span 
        display inline-block
        font-size 14px
        color #1b1b1b
        position relative
        margin-right 20px
        margin-bottom 10px
        &:after
          content ''
          position absolute
          right -10px
          width 1px
          height 12px
          background #1b1b1b
    .s-team-details
      .bitter
        margin-top 15px
        span
          float left
          margin-top 7px
          b
            color #ec4242
            font-size 24px
          i
            color #1b1b1b
            font-size 14px
            font-style normal
        button
          border 0
          width 90px
          height 40px
          color #fff
          background #ec4242
          border-radius 5px
          float right
      .time
        font-size 14px
        color #1b1b1b
        text-align left
        margin-top 15px
        b
          color #ec4242
</style>