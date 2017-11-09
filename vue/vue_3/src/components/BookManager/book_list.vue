<template>
  <div class="book_list">
    <_pagenav genre="书籍 列表"></_pagenav>
    <div class="bookListTable">
      <el-table
              ref="multipleTable"
              :data="bookListTable"
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
                prop="tag"
                label="标签"
                width="100"
                :filters="taged"
                :filter-method="filterTag"
                filter-placement="bottom-end">
          <template scope="scope">
            <el-tag
                    :type="scope.row.tag === '玄幻' ? 'primary' : 'success'"
                    close-transition>{{scope.row.tag}}</el-tag>
          </template>
        </el-table-column>
        <el-table-column
                label="操作"
                align="center"
                width="150">
          <template scope="scope">
            <el-button size="small" @click="handle(scope.row)">查看</el-button>
            <el-button v-if="scope.row.sold" size="small" @click="sold(scope.row)">上架</el-button>
            <el-button v-else size="small" @click="rack(scope.row)">下架</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
  import _pagenav from '@/components/common/pagenav'
  export default {
    name: 'book_list',
    data () {
      return {
        taged: [{ text: '玄幻', value: '玄幻' }, { text: '都市', value: '都市' }, { text: '科幻', value: '科幻' }],
        bookListTable: [{
          date: '2016-05-03',
          name: '2小虎',
          bookname: '上海市普陀区金沙江路 1518 弄',
          tag: '玄幻',
          id: 1,
          sold: 0
        }, {
          date: '2016-05-02',
          name: '3小虎',
          bookname: '上海市普陀区金沙江路 1518 弄',
          tag: '古代',
          id: 2,
          sold: 1
        }, {
          date: '2016-05-04',
          name: '1小虎',
          bookname: '上海市普陀区金沙江路 1518 弄',
          tag: '玄幻',
          id: 3,
          sold: 0
        }, {
          date: '2016-05-01',
          name: '王3小虎',
          bookname: '上海市普陀区金沙江路 1518 弄',
          tag: '玄幻',
          id: 4,
          sold: 0
        }, {
          date: '2016-05-08',
          name: '4小虎',
          bookname: '上海市普陀区金沙江路 1518 弄',
          tag: '玄幻',
          id: 5,
          sold: 1
        }, {
          date: '2016-05-06',
          name: '2小虎',
          bookname: '上海市普陀区金沙江路 1518 弄',
          tag: '玄幻',
          id: 6,
          sold: 0
        }, {
          date: '2016-05-07',
          name: '王小虎',
          bookname: '上海市普陀区金沙江路 1518 弄',
          tag: '都市',
          id: 7,
          sold: 1
        }],
        multipleSelection: []
      }
    },
    methods: {
      handleSelectionChange (val) {
        this.multipleSelection = val
      },
      handle (row) {
        this.$router.push({name: 'book_manager_show', params: { id: row.id, sold: row.sold }})
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
  .book_list{
    width:100%;
    height:100%;
    background:#fff;
    .bookListTable{
      padding:10px;
      padding-top:0;
      height:calc(~"100% - 56px");
      overflow: auto;
    }
  }
</style>