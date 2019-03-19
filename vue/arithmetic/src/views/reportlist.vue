<template>
<div class="reportlist">
  <div class="g-title">我添加的报告</div>
  <div v-if="bit.length!=0">
    <div class="g-face-list">
      <div :to="{name:'report'}" class="m-list" @click="outing(v.id)" v-for="(v,i) in bit" :key="i">
        <div>
          <img v-if="v.img" class="s-img" :src="v.img" >
          <img v-else class="s-img" src="https://faceplus.qqwechat.com/2019-02-27_cbff441075c43a15348d0362252da1fd.png?x-oss-process=image/crop,x_87,y_156,w_534,h_534" >
          <div class="s-nub">{{v.name}}<div class="nub-hot"></div></div>
          <img class="s-icon2" src="../assets/images/deleteitem.png" v-show="deleting">
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
  <div v-else>
    <div class="g-report">
      <p>目前暂无报告</p>
      <div class="m-add-report"  @click="showDiaContent">
        <div class="s-add-pic">
          <img src="../assets/images/reportadd.svg" alt="">
        </div>
        <div class="s-add-text">添加新的面相报告 </div>
      </div>
    </div>
    <diaps :showdia="showdia" @showDiaContent="showDiaContent"/>
  </div>
</div>
</template>

<script>
  import {reportList,deleteReport} from '@/assets/js/api'
  import { Confirm,TransferDomDirective as TransferDom } from 'vux'
  import diaps from '../components/diaPs'
  export default {
    name: "reportlist",
    data(){
      return {
        deleting:false,//删除显示
        show: false,//删除报告确认框
        showdia: false,//添加报告弹窗框
        bit:[],//基础数据
        deletId:0//删除id
      }
    },
    created(){
      this.bitFun()
    },
    methods:{
      onCancel(){
        console.log('取消')
      },
      onConfirm(){
        deleteReport({id:this.deletId}).then((data)=>{
          if(data.status_code==200){
            this.$store.commit('updateToastStatus', {state: true,text:'删除成功'})
          }
        })
      },
      outing(id){
        if(this.deleting){
          this.show=!this.show
          this.deletId=id
        }else{
          this.$router.push({ path: 'report',query:{id:id}})
        }
      },
      showDiaContent() {
        this.showdia = !this.showdia;
      },
      bitFun(){
        reportList().then((data)=>{
          if(data.status_code==200){
            this.bit=data.data
          }
        })
      }
    },
    components: {
      Confirm,
      diaps
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
.g-report
  p
    font-size: 16px;
    line-height: 2.66666667rem;
    text-align: center;
    color: #888;
    margin-bottom: 1.33333333rem;
    margin-top:60px;
  .m-add-report
    width: 4rem;
    height: 1.86666667rem;
    font-size: 0.42666667rem;
    color: #4A4A4A;
    margin 0 auto
    .s-add-pic
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
    .s-add-text
      text-align center
</style>
