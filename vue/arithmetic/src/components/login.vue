<template>
  <div class="login">
    <div class="app-login">
      <div class="app-login__title">登录</div>
      <div class="app-login__content">
        <div class="app-login__content-phone">
          <input placeholder="填写手机号">
        </div>
        <div class="app-login__content-code">
          <input placeholder="验证码">
          <div class="app-login__content-code--getcode">获取验证码</div>
        </div>
      </div>
      <div class="app-login__bottom">
        登录获取面相报告
      </div>
      <p class="app-login__ps">按国家政策要求,用户需要先进行实名注册后，才能正常使用服务。</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "login",
    props: ['showdia'],
    data(){
      return {
      }
    },
    methods: {
    }
  }
</script>

<style scoped lang="stylus">
  .login
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.8);
    .app-login
      width: 9.14666667rem;
      background: #ffffff;
      box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.12);
      border-radius: 0.08rem;
      margin: 3.33333333rem auto 1.33333333rem;
      overflow: auto;
      .app-login__title
        font-size: 20px;
        margin: 0.64rem 0
        text-align center
      .app-login__content
        margin: 0.53333333rem 1.28rem 0.8rem 1.41333333rem;
        .app-login__content-phone
          line-height: 0.8rem;
          border-bottom: 1px solid #CCCCCC;
          text-align: left;
          input
            border: 0;
            font-size: 13px;
      .app-login__content-code
        height: 1.33333333rem;
        line-height: 1.33333333rem;
        border-bottom: 1px solid #CCCCCC;
        display: flex;
        align-items: flex-end;
        input
          font-size: 13px;
          margin-bottom: 0.06666667rem;
          border: 0;
          flex: 1;
      .app-login__content-code--getcode
        width: 2.32rem;
        height: 0.72rem;
        background: #1B1B1B;
        border-radius: 0.05333333rem;
        color: #fff;
        line-height: 0.72rem;
        margin-bottom: 0.06666667rem;
        font-size 12px
        text-align center
      .app-login__bottom
        width: 6.24rem;
        height: 1.17333333rem;
        background: #1B1B1B;
        border-radius: 0.58666667rem;
        color: #fff;
        line-height: 1.17333333rem;
        font-size: 16px;
        margin: 0 auto 0.26666667rem;
        text-align center
      .app-login__ps
        font-size: 12px;
        margin: 0.13333333rem 0.53333333rem 0.53333333rem;
        text-align: center;
        color: #8d8d8d;
        transform: scale(0.8);
</style>
