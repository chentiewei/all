<template>
  <div class="add_ticked">
    <div class="after">
      <div>
        <p>写信</p>
        <div class="tick_btn">
          <el-button type="success" size="small" title="存为草稿">存为草稿</el-button>
          <el-button type="success" size="small" title="放弃" icon="delete"></el-button>
        </div>
      </div>
    </div>
    <div class="tick_content">
      <div class="tick_text">
        <el-input placeholder="请输入主题" v-model="input">
          <template slot="prepend">主题为</template>
        </el-input>
      </div>
      <div id="editorElem"></div>
      <el-button type="primary" class="btnEdtior" @click="getContent">查看内容</el-button>
    </div>
  </div>
</template>

<script>
  import E from 'wangeditor'
  export default {
    name: 'add_ticked',
    data () {
      return {
        input: ''
      }
    },
    methods: {
      getContent: function () {
        alert(this.editorContent)
      }
    },
    mounted () {
      var editor = new E('#editorElem')
      editor.customConfig.onchange = (html) => {
        this.editorContent = html
      }
      editor.customConfig.uploadImgShowBase64 = true
      editor.customConfig.zIndex = 0
      editor.create()
    }
  }
</script>


<style scoped lang="less">
  .add_ticked{
    width: 100%;
    height: 100%;
    background: #fff;
    .after{
      width:100%;
      padding:10px;
      border-bottom: 1px solid #e7eaec;
      p{
        height: 100%;
        line-height: 36px;
        color: #676a6c;
        font-size: 24px;
        float: left;
      }
      .tick_btn{
        float: right;
        margin-top: 4px;
      }
    }
    .tick_content{
      padding:20px 70px 0;
      .tick_text{
        padding-bottom:20px;
      }
      .btnEdtior{
        margin-top:20px;
      }
    }
  }
</style>