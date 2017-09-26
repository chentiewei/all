<template>
    <div class="mial_all after">
        <div class="tag">
            <div @click="addTag">添加标签</div>
            <div>
                <ul class="tag_ul after">
                  <transition-group name="fading">
                    <li v-for="(v , k) in tags" :key="v"><a>{{v}}<i class="iconfont icon-close" @click="deleteTag(v, k)"></i></a></li>
                  </transition-group>
                </ul>
            </div>
        </div>
        <div class="survey">
          <div class="after">
            <div>
            <p>总览</p>
            <div class="search_input">
              <el-input
                      placeholder="请选择日期"
                      icon="search"
                      v-model="search"
                      :on-icon-click="handleIconClick">
              </el-input>
            </div>
              <div class="mail_btn">
                <el-button type="success" size="small" title="刷新列表">刷新</el-button>
                <el-button type="success" size="small" title="删除邮件" icon="delete"></el-button>
                <el-button type="success" size="small" title="标为重要"><i class="iconfont icon-collection_fill"></i></el-button>
                <el-button type="success" size="small" title="标为已读"><i class="iconfont icon-browse"></i></el-button>
                <el-button-group>
                  <el-button type="success" size="small" title="上一页" icon="arrow-left"></el-button>
                  <el-button type="success" size="small" title="下一页" icon="arrow-right"></el-button>
                </el-button-group>
              </div>
            </div>
          </div>
          <div>
            <table class="table-mail">
              <tbody>
              <tr :class="{ unread : !v.read }" v-for="(v, k) in mail">
                <td class="check-mail">
                  <div><el-checkbox @change="handleChange(v.id)"></el-checkbox></div>
                </td>
                <td><router-link :to="{ name : 'mail_show', params: { id: v.id}}">{{v.name}}</router-link></td>
                <td><router-link :to="{ name : 'mail_show', params: { id: v.id}}">{{v.title}}</router-link></td>
                <td class="mail_tag"><el-tag type="danger">{{v.tag}}</el-tag></td>
                <td class="mail_date">{{v.date}}</td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
    </div>
</template>

<script>
    export default {
      name: 'mail_all',
      data () {
        return {
          tags: ['标签21', '标签2', '标签3', '1', '标', '标签44q1q '],
          add: false,
          name: '',
          search: '',
          multipleSelection: [],
          mail: [{
            name: '支付宝',
            title: 's付宝提醒暗缝s机埃里克打飞机啦会计师独立开发就爱上了大解放垃',
            tag: '吾问无为谓我问问',
            date: '昨天 10:20',
            id: '0',
            read: false
          }, {
            name: '支付宝',
            title: 's付宝提醒暗缝s机埃里克打飞机啦会计师独立开发就爱上了大解放垃',
            tag: '吾问无为谓我问问',
            date: '2017/12/15 10:20',
            id: '3',
            read: true
          }]
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
        },
        handleIconClick () {
          console.log('查找')
        },
        handleSelectionChange (val) {
          this.multipleSelection = val
        },
        handleChange (k) {
          console.log(k)
        }
      }
    }
</script>


<style scoped>
    .fading-enter-active, .fading-leave-active {
      transition: all 1s;
    }
    .fading-enter{
      opacity: 0;
      transform: translateY(30px);
    }
    .fading-leave-to{
      opacity: 0;
      transform: translateX(-30px);
    }
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
        margin: 0 5px;

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
    .survey>div:nth-child(1){
      width:100%;
      padding:10px;
      border-bottom: 1px solid #e7eaec;
    }
    .survey,.tag{
      float:left;
    }
    .survey{
      width:calc(100% - 220px);
      height:100%;
      background: #fff;
      border: 1px solid #e7eaec;
      margin-left:20px;
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
</style>