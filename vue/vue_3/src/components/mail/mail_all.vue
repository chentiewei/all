<template>
    <div class="mial_all after">
        <div class="tag">
            <!--<div @click="add=!add" v-show="!add">标签</div>-->
            <!--<div v-show="add">-->
                <!--<el-input class="addTag" v-model="name" placeholder="请输入内容"></el-input>-->
                <!--<el-button class="addbtn" type="primary" icon="plus" @click="addTag(name)" ></el-button>-->
            <!--</div>-->
            <div @click="addTag">添加标签</div>
            <div>
                <ul class="tag_ul after">
                    <li v-for="(v , k) in tags"><a>{{v}}<i class="iconfont icon-close" @click="deleteTag(v, k)"></i></a></li>
                </ul>
            </div>
        </div>
        <div class="survey"></div>
    </div>
</template>

<script>
    export default {
      name: 'mail_all',
      data () {
        return {
          tags: ['标签21', '标签2', '标签3', '1', '标', '标签44q1q '],
          add: false,
          name: ''
        }
      },
      methods: {
        addTag () {
          this.$prompt('请输入标签', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            inputPattern: /^[\u4e00-\u9fa5\w]{1,8}$/,
            inputPlaceholder: '1-8个字符之内',
            inputErrorMessage: '1-8个字符之内'
          }).then(({ value }) => {
            this.$message({
              type: 'success',
              message: '添加成功，标签为: ' + value
            })
            this.tags.push(value)
          }).catch(() => {
            this.$message({
              type: 'info',
              message: '取消输入'
            })
          })
        },
        deleteTag (v, k) {
          this.tags.splice(k, 1)
          this.$message({message: '删除成功', showClose: true, type: 'warning'})
        }
      }
    }
</script>


<style scoped>
    .mial_all{
        height:100%;
        width:100%;
    }
    .tag{
        width:200px;
        height:100%;
        padding:10px;
    }
    .tag span{
        margin:0 10px;
    }
    .tag>div:nth-child(1){
        padding: 8px 10px;
        background-color: #1ab394;
        border-color: #1ab394;
        color: #FFF;
        border-radius: 3px;
        font-size: 14px;
        font-weight: 400;
        text-align: center;
        vertical-align: middle;
        margin-bottom:10px;
        cursor:pointer;
    }
    .addTag{
        width:120px;
    }
    .el-input__inner{
        height:30px !important;
    }
    .addbtn{
        width:50px;
        height:30px;
        padding:0;
        margin-left:5px;
    }
    .tag>div:nth-child(3){
        margin-top:10px;
        border-top:1px solid #1ab394;
    }
    .tag_ul{
        width:100%;
    }
    .tag_ul li{
        list-style: none;
        margin: 0 10px;

    }
    .tag_ul li a{
        font-size: 10px;
        background: #fff;
        font-size: 14px;
        padding: 5px 12px;
        color: inherit;
        border-radius: 2px;
        border: 1px solid #e7eaec;
        margin-right: 5px;
        margin-top: 5px;
        display: inline-block;
        vertical-align: middle;
    }
    .tag_ul li i{
        margin-left:10px;
        font-size: 12px;
        cursor: pointer;
    }
</style>