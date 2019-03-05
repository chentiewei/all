<template>
<div class="reportlist">
  <div class="g-title">我添加的报告</div>
  <div class="g-face-list">
    <div class="m-list">
      <div>
        <img class="s-img" src="https://faceplus.qqwechat.com/2019-02-27_cbff441075c43a15348d0362252da1fd.png?x-oss-process=image/crop,x_87,y_156,w_534,h_534" >
        <div class="s-nub">面相报告<div class="nub-hot"></div></div>
        <img class="s-icon2" src="../assets/images/deleteitem.png" v-show="deleting" @click="outing">
        <img class="s-icon" src="../assets/images/1.svg"  v-show="!deleting">
      </div>
    </div>
  </div>
  <div class="g-report-click" @click="deleting=!deleting">
    <div class="report-competele" v-if="deleting">
      <div>完成</div>
    </div>
    <div class="report-delete" v-else>
      <img src="../assets/images/delete.png" alt="">
    </div>
  </div>
  <div v-transfer-dom>
    <confirm v-model="show"
             title="删除报告后不可恢复"
             @on-cancel="onCancel"
             @on-confirm="onConfirm">
      <p style="text-align:center;">确定删除面相报告吗？</p>
    </confirm>
  </div>
</div>
</template>

<script>
  import { Confirm,TransferDomDirective as TransferDom } from 'vux'
  export default {
    name: "reportlist",
    data(){
      return {
        deleting:false,
        show: false
      }
    },
    methods:{
      onCancel(){
        console.log('取消')
      },
      onConfirm(){
        console.log('确认')
      },
      outing(){
        this.show=!this.show
      }
    },
    components: {
      Confirm
    },
    directives: {
      TransferDom
    }
  }
</script>

<style scoped lang="stylus">
.reportlist
  background: #ECECEC;
  height: 100vh;
  overflow-y: scroll;
  overflow-x: hidden;
.g-title
  font-size: 0.8rem;
  color: #4A4A4A;
  line-height: 1.12rem;
  margin: 0.4rem 0.42666667rem 0.4rem 0;
  padding-left: 0.42666667rem;
  text-align: left;
  animation: showtitleanima 2s;
.g-face-list
  margin-bottom 70px
  .m-list
    padding: 0;
    background: none;
    padding-bottom: 0.13333333rem;
    &>div
      width: 9.06666667rem;
      height: 1.57333333rem;
      padding: 0.42666667rem 0.52rem 0.4rem 0.37333333rem;
      box-sizing border-box
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
        margin: 0 0.50666667rem;
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
      .s-img
        width: 0.74666667rem;
        height: 0.74666667rem;
        border-radius: 100%;
        filter: blur(1px);
      .s-icon
        width: 0.14666667rem;
        height: 0.29333333rem;
        margin-left: 0.29333333rem;
      .s-icon2
        width: 0.53333333rem;
        height: 0.53333333rem;
.g-report-click
  .report-delete,.report-competele
    width: 1.46666667rem;
    height: 1.46666667rem;
    border-radius: 100%;
    background: #1B1B1B;
    margin: 0 auto
    position fixed
    right 10px
    bottom 10px
    vertical-align: middle
    display flex
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    color #fff
    font-size 15px
    img
      width: 0.66666667rem;
      height: 0.66666667rem;
</style>
