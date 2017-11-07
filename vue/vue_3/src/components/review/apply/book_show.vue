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
  .book_show{
    width:100%;
    height:100%;
    background:#fff;
    overflow: auto;
    padding:10px;
    div.bookShow_content{
      width:100%;
      display:flex;
      flex-wrap:wrap;
      align-content:flex-start;
      border-right: 1px dashed #e0dad5;
      img{
        width:180px;
        height:240px;
        flex: 0 0 180px;
      }
      .book_last{
        width:100%;
        margin-top: 10px;
        padding: 10px 0;
        line-height: 2.3;
        border-top: 1px dashed #e0dad5;
        border-bottom: 1px dashed #e0dad5;
        font-size:14px;
        a{
          display: block;
          color: #507daf;
          padding: 0 10px;
        }
        strong{
          color: #2e2e2e;
        }
        span{
          color: #888;
          margin-left: 14px;
        }
      }
      .book_catalog{
        width:100%;
        h2{
          font-weight: 700;
          color: #2e2e2e;
          padding: 10px 10px;
          font-size:14px;
        }
        ul{
          width:100%;
          height: 400px;
          overflow: auto;
          li:nth-child(4n-2),li:nth-child(4n-3) {
            background-color: #fcfcfc;
          }
          li{
            position: relative;
            list-style:none;
            width:50%;
            height: 50px;
            float:left;
            a{
              display: block;
              color: #666;
              margin: 0 22% 0 6%;
              white-space: nowrap;
              text-overflow: ellipsis;
              overflow: hidden;
              line-height: 50px;
            }
            span{
              position: absolute;
              width: 20%;
              right: 0;
              top: 0;
              height:50px;
              line-height:50px;
              text-align: center;
              font-size: 12px;
              color: #e45c14;
            }
          }
        }
      }
      .bookShow_right{
        flex: 1;
        height:240px;
        padding-left:20px;
        h1{
          font-size:20px;
          font-weight:normal;
          margin-bottom: 20px;
          margin-top:20px;
        }
        .author,.info{
          color:#888;
          margin-bottom:10px;
          font-size: 14px;
        }
        .info{
          margin-bottom:20px;
        }
        .bookShow_strat{
          margin-bottom:30px;
        }
        p{
          color: #888;
          font-size: 14px;
          padding-right:15px;
        }
      }
    }
    .bth_share{
      width:100%;
      height:calc(~"100% - 738px");
      text-align: center;
      border-top:1px dashed #e0dad5;
      button{
        display: inline-block;
        margin-top:32.5px;
      }
    }
  }
</style>