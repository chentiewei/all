<template>
  <div class="cardetails">
    <swiper :slideList="slideList" heighted="1"/>
    <div class="g-bit">
      <div class="w1000">
        <div class="m-details">
          <span>{{info.seriesName}}</span>
          <span>指导价：<b>{{info.guidePrice}}</b></span>
        </div>
        <router-link :to="{ name :'contrast' }" class="m-button" tag="div">车型对比</router-link>
      </div>
    </div>
    <border/>
    <div class="g-form">
      <div class="w1000">
        <div class="m-kitle">真实姓名</div>
        <div class="m-input">
          <input type="text" v-model="name">
        </div>
        <div class="m-kitle">手机号码</div>
        <div class="m-input">
          <input type="text" v-model="phone">
        </div>
        <div class="m-kitle">经销商</div>
        <div class="m-select" @click="showpop = true;">{{distributorC.distributorName}}</div>
        <van-popup v-model="showpop" position="bottom">
          <van-picker
            show-toolbar  
            title="选择经销商"
            :columns="distributorList"
            value-key="distributorName"
            @confirm="onConfirm"
            @cancel="showpop=false"
          />
        </van-popup>
        <div class="m-button" @click="sign">一口价</div>
        <div class="m-ps" @click="argen=!argen">
          <i :class="{'active':argen}"></i>
          <b>我同意巡车网<i>《个人信息保护及隐私政策声明》</i></b>
        </div>
      </div>
    </div>
    <border/>
    
    <div class="title">
      <div></div>
      <span>车辆亮点</span>
    </div>
    <div class="g-start">
      <div class="w1000" v-html="info.features">
      </div>
    </div>
    <border/>
    <div class="title">
      <div></div>
      <span>购买流程</span>
    </div>
    <div class="g-flow">
      <div class="w1000">
        <img src="../../assets/images/flow.png" alt="">
      </div>
    </div>
    <border/>
    <div class="title">
      <div></div>
      <span>报名客户</span>
    </div>
    <div class="g-sign">
      <div class="m-tbtitle">最新10位报名客户</div>
      <div class="m-tbh">
        <div>姓名</div>
        <div>手机号码</div>
        <div>城市</div>
        <div>车型</div>
        <div>报名时间</div>
      </div>
      <div class="m-tbb">
        <div class="s-details" v-for="(user,index) in customers" :key="index">
          <div>{{user.name}}</div>
          <div>{{user.phone}}</div>
          <div>{{user.cityName}}</div>
          <div>{{user.seriesName}}</div>
          <div>{{user.createTime}}</div>
        </div>        
      </div>
    </div>
    <border/>
    <div class="title">
      <div></div>
      <span>热门车型</span>
    </div>
    <div class="g-carList">
      <div class="m-list">
        <div class="s-details" v-for="car in hotCar" :key="car.id">
          <div class="carimg">
            <img :src="car.imageUrl+'?x-oss-process=image/resize,w_200'" alt="">
          </div>
          <div class="carcontent">
            <span>{{car.seriesName}}</span>
            <p>指导价：{{car.guidePrice}}</p>
            <b><i>{{car.buyerCount}}</i>人正在购买</b>
          </div>
          <router-link :to="{name:'cardetails',query:{id:car.id}}" tag="button">获取底价</router-link>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
import border from '../common/border'
import swiper from '../common/swiper'

import store from '../../store/store.js'
import bus from '../common/bus'

export default {
  name: 'cardetails',
  data () {
    return {
      slideList: [],
      showpop: false,     
      info:{},

      name:'',
      phone:'',
      distributorC:{distributorCode:'',distributorName:'都可以',show:1},
      distributorList:[],

      buyType:0,
      argen:false,
      cityId:'',
      cityName:'',
      provinceId:'',

      customers:[],

      hotCar:[]
    }
  },
  created() {
    this.id = this.$route.query.id;
    let city = store.state.currentCity;
    if(!this.$util.empty(city)){
      this.cityId = city.id;
      this.cityName = city.name;
      this.provinceId = city.upid;
    }
    let that = this;
    bus.$on('changeCity', function(city) {
      if(!this.$util.empty(city)){
        that.cityId = city.id;
        that.cityName = city.name;
        that.provinceId = city.upid;
      } 
    });
    bus.$on('onSearch', function(s) {
      that.$router.push({ name: 'buycar', params: { searchWord:s }});
    });
    this.getInfo();
    this.getDistributor();
  },
  methods:{
    onConfirm(value, index) {
      this.distributorC.distributorName = value.distributorName;
      this.distributorC.distributorCode = value.distributorCode;
      this.showpop=false;
    },
    getInfo(){
      this.$axios.get("/buy_car/"+this.id+"/detail").then((res) => {
        this.info = res;
        if(!this.$util.empty(res.images)){
          for(var i = 0 ; i < res.images.length; i ++){
            this.slideList.push({imageUrl:res.images[i].imageUrl,redirectUrl:""});
          }
        }    
        bus.$emit('changeTitle', this.info.seriesName);      
        this.getSign();
        this.getHotCar();
      })
    },
    getSign(){
      var p = {
        page:1,
        rows:10,
        brandId:this.brandId
      }
      this.$axios.get("sys/reg_info/list",p).then((res) => {
        this.customers = res.rows;
      })        
    },
    getDistributor(){
      var m = this.$util.getQueryString("media_id");
      if(this.$util.empty(m)){
        m = "";
      }
      var p = {
        type:1,
        mediaPutId:m
      }
      this.$axios.get("sys/distributor/list",p).then((res) => {
        this.distributorList = res;
      })
    },
    sign(){
      if(!this.argen){
        this.$toast({position:'bottom',message:'请先同意《个人信息保护及隐私政策声明》'});
        return;
      }
      if(this.$util.empty(this.name)){
        this.$toast({position:'bottom',message:'请输入您的姓名'});
        return;
      }
      if(this.$util.empty(this.phone)){
        this.$toast({position:'bottom',message:'请输入您的手机号'});
        return;
      }
      var m = this.$util.getQueryString("media_id");
      if(this.$util.empty(m)){
        m = "";
      }
      var mname = this.$util.getQueryString("media_source");
      if(this.$util.empty(mname)){
        mname = "";
      }
      var mpid = this.$util.getQueryString("media_put_id");
      if(this.$util.empty(mpid)){
        mpid = "";
      }

      var p = {
        brandId: this.info.brandId,
        brandName: this.info.brandName,
        buyType: this.buyType,
        cityId: this.cityId,
        cityName: this.cityName,
        distributorCode: this.distributorC.distributorCode,
        isMediaClue: m==""?0:1,
        mediaId: m ,
        mediaPutId:mpid,
        mediaSource: mname,
        name:this.name ,
        phone: this.phone,
        provinceId: this.provinceId,
        provinceName: "",
        seriesId: this.info.seriesId,
        seriesName:this.info.seriesName,
        sourceId: this.id,
        sourceType:1
      }
      this.$axios.post("/clue/collect",p).then((res) => {
        this.$toast.success("报名成功");
      })
    },  
    getHotCar(){
      var p = {
        page:1,
        rows:5
      }
      this.$axios.get("/buy_car/hot/list",p).then((res) => {
        this.hotCar = res.rows;
      })
    }
  },
  components: {
    border,
    swiper
  },
  watch: {
    '$route' (to, from) {
      if (to.query.id!=from.query.id) {
        this.id = this.$route.query.id;
        this.getInfo();
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.g-bit
  height 180px
  .w1000
    display flex
    flex-wrap wrap
  .m-details
    padding 35px 0
    width 785px
    span 
      color #1b1b1b
      font-size 39px
      display block
      &:nth-child(2)
        margin-top 30px
    b
      color #a0a0a0
  .m-button
    width 210px
    height 90px
    line-height 90px
    text-align center
    color #fff
    font-size 39px
    background #e83644
    border-radius 10px
    margin-top 30px
.g-form
  padding-bottom 35px
  .m-kitle
    width 100%
    color #1b1b1b
    font-size 39px
    margin 35px 0
  .m-input
    height 105px
    width 100%
    input
      border 1px solid #d4d4d4
      width 100%
      height 100%
  .m-select
    height 105px
    line-height 105px
    width 100%
    border 1px solid #d4d4d4
    font-size 45px
    color #1b1b1b
    text-indent 25px
    background url(../../assets/images/arrow.png) no-repeat
    background-position 960px 70px
    background-size 25px 25px
  .m-button
    color #fff
    background #e83644
    border-radius 10px 
    height 120px
    line-height 120px
    text-align center
    font-size 45px
    margin-top 40px
  .m-ps
    margin-top 25px
    &>i
      display inline-block
      width 50px
      height 50px
      background url(../../assets/images/noright.png) no-repeat center center
      background-size 80% 80%
      vertical-align middle
      margin-right 15px
      &.active
        background url(../../assets/images/right.png) no-repeat center center
        background-size 80% 80%
    &>b
      font-size 36px
      color #1b1b1b
      vertical-align middle
      i
        font-style normal
        font-size 36px
        color #0052b6
.g-start
  padding 40px
  &>>>p
    color #1b1b1b
    font-size 36px
    margin-bottom 20px  
    img
      width 100%
      height 100%
    &:last-child
      margin-bottom 0 
.g-flow
  padding 40px
  img
    width 100%
    height 100%
.g-sign
  .m-tbtitle
    width 100%
    height 90px
    line-height 90px
    font-size 36px
    color #a0a0a0
    text-align center
  .m-tbh
    display flex
    font-size 0
    div
      display inline-block
      flex 1
      height 90px
      line-height 90px
      color #ffffff
      font-size 36px
      background #a0a0a0
      text-align center
  .m-tbb
    .s-details
      font-size 0
      display flex
      border-bottom 1px solid #d4d4d4
      &:last-child
        border 0
      div
        font-size 36px
        color #1b1b1b
        flex 1
        display inline-block
        text-align center
        height 90px
        line-height 90px
        white-space nowrap
        overflow hidden
        text-overflow ellipsis
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
.van-picker
  background #fff
  &>>>.van-picker__toolbar
    height 115.5px
    line-height 115.5px
    &>>>.van-picker__cancel, &>>>.van-picker__confirm
      font-size 30px
</style>

