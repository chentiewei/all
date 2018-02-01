<template>
  <div class="book_show">
    <div class="bookShow_content">
      <img src="https://qidian.qpic.cn/qdbimg/349573/1009443828/180" alt="">
      <div class="bookShow_right">
        <h1 class="name">辣手仙医</h1>
        <div class="author">作者：<a>晓言</a></div>
        <div class="info">
          <a class="tag">都市</a> ｜
          <a class="status">已完结</a>
        </div>
        <el-rate
                class="bookShow_strat"
                v-model="value5"
                disabled
                text-color="#ff9900"
                text-template="{value}">
        </el-rate>
        <p>昔日落魄少年被逐出家族，福祸相依得神秘老者相助，从此人生路上一片青云！
          我行我潇洒，彰显我性格！
          别骂小爷拽，媳妇多了用车载！
          妹纸一声好欧巴，转手就是摸摸大！
          “不要嘛！” </p>
      </div>
      <div class="book_last">
        <a class="ui-go">
          <strong>最新章节：</strong>
          第891章 终章
          <span>2017/8/18 16:08:00 更新</span>
        </a>
      </div>
      <div class="book_catalog ">
        <h2 class="title">章节目录</h2>
        <ul class="after">
          <li>
            <a data-index="200" data-coin="15">第200章 联手</a>
            <span class="price">未审核</span>
          </li>
          <li>
            <a data-index="200" data-coin="15">第200章 联手</a>
            <span class="price">未审核</span>
          </li>
          <li>
            <a data-index="200" data-coin="15">第200章 联手</a>
            <span class="price">未审核</span>
          </li>
          <li>
            <a data-index="200" data-coin="15">第200章 联手</a>
            <span class="price">通过</span>
          </li>
          <li>
            <a data-index="200" data-coin="15">第200章 联手</a>
            <span class="price">通过</span>
          </li>
          <li>
            <a data-index="200" data-coin="15">第200章 联手</a>
            <span class="price">通过</span>
          </li>
          <li>
            <a data-index="200" data-coin="15">第200章 联手</a>
            <span class="price">通过</span>
          </li>
          <li>
            <a data-index="200" data-coin="15">第200章 联手</a>
            <span class="price">通过</span>
          </li>
          <li>
            <a data-index="200" data-coin="15">第200章 联手</a>
            <span class="price">通过</span>
          </li>
          <li>
            <a data-index="200" data-coin="15">第200章 联手</a>
            <span class="price">通过</span>
          </li>
          <li>
            <a data-index="200" data-coin="15">第200章 联手</a>
            <span class="price">通过</span>
          </li>
          <li>
            <a data-index="200" data-coin="15">第200章 联手</a>
            <span class="price">通过</span>
          </li>
          <li>
            <a data-index="200" data-coin="15">第200章 联手</a>
            <span class="price">通过</span>
          </li>
          <li>
            <a data-index="200" data-coin="15">第200章 联手</a>
            <span class="price">通过</span>
          </li>
          <li>
            <a data-index="200" data-coin="15">第200章 联手</a>
            <span class="price">通过</span>
          </li>
          <li>
            <a data-index="200" data-coin="15">第200章 联手</a>
            <span class="price">通过</span>
          </li>
          <li>
            <a data-index="200" data-coin="15">第200章 联手</a>
            <span class="price">通过</span>
          </li>
          <li>
            <a data-index="200" data-coin="15">第200章 联手</a>
            <span class="price">通过</span>
          </li>
          <li>
            <a data-index="200" data-coin="15">第200章 联手</a>
            <span class="price">通过</span>
          </li>
          <li>
            <a data-index="200" data-coin="15">第200章 联手</a>
            <span class="price">通过</span>
          </li>
          <li>
            <a data-index="200" data-coin="15">第200章 联手</a>
            <span class="price">通过</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="bth_share">
      <el-button @click="approve">通过</el-button>
      <el-button @click="close">关</el-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'book_show',
    data () {
      return {
        value5: 3.7
      }
    },
    methods: {
      close () {
        this.$confirm('此操作将该文件送入小黑屋, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$router.push({name: 'newBook'})
          this.$message({
            type: 'success',
            message: '送入小黑屋!'
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消操作'
          })
        })
      },
      approve () {
        this.$confirm('此操作将审核通过该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$router.push({name: 'newBook'})
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
    created () {
    },
    components: {
    }
  }
</script>


<style scoped lang="less">
  @import "../../../assets/less/book_show.less";
</style>