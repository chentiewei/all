<template>
  <div class="newBook">
    <_pagenav genre="新书审核"></_pagenav>
    <div class="newBookTable">
      <el-table
              ref="multipleTable"
              :data="newBookTable"
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
    name: 'newBook',
    data () {
      return {
        newBookTable: [{
          date: '2016-05-03',
          name: '2小虎',
          bookname: '上海市普陀区金沙江路 1518 弄',
          theme: '玄幻',
          id: 1
        }, {
          date: '2016-05-02',
          name: '3小虎',
          bookname: '上海市普陀区金沙江路 1518 弄',
          theme: '玄幻',
          id: 2
        }, {
          date: '2016-05-04',
          name: '1小虎',
          bookname: '上海市普陀区金沙江路 1518 弄',
          theme: '玄幻',
          id: 3
        }, {
          date: '2016-05-01',
          name: '王3小虎',
          bookname: '上海市普陀区金沙江路 1518 弄',
          theme: '玄幻',
          id: 4
        }, {
          date: '2016-05-08',
          name: '4小虎',
          bookname: '上海市普陀区金沙江路 1518 弄',
          theme: '玄幻',
          id: 5
        }, {
          date: '2016-05-06',
          name: '2小虎',
          bookname: '上海市普陀区金沙江路 1518 弄',
          theme: '玄幻',
          id: 6
        }, {
          date: '2016-05-07',
          name: '王小虎',
          bookname: '上海市普陀区金沙江路 1518 弄',
          theme: '玄幻',
          id: 7
        }],
        multipleSelection: []
      }
    },
    methods: {
      handleSelectionChange (val) {
        this.multipleSelection = val
      },
      handle (row) {
        this.$router.push({name: 'book_show', params: { id: row.id }})
      },
      close (row) {
        for (var i in this.newBookTable) {
          this.newBookTable[i].id === row.id && this.newBookTable.splice(i, 1)
        }
      },
      approve (row) {
        for (var i in this.newBookTable) {
          this.newBookTable[i].id === row.id && this.newBookTable.splice(i, 1)
        }
      }
    },
    components: {
      _pagenav
    }
  }
</script>


<style scoped lang="less">
  .newBook{
    width:100%;
    height:100%;
    background:#fff;
    .newBookTable{
      padding:10px;
      padding-top:0;
      height:calc(~"100% - 56px");
      overflow: auto;
    }
  }
</style>