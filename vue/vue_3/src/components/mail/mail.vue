<template>
    <div class="mail">
        <el-menu  default-active="/mail_all" class="el-menu-demo" mode="horizontal" @select="handleSelect" router>
            <el-menu-item index="/mail_all">总览</el-menu-item>
            <el-menu-item index="/Inbox">收件箱</el-menu-item>
            <el-menu-item index="/Write">写信</el-menu-item>
            <el-menu-item index="/Import">重要</el-menu-item>
            <el-menu-item index="/Draft">草稿</el-menu-item>
            <el-menu-item index="/Dustbin">垃圾箱</el-menu-item>
        </el-menu>
        <div class="mail_content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    export default {
      name: 'mail',
      data () {
        return {
        }
      },
      methods: {
        handleSelect (key, keyPath) {
          console.log(key, keyPath)
        }
      }
    }
</script>


<style scoped>
    .mail{
        height:100%;
    }
    .mail_content{
        height:calc( 100% - 40px);
        background: #f3f3f4;
        overflow: auto;
        padding:20px;
    }
    .el-menu--horizontal .el-menu-item{
        height: 40px;
        line-height: 40px;
        border-bottom: 2px solid transparent;
    }
    .el-menu--horizontal .el-menu-item:hover{
        background: #e2eaf7;
        border-bottom: 2px solid #e2eaf7;
    }
</style>