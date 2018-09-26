<template>
  <div class="teamdetails">
    <div class="g-title">
      <div class="w1000">
        <div>
          当前位置：车主流>团购>{{cityName}}{{info.brandName}}在线订购
        </div>
      </div>
    </div>
    <div class="g-gid">
      <div class="w1000 after">
        <div class="m-left">
          <div class="s-showimg">
            <img :src="carImage" alt="">
          </div>
          <div class="s-icon">
            <div class="psimg">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div class="psname">
              <span>免费报名</span>
              <span>低价保证 </span>
              <span>新车保证</span>
              <span>质量保证</span>
              <span>售后保证</span>
            </div>
          </div>
          <div class="s-share">
            <span>分享给朋友：</span>
            <div>
              <span>
                <img src="../assets/images/wechat.png" alt="">
              </span>
              <span>
                <img src="../assets/images/qq.png" alt="">
              </span>
              <span>
                <img src="../assets/images/weibo.png" alt="">
              </span>
            </div>
          </div>
        </div>
        <div class="m-right">
          <div class="s-title">
            <img :src="'http://image.isite.new4s.com/car_logos/logo_' + info.brandId + '.jpg'" alt="">
            <span>{{info.brandName}}在线订购</span>
          </div>
          <div class="s-money">
            <div>
              <span class="flied">团购时间：</span>
              <b>{{info.startTime}}</b>
            </div>
            <div>
              <span class="flied">团购地点：</span>
              <b>{{cityName}}{{info.brandName}}4S店</b>
            </div>
            <div>
              <span class="flied">团购价格：</span>
              <b>{{info.price}}</b>
            </div>
            <div style="margin-top:7px">
              <span class="flied">本期报名：</span>
              <b> <i>{{info.tuanerCount}}</i> 人</b>
            </div>
            <div>
              <span class="flied vt">选择车型：</span>
              <div class="choose">
                <!-- class="active" -->
                <span :class="series.seriesId==s.seriesId?'active':''" :key="s.seriesId" v-for="s in info.tuanCarList" @click="chooseSeries(s)">{{s.seriesName}}</span>
              </div>
            </div>
            <div class="mr0">
              <span class="flied">真实姓名：</span>
              <b><input type="text" v-model="name"></b>
            </div>
            <div>
              <span class="flied">手机号码：</span>
              <b><input type="text" v-model="phone"></b>
            </div>
            <div>
              <span class="flied vt">购车方式：</span>
              <div class="choose">
                <span :class="buyType==t.buyType?'active':''" :key="t.buyType" v-for="t in buyTypeList" @click="chooseBuyType(t.buyType)">{{t.name}}</span>                
              </div>
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
              <b><button @click="sign">我要报名</button></b>
            </div>
            <div>
              <span class="flied"></span>
              <b class="ps" @click="argen=!argen"><i :class="argen?'active':''"></i> <span>我同意车主流</span><b>《个人信息保护及隐私政策声明》</b> </b>
            </div>
          </div>
        </div>
        <i class="m-bit">车型对比</i>
      </div>
    </div>
    <div class="g-content">
      <div class="w1000">
        <div class="m-bueer">
          <div class="s-nav">
            <!-- <router-link :to="{name:'teamConfigure'}">配置参数</router-link> -->
            <router-link :to="{name:'teamDealer', query:{id:id}}">经销商认证</router-link>
            <router-link :to="{name:'teamDot', query:{id:id,t:'tuan'}}">团购亮点</router-link>
            <router-link :to="{name:'teamFlow', query:{id:id}}">购车流程</router-link>
            <router-link :to="{name:'teamCustomer', query:{id:id}}">报名客户</router-link>
            <router-link :to="{name:'teamFeature', query:{id:id}}">现场花絮</router-link>
          </div>
          <div>
            <router-view/>
          </div>
        </div>
        <carList/>
      </div>
    </div>
  </div>
</template>

<script>
import carList from './common/carList'
import store from '../store/store.js'
import bus from './common/bus'

  export default {
    name: 'teamdetails',
    components: {
      carList
    },
    data(){
      return {
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
      bus.$on('onSearch', function(s) {
        that.$router.push({ name: 'teambuying', params: { searchWord:s }});
      });

      this.getInfo();
      this.getDistributor();     
    },
    methods:{
      getInfo(){
        this.$axios.get("/tuan/"+this.id+"/detail").then((res) => {
          this.info = res;
          store.dispatch('setFeatures',"<p>车主流大型汽车团购活动 ，规模大！价格低！人数多！</p> <p>商家让利冲业绩，火热开团！</p> <p>省时、省钱、省心，车主流专业团队VIP式服务！</p><p>免费报名，低价保证，新车保证，质量保证，售后保证。</p>");
          this.getSign();
          if(res.tuanCarList.length>0){
            this.carImage = res.tuanCarList[0].imageUrl;
          }
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
      getDistributor(){
        var m = this.$util.getQueryString("media_put_id");
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
      checkDistributor(d){
        this.distributorC.distributorCode = d.distributorCode;
        this.distributorC.show = 1;
        this.distributorC.distributorName = d.distributorName;
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
        if(this.$util.empty(this.series)){
          this.$message.warning('请选择车型');
          return;
        }
        if(this.buyType == 0){
          this.$message.warning('请选择购车方式');
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
          this.$message.success("报名成功");
        })

      }
    }
  }
</script>


<style scoped lang="stylus">
.teamdetails
  background #f0f3f5
.g-title
  height 50px
  line-height 50px
  div
    color #1b1b1b
    font-size 14px
.g-gid
  height 565px
  .w1000
    position relative
    background #fff
    padding 20px
    .m-left,.m-right
      float left
    .m-left
      .s-showimg
        width 400px
        height 265px
        img
          width 100%
          height 100%
      .s-icon
        .psimg
          display flex
          margin-top 30px
          span
            flex 1
            height 40px
            background url(../assets/images/icon.png) no-repeat
            border-right 1px dotted #dcdcdc
            &:last-child
              border 0
            &:nth-child(1)
              background-position 20px 0
            &:nth-child(2)
              background-position -62px 0
            &:nth-child(3)
              background-position -147px 0
            &:nth-child(4)
              background-position -227px 0
            &:nth-child(5)
              background-position -307px 0
        .psname
          display flex
          font-size 14px
          color #1b1b1b
          margin-top 15px
          span
            text-align center
            flex 1
      .s-share
        margin-top 25px
        margin-left 10px
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
      margin-left 30px
      .s-title
        img
          vertical-align sub
          height 25px
        span 
          font-size 24px
          color #1b1b1b
      .s-money
        &>div
          margin-top 10px
          &.mr0
            margin-top 0px
        .flied
          width 70px
          display inline-block
          font-size 14px 
          color #1b1b1b
          text-align right
          &.vt
            vertical-align top
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
        b
          i
            font-style normal
            color #e93644
            font-size 24px
          input
            width 260px
            height 35px
            border 1px solid #dcdcdc
          button
            width 260px
            height 50px
            color #fff
            background #e93644
            border 0
            font-size 24px
            border-radius 5px
        .choose
          width 445px
          display inline-block
          font-size 0
          span
            display inline-block
            padding 8px 10px
            border 1px solid #dcdcdc
            cursor pointer
            margin-right 10px
            font-size 14px
            margin-bottom 10px
            &:hover,&.active
              border-color #ec4242
              color #ec4242
            &:last-child
              margin 0
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
</style>
