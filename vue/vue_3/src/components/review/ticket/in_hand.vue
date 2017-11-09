<template>
  <div class="in_hand">
    <_pagenav genre="全部"></_pagenav>
    <div class="inHandTable">
      <el-table
              ref="multipleTable"
              :data="inHandTable"
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
                prop="bookname"
                label="工单标题"
                show-overflow-tooltip>
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
                label="状态"
                width="120">
        </el-table-column>
        <el-table-column
                label="操作"
                align="center"
                width="120">
          <template scope="scope">
            <el-button size="small" @click="handle(scope.row)">查看</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
  import _pagenav from '@/components/common/pagenav'
  export default {
    name: 'in_hand',
    data () {
      return {
        inHandTable: [{
          date: '2016-05-02',
          name: '3小虎',
          bookname: '上海市普陀区金沙江路 1518 弄',
          theme: '处理中',
          tickId: 1
        }, {
          date: '2016-05-04',
          name: '1小虎',
          bookname: '上海市普陀区金沙江路 1518 弄',
          theme: '处理中',
          tickId: 3
        }, {
          date: '2016-05-01',
          name: '王3小虎',
          bookname: '上海市普陀区金沙江路 1518 弄',
          theme: '处理中',
          tickId: 4
        }, {
          date: '2016-05-08',
          name: '4小虎',
          bookname: '上海市普陀区金沙江路 1518 弄',
          theme: '处理中',
          tickId: 5
        }],
        multipleSelection: []
      }
    },
    methods: {
      handleSelectionChange (val) {
        this.multipleSelection = val
      },
      handle (row) {
        this.$router.push({name: 'tick_show', params: {id: row.tickId}})
      }
    },
    components: {
      _pagenav
    }
  }
</script>


<style scoped lang="less">
  .in_hand{
    width: 100%;
    height: 100%;
    background: #fff;
    .inHandTable{
      padding:10px;
      padding-top:0;
      height:calc(~"100% - 56px");
      overflow: auto;
    }
  }
</style>