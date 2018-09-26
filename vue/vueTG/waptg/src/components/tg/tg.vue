<template>
  <div class="tg">
    <div class="title">
      <div></div>
      <span>杭州热门品牌</span>      
      <router-link tag="i" :to="{name:'brandchoose'}">
      <i>全部品牌 <van-icon name="arrow" /></i>
      </router-link>
    </div>
    <brand :type="1"/>
    <border/>
    <div class="title">
      <div></div>
      <span>杭州热门品牌团购</span>
    </div>
    <div class="g-carList">
      <div class="m-list">
        <van-list
          v-model="loading"
          :finished="finished"
          @load="onLoad"
        >
          <van-cell v-for="info in datas" :key="'cell'+info.id">
            <router-link :to="{name:'tgdetails',query:{id:info.id} }" class="s-details after" tag="div">
              <div class="carimg">
                <img :src="'http://image.isite.new4s.com/car_logos/logo_' + info.brandId + '.jpg'" alt="">
              </div>
              <div class="details">
                <div class="name">
                  <span>{{info.brandName}}团购会</span>
                  <b><i>{{info.tuanerCount}}</i>人已参团</b>
                </div>
                <div class="brand">
                  <template v-for="series in info.seriesList" >
                      {{series.name}} |
                  </template>
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
            </router-link>
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
  name: 'tg',
  data () {
    return {
      page:1,
      loading: false,
      finished: false,
        size:12,
        datas:[],
        total:0,
        totalPage:0,
        order:'',
        asc:false,
        brandId:'',

        cityId:'',
        cityName:'',

        timer:null,

        searchWord:''
    }
  },
  created() {     
      let b = this.$route.params.brandId;
      if(!this.$util.empty(b)){
        this.brandId = b;
      }
      let searchWord = this.$route.params.searchWord;
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
        if(!that.$util.empty(city)){
          clearTimeout(that.timer);
          that.cityId = city.id;
          that.cityName = city.name;
          that.getList();
        } 
      });
      bus.$on('changeBrand', function(brand) {
        if(!that.$util.empty(brand)){
          clearTimeout(that.timer);
          that.brandId = brand.id;
          that.getList();
        } 
      });
      
      this.timer = setInterval(() => {
        this.changeTime();
      }, 1000)     
    },
    destroyed () {  
      clearTimeout(this.timer)
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
          cityId:this.cityId,
          search:this.searchWord
        } 
          this.$axios.get("/tuan/list",params).then((res) => {
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
            if(document.getElementById(item.id)){
              document.getElementById(item.id).innerHTML=that.getTime(item.leftTime);
            }
          }
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
.g-carList
  .m-list
    .s-details
      padding 40px
      border-bottom 1px solid #d4d4d4
      &:last-child
        border 0
      .carimg
        width 300px
        height 200px
        float left
        img
          width 100%
          height 100%
      .details
        width 660px
        float right
        .name
          b
            font-size 36px
            color #959595
            float right
            i
              font-style normal
              color #e83644
        .brand
          color #1b1b1b
          font-size 33px
          margin-left -13px
          width 660px
          height 90px
          line-height 1.4
          overflow hidden
          text-overflow ellipsis
          display  -webkit-box
          -webkit-line-clamp 2
          -webkit-box-orient vertical
          margin-top 25px
        .time
          color #959595
          font-size 33px
          margin-top 20px
          b
            color #ec4242
            font-size 33px
</style>
