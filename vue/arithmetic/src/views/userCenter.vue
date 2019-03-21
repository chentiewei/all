<template>
  <div class="userCenter">
    <div class="listDiv">
      <ul class="listNav">
        <router-link :to="{name:'privacy'}" tag="li">
          <div class="icon">
            <img src="../assets/images/yinsi.png" alt="">
          </div>
          <div>隐私协议(更新)</div>
        </router-link>
        <router-link :to="{name:'explain'}" tag="li">
          <div class="icon">
            <img src="../assets/images/agreement.png" alt="">
          </div>
          <div>使用协议</div>
        </router-link>
        <router-link :to="{name:'reportlist'}" tag="li">
          <div class="icon">
            <img src="../assets/images/in.png" alt="">
          </div>
          <div>删除报告</div>
        </router-link>
        <router-link :to="{name:'join'}" tag="li">
          <div class="icon">
            <img src="../assets/images/join.png" alt="">
          </div>
          <div>推广渠道招募</div>
        </router-link>
        <router-link :to="{name:'agentdetails'}" tag="li">
          <div class="icon">
            <img src="../assets/images/fenxiaohehuo.png" alt="">
          </div>
          <div>合伙人收益</div>
        </router-link>
      </ul>
    </div>
    <div class="listDiv">
      <ul class="listNav">
        <li>
          <div class="icon">
            <img src="../assets/images/wt.png" alt="">
          </div>
          <div>问题反馈</div>
        </li>
        <router-link :to="{name:'agentwact3'}" tag="li">
          <div class="icon">
            <img src="../assets/images/lxwm.png" alt="">
          </div>
          <div>联系我们</div>
        </router-link>
      </ul>
    </div>
    <div class="listDiv logoDiv">
      <div class="logoImg">
        <img src="../assets/images/suanshulogo.png" alt="">
      </div>
      <div class="logoText">
        <div class="logoTop">算术微信公众账号</div>
        <div class="logoBottom">申请新产品内测资格</div>
      </div>
      <div class="logoSub"  @click.self="showDiaContent">关注</div>
    </div>
    <div class="outlogin" @click="outing">注销账号</div>
    <div v-transfer-dom>
      <confirm v-model="show"
               title="注销账号"
               @on-confirm="onConfirm">
        <p style="text-align:center;">注销账号后，您的所有报告（含付费购买报告）及已上传的照片数据将全部清除，不可恢复！</p>
      </confirm>
    </div>
    <div class="g-dialog" v-show="showdia"  @click.self="showDiaContent">
      <transition name="slide-fade">
        <div class="m-content" v-show="showdia">
        <div class="s-img">
          <img src="../assets/images/suanshulogo.png" alt="">
        </div>
        <div class="s-contentText">算术公众账号</div>
        <div class="s-logoImg">
          <img src="https://h5.qqwechat.com/suanshu.png" alt="">
        </div>
      </div>
      </transition>
    </div>
  </div>
</template>

<script>
  import { Confirm,TransferDomDirective as TransferDom, AlertModule } from 'vux'
  import { delUser } from '@/assets/js/api'
  export default {
    name: "userCenter",
    data(){
      return {
        showdia:false,
        show: false,
      }
    },
    methods:{
      showDiaContent(){
        this.showdia=!this.showdia;
      },
      onConfirm(){
        delUser().then((data)=>{
          if(data.status_code==200){
            AlertModule.show({
              title: '提示',
              content: '注销成功'
            })
          }
        })
      },
      outing(){
        this.show=!this.show
      }
    },
    components: {
      Confirm
    },
    directives: {
      TransferDom
    }
  }
</script>

<style scoped lang="stylus">
.userCenter
  box-sizing border-box
  height 100vh
  background #F6F6F6
  padding-top: 0.26666667rem;
  .listNav
    li
      border-bottom: 0.01333333rem solid rgba(66, 82, 105, 0.1);
      display: flex;
      font-size: 0.37333333rem;
      line-height: 1.17333333rem;
      color: #000;
      height: 1.17333333rem;
      &:last-child
        border-bottom 0
      div.icon
        height: 0.46666667rem;
        width: 0.46666667rem;
        margin-top: 0.34rem;
        padding-right: 0.98666667rem;
        img
          vertical-align top
          width 100%
          height 100%
  .listDiv
    margin-bottom: 0.26666667rem;
    padding: 0.13333333rem 0 0.06666667rem 0.66666667rem;
    background #fff
  .logoDiv
    display flex
    padding-bottom 0.133rem
    padding-top 0.133rem
    .logoImg
      width: 0.8rem;
      border-radius: 100%;
      overflow: hidden;
      img
        width 100%
        vertical-align middle
    .logoText
      font-weight: 300;
      margin-left: 0.26666667rem;
      width 180px
      .logoTop
        font-size 16px
      .logoBottom
        font-size: 0.37333333rem;
    .logoSub
      font-size: 0.37333333rem;
      border: 0.02666667rem solid #79b75d;
      color: #79b75d;
      text-align: center;
      line-height: 0.66666667rem;
      border-radius: 0.13333333rem;
      height: 0.66666667rem;
      width: 2rem;
      margin: 0.33333333rem;
  .outlogin
    text-align: center;
    line-height: 1.33333333rem;
    font-size: 14px;
    background: #fff;
    margin-top: 0.66666667rem;
  .g-dialog
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    z-index: 999;
    .m-content
      width: 8rem;
      background: #fff;
      margin: 2rem auto;
      border-radius: 0.13333333rem;
      position: relative;
      .s-img
        position: absolute;
        top: -0.4rem;
        left: 3.33333333rem;
        width: 1.33333333rem;
        height: 1.33333333rem;
        background: #fff;
        text-align: center;
        border-radius: 100%;
        overflow: hidden;
        img
          width: 60%;
          margin-top: 0.13333333rem;
          border-radius: 100%;
      .s-contentText
        text-align: center;
        padding-top: 1.06666667rem;
        font-size: 0.45333333rem;
      .s-logoImg
        width: 8rem;
        font-size: 0.37333333rem;
        color: #79b75d;
        text-align: center;
        line-height: 0.8rem;
        border-radius: 0.13333333rem;
        margin: 0.8rem auto 0;
        background: #fff;
        display: block;
        img
          width: 6.66666667rem;
</style>

<style lang="stylus">
  .vux-x-dialog
    .weui-dialog__hd
      padding 10px
</style>
