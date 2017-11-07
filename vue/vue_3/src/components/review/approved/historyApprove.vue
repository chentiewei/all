<template>
  <div class="historyApprove">
    <_pagenav genre="章节审核"></_pagenav>
    <div class="historyApproveTable">
      <el-table
              ref="multipleTable"
              :data="historyApproveTable"
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
                prop="tag"
                label="标签"
                width="100"
                :filters="[{ text: '新章', value: '新章' }, { text: '新书', value: '新书' }]"
                :filter-method="filterTag"
                filter-placement="bottom-end">
          <template scope="scope">
            <el-tag
                    :type="scope.row.tag === '新章' ? 'primary' : 'success'"
                    close-transition>{{scope.row.tag}}</el-tag>
          </template>
        </el-table-column>
        <el-table-column
                prop="name"
                label="作者">
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
    name: 'historyApprove',
    data () {
      return {
        search: '',
        historyApproveTable: [{
          date: '2016-05-03',
          tag: '新书',
          name: '2小虎'
        }, {
          date: '2016-05-02',
          tag: '新章',
          name: '3小虎'
        }, {
          date: '2016-05-04',
          tag: '新书',
          name: '1小虎'
        }, {
          date: '2016-05-01',
          tag: '新章',
          name: '王3小虎'
        }, {
          date: '2016-05-08',
          tag: '新书',
          name: '4小虎'
        }, {
          date: '2016-05-06',
          tag: '新章',
          name: '2小虎'
        }, {
          date: '2016-05-07',
          tag: '新书',
          name: '王小虎'
        }],
        multipleSelection: []
      }
    },
    methods: {
      handleSelectionChange (val) {
        this.multipleSelection = val
      },
      filterTag (value, row) {
        return row.tag === value
      }
    },
    components: {
      _pagenav
    }
  }
</script>


<style scoped lang="less">
  .historyApprove{
    width:100%;
    height:100%;
    background:#fff;
  .historyApproveTable{
    padding:10px;
    padding-top:0;
    height:calc(~"100% - 56px");
    overflow: auto;
  }
  }
</style>