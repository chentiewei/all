<template>
  <div class="Chapter">
    <_pagenav genre="章节审核"></_pagenav>
    <div class="ChapterTable">
      <el-table
              ref="multipleTable"
              :data="ChapterTable"
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
                label="日期"
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
                width="200">
          <template scope="scope">
            <el-button size="small" @click="handle(scope.row)">查看</el-button>
            <el-button size="small" @click="approve(scope.row)">通过</el-button>
            <el-button size="small" @click="close(scope.row)">关</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
  import _pagenav from '@/components/common/pagenav'
  export default {
    name: 'Chapter',
    data () {
      return {
        search: '',
        ChapterTable: [{
          date: '2016-05-03',
          name: '2小虎',
          bookname: '上海市普陀区金沙江路 1518 弄',
          chapterName: '1',
          theme: '玄幻',
          id: 7
        }, {
          date: '2016-05-02',
          name: '3小虎',
          bookname: '上海市普陀区金沙江路 1518 弄',
          chapterName: '1',
          theme: '玄幻',
          id: 6
        }, {
          date: '2016-05-04',
          name: '1小虎',
          bookname: '上海市普陀区金沙江路 1518 弄',
          chapterName: '1',
          theme: '玄幻',
          id: 5
        }, {
          date: '2016-05-01',
          name: '王3小虎',
          bookname: '上海市普陀区金沙江路 1518 弄',
          chapterName: '1',
          theme: '玄幻',
          id: 4
        }, {
          date: '2016-05-08',
          name: '4小虎',
          bookname: '上海市普陀区金沙江路 1518 弄',
          chapterName: '1',
          theme: '玄幻',
          id: 3
        }, {
          date: '2016-05-06',
          name: '2小虎',
          bookname: '上海市普陀区金沙江路 1518 弄',
          chapterName: '1',
          theme: '玄幻',
          id: 2
        }, {
          date: '2016-05-07',
          name: '王小虎',
          bookname: '上海市普陀区金沙江路 1518 弄',
          chapterName: '1',
          theme: '玄幻',
          id: 1
        }],
        multipleSelection: []
      }
    },
    methods: {
      handleSelectionChange (val) {
        this.multipleSelection = val
      },
      handle (row) {
        this.$router.push({name: 'chapter_show', params: { id: row.id }})
      },
      close (row) {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          for (var i in this.ChapterTable) {
            this.ChapterTable[i].id === row.id && this.ChapterTable.splice(i, 1)
          }
          this.$message({
            type: 'success',
            message: '删除成功!'
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
      },
      approve (row) {
        this.$confirm('此操作将审核通过该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          for (var i in this.ChapterTable) {
            this.ChapterTable[i].id === row.id && this.ChapterTable.splice(i, 1)
          }
          this.$message({
            type: 'success',
            message: '审核通过!'
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消操作'
          })
        })
      }
    },
    components: {
      _pagenav
    }
  }
</script>


<style scoped lang="less">
  .Chapter{
    width:100%;
    height:100%;
    background:#fff;
    .ChapterTable{
      padding:10px;
      padding-top:0;
      height:calc(~"100% - 56px");
      overflow: auto;
    }
  }
</style>