<template>
    <div class="index">
        <navAll></navAll>
        <div class="details">
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
            <div class="mainContent">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
    import navAll from './navAll.vue'
    export default {
      name: 'index',
      data () {
        return {
          b: '1'
        }
      },
      components: {
        navAll
      }
    }
</script>


<style scoped>
    .navAll,.details{
        float:left;
    }
    .details{
        width:calc( 100% - 200px );
        height:100%;
    }
    .color_999c9e{
        color:#999c9e;
        font-size: 25px;
        vertical-align: middle;
    }
    .top_nav{
        width:100%;
        height:60px;
        background: #f3f3f4;
    }
    .top_nav>div:nth-child(1){
        float:left;
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
        margin-top: 5px;
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
    .top_nav>div:nth-child(2) span:hover{
        background: #eee;
        cursor: pointer;
    }
    .top_nav>div:nth-child(2) span i{
        font-size: 20px;
    }
    .top_nav>div:nth-child(2) span b{
        position: absolute;
        right:0;
        top:12px;
        padding:1px 5px;
        height:14px;
        line-height: 12px;
        color:#fff;
        font-size:12px;
        border-radius: 2px;
        background: #f8ac59;
    }
    .mainContent{
        height:calc( 100% - 60px );
        width:100%;
        overflow: auto;
        padding:20px;
    }

</style>