<template>
  <div class="pageNav after">
      <div>
        <p>{{genre}}</p>
        <div class="search_input">
          <el-input
                  placeholder="请选择日期"
                  icon="search"
                  v-model="search"
                  @icon-click="handleIconClick">
          </el-input>
        </div>
        <div class="page_btn">
          <el-button type="success" size="small" title="刷新列表">刷新</el-button>
          <el-button type="success" size="small" title="小黑屋" icon="delete"></el-button>
          <el-button-group>
            <el-button type="success" size="small" title="上一页" icon="arrow-left"></el-button>
            <el-button type="success" size="small" title="下一页" icon="arrow-right"></el-button>
          </el-button-group>
        </div>
      </div>
  </div>
</template>

<script>
  export default {
    name: 'pageNav',
    props: ['genre'],
    data () {
      return {
        search: ''
      }
    },
    methods: {
      handleIconClick () {
        console.log('查找')
      }
    }
  }
</script>


<style scoped lang="less">
  .pageNav>div{
    padding:10px;
    p{
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
    .page_btn{
      float:right;
      margin-top:4px;
      button{
        margin:0;
      }
      i{
        font-size: 12px;
      }
    }
  }
</style>