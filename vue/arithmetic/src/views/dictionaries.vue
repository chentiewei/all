<template>
  <div class="dictionaries">
    <div class="g-dictionaries-title">面相报告</div>
    <div class="g-add-report"  @click="showDiaContent">
      <div class="m-add-pic">
        <img src="../assets/images/reportadd.svg" alt="">
      </div>
      <div class="m-add-text">添加新的面相报告 </div>
    </div>
    <div class="g-face-list">
      <router-link :to="{name:'report',query:{id:bit.id}}" tag="div" class="m-list">
        <div>
          <div class="s-name">我的面相报告</div>
          <div class="s-nub"></div>
          <img src="../assets/images/1.svg" class="s-icon">
        </div>
      </router-link>
      <router-link :to="{name:'reportlist'}" tag="div" class="m-list">
        <div>
          <div class="s-name">我添加的报告</div>
          <div class="s-nub"><span>1</span>份</div>
          <img src="../assets/images/1.svg" class="s-icon">
        </div>
      </router-link>
      <router-link :to="{name:'single',query:{id:bit.id}}" tag="div" class="m-list">
        <div>
          <div class="s-name">事业运详解</div>
          <div class="s-nub">5469人已获取<div class="nub-hot"></div></div>
          <img src="../assets/images/1.svg" class="s-icon">
        </div>
      </router-link>
      <router-link :to="{name:'emotion',query:{id:bit.id}}" tag="div" class="m-list">
        <div>
          <div class="s-name">情感详解</div>
          <div class="s-nub">5469人已获取<div class="nub-hot"></div></div>
          <img src="../assets/images/1.svg" class="s-icon">
        </div>
      </router-link>
    </div>
    <diaps :showdia="showdia" @showDiaContent="showDiaContent"/>
  </div>
</template>

<script>
  import { firstInfo } from '@/assets/js/api'
  import diaps from '../components/diaPs'
  export default {
    name: "dictionaries",
    data(){
      return {
        showdia: false,//提交图片弹出框
        bit:{}
      }
    },
    created(){
      this.firstIdFun()
    },
    methods: {
      showDiaContent() {
        this.showdia = !this.showdia;
      },
      firstIdFun(){
        firstInfo().then((data)=>{
          if(data.status_code==200){
            this.bit=data.data
          }
        })
      }
    },
    components: {
      diaps
    }
  }
</script>

<style scoped lang="stylus">
.dictionaries
  background: #ECECEC;
  height: 100vh;
  overflow-y: scroll;
  overflow-x: hidden;
  .g-dictionaries-title
    height: 1.12rem;
    font-size: 0.8rem;
    text-align: left;
    color: #4A4A4A;
    padding-left: 0.42666667rem;
    margin-top: 0.26666667rem;
    animation showtitleanima 1s linear
  .g-add-report
    width: 4rem;
    height: 1.86666667rem;
    position: relative;
    left: 5.73333333rem;
    font-size: 0.42666667rem;
    color: #4A4A4A;
    .m-add-pic
      width: 1.06666667rem;
      height: 1.06666667rem;
      background: #ffffff;
      border-radius: 100%;
      margin: 0 auto 0.13333333rem;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      -ms-flex-pack: center;
      justify-content: center;
    .m-add-text
      text-align center
  .g-face-list
    .m-list
      padding: 0;
      background: none;
      padding-bottom: 0.13333333rem;
      &>div
        width: 9.06666667rem;
        height: 1.57333333rem;
        background: #ffffff;
        box-shadow: 0px 0.05333333rem 0.26666667rem 0px rgba(0, 0, 0, 0.12);
        border-radius: 0.08rem;
        margin: 0 auto;
        margin-top: 0.18666667rem;
        display: flex;
        align-items: center;
        .s-nub
          flex: 1;
          font-size: 0.34666667rem;
          color: #4A4A4A;
          text-align: right;
          position: relative;
          span
            color: #FF9500;
          div
            position: absolute;
            right: -0.2rem;
            top: 0.13333333rem;
            width: 0.16rem;
            height: 0.16rem;
            background: #FF3B30;
            border-radius: 100%;
            top 6px
        .s-name
          font-size: 0.37333333rem;
          font-family: PingFangSC-Regular;
          color: #4a4a4a;
          margin-left: 0.37333333rem;
        .s-icon
          width: 0.14666667rem;
          height: 0.29333333rem;
          margin-right: 0.52rem;
          margin-left: 0.29333333rem;
</style>
