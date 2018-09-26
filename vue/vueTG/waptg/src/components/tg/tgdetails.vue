<template>
  <div class="cardetails">
    <swiper :slideList="slideList" heighted="1"/>
    <div class="g-bit">
      <div class="w1000">
        <div class="m-details">
          <span>团购时间：{{info.startTime}}</span>
          <span>团购地点：{{cityName}}{{info.brandName}}4S店</span>
          <span>团购价格：现场公布</span>
          <span>本期报名：{{info.tuanerCount}}</span>
        </div>
        <router-link :to="{ name :'contrast' }" class="m-button" tag="div">车型对比</router-link>
      </div>
    </div>
    <border/>
    <div class="g-form">
      <div class="w1000">
        <div class="m-kitle">选择车型</div>
        <div class="m-check">          
          <span :class="series.seriesId==s.seriesId?'active':''" :key="s.seriesId" v-for="s in info.tuanCarList" @click="chooseSeries(s)">{{s.seriesName}}</span>
        </div>
        <div class="m-kitle">真实姓名</div>
        <div class="m-input">
          <input type="text" v-model="name">
        </div>
        <div class="m-kitle">手机号码</div>
        <div class="m-input">
          <input type="text" v-model="phone">
        </div>
        <div class="m-kitle">购车方式</div>
        <div class="m-check">
          <span :class="buyType==t.buyType?'active':''" :key="t.buyType" v-for="t in buyTypeList" @click="chooseBuyType(t.buyType)">{{t.name}}</span>    
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
        <div class="m-button"  @click="sign">我要报名</div>
        <div class="m-ps" @click="argen=!argen">
          <i :class="{'active':argen}" ></i>
          <b>我同意巡车网<i>《个人信息保护及隐私政策声明》</i></b>
        </div>
      </div>
    </div>
    <border/>
    <div class="title">
      <div></div>
      <span>团购亮点</span>
    </div>
    <div class="g-start">
      <div class="w1000">
        <p>车主流大型汽车团购活动 ，规模大！价格低！人数多！</p>
        <p>商家让利冲业绩，火热开团！</p>
        <p>省时、省钱、省心，车主流专业团队VIP式服务！</p>
        <p>免费报名，低价保证，新车保证，质量保证，售后保证。</p>
      </div>
    </div>
    <border/>
    <div class="title">
      <div></div>
      <span>购买流程</span>
    </div>
    <div class="g-flow">
      <div class="w1000">
        <img src="../../assets/images/tgflow.png" alt="">
      </div>
    </div>
    <border/>
    <div class="title">
      <div></div>
      <span>现场花絮</span>
    </div>
    <div class="g-feature">
      <van-swipe :loop="false" :show-indicators="false" :width="900">
        <van-swipe-item v-for="(list,index) in feature" :key="index">
          <div>
            <img :src="list.url" />
          </div>
        </van-swipe-item>
      </van-swipe>
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
      slideList: [        
      ],
      showpop: false,/*弹出层*/
     
      feature: [ ],
      id:0,
        info:{},
        carImage:'',
        imgindex:0,
        name:'',
        phone:'',
        distributorC:{distributorCode:'',distributorName:'都可以',show:1},        
        distributorList:[],

        buyTypeList:[],
        buyType:0,

        argen:false,

        series:{},

        cityId:'',
        cityName:'',
        provinceId:'',

        customers:[],
        hotCar:[]
    }
  },
  components: {
    border,
    swiper
  },
  created() {      
    console.log("tuan detail create");
      this.id = this.$route.query.id;      
      let city = store.state.currentCity;
      if(!this.$util.empty(city)){
        this.cityId = city.id;
        this.cityName = city.name;
        this.provinceId = city.upid;
        this.getBuyTypes();
      }
      let that = this;
      bus.$on('changeCity', function(city) {
        if(!this.$util.empty(city)){
          that.cityId = city.id;
          that.cityName = city.name;
          that.provinceId = city.upid;
          that.getBuyTypes();
        } 
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
        this.$axios.get("/tuan/"+this.id+"/detail").then((res) => {
          this.info = res;
          this.slideList = [];
          this.getSign();
          if(res.tuanCarList.length>0){
            for(var i = 0 ; i < res.tuanCarList.length; i ++){
              this.slideList.push({imageUrl:res.tuanCarList[i].imageUrl,redirectUrl:""});
            }
          }
          bus.$emit('changeTitle', this.info.brandName+"团购会");
          this.getHotCar();
          this.getPhotos();
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
          type:2,
          mediaPutId:m
        }
        this.$axios.get("sys/distributor/list",p).then((res) => {
          this.distributorList = res;
        })
      },
      getBuyTypes(){
        this.$axios.get("sys/limit_city/status",{cityId:this.cityId}).then((res) => {
           if(res == 0){
             this.buyTypeList=[{buyType:1,name:"指标购车"},{buyType:3,name:"旧车置换"},{buyType:4,name:"外地购车"}];
           }else{
             this.buyTypeList=[{buyType:1,name:"指标购车"},{buyType:2,name:"一般购车"},{buyType:3,name:"旧车置换"},{buyType:4,name:"外地购车"}];
           }
        })
      },
      chooseSeries(s){
        this.series = s;
        this.carImage = s.imageUrl;
      },

      chooseBuyType(t){
        this.buyType = t;
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
        if(this.$util.empty(this.series)){
          this.$toast({position:'bottom',message:'请选择车型'});
          return;
        }
        if(this.buyType == 0){
          this.$toast({position:'bottom',message:'请选择购车方式'});
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
          seriesId: this.series.seriesId,
          seriesName:this.series.seriesName,
          sourceId: this.id,
          sourceType:2
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
      },
      getPhotos(){
        var p = {
          page:1,
          rows:10
        }
        this.$axios.get("/sys/site_photo/list",p).then((res) => {          
          this.feature = res.rows;
        })
      }
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
      margin-bottom 30px
      &:last-child
        margin-bottom 0
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
    margin-top 150px
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
  .m-check
    font-size 0
    margin-top 30px
    span
      display inline-block
      color #1b1b1b
      font-size 39px
      padding 25px 20px
      border 1px solid #d4d4d4
      margin-right 20px
      margin-bottom 20px
      &.active
        border-color #e83644
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
  p
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
.g-feature
  div
    width 100%
    height 600px
    line-height 600px
    text-align center
    img
      max-height 600px
      max-width 100%
      vertical-align middle
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

