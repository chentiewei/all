<template>
    <div class="navAll">
        <div class="lf_nav">
            <div class="top_head">
                <img src="../assets/logo.png" alt="">
                <p>{{username}}</p>
                <el-dropdown trigger="click" divided="true">
                    <span class="el-dropdown-link">
                        {{diction}}<i class="el-icon-caret-bottom el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>修改头像</el-dropdown-item>
                        <el-dropdown-item>个人资料</el-dropdown-item>
                        <el-dropdown-item>安全退出</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
            <el-menu default-active="/defau" theme="dark" class="nav" @open="handleOpen" @close="handleClose" @select="handleSelect" :collapse="isCollapse" router>
                <el-submenu index="/apply">
                    <template slot="title">
                        <i class="iconfont icon-tasklist_fill"></i>
                        <span slot="title">业务审核</span>
                    </template>
                    <el-menu-item-group>
                        <span slot="title">业务状态</span>
                        <el-menu-item index="/apply"> 业务申请</el-menu-item>
                        <el-menu-item index="/approve">业务通过</el-menu-item>
                        <el-menu-item index="/dark">小黑屋</el-menu-item>
                        <el-menu-item index="/ticket">工单</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                <el-menu-item index="/I2">
                    <i class="iconfont icon-dynamic_fill"></i>
                    <span slot="title">统计图表</span>
                </el-menu-item>
                <el-menu-item index="/mail">
                        <i class="iconfont icon-mail_fill"></i>
                        <span slot="title" class="mailto">信箱<b>1</b> </span>
                </el-menu-item>
            </el-menu>
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
        }
      }
    }
</script>


<style scoped>
    .lf_nav{
        height:100%;
    }
    .top_head{
        width:200px;
        height:150px;
        background-color: #324157;
        padding-top:20px;
        text-align: center;
        color:#FFF;
        background: url(../assets/header-profile.png) no-repeat center;
    }
    .top_head img{
        width:70px;
        height:70px;
        display: block;
        border-radius: 50%;
        margin: 0 auto;
    }
    .top_head span{
        color: #8095a8;
        display: block;
        cursor: pointer;
    }
    .top_head p{
        color:#FFF;
        text-align: center;
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
    .nav:not(.el-menu--collapse) {
        border-radius: 0;
        width: 200px;
        min-height: calc(100% - 150px);
    }
    .nav i{
        margin-right: 5px;
        width: 24px;
        text-align: center;
        display: inline-block;
        font-weight: 400;
        -webkit-font-smoothing: antialiased;
        font-size: 18px;
    }
    .mailto b{
        float:right;
        margin-top:22px;
        padding:3px 8px;
        height:16px;
        line-height: 12px;
        color:#fff;
        font-size:12px;
        border-radius: 2px;
        background: #f8ac59;
    }
</style>