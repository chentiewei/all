<template>
  <div class="uploadImage">
    <div class="g-upload-image" :class="{'g-upload-image-fff':type==1,'g-upload-image-top':type!=1}">
      <img v-if="bit.img" class="m-upload-image-true" :class="{' m-upload-image-scol':type>=3}" :src="bit.img">
      <img v-else class="m-upload-image-true" :class="{' m-upload-image-scol':type>=3}"
           src="@/assets/images/shilizhaopian.png">
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
      <div class="g-btn-submit">
        拍照/上传美照
        <input v-if="clearInputImage" type="file" @change="uploadImage($event)" accept="image/*" name="avatar">
      </div>
    </div>
    <div v-else-if="type==2">
      <div v-if="bit.error">
        <div class="g-upload-type2-bottom">
          <div class="isupdate">
            <div class="isupdate-item">
              <div class="isupdate-item__left">头部姿势</div>
              <div class="isupdate-item__right" v-if="bit.error.no_face.value">{{bit.error.no_face.str}}</div>
              <div class="isupdate-item__right" v-else>
                {{bit.error.roll_angle.value>=0?'右倾斜':'左倾斜'}}{{Math.abs(parseInt(bit.error.roll_angle.value))}}°
              </div>
              <img src="../assets/images/Correct.png"
                   v-if="Math.abs(bit.error.yaw_angle.value)<30&&!bit.error.no_face.value">
              <img src="../assets/images/error.png" v-else>
            </div>
            <div class="isupdate-item">
              <div class="isupdate-item__left">左眼状态</div>
              <div class="isupdate-item__right text" v-if="bit.error.no_face.value">{{bit.error.no_face.str}}</div>
              <div class="isupdate-item__right text" v-else>
                {{bit.error.left_eye_close.value?'左眼闭合':bit.error.left_eye_occlusion.value?'左眼遮挡':'睁眼，未戴眼镜'}}
              </div>
              <img src="../assets/images/error.png"
                   v-if="bit.error.left_eye_close.value||bit.error.left_eye_occlusion.value">
              <img src="../assets/images/Correct.png" v-else>
            </div>
            <div class="isupdate-item">
              <div class="isupdate-item__left">右眼状态</div>
              <div class="isupdate-item__right text" v-if="bit.error.no_face.value">{{bit.error.no_face.str}}</div>
              <div class="isupdate-item__right text" v-else>
                {{bit.error.right_eye_close.value?'右眼闭合':bit.error.right_eye_occlusion.value?'右眼遮挡':'睁眼，未戴眼镜'}}
              </div>
              <img src="../assets/images/error.png"
                   v-if="bit.error.right_eye_close.value||bit.error.right_eye_occlusion.value">
              <img src="../assets/images/Correct.png" v-else>
            </div>
          </div>
        </div>
        <div class="g-btn-submit2" @click="detection=!detection">确认提交</div>
        <div class="g-btn-upload2">重新上传<input v-if="clearInputImage" type="file" @change="uploadImage($event)"
                                              accept="image/*" name="avatar"></div>
        <div class="g-upload-err-dia" v-if="detection" @click="detection=!detection">
          <div class="m-err-box">
            <div class="s-err-title">您的照片未符合以下标准：</div>
            <div class="s-err-content">
              <div class="err-item" v-for="(v,i) in bit.error" v-if="i!='yaw_angle'&&i!='pitch_angle'" :key="'error'+i">
                <div class="err-left"></div>
                <div class="err-right">{{v.str}}</div>
                <!--<div class="err-right">没有人脸<span>(要求人脸照)</span></div>-->
              </div>
            </div>
            <div class="s-err-sub">
              <input v-if="clearInputImage" type="file" @change="uploadImage($event)" accept="image/*" name="avatar">
              重新上传
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        <div class="g-upload-type2-bottom">
          <div class="isupdate">
            <div class="isupdate-item">
              <div class="isupdate-item__left">头部姿势</div>
              <div class="isupdate-item__right">{{bit.headpose.roll_angle>=0?'右倾斜':'左倾斜'}}{{Math.abs(parseInt(bit.headpose.roll_angle))}}°</div>
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
              <img src="../assets/images/Correct.png">
            </div>
          </div>
        </div>
        <div class="g-btn-submit2" @click="sub">确认提交</div>
        <div class="g-btn-upload2">重新上传<input v-if="clearInputImage" type="file" @change="uploadImage($event)"
                                              accept="image/*" name="avatar"></div>
      </div>
    </div>
    <div v-show="type>=4" :class="{ 'uploadLoade':type>=4}">
      <div class="g-upload-type3-img" ref="imgHeight">
        <img v-if="bit.img" class="m-type3-img-center" :src="bit.img">
        <img v-else class="m-type3-img-center" src="@/assets/images/shilizhaopian.png">
        <img v-if="type>=5&&type!=7" class="m-type3-img-body" src="../assets/images/quanquan.png">
        <img class="m-type3-img-wbody" src="../assets/images/biankuang.png">
        <div class="m-linePlace m-linePlaceAll" v-show="placeBit.allPlace"><!--三庭全部展示-->
          <div class="face-result-line1"></div>
          <div class="face-result-text" :style="{top:linePlace[0].top/2+'px'}">{{linePlace[0].text}}</div>
          <div class="face-result-line1" :style="{top:linePlace[0].top+'px'}"></div>
          <div class="face-result-text" :style="{top:(linePlace[0].top+linePlace[1].top)/2+'px'}">
            {{linePlace[1].text}}
          </div>
          <div class="face-result-line1" :style="{top:linePlace[1].top+'px'}"></div>
          <div class="face-result-text" :style="{top:(linePlace[1].top+linePlace[2].top)/2+'px'}">
            {{linePlace[2].text}}
          </div>
          <div class="face-result-line1" :style="{top:linePlace[2].top+'px'}"></div>
        </div>
        <div class="m-linePlace m-linePlace1" v-if="placeBit.showPlace1"><!--上庭展示-->
          <div class="face-result-line1"></div>
          <div class="face-result-text" :style="{top:linePlace[0].top/2+'px'}">{{linePlace[0].text}}</div>
          <div class="face-result-line1" :style="{top:linePlace[0].top+'px'}"></div>
        </div>
        <div class="m-linePlace m-linePlace2" v-if="placeBit.showPlace2"><!--中庭展示-->
          <div class="face-result-line1" :style="{top:linePlace[0].top+'px'}"></div>
          <div class="face-result-text" :style="{top:(linePlace[0].top+linePlace[1].top)/2+'px'}">
            {{linePlace[1].text}}
          </div>
          <div class="face-result-line1" :style="{top:linePlace[1].top+'px'}"></div>
        </div>
        <div class="m-linePlace m-linePlace3" v-if="placeBit.showPlace3"><!--下庭展示-->
          <div class="face-result-line1" :style="{top:linePlace[1].top+'px'}"></div>
          <div class="face-result-text" :style="{top:(linePlace[1].top+linePlace[2].top)/2+'px'}">
            {{linePlace[2].text}}
          </div>
          <div class="face-result-line1" :style="{top:linePlace[2].top+'px'}"></div>
        </div>
        <svg class="loadimg">
          <line :x1="v[0].x" :y1="v[0].y" :x2="v[1].x" :y2="v[1].y" style="stroke:#d5cbcb;stroke-width:1.2;"
                v-for="(v,i) in lines" :key="'line'+i"/>
          <line :x1="v[0].x" :y1="v[0].y" :x2="v[1].x" :y2="v[1].y" style="stroke:#fff;stroke-width:1.2;"
                v-for="(v,i) in angle" :key="'angle'+i"/>
          <circle :cx="v.x" :cy="v.y" r="1.2" fill="#fff" v-for="(v,i) in circles" :key="'circles'+i"/>
        </svg>
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
            <div v-if="!load[0]" class="upload-loade_center-item--bot_load1">
              <img src="../assets/images/load.png" class="upload-loade_center-item--bot_ok1">
            </div>
            <div v-else class="upload-loade_center-item--bot">
              <img src="../assets/images/ok.svg" class="upload-loade_center-item--bot_ok1">
            </div>
          </div>
          <div class="upload-loade_center-item--top">中庭数据提取</div>
          <div class="upload-loade_center-item">
            <div class="upload-loade_center-item--cen">
              <div class="upload-loade_center-item--cen-item type-item2"></div>
            </div>
            <div v-if="!load[1]" class="upload-loade_center-item--bot_load1">
              <img src="../assets/images/load.png" class="upload-loade_center-item--bot_ok1">
            </div>
            <div v-else class="upload-loade_center-item--bot">
              <img src="../assets/images/ok.svg" class="upload-loade_center-item--bot_ok1">
            </div>
          </div>
          <div class="upload-loade_center-item--top">下庭数据提取</div>
          <div class="upload-loade_center-item">
            <div class="upload-loade_center-item--cen">
              <div class="upload-loade_center-item--cen-item type-item3"></div>
            </div>
            <div v-if="!load[2]" class="upload-loade_center-item--bot_load1">
              <img src="../assets/images/load.png" class="upload-loade_center-item--bot_ok1">
            </div>
            <div v-else class="upload-loade_center-item--bot">
              <img src="../assets/images/ok.svg" class="upload-loade_center-item--bot_ok1">
            </div>
          </div>
        </div>
        <div v-if="gif==2" class="upload-loade_center type2">
          <div class="upload-loade_center-item--top">定位眉头-眉峰-眉尾</div>
          <div class="upload-loade_center-item">
            <div class="upload-loade_center-item--cen">
              <div class="upload-loade_center-item--cen-item type-item1"></div>
            </div>
            <div v-if="!load[0]" class="upload-loade_center-item--bot_load1">
              <img src="../assets/images/load.png" class="upload-loade_center-item--bot_ok1">
            </div>
            <div v-else class="upload-loade_center-item--bot">
              <img src="../assets/images/ok.svg" class="upload-loade_center-item--bot_ok1">
            </div>
          </div>
          <div class="upload-loade_center-item--top">定位眼长-眼高</div>
          <div class="upload-loade_center-item">
            <div class="upload-loade_center-item--cen">
              <div class="upload-loade_center-item--cen-item type-item2"></div>
            </div>
            <div v-if="!load[1]" class="upload-loade_center-item--bot_load1">
              <img src="../assets/images/load.png" class="upload-loade_center-item--bot_ok1">
            </div>
            <div v-else class="upload-loade_center-item--bot">
              <img src="../assets/images/ok.svg" class="upload-loade_center-item--bot_ok1">
            </div>
          </div>
          <div class="upload-loade_center-item--top">定位鼻高-鼻翼宽</div>
          <div class="upload-loade_center-item">
            <div class="upload-loade_center-item--cen">
              <div class="upload-loade_center-item--cen-item type-item3"></div>
            </div>
            <div v-if="!load[2]" class="upload-loade_center-item--bot_load1">
              <img src="../assets/images/load.png" class="upload-loade_center-item--bot_ok1">
            </div>
            <div v-else class="upload-loade_center-item--bot">
              <img src="../assets/images/ok.svg" class="upload-loade_center-item--bot_ok1">
            </div>
          </div>
          <div class="upload-loade_center-item--top">定位嘴宽-嘴唇厚度</div>
          <div class="upload-loade_center-item">
            <div class="upload-loade_center-item--cen">
              <div class="upload-loade_center-item--cen-item type-item4"></div>
            </div>
            <div v-if="!load[3]" class="upload-loade_center-item--bot_load1">
              <img src="../assets/images/load.png" class="upload-loade_center-item--bot_ok1">
            </div>
            <div v-else class="upload-loade_center-item--bot">
              <img src="../assets/images/ok.svg" class="upload-loade_center-item--bot_ok1">
            </div>
          </div>
        </div>
        <div v-if="gif==3" class="upload-loade_center type1">
          <div class="upload-loade_center-item--top">量取下颌角度</div>
          <div class="upload-loade_center-item">
            <div class="upload-loade_center-item--cen">
              <div class="upload-loade_center-item--cen-item type-item1"></div>
            </div>
            <div v-if="!load[0]" class="upload-loade_center-item--bot_load1">
              <img src="../assets/images/load.png" class="upload-loade_center-item--bot_ok1">
            </div>
            <div v-else class="upload-loade_center-item--bot">
              <img src="../assets/images/ok.svg" class="upload-loade_center-item--bot_ok1">
            </div>
          </div>
          <div class="upload-loade_center-item--top">对比各部位数据</div>
          <div class="upload-loade_center-item">
            <div class="upload-loade_center-item--cen">
              <div class="upload-loade_center-item--cen-item type-item2"></div>
            </div>
            <div v-if="!load[1]" class="upload-loade_center-item--bot_load1">
              <img src="../assets/images/load.png" class="upload-loade_center-item--bot_ok1">
            </div>
            <div v-else class="upload-loade_center-item--bot">
              <img src="../assets/images/ok.svg" class="upload-loade_center-item--bot_ok1">
            </div>
          </div>
          <div class="upload-loade_center-item--top">匹配五行格局</div>
          <div class="upload-loade_center-item">
            <div class="upload-loade_center-item--cen">
              <div class="upload-loade_center-item--cen-item type-item3"></div>
            </div>
            <div v-if="!load[2]" class="upload-loade_center-item--bot_load1">
              <img src="../assets/images/load.png" class="upload-loade_center-item--bot_ok1">
            </div>
            <div v-else class="upload-loade_center-item--bot">
              <img src="../assets/images/ok.svg" class="upload-loade_center-item--bot_ok1">
            </div>
          </div>
        </div>
      </div>
      <div v-if="type==7" class="g-import">
        <img src="../assets/images/bigtrue.svg">
        <div class="upload-loade__overtext">报告已生成！</div>
        <div class="upload-loade-name">
          <span>输入姓名领取报告：</span>
          <input type="text" v-model="name" @change="">
        </div>
        <div class="upload-loade-shows">
          <div class="upload-loade__submit">9.9购买报告</div>
          <div class="upload-loade__submit" :class="{'noName':!name}" @click="skipRouter">查看报告</div>
        </div>
      </div>
    </div>
    <login v-if="loginState"/>
  </div>
</template>

<script>
  import {checkFace, uploadImg} from '@/assets/js/api'
  import login from '../components/login'

  export default {
    name: 'uploadImage',
    data() {
      return {
        bit: {img: ''},
        bit: {
          "id": 2978,
          "img": "http:\/\/47.104.244.226\/upload\/20190319\/201903195c908d2be7b99.png",
          "img_size": "89,157,533,533",
          "is_glass": 0,
          "sex": 2,
          "age": 27,
          "headpose": {"yaw_angle": 4.7571, "pitch_angle": 10.396841, "roll_angle": -1.4086682},
          "position": {
            "contour_chin": {"y": 595, "x": 367},
            "left_eye_upper_left_quarter": {"y": 308, "x": 260},
            "mouth_lower_lip_right_contour1": {"y": 493, "x": 397},
            "left_eye_bottom": {"y": 329, "x": 277},
            "mouth_lower_lip_right_contour2": {"y": 501, "x": 414},
            "contour_left7": {"y": 436, "x": 208},
            "contour_left6": {"y": 414, "x": 202},
            "contour_left5": {"y": 392, "x": 196},
            "contour_left4": {"y": 370, "x": 191},
            "contour_left3": {"y": 347, "x": 188},
            "contour_left2": {"y": 323, "x": 186},
            "contour_left1": {"y": 299, "x": 186},
            "left_eye_lower_left_quarter": {"y": 326, "x": 260},
            "contour_right1": {"y": 293, "x": 524},
            "contour_right3": {"y": 339, "x": 525},
            "contour_right2": {"y": 316, "x": 525},
            "contour_right5": {"y": 384, "x": 521},
            "contour_right4": {"y": 362, "x": 524},
            "contour_right7": {"y": 429, "x": 513},
            "left_eyebrow_left_corner": {"y": 281, "x": 214},
            "right_eye_right_corner": {"y": 319, "x": 471},
            "nose_bridge1": {"y": 314, "x": 360},
            "nose_bridge3": {"y": 384, "x": 361},
            "nose_bridge2": {"y": 349, "x": 360},
            "right_eyebrow_upper_left_corner": {"y": 273, "x": 392},
            "mouth_upper_lip_right_contour4": {"y": 488, "x": 396},
            "mouth_upper_lip_right_contour1": {"y": 475, "x": 377},
            "right_eye_left_corner": {"y": 327, "x": 403},
            "left_eyebrow_upper_right_corner": {"y": 273, "x": 322},
            "left_eyebrow_upper_middle": {"y": 255, "x": 265},
            "mouth_lower_lip_right_contour3": {"y": 517, "x": 393},
            "nose_left_contour3": {"y": 425, "x": 317},
            "mouth_lower_lip_bottom": {"y": 524, "x": 363},
            "mouth_upper_lip_right_contour2": {"y": 478, "x": 404},
            "left_eye_top": {"y": 304, "x": 278},
            "nose_left_contour1": {"y": 325, "x": 337},
            "mouth_upper_lip_bottom": {"y": 491, "x": 363},
            "mouth_upper_lip_left_contour2": {"y": 478, "x": 323},
            "mouth_upper_lip_top": {"y": 478, "x": 362},
            "mouth_upper_lip_left_contour1": {"y": 475, "x": 347},
            "mouth_upper_lip_left_contour4": {"y": 488, "x": 331},
            "right_eye_top": {"y": 305, "x": 438},
            "mouth_upper_lip_right_contour3": {"y": 482, "x": 421},
            "right_eye_bottom": {"y": 330, "x": 440},
            "right_eyebrow_lower_left_corner": {"y": 288, "x": 395},
            "mouth_left_corner": {"y": 481, "x": 299},
            "nose_middle_contour": {"y": 446, "x": 361},
            "right_eye_lower_right_quarter": {"y": 326, "x": 458},
            "right_eyebrow_lower_right_quarter": {"y": 275, "x": 479},
            "contour_right9": {"y": 472, "x": 500},
            "mouth_right_corner": {"y": 479, "x": 431},
            "right_eye_lower_left_quarter": {"y": 329, "x": 421},
            "right_eye_center": {"y": 316, "x": 438},
            "left_eye_upper_right_quarter": {"y": 311, "x": 299},
            "right_eyebrow_lower_left_quarter": {"y": 279, "x": 423},
            "left_eye_pupil": {"y": 314, "x": 279},
            "contour_right8": {"y": 451, "x": 507},
            "contour_left13": {"y": 551, "x": 279},
            "left_eyebrow_lower_right_quarter": {"y": 280, "x": 292},
            "left_eye_right_corner": {"y": 326, "x": 314},
            "left_eyebrow_lower_right_corner": {"y": 288, "x": 319},
            "mouth_upper_lip_left_contour3": {"y": 483, "x": 309},
            "left_eyebrow_lower_left_quarter": {"y": 275, "x": 239},
            "mouth_lower_lip_left_contour1": {"y": 493, "x": 330},
            "mouth_lower_lip_left_contour3": {"y": 517, "x": 334},
            "mouth_lower_lip_left_contour2": {"y": 501, "x": 315},
            "contour_left9": {"y": 478, "x": 224},
            "left_eye_lower_right_quarter": {"y": 328, "x": 296},
            "contour_right6": {"y": 407, "x": 518},
            "nose_tip": {"y": 420, "x": 361},
            "right_eyebrow_upper_middle": {"y": 255, "x": 451},
            "right_eyebrow_lower_middle": {"y": 274, "x": 452},
            "left_eye_center": {"y": 314, "x": 279},
            "right_eyebrow_upper_left_quarter": {"y": 260, "x": 419},
            "right_eyebrow_right_corner": {"y": 283, "x": 504},
            "right_eyebrow_upper_right_quarter": {"y": 260, "x": 482},
            "contour_left16": {"y": 592, "x": 339},
            "contour_left15": {"y": 582, "x": 316},
            "contour_left14": {"y": 568, "x": 296},
            "left_eyebrow_upper_right_quarter": {"y": 262, "x": 295},
            "contour_left12": {"y": 535, "x": 263},
            "contour_left11": {"y": 517, "x": 248},
            "contour_left10": {"y": 498, "x": 235},
            "left_eyebrow_lower_middle": {"y": 275, "x": 265},
            "left_eyebrow_upper_left_quarter": {"y": 258, "x": 236},
            "right_eye_upper_right_quarter": {"y": 309, "x": 457},
            "nose_right_contour4": {"y": 435, "x": 392},
            "nose_right_contour5": {"y": 439, "x": 377},
            "nose_left_contour4": {"y": 436, "x": 330},
            "nose_left_contour5": {"y": 440, "x": 345},
            "nose_left_contour2": {"y": 398, "x": 327},
            "nose_right_contour1": {"y": 324, "x": 383},
            "nose_right_contour2": {"y": 397, "x": 395},
            "nose_right_contour3": {"y": 425, "x": 405},
            "left_eye_left_corner": {"y": 319, "x": 246},
            "contour_right15": {"y": 579, "x": 416},
            "contour_right14": {"y": 564, "x": 434},
            "contour_right16": {"y": 590, "x": 394},
            "contour_right11": {"y": 512, "x": 479},
            "contour_right10": {"y": 492, "x": 490},
            "contour_right13": {"y": 547, "x": 450},
            "contour_right12": {"y": 530, "x": 465},
            "contour_left8": {"y": 457, "x": 215},
            "mouth_lower_lip_top": {"y": 498, "x": 362},
            "right_eye_upper_left_quarter": {"y": 311, "x": 418},
            "right_eye_pupil": {"y": 316, "x": 438}
          },
          "beautifyImg": "http:\/\/47.104.244.226.\/upload\/20190319\/jpg"
        },
        /*bit:{
          error:{
            "no_face":1,
            "face_num":1,
            "left_eye_close":1,
            "right_eye_close":1,
            "left_eye_occlusion":1,
            "right_eye_occlusion":1,
            "pitch_angle":10.396841,
            "roll_angle":-1.4086682,
            "yaw_angle":4.7571
          },
          "img":"http:\/\/47.104.244.226\/upload\/20190319\/201903195c9054c3ed5fc.png"
        },*/
        errMsg: {
          /*错误情况*/
          no_face: '未识别人脸',
          face_num: '请上传单人照片',
          left_eye_close: '左眼闭合',
          right_eye_close: '右眼闭合',
          left_eye_occlusion: '左眼遮挡',
          right_eye_occlusion: '右眼遮挡',
          yaw_angle: '摇头',
          pitch_angle: '抬头',
          roll_angle: '倾斜角度小于30'
        },
        lines: [], /*线连接*/
        angle: [], /*angle夹角*/
        circles: [], /*点坐标*/
        clearInputImage: true, /*上传图片清空(让他可以上传重复图片)*/
        loginState: false, /*是否登录*/
        linePlace: [/*上中下三挺*/
          {top: 0, text: '上庭'},
          {top: 0, text: '中庭'},
          {top: 0, text: '下庭'}
        ],
        placeBit: {
          /*上中下三挺显示*/
          showPlace1: false,//上庭全部展示
          showPlace2: false,//中庭全部展示
          showPlace3: false,//下庭全部展示
          allPlace: false//三庭全部展示
        },
        name: '', /*报告名称*/
        type: 1, /*1=照片未上传，2=照片上传,3=过渡动画(2到3的过渡动画)，4=动画开始,5=转圈动画,6=综合分析，定位五官，测量三挺动画，7=动画全部结束（出现输入框按钮）*/
        detection: false, /*检测结果是否人脸，是否可以进入type3（动画）*/
        gif: 1, /*type=6时，（.upload-loade__waiat）的动画*/
        load: [0, 0, 0, 0], /*(upload-loade_center-item--bot_ok1)图片是load还是ok*/
        code_201: 0
      }
    },
    created() {
      //this.arrangeCoordinate(this.bit)
      //this.faceChartPlce(['left_eyebrow_upper_middle', 'nose_middle_contour', 'contour_chin'])
      /*for(let i in this.bit.error){
        if(this.errMsg[i]){
          let _value=this.bit.error[i]
          this.bit.error[i]={};
          this.bit.error[i].value=_value
          this.bit.error[i].str=this.errMsg[i]
        }
      }*/
    },
    methods: {
      uploadImage(e) {/*图片上传*/
        let file = e.target.files[0];
        let param = new FormData(); //创建form对象
        param.append('files', file, file.name);//通过append向form对象添加数据
        this.clearInputImage = false;
        checkFace(param).then((data) => {
          this.clearInputImage = true;
          if (data.status_code == 200) {
            this.bit = data.data;
            this.type = 2;
            this.arrangeCoordinate(this.bit)
            this.faceChartPlce(['left_eyebrow_upper_middle', 'nose_middle_contour', 'contour_chin'])
          } else if (data.status_code == 201) {
            this.bit = data.data;
            for (let i in this.bit.error) {/*整理错误文本*/
              if (this.errMsg[i]) {
                let _value = this.bit.error[i]
                this.bit.error[i] = {};
                this.bit.error[i].value = _value
                this.bit.error[i].str = this.errMsg[i]
              }
            }
            this.type = 2;
          }
        })
      },
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
        let picBox = parseFloat(window.getComputedStyle(this.$refs.imgHeight).height||0)//获取ref为imgHeight的样式高度
        for (let i in data.position) {
          let x = data.position[i].x
          let y = data.position[i].y
          data.position[i].x = (x - zx) * (picBox / w)
          data.position[i].y = (y - zy) * (picBox / h)
        }
      },
      faceChartPlce(strArr) {/*整理3庭位置*/
        const data = this.bit.position;
        for (let i in data) {
          if (strArr[0].indexOf(i) != -1) {
            this.linePlace[0].top = data[i].y
          } else if (strArr[1].indexOf(i) != -1) {
            this.linePlace[1].top = data[i].y
          } else if (strArr[2].indexOf(i) != -1) {
            this.linePlace[2].top = data[i].y
          }
        }
      },
      faceChartCircle(arr, strArr) {/*点的归类*/
        const data = this.bit.position;
        for (let i in data) {
          if (strArr.indexOf(i) != -1) {
            arr.push(data[i])
          }
        }
      },
      faceChartLine(arr, strArr) {
        const data = this.bit.position;
        let lineArr = [];
        for (let i in data) {
          if (strArr.indexOf(i) != -1) {
            lineArr.push(data[i])
          }
        }
        arr.push(lineArr)
      },
      faceChartEarLeft(arr, strArr) {
        const data = this.bit.position;
        let lineArr = []
        let j = 0
        for (let i in data) {
          if (strArr.indexOf(i) != -1) {
            if (j == 0) {
              lineArr.push(data[i])
            } else {
              data[i].x = data[i].x - 50;
              data[i].y = data[i].y - 50;
              lineArr.push(data[i])
            }
            j++
          }
        }
        arr.push(lineArr)
      },
      faceChartEarRight(arr, strArr) {
        const data = this.bit.position;
        let lineArr = []
        let j = 0
        for (let i in data) {
          if (strArr.indexOf(i) != -1) {
            if (j == 0) {
              lineArr.push(data[i])
            } else {
              data[i].x = data[i].x + 50;
              data[i].y = data[i].y - 50;
              lineArr.push(data[i])
            }
            j++
          }
        }
        arr.push(lineArr)
      },
      animationGif1(i) {/*三庭动画(gif1动画)*/
        const showClear = (str, allFalse) => {
          for (let i in this.placeBit) {
            if (allFalse) {
              this.placeBit[i] = false
            }
            if (str == i) {
              this.placeBit[i] = true
            } else {
              this.placeBit[i] = false
            }
          }
        }
        if (i == 0) {
          showClear('showPlace1')
        } else if (i == 1) {
          showClear('showPlace2')
        } else if (i == 2) {
          showClear('showPlace3')
        } else if (i == 3) {
          showClear('allPlace')
        }
      },
      animationGif2(i) {/*定位五官动画(gif2动画)*/
        if (i == 0) {
          /*左眉*/
          this.faceChartCircle(this.circles, ['left_eyebrow_upper_middle', 'left_eyebrow_left_corner', 'left_eyebrow_upper_right_corner'])
          /*右眉*/
          this.faceChartCircle(this.circles, ['right_eyebrow_upper_middle', 'right_eyebrow_right_corner', 'right_eyebrow_upper_left_corner'])
        } else if (i == 1) {
          /*左眼*/
          this.faceChartCircle(this.circles, ['left_eye_top', 'left_eye_bottom', 'left_eye_right_corner', 'left_eye_left_corner'])
          /*右眼*/
          this.faceChartCircle(this.circles, ['right_eye_top', 'right_eye_bottom', 'right_eye_right_corner', 'right_eye_left_corner'])
        } else if (i == 2) {
          /*鼻子*/
          this.faceChartCircle(this.circles, ['nose_left_contour1', 'nose_right_contour1', 'nose_tip', 'nose_middle_contour', 'nose_left_contour3', 'nose_right_contour3'])
        } else if (i == 3) {
          /*嘴巴*/
          this.faceChartCircle(this.circles, ['mouth_right_corner', 'mouth_left_corner', 'mouth_lower_lip_left_contour3', 'mouth_lower_lip_bottom', 'mouth_lower_lip_right_contour3', 'mouth_upper_lip_left_contour1', 'mouth_upper_lip_right_contour1'])
        }
      },
      animationGif3(i) {/*定位综合(gif3动画)*/
        if (i == 0) {
          this.faceChartLine(this.angle, ['contour_chin', 'contour_right16'])
          this.faceChartLine(this.angle, ['contour_chin', 'contour_left16'])
          this.faceChartLine(this.angle, ['contour_chin', 'contour_right14'])
          this.faceChartLine(this.angle, ['contour_chin', 'contour_left14'])
        } else if (i == 1) {
          this.angle = []
          /*去除颚部夹角*/
          /*
          *点的延迟链接
          */
          setTimeout(() => {
            /*左眉*/
            this.faceChartCircle(this.circles, ['left_eyebrow_upper_middle', 'left_eyebrow_left_corner', 'left_eyebrow_upper_right_corner'])
            /*右眉*/
            this.faceChartCircle(this.circles, ['right_eyebrow_upper_middle', 'right_eyebrow_right_corner', 'right_eyebrow_upper_left_corner'])
          }, 100)
          setTimeout(() => {
            /*左眼*/
            this.faceChartCircle(this.circles, ['left_eye_top', 'left_eye_bottom', 'left_eye_right_corner', 'left_eye_left_corner'])
            /*右眼*/
            this.faceChartCircle(this.circles, ['right_eye_top', 'right_eye_bottom', 'right_eye_right_corner', 'right_eye_left_corner'])
          }, 200)
          setTimeout(() => {
            /*鼻子*/
            this.faceChartCircle(this.circles, ['nose_left_contour1', 'nose_right_contour1', 'nose_tip', 'nose_middle_contour', 'nose_left_contour3', 'nose_right_contour3'])
          }, 300)
          setTimeout(() => {
            /*嘴巴*/
            this.faceChartCircle(this.circles, ['mouth_right_corner', 'mouth_left_corner', 'mouth_lower_lip_left_contour3', 'mouth_lower_lip_bottom', 'mouth_lower_lip_right_contour3', 'mouth_upper_lip_left_contour1', 'mouth_upper_lip_right_contour1'])
          }, 400)
          /*
          *线的延迟链接
          */
          setTimeout(() => {
            /*眼睛链接*/
            this.faceChartLine(this.lines, ['left_eye_left_corner', 'left_eye_right_corner'])
            this.faceChartLine(this.lines, ['right_eye_right_corner', 'right_eye_left_corner'])
            this.faceChartLine(this.lines, ['left_eye_top', 'left_eye_bottom'])
            this.faceChartLine(this.lines, ['right_eye_top', 'right_eye_bottom'])
          }, 500)
          setTimeout(() => {
            /*左眉链接*/
            this.faceChartLine(this.lines, ['left_eyebrow_upper_middle', 'left_eyebrow_left_corner'])
            this.faceChartLine(this.lines, ['left_eyebrow_upper_middle', 'left_eyebrow_upper_right_corner'])
            this.faceChartLine(this.lines, ['left_eyebrow_left_corner', 'left_eyebrow_upper_right_corner'])
            /*右眉链接*/
            this.faceChartLine(this.lines, ['right_eyebrow_upper_middle', 'right_eyebrow_right_corner',])
            this.faceChartLine(this.lines, ['right_eyebrow_upper_middle', 'right_eyebrow_upper_left_corner'])
            this.faceChartLine(this.lines, ['right_eyebrow_right_corner', 'right_eyebrow_upper_left_corner'])
          }, 600)
          setTimeout(() => {
            /*鼻子链接*/
            this.faceChartLine(this.lines, ['left_eyebrow_upper_right_corner', 'right_eyebrow_upper_left_corner'])
            this.faceChartLine(this.lines, ['nose_left_contour1', 'nose_right_contour1'])
            this.faceChartLine(this.lines, ['nose_left_contour1', 'left_eyebrow_upper_right_corner'])
            this.faceChartLine(this.lines, ['nose_right_contour1', 'right_eyebrow_upper_left_corner'])
            this.faceChartLine(this.lines, ['nose_left_contour1', 'nose_left_contour3'])
            this.faceChartLine(this.lines, ['nose_right_contour1', 'nose_right_contour3'])
            this.faceChartLine(this.lines, ['nose_tip', 'nose_right_contour3'])
            this.faceChartLine(this.lines, ['nose_tip', 'nose_left_contour3'])
          }, 700)
          setTimeout(() => {
            /*面部链接*/
            this.faceChartLine(this.lines, ['left_eye_left_corner', 'left_eyebrow_left_corner'])
            this.faceChartLine(this.lines, ['right_eye_right_corner', 'right_eyebrow_right_corner'])
            this.faceChartLine(this.lines, ['left_eye_left_corner', 'mouth_left_corner'])
            this.faceChartLine(this.lines, ['right_eye_right_corner', 'mouth_right_corner'])
            this.faceChartLine(this.lines, ['mouth_lower_lip_bottom', 'mouth_right_corner'])
            this.faceChartLine(this.lines, ['mouth_lower_lip_bottom', 'mouth_left_corner'])
            this.faceChartLine(this.lines, ['mouth_right_corner', 'nose_right_contour3'])
            this.faceChartLine(this.lines, ['mouth_left_corner', 'nose_left_contour3'])
          }, 800)
        } else {

        }
      },
      loadFun() {/*(upload-loade_center-item--bot_ok1)图片是load还是ok，方法*/
        let clearLoadFun = (i) => {/*清空load状态*/
          if (this.load.length == (i + 1) && this.gif < 3) {
            setTimeout(() => {
              this.load.forEach((v, i) => {
                this.load.splice(i, 1, 0)
              })
            }, 3000)
          }
        }
        let setFun = (i) => {/*改变load状态*/
          let time = (i + 1) * 2000 + 2000
          setTimeout(() => {
            this.load.splice(i, 1, 1)
            clearLoadFun(i)
            if (this.gif == 1) {
              this.animationGif1(i)
            } else if (this.gif == 2) {
              this.animationGif2(i)
            } else if (this.gif == 3) {
              this.animationGif3(i)
            }
          }, time)
        }
        this.load.forEach((v, i) => {
          if (this.gif == 2) {
            this.placeBit.allPlace = false
            /*去除三庭*/
          } else if (this.gif == 3) {
            this.circles = []
            /*去除定位点*/
          }
          setFun(i)
        })
      },
      gifFun() {/*type=6时，（.upload-loade__waiat）的动画，方法*/
        this.loadFun()
        setTimeout(() => {
          this.gif = 2;
          this.loadFun()
        }, 13000)
        setTimeout(() => {
          this.gif = 3;
          this.loadFun()
        }, 26000)
        setTimeout(() => {/*结束动画*/
          this.type = 7
        }, 36000)
      },
      sub() {/*点击提交（动画开始）*/
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
      },
      skipRouter() {/*跳转router*/
        if (this.name) {
          //ajax
          this.$router.push({name: 'report'})
        }
      }
    },
    components: {
      login
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
      input
        width 100%
        height 100%
        position absolute
        top 0
        left 0
        right 0
        bottom 0
        opacity 0
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
      input
        width 100%
        height 100%
        position absolute
        top 0
        left 0
        right 0
        bottom 0
        opacity 0
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
          overflow auto
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
      &.type1, &.type2, &.type3
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

  svg.loadimg
    position absolute
    width 100%
    top: 1.86666667rem;
    left: 2.66666667rem;
    width: 4.66666667rem;
    height: 4.66666667rem;
    line, circle
      animation lineOpacity 1s

  .m-linePlace
    width: 6.4rem;
    height: 4.75rem;
    position absolute
    top: 1.8rem;
    left: 2.66666667rem;

  .face-result-line1
    width: 215px
    height: 0.026667rem;
    border-bottom: 0.026667rem solid #fff;
    position: absolute;
    left 25px
    top 0
    animation: widthshow3 1.5s;

  .face-result-text
    font-size 12px
    color #fff
    transform: translate(0, -50%)
    right 0
    opacity 0
    position absolute
    animation: fadein 1s 0.5s forwards;

  .g-import
    img
      width: 1.21333333rem;
      height: 0.76rem;
      margin 0 auto
      display block
    .upload-loade-name
      text-align center
      span
        color: #fff;
        font-size 14px
      input
        display block
        margin 0 auto
        width: 200px;
        height: 40px;
        color: #fff;
        border: 0;
        border-bottom: 1px solid #fff;
        background: transparent
        text-align center
        font-size 15px
    .upload-loade__overtext
      text-align: center;
      margin: 0 0.66666667rem;
      color: #fff;
      font-size: 0.64rem;
      height: 0.76rem;
    .upload-loade-shows
      width: 8.8rem;
      margin: 0 auto;
      display: flex;
      justify-content: center;
      .upload-loade__submit
        width: 4rem;
        height: 1.17333333rem;
        font-size: 0.42666667rem;
        text-align: center;
        color: #1B1B1B;
        line-height: 1.17333333rem;
        background: #fff;
        margin: 1.2rem auto 0;
        border: 0.02666667rem solid #fff;
        &.noName
          color #bf9494
</style>
