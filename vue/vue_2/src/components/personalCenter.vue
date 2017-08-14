<template>
    <div class="g-personal">
        <div class="personal_msg">
            <span>金价好</span>
            <div class="personal_img">
                <img src="../assets/img/timg.jpg" alt="">
            </div>
        </div>
        <div class="personal_bottom">
            <div>
                <p>我的余额</p>
                <div>6125000</div>
            </div>
            <div>
                <p>邀请码</p>
                <div class="c">123456</div>
            </div>
        </div>
        <div class="personal_nav">
            <router-link :to="{name:'editUser'}">
                编辑资料
                <i class="icon-advance"></i>
            </router-link>
            <router-link :to="{name:'myOreder'}">
                我的订单
                <i class="icon-advance"></i>
            </router-link>
            <router-link :to="{name:'userDraw'}" class="border0">
                去提现
                <i class="icon-advance"></i>
            </router-link>
        </div>
        <div class="personal_down">
            <mt-button type="danger" size="large">退出登陆</mt-button>
        </div>
        <div class="pos_b"></div>
    </div>
</template>

<script>
    export default {
        name: 'hello'
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .personal_msg{
        height:215px;
        background:black;
        text-align:center;
        padding-top:10px;
    }
    .personal_msg span{
        font-size:20px;
        color:#ffffff;
        letter-spacing:2.86px;
    }
    .personal_img{
        width:129px;
        height:94px;
        margin:67px auto 0;
    }
    .personal_img img{
        border-radius:50% 50%;
        width:95px;
        height:95px;
    }
    .personal_bottom{
        text-align:center;
        width:83.7%;
        height:108px;
        margin:-65px auto 0;
        background:#fff;
        border-radius:10px;
    }
    .personal_bottom>div{
        float:left;
        width:50%;
        height:108px;
    }
    .personal_bottom>div>p{
        height:21px;
        line-height:21px;
        font-size:15px;
        color:#666666;
        letter-spacing:-0.36px;
        margin-top:25px;
    }
    .personal_bottom>div>div{
        margin-top:13px;
        height: 33px;
        line-height: 33px;
        font-size:24px;
        color:#ff9a3e;
        letter-spacing:-0.58px;
    }
    .personal_bottom>div>div.c{
        color:#4095ff;
    }
    .personal_nav {
        background: #fff;
        padding: 0 15px;
        margin-top:22px;
    }
    .personal_nav a{
        display: block;
        border-bottom:1px solid #e6e6e6;
        height:45px;
        font-size:14px;
        color:#333333;
        background:#ffffff;
        width:100%;
        line-height:45px;
    }
    .personal_nav a i{
        font-size: 13px;
        float:right;
        line-height: 45px;
    }
    .personal_down{
        border-radius:5px;
        width:297px;
        height:44px;
        margin:105px auto 60px;
    }
</style>
