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
    <div class="g-btn-submit"  @click="uploadImage">拍照/上传美照</div>
  </div>
</template>

<script>
export default {
  name: 'uploadImage',
  data(){
    return {
    }
  },
  methods:{
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
