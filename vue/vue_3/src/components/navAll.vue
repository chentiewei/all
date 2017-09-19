<template>
    <div class="navAll">
        <div class="lf_nav">
            <div class="top_head">
                <el-dropdown trigger="click" divided="true">
                    <span class="el-dropdown-link">
                        <img src="../assets/logo.png" alt="">
                        <p>{{username}}</p>
                        {{diction}}<i class="el-icon-caret-bottom el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>修改头像</el-dropdown-item>
                        <el-dropdown-item>个人资料</el-dropdown-item>
                        <el-dropdown-item>安全退出</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>

            <el-menu default-active="1-3" theme="dark" class="nav" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
                <el-submenu index="1">
                    <template slot="title">
                        <i class="el-icon-message"></i>
                        <span slot="title">业务审核</span>
                    </template>
                    <el-menu-item-group>
                        <span slot="title">业务状态</span>
                        <el-menu-item index="1-1">业务申请</el-menu-item>
                        <el-menu-item index="1-2">业务通过</el-menu-item>
                        <el-menu-item index="1-3">小黑屋</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                <el-menu-item index="2">
                    <i class="el-icon-setting"></i>
                    <span slot="title">统计图表</span>
                </el-menu-item>
                <el-menu-item index="3">
                    <i class="el-icon-setting"></i>
                    <span slot="title">信箱</span>
                </el-menu-item>
            </el-menu>
        </div>
        <div class="top_nav">
            <div>
                <div class="top_button">
                    <el-button type="primary">
                        <i class="iconfont icon-other "></i>
                    </el-button>
                </div>
                <div class="breadcrumb">
                    <el-breadcrumb separator="/">
                        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                        <el-breadcrumb-item>活动管理</el-breadcrumb-item>
                        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
                        <el-breadcrumb-item>活动详情</el-breadcrumb-item>
                    </el-breadcrumb>
                </div>
            </div>
            <div>
                <span>
                    <i class="iconfont icon-mail_fill color_999c9e"></i>
                    <b>1</b>
                </span>
                <span>
                     <i class="iconfont icon-remind_fill color_999c9e"></i>
                    <b>1</b>
                </span>
                <span>
                     <i class="iconfont icon-barrage_fill color_999c9e"></i> 主题
                </span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
      name: 'navAll',
      data () {
        return {
          isCollapse: false,
          username: 'bestAll',
          diction: '超级管理员',
          active: true
        }
      },
      methods: {
        handleOpen (key, keyPath) {
          console.log(key, keyPath)
        },
        handleClose (key, keyPath) {
          console.log(key, keyPath)
        },
        handleSelect (key, keyPath) {
          console.log(key, keyPath)
        },
        labelgo () {
          this.active = !this.active
          console.log(this.active)
        }
      }
    }
</script>


<style scoped>
    .color_999c9e{
        color:#999c9e;
        font-size: 25px;
        vertical-align: middle;
    }
    .top_nav{
        position: fixed;
        top:0;
        left:200px;
        width:calc( 100% - 200px);
        height:60px;
        background: #f3f3f4;
    }
    .top_nav>div:nth-child(1){
        float:left;
    }
    .lf_nav{
        height:100%;
    }
    .top_button,.breadcrumb{
        line-height: 60px;
        float: left;
    }
    .breadcrumb{
        margin-top:21px;
        margin-left:20px;
    }
    .top_button{
        width:50px;
        height:50px;
        margin-left:10px;
    }
    .top_button button{
        padding:4px
    }
    .top_button i{
        font-size: 30px;
    }
    .top_nav>div:nth-child(2){
        float:right;
        height:100%;
        margin-right:20px;
    }
    .top_nav>div:nth-child(2) span{
        display: inline-block;
        padding:0 10px;
        height:100%;
        line-height: 60px;
        font-size: 14px;
        text-align: center;
        color:#999c9e;
        position: relative;
    }
    .top_nav>div:nth-child(2) span i{
        font-size: 20px;
    }
    .top_nav>div:nth-child(2) span b{
        position: absolute;
        top:0;
        right:0;
        padding:1px 5px;
        height:14px;
        line-height: 12px;
        color:#fff;
        font-size:12px;
        border-radius: 2px;
        background: #f8ac59;
        top:12px;
        right:0;
    }
    .top_head{
        width:200px;
        height:150px;
        background-color: #324157;
        text-align: center;
        color:#FFF;
        cursor:pointer;
        background: url(../assets/header-profile.png) no-repeat center;
    }
    .top_head img{
        width:70px;
        height:70px;
        display: block;
        border-radius: 50%;
        margin-top:20px;
    }
    .top_head span{
        color: #8095a8;
        display: block;
    }
    .top_head p{
        color:#FFF;
        text-align: left;
        margin:5px 0;
    }
    .el-dropdown-menu{
        padding:0;
    }
    .el-dropdown-menu__item{
        font-size: 12px;
        padding:3px 20px;
    }
    .el-dropdown-menu__item:last-child{
        border-top:1px solid #EEE;
    }
    .el-menu--collapse{
        height:calc(100% - 150px);
    }
    .el-menu--collapse{
        border-radius: 0;
    }
    .el-menu--horizontal.el-menu--dark .el-submenu .el-menu-item.is-active, .el-menu-item.is-active{
        color:#Fff;
    }
    .nav:not(.el-menu--collapse) {
        border-radius: 0;
        width: 200px;
        min-height: calc(100% - 150px);
    }
</style>