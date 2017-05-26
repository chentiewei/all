<template>
  <div class="usercenter">
   <div class="usercenter_header"></div>
    <div class="usercenter_body">
      <div class="user_icon">
        <div>
          <i></i>
          <p>夺宝记录</p>
        </div>
        <div>
          <i></i>
          <p>中奖名单</p>
        </div>
        <div>
          <i></i>
          <p>我的晒单</p>
        </div>
        <div>
          <i></i>
          <p>充值记录</p>
        </div>
      </div>
      <div class="user_nav">
        <div>开奖规则</div>
        <div>常见问题</div>
        <div>设置</div>
        <div>公众号</div>
        <div>客服</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'usercenter',
    data(){
      return{

      }
    },
    methods:{},
    computed: {

    },
    components: {}
  }
</script>
<style>
  .usercenter{
    min-height:calc( 100% - 45px );
    background: #efeff4;
  }
  .usercenter_header{
      height:3.75rem;
    background:#ed702d;
  }
  .user_icon{
    height:4.4rem;
    padding:15px 31px 10px;
    display: flex;
    background:#fff;
  }
  .user_icon div{
    flex: 1;
    text-align: center;
  }
  .user_icon div i{
    display: inline-block;
    background:#ed702d;
    width:1.8rem;
    height:1.8rem;
  }
  .user_icon div p{
    margin-top:0.65rem;
    font-size:0.7rem;
    color:#333;
  }
  .user_nav{
    margin-top:10px;
    font-size:0.75rem;
  }
  .user_nav div{
    height:2.5rem;
    line-height:2.5rem;
    text-align:center;
    background:#fff;
    border-bottom:1px solid #d5d5d5;
  }
</style>
