<template>
  <div id="details">
    <div>
      <div class='details_img'>
        <img :src="img" alt="">
      </div>
      <div class="details_common">
        <span>第10214期 iphone7 128g 随机颜色 银/粉/黑/金/磨砂/玫瑰金</span>
        <div>
          <span class="details_go"></span>
          <span class="details_go2"></span>
        </div>
        <p>
          <span class="details_litle">剩余 2562</span>
          <span>总需 8888</span>
        </p>
      </div>
      <div class="details_option">
        <a>图文详情</a>
        <a>晚期揭晓</a>
        <a>晒单分享</a>
        <a>参与记录</a>
      </div>
      <div class="details_button">立即夺宝</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'details',
    data(){
      return{
        img:'',
      }
    },
    methods:{
    },
    created() {
        const me=this;
      this.$http.get('http://localhost:8080/static/data.json')
        .then(function (response) {
          me.img=response.data.seller.avatar;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    components: {

    }
  }
</script>
<style>
  .details_img{
    text-align: center;
  }
  .details_img img{
    width:9.375rem;
  }
  .details_common{
    margin-top:10px;
    margin-bottom:8px;
  }
  .details_common>span{
    display: inline-block;
    font-size:0.7rem;
    padding:0 12px;
  }
  .details_common>div{
    width: 17.5rem;
    margin:20px auto 0;
  }
  .details_go,.details_go2{
    display: block;
    width: 17.5rem;
    height:7px;
    border-radius: 5px;
    background: #e2e2e2;
  }
  .details_go2{
    width:10rem;
    background: #ed702d;
    position: relative;
    top:-7px;
  }
  .details_common>p{
    width: 17.5rem;
    margin:7px auto 0;
    font-size:10px;
  }
  .details_common>p>span{
    float:left;
  }
  .details_common>p>span.details_litle{
    float:right;
  }
  .details_common>p:after{
    content: '';
    height: 0;
    clear: both;
    display: block;
  }
  .details_option{
    border-top:1px solid #d5d5d5;
  }
  .details_option a{
    display:block;
    height:2.45rem;
    line-height: 2.45rem;
    border-bottom:1px solid #d5d5d5;
    font-size: 15px;
    color:#333;
  }
  .details_button{
    position: fixed;
    bottom:0;
    width:100%;
    height:2.2rem;
    line-height: 2.2rem;
    text-align:center;
    color:#fff;
    background:#ed702d;
  }
</style>
