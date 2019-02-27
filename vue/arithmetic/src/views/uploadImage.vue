<template>
  <div class="uploadImage">
    <div class="g-upload">
      <div class="m-upload-title">拍照/上传</div>
      <div class="m-upload-bot">您可选择打开相册或直接拍照</div>
    </div>
    <div class="g-upload-image g-upload-image-bk">
      <img src="../assets/images/slzp.png" alt="">
    </div>
    <div class="g-upload-content">
      <div class="m-requirements">满足以下要求结果更准确</div>
      <div class="m-requirements-content">
        <div>正面</div>
        <div>面部完整呈现</div>
        <div>无刘海遮挡</div>
        <div>五官清晰</div>
        <div>不带眼镜</div>
      </div>
    </div>
    <div class="g-btn-submit" @click.self="showDiaContent">拍照/上传美照</div>
    <div class="g-ps" v-show="showdia" @click.self="showDiaContent">
      <transition name="slide-fade">
        <div class="m-tost" v-if="showdia">
          <p>微算面相使用协议</p>
          <div class="s-content">
            致：尊敬的用户
            <br>
            微算面相是一款以面相测算为主要服务内容的小程序，为说明微算面相会如何收集、使用和存储您的个人信息及您享有何种权利，我们将通过本声明向您阐述相关事宜，其中要点如下：
            <br>
            1、我们将逐一说明我们收集的您的个人信息类型及其对应的用途，以便您了解我们针对某一特定功能所收集的具体个人信息的类别、使用理由及收集方式。
            <br>
            2、 当您使用一些功能时，我们会在获得您的同意后，收集您的一些隐私信息，例如提供您面相测算服务时，我们需要您的面部照片进行分析；为了保存您的分析报告结果，我们需要获取您的微信头像、微信名字。如拒绝提供这些信息会使您无法使用相关特定功能。
            <br>
            3、目前，微算面相不会主动共享或转让您的个人信息至杭州算术科技有限公司以外的第三方，如存在其他共享或转让您的个人信息情形时，我们会征得您的明示同意，此外我们会对对外提供信息的行为进行风险评估。
            <br>
            4、您可以通过本声明所列途径访问、更正、删除您的个人信息，也可以撤回同意、注销帐号、投诉举报。
            <br>
            如您想了解更加详尽的信息，请根据以下索引阅读相应章节：
            <br> <b>1. 我们收集的信息</b> <br> <b>2. 信息的存储</b> <br> <b>3. 信息安全</b> <br> <b>4. 我们如何使用信息</b> <br> <b>5. 您的权利</b> <br> <b>6. 对外提供</b> <br> <b>7. 变更</b> <br> <b>8. 其他</b> <br> <b>9.联系我们</b> <br> <br> <br >

            · 1、我们收集的信息
            <br >
            在您使用微算面相服务的过程中，微算面相会按照如下方式收集您在使用服务时主动提供或因为使用服务而产生的信息，用以向您提供服务、优化我们的服务以及保障您的帐号安全：
            <br >
            1.1 当您进入微算面相并需要使用评测服务前，我们会获取您的微信头像、微信昵称信息，收集微信头像和昵称信息是为了帮助您完成微算面相的报告归属认证，保障您的面相报告评测结果与您的账号相关联并保留。
            <br >
            1.2 在某些无法获取身份授权的情况下，我们需要获取您的手机号，该情况下收集您的手机号是为了帮助您完成微算面相的报告归属认证，保障您的面相报告评测结果与您的账号相关联并保留。
            <br >
            1.3 在您体验面相测算时，我们需要获取您的正面照片，为了保证数据准确性，我们会提供一些照片上传建议，您可以选择不符合建议的图片上传，测算结果准确性会有偏差。我们保证照片除了测算数据以外，不会用于其他用途。
            <br >
            · 2. 信息的存储
            <br >
            2.1信息存储的地点
            <br >
            我们会按照法律法规规定，将境内收集的用户个人信息存储于中国境内。
            <br >
            2.2信息存储的期限
            <br >
            一般而言，我们仅为实现目的所必需的时间保留您的个人信息，例如：微信头像和昵称，若您需要使用微算面相服务，我们需要一直保存您的微信头像和昵称信息，以保证您正常使用该服务，当您一段时间未进入网页或小程序后，我们将删除相应的信息；
            <br >
            当我们的产品或服务发生停止运营的情形时，我们将以推送微信服务消息通知、短信等形式通知您，并在合理的期限内删除您的个人信息或进行匿名化处理。
            <br >
            · 3. 信息安全
            <br >
            我们努力为用户的信息安全提供保障，以防止信息的丢失、不当使用、未经授权访问或披露。
            <br >
            我们将在合理的安全水平内使用各种安全保护措施以保障信息的安全。例如，我们会使用加密技术（例如，SSL）、匿名化处理等手段来保护您的个人信息。
            <br >
            我们通过不断提升的技术手段加强我们产品的安全能力，以防止您的个人信息泄露。例如，我们为了安全传输会在您的设备本地完成部分信息加密的工作。
            <br >
            我们建立专门的管理制度、流程和部门保障信息安全。例如，我们严格限制访问信息的人员范围，要求他们签署并遵守保密协议，并进行审计。
            <br >
            我们建立专门的管理制度、流程和组织以保障信息的安全。例如，我们严格限制访问信息的人员范围，要求他们遵守保密义务，并进行审计。
            <br >
            若发生个人信息泄露等安全事件，我们会启动应急预案，阻止安全事件扩大，并以公告、短信等形式告知您。
            <br >
            · 4. 我们如何使用信息
            <br >
            我们可能将通过某些功能所收集的信息用于我们的其他服务。例如，对于您曾使用我们一项功能时所收集的信息，我们可能将其用于我们的另一服务中以向您提供特定内容。
            <br >
            如我们使用您的个人信息，超出了与收集时所声称的目的及具有直接或合理关联的范围，我们将在使用您的个人信息前，再次向您告知并征得您的明示同意。
            <br >
            · 5. 您的权利
            <br >
            在您使用微算面相期间，为了您可以更加便捷地访问、更正、删除您的个人信息，同时保障您撤回对个人信息使用的同意及注销账号的权利，我们在产品设计中为您提供了相应的操作设置，您可以参考下面的指引进行操作，此外，我们还设置了投诉举报渠道，您的意见将会得到及时的处理。
            <br >
            5.1 删除照片及报告内容
            <br >
            1）领取报告后，进入微算面相首页，点击“面相报告”；
            <br >
            2）拉至底部，点击删除按钮；
            <br >
            3）选择报告，确认删除。
            <br >
            5.2 注销账号
            <br >
            领取报告后，进入微算面相首页，点击左下角菜单图标；
            <br >
            进入菜单页面，拉至底部，点击“注销账号”，确认注销。
            <br >
            注：当您注销账号后，我们将批量删除或匿名化处理您的个人信息。
            <br >
            5.3 投诉举报
            <br >
            您可以通过搜索微信公众号“算术”，告知您的问题，也可以通过工作人员微信反馈您的问题，我们将在第一时间回复并尽我们最大的努力解决您的问题。
            <br >
            · 6. 对外提供
            <br >
            除按法律法规规定外，我们不会主动对外公开披露所收集的个人信息，如须主动公开披露时，我们会向您告知此次公开披露的目的、披露信息的类型及可能涉及的敏感信息，并征得您的明示同意。
            <br >
            微算面相也不会主动共享或转让您的个人信息至杭州算术科技有限公司以外的第三方，如存在其他共享或转让您的个人信息情形时，我们会征得您的明示同意，此外我们会对对外提供信息的行为进行风险评估。
            <br >
            随着我们业务的持续发展，我们将按照法律法规及不低于本声明所要求的标准继续保护或要求新的控制者继续保护您的个人信息。
            <br >
            · 7. 变更
            <br >
            我们可能会适时对本声明进行修订。当声明的条款发生变更时，我们会在您登录及版本更新时以推送通知、弹窗的形式向您展示变更后的内容。<b >请您注意，只有在您点击弹窗中的同意按钮后，我们才会按照更新后的声明收集、使用、存储您的个人信息。</b> <br >
            · 8. 其他
            <br >
            微算面相隐私条款中所规定的用户权利及信息安全保障措施均适用于微算面相全体用户。
            <br >
            · 9. 与我们联系
            <br >
            当您有其他的投诉、建议、未成年人个人信息相关问题时，请通过微信公众号“算术”留言与我们联系。您也可以将您的问题发送至Dataprivacy@sums.ai告知我们，我们将尽快审核所涉问题，并在验证您的用户身份后的3-5个工作日内予以回复。
          </div>
          <div class="s-btn-tost"  @click="uploadImage">我已阅读完并同意</div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'uploadImage',
  data(){
    return {
      showdia:false
    }
  },
  methods:{
    showDiaContent(){
      this.showdia=!this.showdia;
    },
    uploadImage(){
      console.log(1234)
    }
  },
  components: {
  }
}
</script>
<style scoped lang="stylus">
.uploadImage
  height: 100vh;
  background: #D8D8D8;
  overflow: hidden;
  position: relative;
  .g-upload
    margin-bottom: 25px;
    margin-top: 0.4rem;
    text-align: left;
    .m-upload-title
      font-size: 0.8rem;
      color: #4A4A4A;
      line-height: 1.12rem;
      padding-left: 0.53333333rem;
    .m-upload-bot
      font-size: 0.37333333rem;
      font-family: PingFangSC-Light;
      color: #4A4A4A;
      line-height: 0.53333333rem;
      padding-left: 0.53333333rem;
  .g-upload-image
    width: 6.13333333rem;
    height: 5.93333333rem;
    overflow: hidden;
    margin: 0 auto;
    img
      width: 100%
      height: 100%;
  .g-upload-content
    padding 0 0.4rem
    .m-requirements
      padding: 0.26666667rem 0.66666667rem;
      font-size: 0.37333333rem;
      font-family: PingFangSC-Regular;
      color: #4a4a4a;
      line-height: 0.53333333rem;
      text-align center
    .m-requirements-content
      display flex
      flex-wrap: wrap;
      padding: 0 0.66666667rem;
      div
        padding: 0.08rem 0.24rem;
        background: rgba(255, 255, 255, 0.2);
        font-size: 0.37333333rem;
        margin-right: 0.26666667rem;
        margin-bottom: 0.26666667rem;
        color: #4A4A4A;
  .g-btn-submit
    width: 3.94666667rem;
    height: 1.17333333rem;
    line-height: 1.2rem;
    text-align: center;
    font-size: 0.42666667rem;
    background: #4a4a4a;
    border-radius: 1.17333333rem;
    color: #fff;
    margin: 0.4rem auto 0;
    position: relative;
  .g-ps
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1000;
    .m-tost
      margin: 1.33333333rem auto;
      padding: 0.46666667rem 0.26666667rem;
      width: 8.29333333rem;
      height: 13.33333333rem;
      background: #f0f1f2;
      border-radius: 0.21333333rem;
      animation: topinto-data-v-2267e271 1s;
      p
        margin-top: 0.53333333rem;
        font-size: 0.53333333rem;
        margin-bottom: 0.37333333rem;
        color: #4a4a4a;
        text-align center
      .s-content
        font-size: 0.37333333rem;
        margin: 0 0.66666667rem 0.53333333rem;
        text-align: left;
        line-height: 0.53333333rem;
        height: 9.33333333rem;
        color: #4A4A4A;
        flex: 1;
        overflow: auto;
      .s-btn-tost
        width: 5.33333333rem;
        height: 1.17333333rem;
        background: #1B1B1B;
        border-radius: 0.58666667rem;
        line-height: 1.17333333rem;
        color: #fff;
        margin: 0.53333333rem auto 0.8rem;
        font-size: 0.42666667rem;
        text-align center
</style>
