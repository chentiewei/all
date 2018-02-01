<template>
  <div class="chapted">
    <_pagenav genre="和谐库"></_pagenav>
    <div class="chaptedTable">
      <el-table
              ref="multipleTable"
              :data="chaptedTable"
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
                sortable
                prop="theme"
                label="标签"
                width="120">
        </el-table-column>
        <el-table-column
                label="操作"
                align="center"
                width="150">
          <template scope="scope">
            <el-button size="small" @click="handle(scope.row)">查看</el-button>
            <el-button size="small" @click="approve(scope.row)">解除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
  import _pagenav from '@/components/common/pagenav'
  export default {
    name: 'chapted',
    data () {
      return {
        chaptedTable: [{
          date: '2016-05-03',
          name: '2小虎',
          bookname: '上海市普陀区金沙江路 1518 弄',
          theme: '玄幻',
          id: 1,
          uid: 0
        }, {
          date: '2016-05-02',
          name: '3小虎',
          bookname: '上海市普陀区金沙江路 1518 弄',
          theme: '玄幻',
          id: 2,
          uid: 1
        }, {
          date: '2016-05-04',
          name: '1小虎',
          bookname: '上海市普陀区金沙江路 1518 弄',
          theme: '玄幻',
          id: 3,
          uid: 0 /* 章节或新书 */
        }, {
          date: '2016-05-01',
          name: '王3小虎',
          bookname: '上海市普陀区金沙江路 1518 弄',
          theme: '玄幻',
          id: 4,
          uid: 0
        }, {
          date: '2016-05-08',
          name: '4小虎',
          bookname: '上海市普陀区金沙江路 1518 弄',
          theme: '玄幻',
          id: 5,
          uid: 1
        }, {
          date: '2016-05-06',
          name: '2小虎',
          bookname: '上海市普陀区金沙江路 1518 弄',
          theme: '玄幻',
          id: 6,
          uid: 0
        }, {
          date: '2016-05-07',
          name: '王小虎',
          bookname: '上海市普陀区金沙江路 1518 弄',
          theme: '玄幻',
          id: 7,
          uid: 1
        }],
        multipleSelection: []
      }
    },
    methods: {
      handleSelectionChange (val) {
        this.multipleSelection = val
      },
      handle (row) {
        this.$router.push({name: 'dark_msg_show', params: { id: row.id, uid: row.uid }})
      },
      close (row) {
        for (var i in this.chaptedTable) {
          this.chaptedTable[i].id === row.id && this.chaptedTable.splice(i, 1)
        }
      },
      approve (row) {
        for (var i in this.chaptedTable) {
          this.chaptedTable[i].id === row.id && this.chaptedTable.splice(i, 1)
        }
      }
    },
    components: {
      _pagenav
    }
  }
</script>


<style scoped lang="less">
  .chapted{
    width: 100%;
    height: 100%;
    background: #fff;
    .chaptedTable{
      padding:10px;
      padding-top:0;
      height:calc(~"100% - 56px");
      overflow: auto;
    }
  }
</style>