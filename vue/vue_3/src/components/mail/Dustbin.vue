<template>
  <div class="Inbox">
    <div class="survey">
      <div class="after">
        <div>
          <p>垃圾箱</p>
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
            <el-button type="success" size="small" title="刷新列表">还原</el-button>
            <el-button type="success" size="small" title="删除邮件" icon="delete"></el-button>
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
          <tr :class="{ read : v.read }" v-for="(v, k) in mail">
            <td class="check-mail">
              <div><el-checkbox @change="handleChange(v.id)"></el-checkbox></div>
            </td>
            <td><router-link :to="{ name : 'mail_show', params: { id: v.id}}">{{v.name}}</router-link></td>
            <td><router-link :to="{ name : 'mail_show', params: { id: v.id}}">{{v.title}}</router-link></td>
            <td class="mail_tag"><el-tag type="danger">{{v.tag}}</el-tag></td>
            <td class="mail_tag"><i v-if="v.ass" class="iconfont icon-accessory"></i></td>
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
    name: 'Inbox',
    data () {
      return {
        search: '',
        mail: [{
          name: '支付宝',
          title: 's付宝提醒暗缝s机埃里克打飞机啦会计师独立开发就爱上了大解放垃',
          tag: '吾问无为谓我问问',
          date: '昨天 10:20',
          id: '0',
          read: false,
          ass: true
        }, {
          name: '支付宝',
          title: 's付宝提醒暗缝s机埃里克打飞机啦会计师独立开发就爱上了大解放垃',
          tag: '吾问无为谓我问问',
          date: '2017/12/15 10:20',
          id: '3',
          read: true,
          ass: false
        }]
      }
    },
    methods: {
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
  .Inbox{
    width:100%;
    height:100%;
  }
  .survey{
    width:100%;
    height:100%;
    background: #fff;
    border: 1px solid #e7eaec;
  }
  .survey>div:nth-child(1){
    width:100%;
    padding:10px;
    border-bottom: 1px solid #e7eaec;
  }
  .survey p{
    height:100%;
    line-height: 36px;
    color:#676a6c;
    font-size: 24px;
    float: left;
  }
  .search_input{
    margin-left:200px;
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
  .table-mail tr.read{
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