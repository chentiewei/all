<template>
  <div class="mail_show">
    <div class="survey">
      <div class="after">
        <div>
          <p>查看邮件</p>
          <div class="mail_btn">
            <el-button type="success" size="small" title="返回" @click="back"><i class="iconfont icon-undo"></i></el-button>
            <el-button type="success" size="small" title="删除邮件" icon="delete"></el-button>
            <el-button type="success" size="small" title="标为重要"><i class="iconfont icon-collection_fill"></i></el-button>
            <el-button-group>
              <el-button type="success" size="small" title="上一页" icon="arrow-left"></el-button>
              <el-button type="success" size="small" title="下一页" icon="arrow-right"></el-button>
            </el-button-group>
          </div>
        </div>
      </div>
      <div>
        <div class="mail_title">
          <div>主题：<b>幼儿园亲子班（园中园）项目方案</b></div>
          <div>发件人：  <b>i@zi-han.net</b></div>
        </div>
        <div class="mail_text">
          <p>尊敬的幼儿园园长朋友：</p>
          <div>
            贝贝聪教育，因您而精彩！由于婴幼教育一体化更符合婴幼儿成长需求，是全球早教专家、心理学家普遍推崇的一种办园模式。在美国、日本、英国、意大利、新加坡等国家及我国香港、台湾等地区，幼儿园普遍开设了亲子班，美国幼儿园开亲子班的比率为87%，意大利比率为83%。香港、台湾地区分别为74%、76%。2003年3月4日，国务院办公厅转发了教育部等10部门（单位）《关于幼儿教育改革与发展的指导意见》，强调发展0－6岁婴幼儿教育。在《幼儿园教育指导纲要（试行）》中已明确指出幼儿园教育要与0-3岁教育做好衔接。北京、上海等地要求在2013年，65%的公立一级幼儿园开设亲子班或园中园。
          </div>
        </div>
        <div class="mail_ending">
          贝贝聪教育科技发展有限公司
        </div>
      </div>
      <div class="adjunct">
        <p>
          <span><i class="iconfont icon-accessory"></i> 2 个附件 - </span>
          <a href="mail_detail.html#">下载全部</a>
        </p>
        <div>
          <div>
            <p>
              <img src="../../assets/logo.png" alt="">
            </p>
            <span>Italy street.jpg</span>
          </div>
        </div>
        <div>
          <div>
            <p>
              <img src="../../assets/logo.png" alt="">
            </p>
            <span>Italy street.jpg</span>
          </div>
        </div>
        <div>
          <div>
            <p>
              <img src="../../assets/logo.png" alt="">
            </p>
            <span>Italy street.jpg</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'mail_show',
    methods: {
      back () {
        this.$router.go(-1)
      }
    }
  }
</script>


<style scoped>
  .survey>div:nth-child(1){
    width:100%;
    padding:10px;
    border-bottom: 1px solid #e7eaec;
  }
  .survey,.tag{
    float:left;
  }
  .survey{
    width:100%;
    height:100%;
    background: #fff;
    border: 1px solid #e7eaec;
  }
  .search_input{
    margin-left:200px;
  }
  .survey p{
    height:100%;
    line-height: 36px;
    color:#676a6c;
    font-size: 24px;
    float: left;
  }
  .search_input{
    width:200px;
    display: inline-block;
  }
  .mail_btn{
    float:right;
    margin-top:4px;
  }
  .mail_btn button{
    margin:0;
  }
  .mail_btn i{
    font-size: 12px;
  }
  .table-mail{
    width:100%;
    font-size: 13px;
    color: #676a6c;
  }
  .table-mail a{
    color: #676a6c;
    display: inline-block;
    width:100%;
  }
  .table-mail .check-mail {
    padding-left: 20px;
    width:50px;
  }
  .table-mail tr{
    border-bottom: 1px solid #e7eaec;
    background-color: #f9f8f8;
  }
  .table-mail tr td{
    padding:12px;
  }
  .table-mail tr.unread{
    font-weight: 600;
    background-color: #fff;
  }
  .mail_tag{
    text-align: right;
  }
  .mail_date{
    text-align: right;
  }
  .mail_title{
    margin-top:10px;
    color:#676a6c;
  }
  .mail_title div{
    font-weight: 400;
    font-size: 16px;
    padding:0 10px;
  }
  .mail_title div b{
    margin-top: 5px;
    display: inline-block;
  }
  .mail_title div:nth-child(2){
    font-size: 12px;
    margin-top:5px;
  }
  .mail_text{
    padding:0 10px;
    color:#676a6c;
    margin-top:10px;
    border-top: 1px solid #e7eaec;
  }
  .mail_text p{
    font-size: 14px;
    font-weight: 600;
    float: none;
  }
  .mail_text div{
    font-size: 13px;
    line-height: 1.45;
  }
  .mail_ending{
    text-align: right;
    margin-top:10px;
    font-size: 13px;
    padding:10px;
  }
  .adjunct{
    padding:10px;
    border-top: 1px solid #e7eaec;
  }
  .adjunct:after{
    content: '';
    display: block;
    clear: both;
  }
  .adjunct p{
    float: none;
    font-size: 12px;
  }
  .adjunct p a{
    color:#337ab7
  }
  .adjunct>div{
    float:left;
    width:200px;
    height:140px;
    border: 1px solid #e7eaec;
    margin-right:20px;
  }
  .adjunct div p{
    width:100%;
    height:100px;
    overflow: hidden;
  }
  .adjunct div p img{
    width:198px;
  }
  .adjunct div span{
    display: block;
    height:38px;
    padding: 10px;
    background-color: #f8f8f8;
    border-top: 1px solid #e7eaec;
    color: #337ab7;
    font-size: 12px;
  }
</style>
