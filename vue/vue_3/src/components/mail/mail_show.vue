<template>
  <div class="mail_show">
    <div class="survey">
      <div class="after">
        <div>
          <p>总览</p>
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

      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'mail_show',
    methods: {
    }
  }
</script>


<style scoped>
  .survey>div:nth-child(1){
    width:100%;
    padding:10px;
    border-bottom: 1px solid #e7eaec;
  }
  .survey,.tag{
    float:left;
  }
  .survey{
    width:100%;
    height:100%;
    background: #fff;
    border: 1px solid #e7eaec;
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