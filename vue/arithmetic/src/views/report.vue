<template>
  <div class="report">
    <div class="g-title">
      <p>面相报告</p>
      <div class="m-face-img">
        <div class="s-face-content" ref="imgHeight">
          <img v-if="bit.beautifyImg" class="m-upload-image-true" :src="bit.beautifyImg">
          <img v-else class="m-upload-image-true" src="@/assets/images/shilizhaopian.png">
        </div>
        <div class="face-result-line1" style="top: 1.08rem; left: 4.9706rem;"></div>
        <div class="face-result-splot" style="top: 0.933333rem; left: 4.82393rem;">
          <div class="face-result-item"></div>
        </div>
        <div class="face-result-text" style="top: 0.45rem; left: 8rem;">上庭较长</div>

        <div class="face-result-box" v-for="(v,i) in positionArr" :key="i">
          <div :class="v.lineState==1?'face-result-line1':'face-result-line2'"
               :style="{top:v.x+7.5+'px',left:v.y+5.5+'px'}"></div>
          <div v-if="v.lineState==1" class="face-result-splot" :style="{top:v.x+'px',left:v.y+'px'}">
            <div class="face-result-item"></div>
          </div>
          <div v-else="v.lineState==1" class="face-result-splot" :style="{top:v.x+'px',left:v.y+'px'}">
            <div class="face-result-item"></div>
          </div>
          <div v-if="v.lineState==1" class="face-result-text" :style="{top:v.x-18.125+'px',left:v.y+120+'px'}">
            {{v.text}}
          </div>
          <div v-else class="face-result-text" :style="{top:v.x-20+'px',left:v.y-118+'px'}">{{v.text}}
          </div>
        </div>
      </div>
    </div>
    <div class="g-result-carde">
      <p class="m-result-carde-title title">面相概述</p>
      <div class="m-result-carde-content">
        {{bit.court_up_info}}{{bit.court_mid_info}}{{bit.court_down_info}}
      </div>
    </div>
    <div class="g-result-garde">
      <p class="m-result-garde-title title">五官评分</p>
      <div class="m-result-garde-content">
        <div class="s-result-garde-item">
          <div class="bem-mark">
            <div class="nub" :style="{height: bit.court_up_num/10*100+'%'}">
              <div class="bem-animate"></div>
            </div>
          </div>
          <p>上庭</p>
        </div>
        <div class="s-result-garde-item">
          <div class="bem-mark">
            <div class="nub" :style="{height: bit.court_mid_num/10*100+'%'}">
              <div class="bem-animate"></div>
            </div>
          </div>
          <p>中庭</p>
        </div>
        <div class="s-result-garde-item">
          <div class="bem-mark">
            <div class="nub" :style="{height: bit.court_down_num/10*100+'%'}">
              <div class="bem-animate"></div>
            </div>
          </div>
          <p>下庭</p>
        </div>
        <div class="s-result-garde-item">
          <div class="bem-mark">
            <div class="nub" :style="{height: bit.eyebrow_num/10*100+'%'}">
              <div class="bem-animate"></div>
            </div>
          </div>
          <p>眉毛</p>
        </div>
        <div class="s-result-garde-item">
          <div class="bem-mark">
            <div class="nub" :style="{height: bit.eye_num/10*100+'%'}">
              <div class="bem-animate"></div>
            </div>
          </div>
          <p>眼睛</p>
        </div>
        <div class="s-result-garde-item">
          <div class="bem-mark">
            <div class="nub" :style="{height: bit.nose_num/10*100+'%'}">
              <div class="bem-animate"></div>
            </div>
          </div>
          <p>鼻子</p>
        </div>
        <div class="s-result-garde-item">
          <div class="bem-mark">
            <div class="nub" :style="{height: bit.mouth_num/10*100+'%'}">
              <div class="bem-animate"></div>
            </div>
          </div>
          <p>嘴巴</p>
        </div>
      </div>
      <div class="m-result-garde-chart-text">
        <div class="s-result-garde-chart-left">
          面相评分: <span>{{bit.face_num}}</span>
        </div>
        <div class="s-result-garde-chart-middle">总分100分</div>
        <div class="s-result-garde-chart-right">
          {{bit.face_num<80&&bit.face_num>=60?'面相一般':bit.face_num<60?'面相欠佳':'面相较好'}}
        </div>
      </div>
      <div class="m-result-garde-chart-all" style="background-color: rgb(232, 232, 232); width: 94%;">
        <div :style="{width:bit.face_num+'%'}">
          <div class="isFixed"></div>
        </div>
      </div>
    </div>
    <div class="g-result-features--box">
      <div class="result-imgcard">
        <div class="result-imgcard__top">
          <div class="result-imgcard__top-left">
            眼睛
          </div>
          <div class="result-imgcard__top-right">
            {{bit.eye_title}}
          </div>
        </div>
        <div class="result-imgcard__bot">
          <div class="result-imgcard__bot-img">
            <img align="”right”"
                 src="https://faceplus.qqwechat.com/2019-02-27_cbff441075c43a15348d0362252da1fd.png?x-oss-process=image/crop,x_98,y_150,w_522,h_290"
                 class="result-imgcard__bot-imgcon heightauto">
          </div>
          <div>
            {{bit.eye_info}}
          </div>
        </div>
      </div>
      <div class="result-imgcard">
        <div class="result-imgcard__top">
          <div class="result-imgcard__top-left">
            嘴巴
          </div>
          <div class="result-imgcard__top-right">
            {{bit.mouth_title}}
          </div>
        </div>
        <div class="result-imgcard__bot">
          <div class="result-imgcard__bot-img">
            <img align="”right”"
                 src="https://faceplus.qqwechat.com/2019-02-27_cbff441075c43a15348d0362252da1fd.png?x-oss-process=image/crop,x_266,y_377,w_249,h_249"
                 class="result-imgcard__bot-imgcon heightauto">
          </div>
          <div>{{bit.mouth_info}}</div>
        </div>
      </div>
      <div class="result-imgcard">
        <div class="result-imgcard__top">
          <div class="result-imgcard__top-left">
            鼻子
          </div>
          <div class="result-imgcard__top-right">
            {{bit.nose_title}}
          </div>
        </div>
        <div class="result-imgcard__bot noPay">
          <div class="result-imgcard__bot-img">
            <img align="”right”"
                 src="https://faceplus.qqwechat.com/2019-02-27_cbff441075c43a15348d0362252da1fd.png?x-oss-process=image/crop,x_244,y_262,w_237,h_237"
                 class="result-imgcard__bot-imgcon heightauto">
          </div>
          <div class="pay" v-if="bit.nose_lock==1">
            <div style="width: 174px; height: 12px; background: rgb(244, 244, 244); margin-bottom: 17px;"></div>
            <div style="width: 116px; height: 12px; background: rgb(244, 244, 244); margin-bottom: 25px;"></div>
            <div class="pay-botton">
              <img src="../assets/images/facelock.svg" alt="">
              <span>2元解锁鼻相解读</span>
            </div>
          </div>
          <div class="result-imgcard__top-right" v-else-if="bit.nose_lock==2">
            {{bit.nose_info}}
          </div>
        </div>
      </div>
    </div>
    <div class="result-share" @click="showDiaContent">
      <img src="../assets/images/posterlogo.png">
      <p data-v-f22ba7ee="">保存我的面相朋友圈海报</p>
    </div>
    <div class="result-features--box">
      <div class="result-features">
        <div class="result-features__five">
          <div class="result-features__bem-titlt">
            <p class="title">五行面相</p>
          </div>
          <div class="result-features-type">
            <div class="result-features-type-title">
              <div class="result-features-type-title-type">/{{bit.face_rate[0].five+bit.face_rate[1].five}}型面相</div>
            </div>
            <div class="index-order">
              <div class="users-info" v-for="(v,i) in bit.face_rate" :key="i">
                <img src="../assets/images/shui.png" class="users-info_backgr">
                <div class="users-info__name">{{v.five}}</div>
                <div class="users-info__bot"></div>
                <p>{{v.score}}%</p>
              </div>
            </div>
          </div>
        </div>
        <div class="result-features__text-card">
          <div class="result-features__text-card--title" style="font-size: 18px; text-align: center;">五行格局</div>
          <div class="result-features__text-card--title">{{bit.face}}</div>
        </div>
        <div class="result-features__text-card">
          <div class="result-features__text-card--title">{{bit.face_info}}</div>
        </div>
      </div>
    </div>
    <div class="g-paylist">
      <div class="m-paylist-box">
        <router-link :to="{name:'single',query:{id:bit.id}}" tag="div" class="paylist-box-cause">
          <div class="result-detail">
            <div class="result-detail__title">面相事业运程报告</div>
            <div class="result-detail__text">面相上看事业运和财运怎么样？是否适合创业？应该选择哪一类工作？</div>
            <div class="result-detail__submit caree">{{bit.career_lock==1?'解锁报告':'查看报告'}}</div> <!----></div>
        </router-link>
        <router-link :to="{name:'emotion',query:{id:bit.id}}" tag="div" class="paylist-box-love">
          <div class="result-detail">
            <div class="result-detail__title">面相情感运程报告</div>
            <div class="result-detail__text">眉眼、嘴巴都隐藏着一个人的爱情密码。什么时候能遇上正缘？与伴侣能不能相伴永久？面相可以告诉你 …</div>
            <div class="result-detail__submit love">{{bit.love_lock==1?'解锁报告':'查看报告'}}</div>
          </div>
        </router-link>
      </div>
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
  import {reportDetails} from '@/assets/js/api'

  export default {
    name: "report",
    data() {
      return {
        showdia: false,
        bit: {},//基础数据
        positionArr: [],//位置数组
      }
    },
    created() {
      this.reportBit()
      this.picPosition()
    },
    mounted() {
      //this.arrangeCoordinate(this.bit)
    },
    methods: {
      arrangeCoordinate(data) {/*整理坐标（坐标是原图，需要转化为现图坐标）*/
        /*
        *公式：
        * x(返回x坐标)，zx(图片截取坐标点)，w（截取图片宽度），picBox（图片框大小）
        * y(返回y坐标)，zy(图片截取坐标点)，h（截取图片宽度），picBox（图片框大小）
        * x轴：(x-zx)*(picBox/w)=x
        * y轴：(y-zy)*(picBox/h)=y
        */
        let coorArr = data.img_size.split(',');
        let zx = coorArr[0]
        let zy = coorArr[1]
        let w = coorArr[2]
        let h = coorArr[3]
        let picBox = parseFloat(window.getComputedStyle(this.$refs.imgHeight).height || 0)//获取ref为imgHeight的样式高度
        for (let i in data.position) {
          let x = data.position[i].x
          let y = data.position[i].y
          console.log(data.position[i].x)
          data.position[i].x = (x - zx) * (picBox / w)
          data.position[i].y = (y - zy) * (picBox / h)
        }
      },
      showDiaContent() {
        this.showdia = !this.showdia;
      },
      picPosition() {
        const data = this.bit.position
        let arrangePosition = (str, text, lineState) => {
          for (let i in data) {
            if (str.indexOf(i) != -1) {
              this.positionArr.push(Object.assign({text: this.bit[text], lineState: lineState}, data[i]))
            }
          }
        }
        arrangePosition('nose_tip', 'nose_title', 1)
        arrangePosition('right_eyebrow_upper_middle', 'eyebrow_title', 1)
        arrangePosition('left_eye_left_corner', 'eye_title', 2)
        arrangePosition('mouth_lower_lip_top', 'mouth_title', 2)
      },
      reportBit() {
        const id = this.$route.query.id;
        reportDetails({id: id}).then((data) => {
          this.bit = data.data
          this.$store.dispatch('report', data.data)
          this.arrangeCoordinate(this.bit)
        })
      }
    }
  }
</script>

<style scoped lang="stylus">
  .report
    height: auto;
    width: 100vw;
    height: 100vh;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
    background: #E7E7E7;

  .g-title
    height: 10.4rem;
    background: #1b1b1b;
    overflow: auto;
    padding-top: 0.8rem;
    p
      color #fff
      text-align center
      font-size: 0.8rem;
      font-family: PingFangSC-Regular;
      color: #ffffff;
      line-height: 0.88rem;
      animation: leftinto 2s;
    .m-face-img
      margin-top: 0.8rem;
      height: 6.66666667rem;
      overflow: hidden;
      position: relative;
      .s-face-content
        width: 197.5px
        height: 197.5px
        border: 5px solid #666;
        box-sizing border-box
        overflow: hidden;
        background: #fff;
        border-radius: 100%;
        animation: fadein 2s;
        position absolute
        top calc(50% - 187.5px / 2)
        left calc(50% - 187.5px / 2)
        img
          width: 100%;
          filter: blur(5px);
      .face-result-line1
        width: 4rem;
        height: 1px;
        border-bottom: 1px solid #B0B0B0;
        position: absolute;
        animation: widthshow1 2s;
      .face-result-line2
        width: 3.33333333rem;
        height: 1px;
        border-bottom: 1px solid #B0B0B0;
        position: absolute;
        transform-origin: left;
        transform: rotate(180deg);
        animation: widthshow2 2s;
      .face-result-splot
        width: 0.37333333rem;
        height: 0.37333333rem;
        border: 0.02666667rem solid #fff;
        border-radius: 100%;
        position: absolute;
        .face-result-item
          width: 0.26666667rem;
          height: 0.26666667rem;
          border-radius: 100%;
          background: #fff;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
      .face-result-text
        font-size: 0.37333333rem;
        position: absolute;
        color: #fff;
        font-weight: 200;
        animation: fadein 2s;
    .face-result-box
      width: 197.5px
      height: 197.5px
      border: 5px solid transparent;
      box-sizing border-box
      position absolute
      top calc(50% - 187.5px / 2)
      left calc(50% - 187.5px / 2)

  .g-result-carde, .g-result-garde
    margin: 0 0.4rem 0.74666667rem;
    border-radius: 0.08rem;
    padding: 0.4rem;
    box-shadow: 0.01333333rem 0.05333333rem 0.26666667rem 0 rgba(0, 0, 0, 0.12);
    background: #fff;
    position: relative;
    .m-result-carde-content
      margin-top: 0.4rem;
      font-size: 0.37333333rem;
      font-weight: 200;
      color: #4a4a4a;
      line-height: 0.53333333rem;
      text-align: left;
      text-indent 20px
    .m-result-garde-content
      margin: 0.66666667rem 0;
      display: flex;
      align-items: flex-end;
      height: 4rem;
      p
        text-align center
      .s-result-garde-item
        flex: 1;
        font-size: 0.29333333rem;
        color: #262628;
        .bem-mark
          height: 120px;
          background-color: #E8E8E8;
          width: 6px;
          margin: 0 auto;
          display: flex;
          flex-direction: column-reverse;
          .nub
            width: 0.16rem;
            display: flex;
            align-items: flex-end;
            .bem-animate
              width: 100%;
              height: 100%;
              background: #9B9B9B;
              animation: myfirst-data-v-7175b888 3s;
    .m-result-garde-chart-text
      display: flex;
      align-items: flex-end;
      .s-result-garde-chart-left
        text-align: left;
        font-size: 0.4rem;
        margin: 0 0.26666667rem;
        span
          font-size: 22px;
      .s-result-garde-chart-middle
        font-size: 13px;
        color: #999;
        margin-bottom: 4px;
      .s-result-garde-chart-right
        flex: 1;
        font-size: 0.34666667rem;
        text-align: right;
        margin-right: 0.4rem;
        height: 0.53333333rem;
        margin-bottom: 4px;

    .m-result-garde-chart-all
      & > div
        margin: 0.06666667rem 0.4rem 0.13333333rem 0rem;
        height: 0.13333333rem;
        .isFixed
          height: 100%;
          background: linear-gradient(165.3deg, #818181, #4a4a4a);
          animation: myfirs 3s;

  .g-result-carde
    top: -0.66666667rem;

  .g-result-garde
    top: -1.06666667rem;

  .g-result-features--box
    position: relative;
    padding-bottom: 0.26666667rem;
    .result-imgcard
      border-radius: 0.08rem;
      background: #fff;
      min-height: 4.66666667rem;
      width: 8.26666667rem;
      display: flex;
      flex-direction: column;
      margin: 0 auto 0.37333333rem;
      padding: 0.53333333rem 0.4rem;
      box-shadow: 0rem 0.02666667rem 0.13333333rem 0rem rgba(0, 0, 0, 0.12);
      .result-imgcard__top
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        font-size: 0.48rem;
        color: #4a4a4a;
        .result-imgcard__top-left
          line-height: 0.93333333rem;
        .result-imgcard__top-right
          border: 0.01333333rem solid #e6e6e6;
          height: 0.66666667rem;
          max-width: 6.66666667rem;
          overflow: hidden;
          border-radius: 0.66666667rem;
          font-size: 0.37333333rem;
          line-height: 0.66666667rem;
          color: #000;
          padding: 0.13333333rem 0.26666667rem;
      .result-imgcard__bot
        font-size: 0.37333333rem;
        margin-top: 0.61333333rem;
        color: #4A4A4A;
        font-weight: 200;
        line-height: 0.53333333rem;
        margin-bottom: 0.88rem;
        text-align: left;
        &.noPay
          margin-bottom: 0
        .result-imgcard__bot-img
          width: 2.66666667rem;
          height: 2rem;
          float: right;
          overflow: hidden;
          margin: 0 0 0.16rem 0.74666667rem;
          border-radius: 0.13333333rem;
          img
            width: auto;
            height: 100%;
            filter: blur(5px);
        .pay
          .pay-botton
            display: inline-block;
            background: #FF5954;
            padding: 0.13333333rem 0.53333333rem;
            font-size: 0.42666667rem;
            color: #fff;
            border-radius: 0.53333333rem;
            font-weight: 400;
            img
              width: 18px;
              height: 20px;
            span
              position: relative;
              top: -0.06666667rem;
              padding-left: 0.13333333rem;

  .result-share
    vertical-align: middle;
    height: 1.86666667rem;
    width: 8.26666667rem;
    background: linear-gradient(180deg, #fe9f6a 0%, #f98647 79%, #fca06d 100%);
    box-shadow: 0px 2px 4px 0px rgba(132, 47, 0, 0.52);
    border-radius: 0.05333333rem;
    margin: 0.37333333rem auto 1.2rem;
    padding: 0 0.4rem;
    line-height: 1.17333333rem;
    color: #fff;
    text-align center
    img
      width: 0.66666667rem;
      height: 0.66666667rem;
      margin: -0.26666667rem 0 0 0;
      vertical-align: text-bottom;
    p
      display: inline-block;
      line-height: 1.86666667rem;
      font-size: 16px;
      font-family: PingFangSC-Regular;
      font-weight: 400;
      letter-spacing: 0.08rem;
      padding-left: 0.53333333rem;

  .result-features
    margin: 0.37333333rem auto -0.26666667rem;
    padding: 0.4rem;
    border-radius: 0.08rem;
    background: #fff;
    box-shadow: 0.01333333rem 0.02666667rem 0.13333333rem 0rem rgba(0, 0, 0, 0.2);
    position: relative;
    top: -0.66666667rem;
    width: 8.26666667rem;
    .result-features__five
      height: 5.33333333rem;
      text-align: center;
      .title
        font-size: 18px;
        color: #4a4a4a;
        text-align: center;
        line-height: 50px;
    .result-features-type-title
      height: 0.8rem;
      line-height: 0.8rem;
      color: #4A4A4A;
      display: flex;
      align-items: flex-end;
      .result-features-type-title-type
        font-size: 15px;
        margin: 0 auto;
    .index-order
      display: flex;
      -ms-flex-pack: justify;
      justify-content: space-between;
      margin: 0.48rem 0 0.61333333rem 0;
      width: 8.26666667rem;
      .users-info
        width: 3.89333333rem;
        height: 1.92rem;
        line-height: 0.53333333rem;
        position: relative
        .users-info_backgr
          height: 100%;
          width: 100%;
          position: relative;
        .users-info__name
          position: absolute;
          top: 0.26666667rem;
          left: 0.48rem;
          font-size: 0.53333333rem;
          color: #fff;
          font-family: Bitstream;
        .users-info__bot
          position: absolute;
          top: 0.98666667rem;
          left: 0.48rem;
          width: 0.42666667rem;
          height: 0.08rem;
          background: #fff;
        p
          font-size: 0.37333333rem;
          font-family: PingFangSC-Regular;
          color: #ffffff;
          position: absolute;
          left: 0.48rem;
          bottom: 0.21333333rem;
    .result-features__text-card
      margin: 0 0.13333333rem 0.66666667rem;
      font-size: 0.34666667rem;
      color: #666;
      line-height: 0.53333333rem;
      text-align center
      .result-features__text-card--title
        margin-bottom: 20px;

  .g-paylist
    .m-paylist-box
      position: relative;
      padding-bottom: 0.26666667rem;
      padding-bottom: 0.66666667rem;
      .paylist-box-cause, .paylist-box-love
        background: url(../assets/images/careereport1.png) no-repeat;
        background-size: 100%;
        width: 8.66666667rem;
        border-radius: 0.08rem;
        padding: 0 0.4rem 0 0.4rem;
        margin: 0 auto 0.4rem;
      .paylist-box-love
        background: url(../assets/images/lovereport.png) no-repeat;
        background-size: 100%;
      .result-detail
        width: 8.26666667rem;
        margin: 0 auto;
        border-radius: 0.08rem;
        padding-bottom 10px
        .caree
          color: #394C9A;
          top: -10px;
        .love
          color: #FD103E
        .result-detail__title
          width: 7.33333333rem;
          height: 0.37333333rem;
          font-size: 18px;
          font-weight: 600;
          color: #ffffff;
          line-height: 0.37333333rem;
          padding-top: 0.66666667rem;
          padding-bottom: 0.29333333rem;
          text-align: left;
        .result-detail__text
          width: 5.09333333rem;
          font-size: 14px;
          font-weight: 300;
          color: #ffffff;
          line-height: 16px;
          text-align: left;
        .result-detail__submit
          width: 2.70666667rem;
          height: 0.8rem;
          background: #ffffff;
          border-radius: 1.33333333rem;
          font-size: 14px;
          font-weight: 400;
          line-height: 0.8rem;
          text-align: center;
          position: relative;
          right: -5.6rem;
          top: -0.3rem;

  .title
    font-size: 0.45333333rem;
    color: #4a4a4a;
    line-height: 0.66666667rem;
    text-align center
    animation: fadein 1s;

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
