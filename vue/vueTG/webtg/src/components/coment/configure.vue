<template>
  <div class="configure">
    <div class="g-table">
      <div class="m-title">2012款 1.6L 手动 时尚型 基本信息</div>
      <div class="m-content">
        <div class="s-list">
          <div class="field">保修政策</div>
          <div class="bit">3年10万公里</div>
        </div>
        <div class="s-list">
          <div class="field">保修政策</div>
          <div class="bit">3年10万公里</div>
        </div>
        <div class="s-list">
          <div class="field">保修政策</div>
          <div class="bit">3年10万公里</div>
        </div>
        <div class="s-list">
          <div class="field">保修政策</div>
          <div class="bit">3年10万公里</div>
        </div>
        <div class="s-list">
          <div class="field">保修政策</div>
          <div class="bit">3年10万公里</div>
        </div>
        <div class="s-list">
          <div class="field">保修政策</div>
          <div class="bit">3年10万公里</div>
        </div>
        <div class="s-list">
          <div class="field">保修政策</div>
          <div class="bit">3年10万公里</div>
        </div>
        <div class="s-list">
          <div class="field">保修政策</div>
          <div class="bit">3年10万公里</div>
        </div>
        <div class="s-list">
          <div class="field">保修政策</div>
          <div class="bit">3年10万公里</div>
        </div>
        <div class="s-list">
          <div class="field">保修政策</div>
          <div class="bit">3年10万公里</div>
        </div>
        <div class="s-list">
          <div class="field">保修政策</div>
          <div class="bit">3年10万公里</div>
        </div>
        <div class="s-list">
          <div class="field">保修政策</div>
          <div class="bit">3年10万公里</div>
        </div>
        <div class="s-list">
          <div class="field">保修政策</div>
          <div class="bit">3年10万公里</div>
        </div>
        <div class="s-list">
          <div class="field">保修政策</div>
          <div class="bit">3年10万公里</div>
        </div>
        <div class="s-list">
          <div class="field">保修政策</div>
          <div class="bit">3年10万公里</div>
        </div>
        <div class="s-list">
          <div class="field">保修政策</div>
          <div class="bit">3年10万公里</div>
        </div>
      </div>
      <div class="m-look" @click="isAll=!isAll">查看全部<i :class="{'go':isAll}"></i></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'configure',
    data(){
      return {
        isAll:0
      }
    }
  }
</script>


<style scoped lang="stylus">
.g-table
  .m-title
    color #1b1b1b
    font-size 14px
    height 40px
    line-height 40px
    border 1px solid #dcdcdc
    border-bottom 0
    text-align center
  .m-content
    border 1px solid #dcdcdc
    border-bottom 0
    font-size 0
    .s-list
      display inline-block
      font-size 0
      .field,.bit
        width 184.5px
        height 40px
        line-height 40px
        text-align center
        background #eeeeee
        color #1b1b1b
        font-size 14px
        display inline-block
        border-bottom 1px solid #dcdcdc
      .bit
        background #fff
  .m-look
    cursor pointer
    height 40px
    line-height 40px
    text-align center
    font-size 14px
    i
      display inline-block
      width 10px
      height 5px
      margin-left 5px
      background url(../../assets/images/arrow-bottom.png) no-repeat center center
      vertical-align middle
      transition all 0.5s
      &.go
        transform rotate(180deg)
</style>