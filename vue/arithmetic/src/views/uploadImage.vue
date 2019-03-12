<template>
  <div class="uploadImage">
    <div class="g-upload-image" :class="{'g-upload-image-fff':type==1,'g-upload-image-top':type!=1}">
      <img v-if="bit.img" class="m-upload-image-true" :class="{' m-upload-image-scol':type>=3}" :src="bit.img">
      <img v-else class="m-upload-image-true" :class="{' m-upload-image-scol':type>=3}" src="@/assets/images/shilizhaopian.png">
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
      <div class="g-btn-submit" @click="uploadImage">拍照/上传美照</div>
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
      <div @click="sub" style="text-align: center">下一步</div>
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
    <div v-show="type>=4" :class="{ 'uploadLoade':type>=4}">
      <div class="g-upload-type3-img">
        <img class="m-type3-img-center" src="https://faceplus.qqwechat.com/2019-03-07_e61970aced5d04cce29fb9dc01a608c7.jpeg?x-oss-process=image/crop,x_253,y_565,w_567,h_567">
        <img v-if="type>=5" class="m-type3-img-body" src="../assets/images/quanquan.png">
        <img class="m-type3-img-wbody" src="../assets/images/biankuang.png">
      </div>
      <div v-if="type==6" class="upload-loade__waiat">
        <div class="upload-loade__tab">
          <div class="upload-loade__tab-item" :class="{'time1':gif>=1}">测量三庭长度</div>
          <div class="upload-loade__tab-item" :class="{'time1':gif>=2}">定位五官</div>
          <div class="upload-loade__tab-item" :class="{'time1':gif>=3}">综合分析</div>
        </div>
        <div v-if="gif==1" class="upload-loade_center type1">
          <div class="upload-loade_center-item--top">上庭数据提取</div>
          <div class="upload-loade_center-item">
            <div class="upload-loade_center-item--cen">
              <div class="upload-loade_center-item--cen-item type-item1"></div>
            </div>
            <div v-if="!load[0]" class="upload-loade_center-item--bot_load1"><img src="../assets/images/load.png" class="upload-loade_center-item--bot_ok1"></div>
            <div v-else class="upload-loade_center-item--bot"><img src="../assets/images/ok.svg" class="upload-loade_center-item--bot_ok1"></div>
          </div>
          <div class="upload-loade_center-item--top">中庭数据提取</div>
          <div class="upload-loade_center-item">
            <div class="upload-loade_center-item--cen">
              <div class="upload-loade_center-item--cen-item type-item2"></div>
            </div>
            <div v-if="!load[1]" class="upload-loade_center-item--bot_load1"><img src="../assets/images/load.png" class="upload-loade_center-item--bot_ok1"></div>
            <div v-else class="upload-loade_center-item--bot"><img src="../assets/images/ok.svg" class="upload-loade_center-item--bot_ok1"></div>
          </div>
          <div class="upload-loade_center-item--top">下庭数据提取</div>
          <div class="upload-loade_center-item">
            <div class="upload-loade_center-item--cen">
              <div class="upload-loade_center-item--cen-item type-item3"></div>
            </div>
            <div v-if="!load[2]" class="upload-loade_center-item--bot_load1"><img src="../assets/images/load.png" class="upload-loade_center-item--bot_ok1"></div>
            <div v-else class="upload-loade_center-item--bot"><img src="../assets/images/ok.svg" class="upload-loade_center-item--bot_ok1"></div>
          </div>
        </div>
        <div v-if="gif==2" class="upload-loade_center type2">
          <div class="upload-loade_center-item--top">定位眉头-眉峰-眉尾</div>
          <div class="upload-loade_center-item">
            <div class="upload-loade_center-item--cen">
              <div class="upload-loade_center-item--cen-item type-item1"></div>
            </div>
            <div v-if="!load[0]" class="upload-loade_center-item--bot_load1"><img src="../assets/images/load.png" class="upload-loade_center-item--bot_ok1"></div>
            <div v-else class="upload-loade_center-item--bot"><img src="../assets/images/ok.svg" class="upload-loade_center-item--bot_ok1"></div>
          </div>
          <div class="upload-loade_center-item--top">定位眼长-眼高</div>
          <div class="upload-loade_center-item">
            <div class="upload-loade_center-item--cen">
              <div class="upload-loade_center-item--cen-item type-item2"></div>
            </div>
            <div v-if="!load[1]" class="upload-loade_center-item--bot_load1"><img src="../assets/images/load.png" class="upload-loade_center-item--bot_ok1"></div>
            <div v-else class="upload-loade_center-item--bot"><img src="../assets/images/ok.svg" class="upload-loade_center-item--bot_ok1"></div>
          </div>
          <div class="upload-loade_center-item--top">定位鼻高-鼻翼宽</div>
          <div class="upload-loade_center-item">
            <div class="upload-loade_center-item--cen">
              <div class="upload-loade_center-item--cen-item type-item3"></div>
            </div>
            <div v-if="!load[2]" class="upload-loade_center-item--bot_load1"><img src="../assets/images/load.png" class="upload-loade_center-item--bot_ok1"></div>
            <div v-else class="upload-loade_center-item--bot"><img src="../assets/images/ok.svg" class="upload-loade_center-item--bot_ok1"></div>
          </div>
          <div class="upload-loade_center-item--top">定位嘴宽-嘴唇厚度</div>
          <div class="upload-loade_center-item">
            <div class="upload-loade_center-item--cen">
              <div class="upload-loade_center-item--cen-item type-item4"></div>
            </div>
            <div v-if="!load[3]" class="upload-loade_center-item--bot_load1"><img src="../assets/images/load.png" class="upload-loade_center-item--bot_ok1"></div>
            <div v-else class="upload-loade_center-item--bot"><img src="../assets/images/ok.svg" class="upload-loade_center-item--bot_ok1"></div>
          </div>
        </div>
        <div v-if="gif==3" class="upload-loade_center type1">
          <div class="upload-loade_center-item--top">量取下颌角度</div>
          <div class="upload-loade_center-item">
            <div class="upload-loade_center-item--cen">
              <div class="upload-loade_center-item--cen-item type-item1"></div>
            </div>
            <div v-if="!load[0]" class="upload-loade_center-item--bot_load1"><img src="../assets/images/load.png" class="upload-loade_center-item--bot_ok1"></div>
            <div v-else class="upload-loade_center-item--bot"><img src="../assets/images/ok.svg" class="upload-loade_center-item--bot_ok1"></div>
          </div>
          <div class="upload-loade_center-item--top">对比各部位数据</div>
          <div class="upload-loade_center-item">
            <div class="upload-loade_center-item--cen">
              <div class="upload-loade_center-item--cen-item type-item2"></div>
            </div>
            <div v-if="!load[1]" class="upload-loade_center-item--bot_load1"><img src="../assets/images/load.png" class="upload-loade_center-item--bot_ok1"></div>
            <div v-else class="upload-loade_center-item--bot"><img src="../assets/images/ok.svg" class="upload-loade_center-item--bot_ok1"></div>
          </div>
          <div class="upload-loade_center-item--top">匹配五行格局</div>
          <div class="upload-loade_center-item">
            <div class="upload-loade_center-item--cen">
              <div class="upload-loade_center-item--cen-item type-item3"></div>
            </div>
            <div v-if="!load[2]" class="upload-loade_center-item--bot_load1"><img src="../assets/images/load.png" class="upload-loade_center-item--bot_ok1"></div>
            <div v-else class="upload-loade_center-item--bot"><img src="../assets/images/ok.svg" class="upload-loade_center-item--bot_ok1"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { upImage } from '@/assets/js/api'
  export default {
    name: 'uploadImage',
    data() {
      return {
        bit:{
          img:''
        },
        type: 1, /*1=照片未上传，2=照片上传,3=过渡动画(2到3的过渡动画)，4=动画开始,5=转圈动画,6=综合分析，定位五官，测量三挺动画*/
        show: false,
        detection: false,/*检测结果是否人脸，是否可以进入type3（动画）*/
        gif:1,/*type=6时，（.upload-loade__waiat）的动画*/
        load:[0,0,0,0]/*(upload-loade_center-item--bot_ok1)图片是load还是ok*/
      }
    },
    created() {

    },
    methods: {
      uploadImage() {
        upImage().then((data)=>{
          if(data.status_code==200){
            this.bit=data.data;
            this.type = 2;
          }
        })
      },
      loadFun(){/*(upload-loade_center-item--bot_ok1)图片是load还是ok，方法*/
        let clearLoadFun=(i)=>{/*清空load状态*/
          if(this.load.length==(i+1)&&this.gif<3){
            setTimeout(() => {
              this.load.forEach((v, i) => {
                this.load.splice(i, 1, 0)
              })
            },3000)
          }
        }
        let setFun=(i)=>{/*改变load状态*/
          let time=(i+1) * 2000+2000
          setTimeout(() => {
            this.load.splice(i,1,1)
            clearLoadFun(i)
          }, time)
        }
        this.load.forEach((v,i)=>{
          setFun(i)
        })
      },
      gifFun(){/*type=6时，（.upload-loade__waiat）的动画，方法*/
        this.loadFun()
        setTimeout(() => {
          this.gif = 2;
          this.loadFun()
        }, 13000)
        setTimeout(() => {
          this.gif = 3;
          this.loadFun()
        }, 26000)
      },
      sub() {
        this.type = 3
        setTimeout(() => {
          this.type = 4;
        }, 2200)
        setTimeout(() => {
          this.type = 5;
        }, 4200)
        setTimeout(() => {
          this.type = 6;
          this.gifFun();
        }, 6200)
      }
    },
    components: {}
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

  .upload-loade__waiat
    background: #fff;
    overflow: auto;
    height: 16rem;
    position: relative;
    animation: waiatshow 38s;
    .upload-loade__tab
      display: flex;
      background: #fff;
      font-size: 0.37333333rem;
      text-align: center;
      margin: 0.13333333rem 0.53333333rem 0;
      .upload-loade__tab-item
        color: #D1D1D6;
        flex: 1;
        margin: 0 0.2rem;
        line-height: 0.93333333rem;
        border-bottom: 0.10666667rem solid #EFEFF4;
        &.time1
          color: #4A4A4A;
          border-bottom: 0.10666667rem solid #8E8E93;
    .upload-loade_center
      width: 8.66666667rem;
      height: 5.06666667rem;
      position: absolute;
      left: 0.73333333rem;
      top: 1.06666667rem;
      background: #fff;
      box-shadow: 0 0.05333333rem 0.26666667rem 0 rgba(0, 0, 0, 0.12);
      border-radius: 0.08rem;
      padding: 0.4rem 0;
      margin: 0.4rem auto;
      font-size: 0.37333333rem;
      &.type1,&.type2,&.type3
        animation: shopinfo 13s;
      .upload-loade_center-item--top
        margin: 0 0.93333333rem;
        text-align: left
      .upload-loade_center-item--cen
        width: 6.34666667rem;
        margin: 0 0.4rem;
      .upload-loade_center-item
        line-height: 0.4rem;
        display: flex;
        margin: 0.13333333rem 0.53333333rem;
        img
          height: 0.26666667rem;
          width: 0.26666667rem;
        .upload-loade_center-item--cen-item
          background: #E5E5EA;
          height: 0.05333333rem;
          width: 0;
          margin-top: 0.14666667rem
          &.type-item1
            animation: myfirs 2s 2s forwards;
          &.type-item2
            animation: myfirs 2s 4s forwards;
          &.type-item3
            animation: myfirs 2s 6s forwards;
          &.type-item4
            animation: myfirs 2s 8s forwards;
        .upload-loade_center-item--bot_load1
          animation: circle 2s linear infinite;
</style>
