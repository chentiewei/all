<template>
  <div class="cardetails">
    <div class="g-title">
      <div class="w1000">
        <div>
          当前位置：车主流>买车>{{info.seriesName}}在线订购
        </div>
      </div>
    </div>
    <div class="g-gid">
      <div class="w1000 after">
        <div class="m-left">
          <div class="s-swiper">
            <div class="showimg">
              <template v-if="info.images!=null && info.images.length>0">
                <img :src="info.images[imgindex].imageUrl" alt="">
              </template>              
            </div>
            <div class="imgList">
              <div v-for="(image,index) in info.images" :key="index"  @mouseover="imgindex=index">
                <img :src="image.imageUrl" alt="">
              </div>              
            </div>
          </div>
          <div class="s-share">
            <span>分享给朋友：</span>
            <div>
              <span>
                <img src="../assets/images/wechat.png" alt="" @click="share('weixin')">
              </span>
              <span>
                <img src="../assets/images/qq.png" alt="" @click="share('qq')">
              </span>
              <span>
                <img src="../assets/images/weibo.png" alt="" @click="share('weibo')">
              </span>
            </div>
          </div>
        </div>
        <div class="m-right">
          <div class="s-title">
            <img :src="'http://image.isite.new4s.com/car_logos/logo_' + info.brandId + '.jpg'" alt="">
            <span>{{info.seriesName}}在线订购</span>
          </div>
          <div class="s-money">
            <div>
              <span class="flied">指导价：</span>
              <b>{{info.guidePrice}}</b>
            </div>
            <div>
              <span class="flied">真实姓名：</span>
              <b><input type="text" v-model="name"></b>
            </div>
            <div>
              <span class="flied">手机号码：</span>
              <b><input type="text" v-model="phone"></b>
            </div>
            <div>
              <span class="flied">经销商：</span>
              <div class="input-free" @mouseleave="distributorC.show=1">
                <div @click="distributorC.show=!distributorC.show">{{distributorC.distributorName}}<i></i></div>
                <ul :class="{'dis':distributorC.show}">
                  <li v-for="(v,i) in distributorList" :key="i" @click="checkDistributor(v)">{{v.distributorName}}</li>
                </ul>
              </div>
            </div>
            <div>
              <span class="flied"></span>
              <b><button @click="sign">一口价</button></b>
            </div>
            <div>
              <span class="flied"></span>
              <b class="ps" @click="argen=!argen"><i :class="{'active':argen}" ></i><span>我同意车主流</span><b>《个人信息保护及隐私政策声明》</b> </b>
            </div>
          </div>
        </div>
        <i class="m-bit" @click="compareShow=!compareShow">车型对比</i>
      </div>
    </div>
    <div class="g-content">
      <div class="w1000">
        <div class="m-bueer">
          <div class="s-nav">
            <!-- <router-link :to="{name:'configure', query:{id:id}}">配置参数</router-link> -->
            <router-link :to="{name:'dot', query:{id:id}}">车量亮点</router-link>
            <router-link :to="{name:'flow', query:{id:id,tg:0}}">购车流程</router-link>
            <router-link :to="{name:'customer', query:{id:id}}">报名客户</router-link>
          </div>
          <div>
            <router-view/>
          </div>
        </div>
        <carList/>
      </div>
    </div>
    <compare v-show="compareShow" @compared="compareShow=0"/>
  </div>
</template>

<script>
import carList from './common/carList'
import store from '../store/store.js'
import bus from './common/bus'
import compare from './common/compare'
  export default {
    name: 'cardetails',
    components: {
      carList,
      compare
    },
    data(){
      return {
        id:0,
        info:{},
        imgindex:0,
        name:'',
        phone:'',
        distributorC:{distributorCode:'',distributorName:'都可以',show:1},
        distributorList:[],
        compareShow:0,
        buyType:0,
        argen:false,
        cityId:'',
        cityName:'',
        provinceId:''
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
      getInfo(){
        this.$axios.get("/buy_car/"+this.id+"/detail").then((res) => {
          this.info = res;
          store.dispatch('setFeatures',res.features);
          this.getSign();          
        })
      },
      getSign(){
        var p = {
          page:1,
          rows:10,
          brandId:this.brandId
        }
        this.$axios.get("sys/reg_info/list",p).then((res) => {
          store.dispatch('setCarSigns',res.rows);
        })        
      },
      // /sys/distributor/list
      getDistributor(){
        var m = this.$util.getQueryString("media_put_id");
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
      checkDistributor(d){
        this.distributorC.distributorCode = d.distributorCode;
        this.distributorC.show = 1;
        this.distributorC.distributorName = d.distributorName;
      },
      sign(){
        if(!this.argen){
          this.$message.warning('请先同意《个人信息保护及隐私政策声明》');
          return;
        }
        if(this.$util.empty(this.name)){
          this.$message.warning('请输入您的姓名');
          return;
        }
        if(this.$util.empty(this.phone)){
          this.$message.warning('请输入您的手机号');
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
          this.$message.success("报名成功");
        })
      },
      share(t){
        let content = "content";
        let url = location.href;
        let title = this.info.seriesName+"在线订购";
        let picurl="http://image.isite.new4s.com/car_logos/logo_" + this.info.brandId + ".jpg";
        if(t == "weixin"){

        }else if(t=="weibo"){

        }else if(t == "qq"){
          var shareUrl = "http://connect.qq.com/widget/shareqq/index.html?url="+url+"&title="+title+"&source=source&desc=desc&pics="+picurl+"&summary=summary"
          window.open(shareUrl,'newwindow'); 
        }
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


<style scoped lang="stylus">
.cardetails
  background #f0f3f5
.g-title
  height 50px
  line-height 50px
  div
    color #1b1b1b
    font-size 14px
.g-gid
  height 480px
  .w1000
    position relative
    background #fff
    padding 20px
    .m-left,.m-right
      float left
    .m-left
      .s-swiper
        .showimg
          width 400px
          height 265px
          img
            width 100%
            height 100%
      .imgList
        font-size 0
        margin-top 20px
        div
          width 85px
          height 85px
          margin-right 20px
          display inline-block
          &:last-child
            margin-right 0
          img
            width 100%
            height 100%
      .s-share
        margin-top 25px
        &>span,div
          display inline-block
        &>span
          margin-right 20px
        div
          font-size 0
          vertical-align middle
          span
            margin-right 15px
    .m-right
      margin-left 40px
      .s-title
        img
          vertical-align sub
          height 25px
        span 
          font-size 24px
          color #1b1b1b
      .s-money
        &>div
          margin-top 20px
        .flied
          width 70px
          display inline-block
          font-size 14px 
          color #1b1b1b
          text-align right
        .input-free
          width 260px
          height 35px
          display inline-block
          vertical-align middle
          div
            width 100%
            height 100%
            line-height 35px
            font-size 16px
            position relative
            text-indent 5px
            border 1px solid #dcdcdc
            i
              position absolute
              width 20px
              height 20px
              bottom 0
              right 0
              background url(../assets/images/arrow-right.png) no-repeat center center
          ul
            width 100%
            height 200px
            overflow auto
            background #fff
            text-indent 5px
            border 1px solid #dcdcdc
            margin-top -1px
            position relative
            z-index 10
            &.dis
              display none
            li
              font-size 14px
              line-height 40px
              line-height 40px
              cursor pointer
              &:hover,&.active
                background #e93644
                color #fff
        b
          input
            width 260px
            height 35px
            border 1px solid #dcdcdc
            text-indent 5px
          button
            width 260px
            height 50px
            color #fff
            background #e93644
            border 0
            font-size 24px
            border-radius 5px
        .ps
          color #1b1b1b
          font-size 14px
          b,span,i
            vertical-align: middle;
          b
            color #0052b6
          i
            display inline-block
            width 14px
            height 14px
            background url(../assets/images/check.png) no-repeat center center
            background-size 100% 100%
            margin-right 5px
            cursor pointer
            &.active
              background-image url(../assets/images/checked.png)
    .m-bit
      display inline-block
      width 95px 
      height 50px
      line-height 60px
      text-align center
      position absolute
      right -5px
      background url(../assets/images/carbit.png) no-repeat center center
      color #fff
      font-style normal
      cursor pointer
.g-content
  margin-top 20px
  padding-bottom 25px
  .w1000
    font-size 0
    .m-carList,.m-bueer
      display inline-block
      vertical-align: top;
      background #fff
    .m-bueer
      width 740px
      .s-nav
        font-size 0
        a
          display inline-block
          width 120px
          height 50px
          line-height 50px
          text-align center
          color #1b1b1b
          font-size 16px
          &.active,&:hover
            color #e93644
            border-bottom 5px solid #e93644
    .m-carList
      width 240px
      min-height 200px
      margin-left 20px
      .s-title
        padding 15px
        border-bottom 5px solid #e93644
        .field
          display inline-block
          color #1b1b1b
          font-size 16px
        b
          float right
          font-size 14px
          color #a0a0a0
          margin-top 1px
      .s-list
        padding 20px
        .car
          text-align center
          img
            width 200px
            height 130px
          span
            display block
            font-size 16px
            color #000000
            height 40px
            line-height 40px 
</style>
