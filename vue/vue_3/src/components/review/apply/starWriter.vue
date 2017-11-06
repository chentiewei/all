<template>
  <div class="starWriter">
    <_pagenav genre="标记作家"></_pagenav>
    <div class="starWriterTable">
      <el-table
              ref="multipleTable"
              :data="starWriterTable"
              tooltip-effect="dark"
              style="width: 100%"
              @selection-change="handleSelectionChange"
              stripe
              border
              max-height="100%"
              :default-sort = "{prop: 'date', order: 'descending'}"
      >
        <el-table-column
                type="selection"
                width="55">
        </el-table-column>
        <el-table-column
                sortable
                prop="date"
                label="日期"
                width="120">
        </el-table-column>
        <el-table-column
                prop="name"
                label="作者"
                width="120">
        </el-table-column>
        <el-table-column
                sortable
                prop="bookUpdate"
                label="书籍更新"
                show-overflow-tooltip>
        </el-table-column>
        <el-table-column
                prop="message"
                label="留言"
                show-overflow-tooltip>
        </el-table-column>
        <el-table-column
                label="操作"
                align="center"
                width="120">
          <template scope="scope">
            <el-button size="small">查看</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
  import _pagenav from '@/components/common/pagenav'
  export default {
    name: 'starWriter',
    data () {
      return {
        search: '',
        starWriterTable: [{
          date: '2016-05-03',
          name: '2小虎',
          bookUpdate: '是',
          message: '1'
        }, {
          date: '2016-05-02',
          name: '3小虎',
          bookUpdate: '是',
          message: '1'
        }, {
          date: '2016-05-04',
          name: '1小虎',
          bookUpdate: '是',
          message: '1'
        }, {
          date: '2016-05-01',
          name: '王3小虎',
          bookUpdate: '是',
          message: '2'
        }, {
          date: '2016-05-08',
          name: '4小虎',
          bookUpdate: '否',
          message: '2'
        }, {
          date: '2016-05-06',
          name: '2小虎',
          bookUpdate: '否',
          message: '3'
        }, {
          date: '2016-05-07',
          name: '王小虎',
          bookUpdate: '否',
          message: '4'
        }, {
          date: '2016-05-02',
          name: '3小虎',
          bookUpdate: '是',
          message: '1'
        }, {
          date: '2016-05-02',
          name: '3小虎',
          bookUpdate: '是',
          message: '1'
        }, {
          date: '2016-05-02',
          name: '3小虎',
          bookUpdate: '是',
          message: '1'
        }, {
          date: '2016-05-02',
          name: '3小虎',
          bookUpdate: '是',
          message: '1'
        }, {
          date: '2016-05-02',
          name: '3小虎',
          bookUpdate: '是',
          message: '1'
        }, {
          date: '2016-05-02',
          name: '3小虎',
          bookUpdate: '是',
          message: '1'
        }, {
          date: '2016-05-02',
          name: '3小虎',
          bookUpdate: '是',
          message: '1'
        }, {
          date: '2016-05-02',
          name: '3小虎',
          bookUpdate: '是',
          message: '1'
        }, {
          date: '2016-05-02',
          name: '3小虎',
          bookUpdate: '是',
          message: '1'
        }, {
          date: '2016-05-02',
          name: '3小虎',
          bookUpdate: '是',
          message: '1'
        }, {
          date: '2016-05-02',
          name: '3小虎',
          bookUpdate: '是',
          message: '1'
        }, {
          date: '2016-05-02',
          name: '3小虎',
          bookUpdate: '是',
          message: '1'
        }, {
          date: '2016-05-02',
          name: '3小虎',
          bookUpdate: '是',
          message: '1'
        }, {
          date: '2016-05-02',
          name: '3小虎',
          bookUpdate: '是',
          message: '1'
        }],
        multipleSelection: []
      }
    },
    methods: {
      handleSelectionChange (val) {
        this.multipleSelection = val
      }
    },
    components: {
      _pagenav
    }
  }
</script>


<style scoped lang="less">
  .starWriter{
    width:100%;
    height:100%;
    background:#fff;
    .starWriterTable{
      padding:10px;
      padding-top:0;
      height:calc(~"100% - 56px");
      overflow: auto;
    }
  }
</style>