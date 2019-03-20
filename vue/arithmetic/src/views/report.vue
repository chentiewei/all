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
            {{v.text}}{{v.x}}-{{v.y}}
          </div>
          <div v-else class="face-result-text" :style="{top:v.x-20+'px',left:v.y-118+'px'}">{{v.text}}{{v.x}}-{{v.y}}
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
        bit: {
          "id": 2207,
          "uid": 1,
          "face_id": 2900,
          "img_size": "89,156,534,534",
          "beautifyImg": "https://faceplus.qqwechat.com/2019-03-20_9ffccc9b9a45033d21218c739ce1c656.png?x-oss-process=image/crop,x_87,y_156,w_534,h_534",
          "eyebrow_eye_length": "0.26",
          "eyebrow_num": 10,
          "eyebrow_title": "\u67f3\u53f6\u5f2f\u7709",
          "eyebrow_info": "\u67f3\u53f6\u7709\u5f2f\u66f2\u7684\u5e45\u5ea6\u5927\uff0c\u5448\u73b0\u5f27\u578b\uff0c\u5e76\u4e14\u7709\u5f62\u6e05\u957f\u7531\u5934\u81f3\u5c3e\u8d70\u52bf\u987a\u7545\uff1b\u7709\u76f8\u5982\u6b64\u7684\u4eba\uff0c\u5185\u5fc3\u5584\u826f\uff0c\u5fc3\u80a0\u7279\u8f6f\uff0c\u5973\u751f\u5219\u662f\u6e29\u6da6\u5982\u6c34\u7684\u6e29\u67d4\u4f73\u4eba\uff0c\u4f46\u5bb9\u6613\u6ca1\u6709\u4e3b\u89c1\uff0c\u968f\u6ce2\u9010\u6d41\uff0c\u5728\u4e8b\u4e1a\u4e0a\u548c\u9700\u8981\u51b3\u65ad\u7684\u5730\u65b9\u6210\u4e0d\u4e86\u4e8b\u3002",
          "eye_num": 10,
          "eye_title": "\u773c\u8ddd\u8f83\u77ed",
          "eye_info": "\u6709\u4eb2\u5207\u611f\u3001\u76f4\u89c9\u80fd\u529b\u9887\u9ad8\uff0c\u800c\u53c8\u5584\u4e8e\u4e34\u673a\u5e94\u53d8\u3002\u7279\u522b\u662f\u6709\u4e00\u79cd\u795e\u5947\u7684\u7b2c\u516d\u7075\u611f\uff0c\u5bf9\u9884\u77e5\u672a\u6765\u4e8b\uff0c\u6709\u4e00\u5b9a\u7684\u51c6\u786e\u5ea6\u3002\u5e38\u5e38\u80fd\u4e00\u4e0b\u5b50\u770b\u5230\u4e8b\u60c5\u7684\u8981\u70b9\uff0c\u5bf9\u7ec6\u5fae\u7684\u4e8b\u7269\u6709\u7279\u522b\u7684\u89c2\u5bdf\u529b\uff1b\u867d\u7136\u53ef\u4ee5\u6709\u9884\u77e5\u80fd\u529b\uff0c\u4f46\u5374\u56e0\u800c\u5e38\u5e38\u5f04\u5de7\u53cd\u62d9\u7684\u62db\u6765\u9ebb\u70e6\u548c\u4e0d\u5fc5\u8981\u7684\u62c5\u5fc3\u3002\u56e0\u4e3a\u60f3\u5f97\u592a\u591a\u4e86\uff0c\u53d8\u5f97\u7591\u795e\u7591\u9b3c\uff0c\u4e0d\u4fe1\u4efb\u522b\u4eba\uff0c\u5728\u611f\u60c5\u4e0a\u5bb9\u6613\u72af\u7591\u5fc3\u75c5\u3002",
          "nose_num": 10,
          "nose_title": "\u9f3b\u7ffc\u4e2d\u6b63",
          "nose_lock": 1,
          "mouth_num": 10,
          "mouth_title": "\u5200\u524a\u5507",
          "mouth_info": "\u5507\u5982\u67f3\u53f6\uff0c\u601d\u8651\u654f\u6377\uff0c\u5bcc\u4e8e\u673a\u5de7\u53ca\u624d\u667a\uff0c\u5b9e\u4e8b\u6c42\u662f\uff0c\u5e94\u53d8\u80fd\u529b\u9887\u5f3a\u3002\u5634\u5507\u4ee3\u8868\u53e3\u798f\u548c\u4ea4\u9645\uff0c\u5634\u5507\u9002\u4e2d\u4e0d\u5bb9\u6613\u6709\u80a5\u80d6\u3001\u80a0\u80c3\u7b49\u95ee\u9898\uff0c\u56e0\u4e3a\u98df\u6b32\u4fdd\u6301\u8282\u5236\uff0c\u8f9b\u8fa3\u9178\u751c\u6709\u8282\u5236\uff0c\u4e0d\u4f1a\u5bf9\u8eab\u4f53\u9020\u6210\u592a\u5927\u7684\u538b\u529b\uff0c\u4f1a\u6709\u4e00\u4e2a\u8f7b\u677e\u7684\u8eab\u4f53\uff0c\u4ea4\u9645\u65b9\u9762\u4e0d\u4f1a\u6709\u5f88\u591a\u8ba4\u8bc6\u7684\u4eba\uff0c\u4f46\u6709\u771f\u5fc3\u670b\u53cb\u3002",
          "chin_title": "",
          "chin_info": "",
          "court_up": "1.87",
          "court_up_num": 8,
          "court_up_title": "\u4e0a\u5ead\u9002\u4e2d",
          "court_up_info": "\u989d\u5934\u9971\u6ee1\uff0c\u5bb9\u5149\u7115\u53d1\u3002\u65e0\u8bba\u51fa\u751f\u5bb6\u5ead\u5bcc\u6709\u8fd8\u662f\u8d2b\u56f0\uff0c\u65e9\u5e74\u90fd\u4f1a\u6709\u4e00\u4e2a\u597d\u8fd0\u52bf\u3002",
          "court_mid": "1.94",
          "court_mid_num": 9,
          "court_mid_title": "",
          "court_mid_info": "\u4e2d\u5e74\u4e0d\u4f1a\u6709\u975e\u5e38\u9ad8\u5347\u7684\u8fd0\u52bf\uff0c39\u5c81\u5f00\u59cb\u8fdb\u5165\u5e73\u6de1\u7684\u65f6\u671f\uff0c\u8fd8\u6709\u53ef\u80fd\u906d\u9047\u4e00\u4e9b\u5c0f\u5371\u673a\uff0c\u4f46\u603b\u4f53\u6765\u8bf4\u5f71\u54cd\u4e0d\u5927\uff0c\u6b65\u5165\u665a\u5e74\u6c14\u8fd0\u80fd\u5f97\u5230\u56de\u5347\u3002",
          "court_down": "1.80",
          "court_down_num": 8,
          "court_down_title": "",
          "court_down_info": "\u4e0b\u5ead\u8f83\u957f\u3001\u53c8\u65b9\u7684\u4eba\u7684\u4eba\uff0c\u4e00\u822c\u4f53\u683c\u6bd4\u8f83\u5f3a\u5065\uff0c\u662f\u8fd0\u52a8\u5458\u8eab\u6750\uff0c\u6709\u6bc5\u529b\uff0c\u5728\u9006\u5883\u4e2d\u6323\u624e\u751f\u5b58\uff0c\u4e0d\u4f1a\u7070\u5fc3\u5931\u671b\uff1b\u61c2\u5f97\u7167\u987e\u5bb6\u4eba\uff0c\u5982\u679c\u662f\u5973\u6027\uff0c\u5219\u662f\u4e8b\u4e1a\u4e0a\u4f1a\u5f88\u597d\uff0c\u5bb6\u91cc\u4e5f\u4f1a\u7ba1\u7406\u7684\u4e95\u4e95\u6709\u6761\uff0c\u975e\u5e38\u8d1f\u8d23\u3002",
          "face_wide": "4.03",
          "face": "\u91d1\u578b\u8138\uff0c\u4e94\u5b98\u8eab\u5f62\u5e26\u6728\uff0c\u76f8\u514b\u76f8\u5316\u4e4b\u683c\u3002\u9762\u767d\uff0c\u65b9\u6b63\uff0c\u8eab\u957f\u4e14\u65b9\u3002\u9f3b\u6881\u5e73\u76f4\uff0c\u53e3\u8033\u4ff1\u6b63\uff0c\u773c\u79c0\u795e\u8db3\uff0c\u7709\u6e05\u987b\u79c0\uff0c\u8272\u767d\u517c\u5fae\u9752\u3002",
          "face_info": "\u91d1\u578b\u517c\u6728\u5c40\u4eba\uff0c\u591a\u4e3a\u6587\u6b66\u53cc\u5168\uff0c\u6587\u7a0d\u5de6\uff0c\u6545\u591a\u4e3a\u6b66\u5c06\u517c\u9886\u6587\u804c\u3002\u4e0d\u8fc7\u65e9\u5e74\u8fd0\u52bf\u4e0d\u662f\u5f88\u597d\uff0c\u4e0d\u8fc7\u91d1\u578b\u683c\u5c40\u4e3b\u665a\u53d1\uff0c\u5927\u591a\u81ea\u5f8b\uff0c\u4e25\u4e8e\u8981\u6c42\u81ea\u5df1\uff0c\u80fd\u8005\u591a\u52b3\u3002\u6b64\u7c7b\u683c\u5c40\uff0c\u5fcc\u9762\u90e8\u4e94\u5cb3\u4e94\u661f\uff08\u5373\u4e0b\u988c\u3001\u4e0b\u988c\u3001\u5de6\u53f3\u98a7\u9aa8\u548c\u4e94\u5b98\uff09\u4e0d\u7a81\u51fa\uff0c\u6ca1\u6709\u68f1\u89d2\uff0c\u6b64\u4e3a\u76f8\u514b\u4e0d\u5316\u4e4b\u683c\uff0c\u665a\u5e74\u4f1a\u6709\u707e\u7978\u6216\u8f83\u5927\u7684\u5065\u5eb7\u95ee\u9898\u3002",
          "face_rate": [{"five": "\u91d1", "score": 65}, {"five": "\u6728", "score": 35}],
          "face_num": 65,
          "love_lock": 1,
          "career_lock": 1,
          "created_at": "2019-03-05 11:18:55",
          "updated_at": "2019-03-19 16:05:51",
          "is_delete": 0,
          "early_years": "\u65e9\u5e74\u56e0\u4e2a\u6027\u5e73\u548c\u6e29\u67d4\uff0c\u670b\u53cb\u8f83\u591a\u3002\u5b66\u8fd0\u5e73\u6de1\uff0c\u7231\u5e2e\u5fd9\uff0c\u6613\u53d7\u4eba\u5dee\u9063\uff1b\u8fd0\u7a0b\u4e00\u822c\u3002",
          "mid_years": "\u4e2d\u5e74\u8fd0\u7a0b\u5e73\u6de1\uff0c\u8d77\u4f0f\u4e0d\u5927\u3002\u5de5\u4f5c\u7a33\u5b9a\uff0c\u6536\u5165\u5c1a\u53ef\u3002\u9002\u5408\u505a\u6559\u5e08\u3001\u516c\u804c\u4eba\u5458\uff0c\u6ce8\u91cd\u5bb6\u5ead\uff0c\u6559\u80b2\u3002\u5973\u6027\u5927\u591a\u4f1a\u8fc7\u56de\u5f52\u5bb6\u5ead\u76f8\u592b\u6559\u5b50\u7684\u751f\u6d3b\u3002",
          "later_years": "\u665a\u5e74\u4f1a\u4e3a\u513f\u5973\u7684\u4e8b\u60c5\u5954\u6ce2\uff1b\u5de5\u4f5c\u7a33\u5b9a\uff0c\u9000\u4f11\u8f83\u65e9\u3002\u5728\u513f\u5973\u8eab\u4e0a\u8017\u8d39\u7684\u7cbe\u795e\u4f1a\u5f88\u591a\uff0c\u4f46\u513f\u5973\u798f\u836b\u597d\uff0c\u5b66\u8fd0\u597d\u3002\u665a\u5e74\u5bb6\u91cc\u5bb9\u6613\u6559\u51fa\u72b6\u5143\uff0c\u540e\u4ee3\u90fd\u4f1a\u5f88\u4f18\u79c0\u3002",
          "name": "ceshi",
          "img": "",
          "status": 1,
          "position": {
            "contour_chin": {
              "y": 595,
              "x": 367
            },
            "left_eye_upper_left_quarter": {
              "y": 308,
              "x": 260
            },
            "mouth_lower_lip_right_contour1": {
              "y": 493,
              "x": 397
            },
            "left_eye_bottom": {
              "y": 329,
              "x": 277
            },
            "mouth_lower_lip_right_contour2": {
              "y": 501,
              "x": 414
            },
            "contour_left7": {
              "y": 436,
              "x": 208
            },
            "contour_left6": {
              "y": 414,
              "x": 201
            },
            "contour_left5": {
              "y": 392,
              "x": 196
            },
            "contour_left4": {
              "y": 370,
              "x": 191
            },
            "contour_left3": {
              "y": 347,
              "x": 188
            },
            "contour_left2": {
              "y": 324,
              "x": 186
            },
            "contour_left1": {
              "y": 300,
              "x": 186
            },
            "left_eye_lower_left_quarter": {
              "y": 326,
              "x": 260
            },
            "contour_right1": {
              "y": 293,
              "x": 524
            },
            "contour_right3": {
              "y": 339,
              "x": 525
            },
            "contour_right2": {
              "y": 316,
              "x": 525
            },
            "contour_right5": {
              "y": 384,
              "x": 521
            },
            "contour_right4": {
              "y": 362,
              "x": 524
            },
            "contour_right7": {
              "y": 429,
              "x": 513
            },
            "left_eyebrow_left_corner": {
              "y": 281,
              "x": 214
            },
            "right_eye_right_corner": {
              "y": 319,
              "x": 472
            },
            "nose_bridge1": {
              "y": 314,
              "x": 360
            },
            "nose_bridge3": {
              "y": 384,
              "x": 360
            },
            "nose_bridge2": {
              "y": 349,
              "x": 360
            },
            "right_eyebrow_upper_left_corner": {
              "y": 273,
              "x": 392
            },
            "mouth_upper_lip_right_contour4": {
              "y": 488,
              "x": 396
            },
            "mouth_upper_lip_right_contour1": {
              "y": 475,
              "x": 377
            },
            "right_eye_left_corner": {
              "y": 327,
              "x": 404
            },
            "left_eyebrow_upper_right_corner": {
              "y": 274,
              "x": 322
            },
            "left_eyebrow_upper_middle": {
              "y": 255,
              "x": 265
            },
            "mouth_lower_lip_right_contour3": {
              "y": 518,
              "x": 393
            },
            "nose_left_contour3": {
              "y": 425,
              "x": 318
            },
            "mouth_lower_lip_bottom": {
              "y": 524,
              "x": 363
            },
            "mouth_upper_lip_right_contour2": {
              "y": 478,
              "x": 404
            },
            "left_eye_top": {
              "y": 304,
              "x": 279
            },
            "nose_left_contour1": {
              "y": 325,
              "x": 337
            },
            "mouth_upper_lip_bottom": {
              "y": 491,
              "x": 363
            },
            "mouth_upper_lip_left_contour2": {
              "y": 478,
              "x": 323
            },
            "mouth_upper_lip_top": {
              "y": 478,
              "x": 362
            },
            "mouth_upper_lip_left_contour1": {
              "y": 475,
              "x": 348
            },
            "mouth_upper_lip_left_contour4": {
              "y": 488,
              "x": 331
            },
            "right_eye_top": {
              "y": 305,
              "x": 438
            },
            "mouth_upper_lip_right_contour3": {
              "y": 482,
              "x": 421
            },
            "right_eye_bottom": {
              "y": 330,
              "x": 440
            },
            "right_eyebrow_lower_left_corner": {
              "y": 288,
              "x": 395
            },
            "mouth_left_corner": {
              "y": 480,
              "x": 298
            },
            "nose_middle_contour": {
              "y": 445,
              "x": 361
            },
            "right_eye_lower_right_quarter": {
              "y": 327,
              "x": 458
            },
            "right_eyebrow_lower_right_quarter": {
              "y": 275,
              "x": 478
            },
            "contour_right9": {
              "y": 472,
              "x": 499
            },
            "mouth_right_corner": {
              "y": 479,
              "x": 431
            },
            "right_eye_lower_left_quarter": {
              "y": 329,
              "x": 421
            },
            "right_eye_center": {
              "y": 316,
              "x": 438
            },
            "left_eye_upper_right_quarter": {
              "y": 311,
              "x": 299
            },
            "right_eyebrow_lower_left_quarter": {
              "y": 279,
              "x": 423
            },
            "left_eye_pupil": {
              "y": 314,
              "x": 279
            },
            "contour_right8": {
              "y": 451,
              "x": 507
            },
            "contour_left13": {
              "y": 551,
              "x": 279
            },
            "left_eyebrow_lower_right_quarter": {
              "y": 280,
              "x": 292
            },
            "left_eye_right_corner": {
              "y": 326,
              "x": 314
            },
            "left_eyebrow_lower_right_corner": {
              "y": 288,
              "x": 320
            },
            "mouth_upper_lip_left_contour3": {
              "y": 483,
              "x": 308
            },
            "left_eyebrow_lower_left_quarter": {
              "y": 275,
              "x": 239
            },
            "mouth_lower_lip_left_contour1": {
              "y": 493,
              "x": 330
            },
            "mouth_lower_lip_left_contour3": {
              "y": 518,
              "x": 334
            },
            "mouth_lower_lip_left_contour2": {
              "y": 501,
              "x": 314
            },
            "contour_left9": {
              "y": 478,
              "x": 224
            },
            "left_eye_lower_right_quarter": {
              "y": 328,
              "x": 296
            },
            "contour_right6": {
              "y": 407,
              "x": 518
            },
            "nose_tip": {
              "y": 419,
              "x": 361
            },
            "right_eyebrow_upper_middle": {
              "y": 255,
              "x": 451
            },
            "right_eyebrow_lower_middle": {
              "y": 273,
              "x": 451
            },
            "left_eye_center": {
              "y": 314,
              "x": 279
            },
            "right_eyebrow_upper_left_quarter": {
              "y": 260,
              "x": 419
            },
            "right_eyebrow_right_corner": {
              "y": 283,
              "x": 504
            },
            "right_eyebrow_upper_right_quarter": {
              "y": 260,
              "x": 482
            },
            "contour_left16": {
              "y": 592,
              "x": 339
            },
            "contour_left15": {
              "y": 582,
              "x": 316
            },
            "contour_left14": {
              "y": 568,
              "x": 296
            },
            "left_eyebrow_upper_right_quarter": {
              "y": 262,
              "x": 295
            },
            "contour_left12": {
              "y": 535,
              "x": 263
            },
            "contour_left11": {
              "y": 517,
              "x": 248
            },
            "contour_left10": {
              "y": 498,
              "x": 235
            },
            "left_eyebrow_lower_middle": {
              "y": 275,
              "x": 265
            },
            "left_eyebrow_upper_left_quarter": {
              "y": 258,
              "x": 236
            },
            "right_eye_upper_right_quarter": {
              "y": 309,
              "x": 457
            },
            "nose_right_contour4": {
              "y": 435,
              "x": 392
            },
            "nose_right_contour5": {
              "y": 439,
              "x": 377
            },
            "nose_left_contour4": {
              "y": 436,
              "x": 331
            },
            "nose_left_contour5": {
              "y": 440,
              "x": 345
            },
            "nose_left_contour2": {
              "y": 398,
              "x": 327
            },
            "nose_right_contour1": {
              "y": 324,
              "x": 383
            },
            "nose_right_contour2": {
              "y": 397,
              "x": 394
            },
            "nose_right_contour3": {
              "y": 425,
              "x": 405
            },
            "left_eye_left_corner": {
              "y": 319,
              "x": 246
            },
            "contour_right15": {
              "y": 579,
              "x": 415
            },
            "contour_right14": {
              "y": 564,
              "x": 434
            },
            "contour_right16": {
              "y": 590,
              "x": 394
            },
            "contour_right11": {
              "y": 512,
              "x": 478
            },
            "contour_right10": {
              "y": 493,
              "x": 490
            },
            "contour_right13": {
              "y": 547,
              "x": 450
            },
            "contour_right12": {
              "y": 530,
              "x": 465
            },
            "contour_left8": {
              "y": 457,
              "x": 215
            },
            "mouth_lower_lip_top": {
              "y": 499,
              "x": 363
            },
            "right_eye_upper_left_quarter": {
              "y": 311,
              "x": 418
            },
            "right_eye_pupil": {
              "y": 316,
              "x": 438
            }
          }
        },//基础数据
        positionArr: [],//位置数组
      }
    },
    created() {
      //this.reportBit()
      this.picPosition()
    },
    mounted() {
      this.arrangeCoordinate(this.bit)
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
          console.log(this.positionArr)
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
