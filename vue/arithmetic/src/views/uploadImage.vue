<template>
  <div class="uploadImage">
    <div class="g-upload-image" :class="{'g-upload-image-fff':type==1,'g-upload-image-top':type==2||type==3}">
      <img class="m-upload-image-true" :class="{' m-upload-image-scol':type==3}" src="https://faceplus.qqwechat.com/2019-03-07_8b27517d3a41c4e820cd54beb102c205.png?x-oss-process=image/crop,x_253,y_565,w_567,h_567">
    </div>
    <div v-if="type==1">
      <div class="g-upload">
        <div class="m-upload-title">拍照/上传</div>
        <div class="m-upload-bot">您可选择打开相册或直接拍照</div>
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
    <div v-else-if="type==2">
      <div class="g-upload-type2-bottom">
        <div class="isupdate">
          <div class="isupdate-item">
            <div class="isupdate-item__left">头部姿势</div>
            <div class="isupdate-item__right">右倾斜1°</div>
            <img src="../assets/images/Correct.png">
          </div>
          <div class="isupdate-item">
            <div class="isupdate-item__left">左眼状态</div>
            <div class="isupdate-item__right text">睁眼，未戴眼镜</div>
            <img src="../assets/images/Correct.png">
          </div>
          <div class="isupdate-item">
            <div class="isupdate-item__left">右眼状态</div>
            <div class="isupdate-item__right text">睁眼，未戴眼镜</div>
            <img src="../assets/images/error.png">
          </div>
        </div>
      </div>
      <div class="g-btn-submit2" @click="detection=!detection">确认提交</div>
      <div class="g-btn-upload2">重新上传</div>
      <div class="g-upload-err-dia" v-if="detection" @click="detection=!detection">
        <div class="m-err-box">
          <div class="s-err-title">您的照片未符合以下标准：</div>
          <div class="s-err-content">
            <div class="err-item">
              <div class="err-left"></div>
              <div class="err-right">没有人脸<span>(要求人脸照)</span></div>
            </div>
          </div>
          <div class="s-err-sub">
            <input type="file" id="doc" accept="image/*">
            重新上传
          </div>
        </div>
      </div>
    </div>
    <div v-else :class="{ 'uploadLoade':type==3}">
      <div class="g-upload-type3-img">
          <img class="m-type3-img-center" src="https://faceplus.qqwechat.com/2019-03-07_e61970aced5d04cce29fb9dc01a608c7.jpeg?x-oss-process=image/crop,x_253,y_565,w_567,h_567">
          <img src="../assets/images/biankuang.png" class="m-type3-img-wbody">
          <img src="../assets/images/quanquan.png"  class="m-type3-img-body">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'uploadImage',
  data(){
    return {
      type:1,/*1=照片未上传，2=照片上传，3动画开始*/
      detection:false/*检测结果是否人脸，是否可以进入type3（动画）*/
    }
  },
  created(){
   setTimeout(()=>{
      this.type=2;
    },3000)
    setTimeout(()=>{
      this.type=3;
    },6000)
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
    margin-top: 0.4rem;
    text-align: left;
    margin-bottom: 6.66666667rem;
    .m-upload-title
      font-size: 0.8rem;
      color: #4A4A4A;
      line-height: 1.12rem;
      padding-left: 0.53333333rem;
      animation: showtitleanima 1s linear;
    .m-upload-bot
      font-size: 0.37333333rem;
      font-family: PingFangSC-Light;
      color: #4A4A4A;
      line-height: 0.53333333rem;
      padding-left: 0.53333333rem;
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
  .g-upload-type2-bottom
    padding: 0 0.4rem;
    .isupdate
      overflow: auto;
      margin: 8rem 1.33333333rem 0.85333333rem 1.2rem;
      .isupdate-item
        font-size: 0.37333333rem;
        height: 0.98666667rem;
        line-height: 0.98666667rem;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        .isupdate-item__left
          width: 1.6rem;
          color: #828282;
          margin-right: 0.66666667rem;
        .isupdate-item__right
          font-size: 0.37333333rem;
          color: #4A4A4A;
          flex: 1;
          text-align center
          &.text
            background: rgba(255, 255, 255, 0.2);
            margin: 0.13333333rem 0;
            padding: 0.13333333rem;
            line-height: 0.37333333rem;
      img
        width: 0.30666667rem;
        margin-left: 0.50666667rem;
  .g-btn-submit2
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
  .g-btn-upload2
    color: #4A4A4A;
    font-size: 0.37333333rem;
    text-align: center;
    margin-top: 0.26666667rem;
    background: none;
    position: relative;
  .g-upload-err-dia
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background: rgba(0, 0, 0, 0.5);
    .m-err-box
      width: 6.8rem;
      height: 7.10666667rem;
      background: #fff;
      border-radius: 0.10666667rem;
      margin: 3.33333333rem auto;
      padding: 0.90666667rem 0.90666667rem 0.64rem;
      text-align center
      animation: topinto 1s;
      .s-err-title
        margin: 0 0 0.88rem;
        font-size: 0.48rem;
      .s-err-content
        height: 3.33333333rem;
        .err-item
          height: 0.66666667rem;
          margin: 0.06666667rem 0;
          display: flex;
          .err-left
            width: 0.26666667rem;
            height: 0.26666667rem;
            border: 0.05333333rem solid #4A4A4A;
            border-radius: 100%;
            margin: 0.13333333rem 0.69333333rem;
          .err-right
            font-size: 0.42666667rem;
            span
              font-size: 0.37333333rem;
      .s-err-sub
        font-size: 0.37333333rem;
        width: 5.49333333rem;
        height: 1.09333333rem;
        border-radius: 0.54666667rem;
        margin: 1.22666667rem auto 0;
        color: #fff;
        background: #1b1b1b;
        text-align: center;
        line-height: 1.09333333rem;
        position: relative;
        input
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 1.17333333rem;
          opacity: 0;
  .g-upload-type3-img
    width: 4.66666667rem;
    height: 4.66666667rem;
    margin: 1.86666667rem auto 0.8rem;
    background: #fff;
    overflow: hidden;
    border-radius: 100%;
    animation: topinfo 3s;
    .m-type3-img-center
      width 100%
    .m-type3-img-wbody
      height: 5.33333333rem;
      width: 5.33333333rem;
      position: absolute;
      left: 2.32rem;
      top: 1.6rem;
      animation: into 4s
    .m-type3-img-body
      height: 5.33333333rem;
      width: 5.33333333rem;
      position: absolute;
      left: 2.34666667rem;
      top: 1.56rem;
      animation: circleR 10s linear infinite;
  .g-upload-image
    width: 6.13333333rem;
    height: 5.93333333rem;
    position: absolute;
    top: 1.73333333rem;
    left: 50%;
    transform: translate(-50%);
    overflow: hidden;
    .m-upload-image-true
      width: 6.13333333rem;
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
    .m-upload-image-scol
      width: 4.66666667rem;
      height: 4.66666667rem;
      left: 0.73333333rem;
      animation: imgdon 2s;
  .g-upload-image-fff
    background: #fff;
    position: absolute;
    top: 2.66666667rem;
  .g-upload-image-top
    top: 1.33333333rem;
    animation: imgtop 1s;
.uploadLoade
  background: #1B1B1B;
  overflow: hidden;
  height: 100vh;
  position: relative;
  animation: showin 5s;
@keyframes imgtop
  0%
    top 4rem
  100%
    top 1.33333333rem;
@keyframes topinto
  0%
    margin-top: 1.33333333rem;
    opacity: 0.8;
  100%
    margin-top: 3.33333333rem;
    opacity: 1;
@keyframes showin
  0%
    background: #D8D8D8;
  100%
    background: #1B1B1B;
@keyframes topinfo
  0%
    margin-top: 1.33333333rem;
    border-radius: 0;
  100%
    margin-top: 1.86666667rem;
    border-radius: 100%;
@keyframes into
  0%
    opacity: 0;
  50%
    opacity: 0;
  100%
    opacity: 1;
@keyframes imgdon
  0%
    width: 6.13333333rem;
    height: 6.13333333rem;
    left: 0;
  100%
    width: 4.66666667rem;
    height: 4.66666667rem;
    left: 0.73333333rem;
</style>
