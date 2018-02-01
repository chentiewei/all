<template>
  <div class="chapterApprove">
    <_pagenav genre="章节审核"></_pagenav>
    <div class="chapterApproveTable">
      <el-table
              ref="multipleTable"
              :data="chapterApproveTable"
              tooltip-effect="dark"
              style="width: 100%"
              @selection-change="handleSelectionChange"
              stripe
              border
              :default-sort = "{prop: 'date', order: 'descending'}"
      >
        <el-table-column
                type="selection"
                width="55">
        </el-table-column>
        <el-table-column
                sortable
                prop="date"
                label="通过日期"
                width="120">
        </el-table-column>
        <el-table-column
                prop="name"
                label="作者"
                width="120">
        </el-table-column>
        <el-table-column
                prop="bookname"
                label="书名"
                show-overflow-tooltip>
        </el-table-column>
        <el-table-column
                prop="chapterName"
                label="章节名"
                show-overflow-tooltip>
        </el-table-column>
        <el-table-column
                sortable
                prop="theme"
                label="题材"
                width="120">
        </el-table-column>
        <el-table-column
                label="操作"
                align="center"
                width="150">
          <template scope="scope">
            <el-button size="small">查看</el-button>
            <el-button size="small">关</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
  import _pagenav from '@/components/common/pagenav'
  export default {
    name: 'chapterApprove',
    data () {
      return {
        search: '',
        chapterApproveTable: [{
          date: '2016-05-03',
          name: '2小虎',
          bookname: '上海市普陀区金沙江路 1518 弄',
          chapterName: '1',
          theme: '玄幻'
        }, {
          date: '2016-05-02',
          name: '3小虎',
          bookname: '上海市普陀区金沙江路 1518 弄',
          chapterName: '1',
          theme: '玄幻'
        }, {
          date: '2016-05-04',
          name: '1小虎',
          bookname: '上海市普陀区金沙江路 1518 弄',
          chapterName: '1',
          theme: '玄幻'
        }, {
          date: '2016-05-01',
          name: '王3小虎',
          bookname: '上海市普陀区金沙江路 1518 弄',
          chapterName: '1',
          theme: '玄幻'
        }, {
          date: '2016-05-08',
          name: '4小虎',
          bookname: '上海市普陀区金沙江路 1518 弄',
          chapterName: '1',
          theme: '玄幻'
        }, {
          date: '2016-05-06',
          name: '2小虎',
          bookname: '上海市普陀区金沙江路 1518 弄',
          chapterName: '1',
          theme: '玄幻'
        }, {
          date: '2016-05-07',
          name: '王小虎',
          bookname: '上海市普陀区金沙江路 1518 弄',
          chapterName: '1',
          theme: '玄幻'
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
  .chapterApprove{
    width:100%;
    height:100%;
    background:#fff;
    .chapterApproveTable{
      padding:10px;
      padding-top:0;
      height:calc(~"100% - 56px");
      overflow: auto;
    }
  }
</style>