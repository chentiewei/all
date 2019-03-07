<template>
  <div class="Single">
    <div class="g-matter" v-if="!pay">
      <div class="link">事业运程报告<span>5535人已购买</span></div>
      <div class="demo">
        事业是好是坏全部隐藏在额头里，能否永远屹立不倒财运亨通则看鼻子，对工作的持续性和精力还看嘴唇<br>
        …<br>
        面相上看你的事业运和财运怎么样？是否适合创业？应该选择哪一类工作？面相可以告诉你！
      </div>
      <div class="content">
        <div class="single-title">报告包含内容：</div>
        <div class="single-list">
          <div class="single-item">
            <div class="single-item-icon"></div>
            <div class="single-item-name">事业运程总述</div>
          </div>
          <div class="single-item">
            <div class="single-item-icon"></div>
            <div class="single-item-name">事业变动年纪</div>
          </div>
          <div class="single-item">
            <div class="single-item-icon"></div>
            <div class="single-item-name">事业择业建议</div>
          </div>
        </div>
      </div>
      <div class="money">
        <div class="money-item">
          <div class="money-left">需支付</div>
          <div class="money-right-now">¥19.8</div>
        </div>
        <div class="money-item">
          <div class="money-left">需支付</div>
          <div class="money-right-old">¥39.8</div>
        </div>
        <div class="money-item">
          <div class="money-left">需支付</div>
          <div class="money-right-jian">¥20</div>
        </div>
      </div>
      <div class="pay-btn">
        解锁事业运程报告
      </div>
    </div>
    <div class="g-report" v-else>
      <div class="title">情感运程详解</div>
      <div class="content">
        哈哈闪电发货卡萨丁弗兰克就撒娇的浪费了萨兰多夫就大打了卡啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊
        <br>
        发送卡掉了发链接拉萨绝地反击历史记录房间垃圾的设计费啦啦
      </div>
      <div class="content-box">
        <div class="content-box-title">桃花变动年纪</div>
        <div class="content-box-years">40岁</div>
        <div class="content-box-bit">哈哈大护法货收到了开发区微弱请勿额阿道夫卡士大夫老客户拉客户说的饭卡号士大夫撒代理费哈萨克</div>
        <div class="content-box-ps">*注：哈哈大护法货收到了开发区微弱请勿额阿道夫卡士大夫老客户拉客户说的饭卡号士大夫撒代理费哈萨克qwer撒发射点发</div>
      </div>
      <router-link :to="{name:'join'}" tag="div" class="content-btn">裂变强，付费率高，申请成为推广合伙人吧！</router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Single",
    data(){
      return {
        pay:false
      }
    }
  }
</script>

<style scoped lang="stylus">
  .g-matter
    .link
      font-size: 0.48rem;
      font-family: Jxiaobiaosong;
      color: #4a4a4a;
      line-height: 42px;
      margin: 0 18px;
      padding-top: 5px;
      font-weight: 600;
      text-align: left;
      span
        font-size: 0.37333333rem;
        color: #E64B42;
        float: right;
        margin-right: 10px;
        font-weight: 400;
    .demo
      font-size: 0.34666667rem;
      font-family: PingFangSC-Light;
      color: #4a4a4a;
      margin: 0.29333333rem 0.48rem 0;
      text-align center
    .content
      margin: 0.69333333rem 0.85333333rem;
      color: #4A4A4A;
      .single-title
        font-size: 0.42666667rem;
        margin-bottom: 0.66666667rem;
      .single-list
        display: flex;
        flex-wrap: wrap;
        .single-item
          width: 50%;
          font-size: 0.4rem;
          height: 1.06666667rem;
          display: flex;
          align-items: center;
          .single-item-icon
            width: 0.21333333rem;
            height: 0.21333333rem;
            background: #E64B42;
            border-radius: 100%;
            margin-right: 0.26666667rem;
    .money
      font-size: 0.37333333rem;
      border-top: 0.02666667rem solid #E3E3E3;
      padding: 0.34666667rem 0.45333333rem;
      margin: 0 0.4rem;
      .money-item
        display: flex;
        justify-content: space-between;
        line-height: 0.66666667rem;
        .money-right-now
          font-size: 0.53333333rem;
        .money-right-old
          text-decoration: line-through;
        .money-right-jian
          color: #FF9500;
    .pay-btn
      width: 8.32rem;
      height: 1.17333333rem;
      background: #E64B42;
      margin: 0 auto;
      margin-top: 0.64rem;
      color: #ffffff;
      font-size: 0.37333333rem;
      text-align: center;
      line-height: 1.17333333rem;
      border-radius: 3px;
  .g-report
    padding 0.48rem
    div.title
      width 100%
      text-align center
      margin-top 0.6rem;
      animation fadein 1s linear
    .content
      margin-top 25px
      font-size: 0.38rem;
      color: #4a4a4a;
      line-height 1.7
    .content-box
      border-left 5px solid #f4413a
      margin-top 42.5px
      padding 20px 12.5px 14px 12.5px
      background #f1f1f2
      .content-box-title
        font-size 0.6rem
        margin-bottom 5px
      .content-box-years,.content-box-bit
        font-size 0.4rem
      .content-box-ps
        font-size 0.36rem
        color #bbbbbc
        margin-top 20px
    .content-btn
      width 330px;
      height 30px;
      line-height 30px
      background #f7a331
      color #fff
      font-size 14.5px
      margin 0 auto
      text-indent 10px
      border-radius 30px
      margin-top 25px;
      margin-bottom 25px;
      background-image url("../assets/images/bright.png")
      background-repeat no-repeat
      background-position center right 10px
      background-size 20px;
</style>
