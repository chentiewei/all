<template>
  <div class="agentdetails">
    <div class="g-agent-details">
      <div class="m-title-top">邀请好友赚现金</div>
      <div class="m-title-text">可提现收益</div>
      <p class="m-title-money">
        <span>¥</span><b>0.00</b>
      </p>
      <p class="m-title-icemoney">未确认佣金：0.00<img data-v-8a0b7f4e="" src="../assets/images/psw.png" @click="moneyDia(1)"></p>
      <p class="m-title-button">提现</p>
    </div>
    <div class="g-details-money">
      <div class="m-item">
        <div class="s-item-title">直接收益<img src="../assets/images/ps.png"  @click="moneyDia(2)"></div>
        <div class="s-item-number">¥0.00</div>
      </div>
      <div class="m-item">
        <div class="s-item-title">裂变收益<img src="../assets/images/ps.png"  @click="moneyDia(3)"></div>
        <div class="s-item-number">¥0.00</div>
      </div>
    </div>
    <div class="g-forwardimg">
      <div class="m-forQcode"  @click="showDiaContent">
        <img data-v-8a0b7f4e="" src="../assets/images/agenter.png">
        生成推广图片
      </div>
    </div>
    <div class="g-bottom">
      <router-link :to="{name:'agentwact'}" tag="div" class="m-left m-item">
        <div class="s-img"><img src="../assets/images/agenticon1.png" alt=""></div>
        <div class="s-title">推荐合伙人</div>
        <div class="s-content">分佣抽成+10%<img data-v-8a0b7f4e="" src="../assets/images/gright.png"></div>
      </router-link>
      <router-link :to="{name:'agentwact3'}" tag="div" class="m-right m-item">
        <div class="s-img"><img src="../assets/images/agenticon2.png" alt=""></div>
        <div class="s-title">大流量渠道合作</div>
        <div class="s-content">分佣抽成提高<img data-v-8a0b7f4e="" src="../assets/images/bright.png"></div>
      </router-link>
    </div>
    <div class="g-ps" v-show="showdia" @click.self="showDiaContent">
      <transition name="slide-fade">
        <div class="m-content" v-if="showdia">
          <a href="#">
            <img src="../assets/images/cs.png">
            <p>长按或点击图片保存</p>
          </a>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
  import { AlertModule } from 'vux'
  export default {
    name: "agentdetails",
    data(){
      return {
        showdia:false
      }
    },
    methods:{
      showDiaContent(){
        this.showdia=!this.showdia;
      },
      moneyDia(_type){
        let str='';
        if(_type==1){
          str='未确认佣金：产生佣金后将进入3天的冻结期，期间用户发生退款冻结佣金将产生相应扣减，3天后自动转入可提现账户。'
        }else if(_type==2){
          str='直接收益：点击您转发的连接或扫描您的二维码图片进入产品的新用户产生的付费收益'
        }else{
          str='裂变收益：您分享给一个新用户，他测试后觉得小程序很不错又分享给其他新用户测试产生付费，您就有裂变收益；每成功传播一个新用户付费，您就多增加一单裂变收益。'
        }
        AlertModule.show({
          content:str
        })
      }
    },
  }
</script>

<style scoped lang="stylus">
.g-agent-details
  background: url(../assets/images/agentback.87c66f85.png) #FFAC34 no-repeat center center;
  background-size: 80%;
  height: 7.33333333rem;
  text-align: center;
  overflow: auto;
  color: #fff;
  .m-title-top
    font-size: 17px;
    margin: 0.34666667rem 0 0.32rem;
  .m-title-text
    font-size: 13px;
  .m-title-money
    font-size: 50px;
    line-height: 1.33333333rem;
    span
      font-size: 43px;
    b
      font-weight normal
  .m-title-icemoney
    font-size: 12px;
    margin-bottom: 0.33333333rem;
    img
      height: 0.42666667rem;
      width: 0.42666667rem;
      position: relative;
      top: 0.06666667rem;
      left: 0.2rem;
  .m-title-button
    width: 2.88rem;
    height: 0.98666667rem;
    background: -webkit-gradient(linear, left top, left bottom, from(#fff7ee), to(#ffffff));
    background: linear-gradient(180deg, #fff7ee 0%, #ffffff 100%);
    border-radius: 0.53333333rem;
    color: #000;
    margin: 0 auto;
    line-height: 0.98666667rem;
    font-size 12px
.g-details-money
  width: 9.25333333rem;
  height: 2.61333333rem;
  background: #fff;
  -webkit-box-shadow: 0px 10px 26px -8px rgba(164, 90, 10, 0.21);
  box-shadow: 0px 10px 26px -8px rgba(164, 90, 10, 0.21);
  border-radius: 0.21333333rem;
  position: relative;
  top: -1.33333333rem;
  margin: 0 auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  z-index: 99;
  .m-item
    flex: 1;
    border-right: 1px solid #CBCBCB;
    margin: 0.53333333rem 0 0.37333333rem 1.30666667rem;
    text-align: left;
    &:last-child
      border-right 0
    .s-item-title
      color: #7A7A7A;
      font-size: 12px;
      line-height: 0.66666667rem;
      img
        height: 0.37333333rem;
        width: 0.4rem;
        position: relative;
        top: 0.04rem;
        left: 0.2rem;
    .s-item-number
      color: #F48603;
      font-size: 20px;
      line-height: 1.06666667rem;
.g-forwardimg
  margin-bottom 0.72rem
  .m-forQcode
    width: 5.33333333rem;
    height: 1.06666667rem;
    border-radius: 0.49333333rem;
    border: 1px solid #FFAC34;
    margin: 0 auto 0;
    line-height: 1.06666667rem;
    color: #FFAA44;
    font-size: 12px;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    img
      height: 0.46666667rem;
      width: 0.4rem;
      margin-right: 0.26666667rem;
.g-bottom
  padding: 0 0.37333333rem;
  display: flex;
  -ms-flex-pack: distribute;
  justify-content: space-around;
  padding-bottom: 0.66666667rem;
  .m-item
    width: 4.50666667rem;
    height: 3.44rem;
    background: linear-gradient(90deg, #ffb900 0%, #ffca3d 100%);
    box-shadow: 0px 22px 26px -20px rgba(255, 157, 37, 0.5);
    border-radius: 0.21333333rem;
    &.m-right
      background: linear-gradient(90deg, #5cddf0 0%, #86e9f0 100%);
    .s-img
      text-align: left;
      margin-left: 0.26666667rem;
      margin-top: 0.13333333rem;
      img
        width: 1.57333333rem;
        height: 1.57333333rem;
    .s-title
      font-size: 15px;
      line-height: 0.53333333rem;
      color: #fff;
      text-align: left;
      margin-left: 0.26666667rem;
    .s-content
      font-size: 12px;
      color: #fff;
      text-align: left;
      margin-left: 0.26666667rem;
      img
        height: 0.53333333rem;
        width: 0.53333333rem;
        position: relative;
        left: 0.4rem;
        top: 0.13333333rem;
.g-ps
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  .m-content
    width: 6rem;
    height: 9.33333333rem;
    background: #fff;
    margin: 1.33333333rem auto;
    border-radius: 0.13333333rem;
    padding: 0.66666667rem 0.66666667rem;
    text-align center
    a
      img
        width: 5.33333333rem;
        box-shadow: 0 0 0.26666667rem 0.06666667rem rgba(0, 0, 0, 0.12);
      p
        border-top: 1px solid #E6E5E5;
        line-height: 0.8rem;
        color: #888;
        margin-top: 0.66666667rem;
        font-size 12px
</style>
<style lang="stylus">
  .vux-alert
    .weui-dialog__hd
      padding 10px
</style>
