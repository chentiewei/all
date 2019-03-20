<template>
  <div class="agentdetails">
    <div class="g-agent-details">
      <div class="m-title-top">邀请好友赚现金</div>
      <div class="m-title-text">可提现收益</div>
      <p class="m-title-money">
        <span>¥</span><b>0.00</b>
      </p>
      <router-link :to="{name:'agentwact2'}" tag="p" class="m-title-button-nomoney">提现</router-link>
      <p class="m-title-ps">提现后立即到账微信零钱</p>
    </div>
    <div class="g-details-money">
      <div class="m-item">
        <div class="s-item-title">推广人数</div>
        <div class="s-item-number">0</div>
      </div>
      <div class="m-item">
        <div class="s-item-title">订单数</div>
        <div class="s-item-number">0</div>
      </div>
    </div>
    <div v-if="loginState">
      <div class="g-forwardimg">
        <div class="m-forQcode"  @click="showDiaContent">
          <img data-v-8a0b7f4e="" src="../assets/images/agenter.png">
          朋友圈推广
        </div>
      </div>
      <div class="g-bottom">
        <div @click="showMoneyDia=!showMoneyDia" class="m-left m-item m-money200" :class="{'m-money200':!money200}">
          <div class="s-img"><img src="../assets/images/agenticon1.png" alt=""></div>
          <div class="s-title">推荐合伙人</div>
          <div class="s-content">分佣抽成+10%<img data-v-8a0b7f4e="" src="../assets/images/gright.png"></div>
        </div>
        <router-link :to="{name:'agentwact3'}" tag="div" class="m-right m-item">
          <div class="s-img"><img src="../assets/images/agenticon2.png" alt=""></div>
          <div class="s-title">大流量渠道合作</div>
          <div class="s-content">分佣抽成提高<img data-v-8a0b7f4e="" src="../assets/images/bright.png"></div>
        </router-link>
      </div>
    </div>
    <div v-else>
      <div class="agent-details__login">
        <div class="agent-details__login-title">手机号</div>
        <div class="agent-details__login-phone">
          <input placeholder="输入手机号码" type="number" pattern="\d*">
        </div>
        <div class="agent-details__login-password">
          <input placeholder="输入验证码" type="number" pattern="\d*">
          <div class="agent-details__login-password-code">获取验证码</div>
        </div>
      </div>
      <div class="agent-details__login-bottom">开始推广</div>
      <p class="agent-details__login-rule" @click="show=!show">了解推广细则</p>
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
    <div v-transfer-dom>
      <x-dialog v-model="show" class="dialog-demo" hide-on-blur>
        <div class="app-explain__tost">
          <p class="app-explain__tost-title">推广细则：</p>
          <p class="app-explain__tost-title">
            1、加入推广大使后返佣比例为40%，新人（从未进入过微算面相）通过你的邀请进入微算面相获取报告并消费，你就可以获得相应的返佣。
          </p>
          <p class="app-explain__tost-title">
            例如：小明从未被别人邀请，自己也没进入过微算面相，你邀请小明进入微算面相获取报告，小明花了100元购买了其他服务，那你可以获得100*40%=40元返佣。
          </p>
          <p class="app-explain__tost-title">
            2、可提现收益超过200可以推荐合伙人（推广大使）加入，每推荐成功一位可额外获得10%的分成
          </p>
          <p class="app-explain__tost-title">
            3、提现、推荐合伙人功能需要登入代理助手小程序。
          </p>
        </div>
      </x-dialog>
    </div>
    <div v-transfer-dom>
      <confirm v-model="showMoneyDia"
               title="提示"
               confirm-text="了解详情"
               @on-cancel="onCancel"
               @on-confirm="onConfirm">
        佣金满200可开启该权限
      </confirm>
    </div>
  </div>
</template>

<script>
  import { XDialog,Confirm, TransferDomDirective as TransferDom } from 'vux'
  export default {
    name: "agentdetails",
    directives: {
      TransferDom
    },
    components: {
      XDialog,
      Confirm
    },
    data(){
      return {
        showdia:false,//朋友圈推广图片
        show: false,
        loginState:true,//是否登录代理账号
        money200:true,//合伙人是否超过200元
        showMoneyDia:false//推荐合伙人弹框
      }
    },
    methods:{
      agentPs(){
      },
      showDiaContent(){
        this.showdia=!this.showdia;
      },
      onConfirm (msg) {
        this.$router.push({name:'agentwact'})
      },
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
  .m-title-button,.m-title-button-nomoney
    width: 2.88rem;
    height: 0.98666667rem;
    background: -webkit-gradient(linear, left top, left bottom, from(#fff7ee), to(#ffffff));
    background: linear-gradient(180deg, #fff7ee 0%, #ffffff 100%);
    border-radius: 0.53333333rem;
    color: #000;
    margin: 15px auto 10px;
    line-height: 0.98666667rem;
    font-size 12px
    &.m-title-button-nomoney
      opacity: 0.5;
      color: #CBB28F;
  .m-title-ps
    font-size: 12px;
    margin-bottom: 0.33333333rem;
.g-details-money
  width: 9.25333333rem;
  height: 2.61333333rem;
  background: #fff;
  box-shadow: 0px 10px 26px -8px rgba(164, 90, 10, 0.21);
  border-radius: 0.21333333rem;
  position: relative;
  top: -1.33333333rem;
  margin: 0 auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  .m-item
    flex: 1;
    border-right: 1px solid #CBCBCB;
    margin: 0.53333333rem 0 0.37333333rem 0
    text-align: center
    &:last-child
      border-right 0
    .s-item-title
      color: #7A7A7A;
      font-size: 12px;
      line-height: 0.66666667rem;
    .s-item-number
      color: #F48603;
      font-size: 20px;
      line-height: 1.06666667rem;
.g-forwardimg
  width: 5.33333333rem;
  height: 1.06666667rem;
  border-radius: 0.49333333rem;
  background: #FFAC34;
  margin: 0 auto 0.72rem;
  line-height: 1.06666667rem;
  font-size: 12px;
  display: flex;
  justify-content: center;
  -ms-flex-align: center;
  align-items: center;
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
    color: #fff;
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
    &.m-money200
      box-shadow: 0px 22px 26px -20px rgba(0, 0, 0, 0.2);
      filter: grayscale(100%);
      background: #ddd;
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
.agent-details__login
  margin: -0.4rem 0 0;
  .agent-details__login-title
    color: #F48603;
    font-size: 14px;
    text-align: left;
    margin: 0 1.41333333rem;
  .agent-details__login-phone
    border-bottom: 1px solid #D5D5D5;
    margin: 0.53333333rem 1.44rem;
    text-align: left;
    height: 0.93333333rem;
    input
      width: 90%;
      padding: 0 5%;
      border: 0;
      height: 100%;
      font-size 12px
      vertical-align: top;
  .agent-details__login-password
    border-bottom: 1px solid #D5D5D5;
    margin: 0.4rem 1.44rem;
    text-align: left;
    display: flex;
    input
      padding-left: 5%;
      border: 0;
      flex: 1;
      font-size 12px
    .agent-details__login-password-code
      width: 2.16rem;
      height: 0.85333333rem;
      background: #FF9C0E;
      border-radius: 0.08rem;
      color: #fff;
      line-height: 0.85333333rem;
      text-align: center;
      display: inline-block;
      margin-bottom: 0.10666667rem;
      font-size:12px;
.agent-details__login-bottom
  width: 5.73333333rem;
  height: 1.06666667rem;
  background: #FF9C0E;
  border-radius: 0.53333333rem;
  color: #fff;
  line-height: 1.06666667rem;
  font-size: 14px;
  margin: 1.2rem auto 0.26666667rem;
  text-align center
.agent-details__login-rule
  color: #6A6A6A;
  font-size: 14px;
  line-height: 30px;
  text-align center
.app-explain__tost
  padding: 0.46666667rem 0.26666667rem;
  background: #fff;
  border-radius: 0.21333333rem;
  .app-explain__tost-title
    font-size: 0.4rem;
    margin-bottom: 0.37333333rem;
    color: #4a4a4a;
    padding: 0 0.66666667rem;
    text-align: left;
</style>
<style lang="stylus">
  .vux-alert
    .weui-dialog__hd
      padding 10px
</style>
