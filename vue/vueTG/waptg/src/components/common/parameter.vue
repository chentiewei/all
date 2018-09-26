<template>
  <div class="g-parmeter">
    <div class="m-list">
      <div class="s-title after">
        <span>基本参数</span>
        <div class="bittig">
          <div> <i></i> <b>标配</b> </div>
          <div> <i></i> <b>选配</b> </div>
          <div> <i></i> <b>无</b> </div>
        </div>
      </div>
      <div class="s-div after">
        <div>
          <span>车型名称</span>
          <b>北京现代朗动2012款 1.6L 手动 时尚型</b>
        </div>
        <div>
          <span>车型名称</span>
          <b>北京现代朗动2012款 1.6L 手动 时尚型</b>
        </div>
        <div>
          <span>车型名称</span>
          <b>北京现代朗动2012款 1.6L 手动 时尚型</b>
        </div>
        <div>
          <span>车型名称</span>
          <b>北京现代朗动2012款 1.6L 手动 时尚型</b>
        </div>
        <div>
          <span>车型名称</span>
          <b>北京现代朗动2012款 1.6L 手动 时尚型</b>
        </div>
        <div>
          <span>车型名称</span>
          <b>北京现代朗动2012款 1.6L 手动 时尚型</b>
        </div>
      </div>
      <div class="s-title after">
        <span>基本参数</span>
        <div class="bittig">
          <div> <i></i> <b>标配</b> </div>
          <div> <i></i> <b>选配</b> </div>
          <div> <i></i> <b>无</b> </div>
        </div>
      </div>
      <div class="s-div after">
        <div>
          <span>车型名称</span>
          <b>北京现代朗动2012款 1.6L 手动 时尚型</b>
        </div>
        <div>
          <span>车型名称</span>
          <b>北京现代朗动2012款 1.6L 手动 时尚型</b>
        </div>
        <div>
          <span>车型名称</span>
          <b>北京现代朗动2012款 1.6L 手动 时尚型</b>
        </div>
        <div>
          <span>车型名称</span>
          <b>北京现代朗动2012款 1.6L 手动 时尚型</b>
        </div>
        <div>
          <span>车型名称</span>
          <b>北京现代朗动2012款 1.6L 手动 时尚型</b>
        </div>
        <div>
          <span>车型名称</span>
          <b>北京现代朗动2012款 1.6L 手动 时尚型</b>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'g-parameter'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.g-parmeter
  .s-div
    font-size 36px
    color #1b1b1b
    div
      padding 0 40px
      height 90px
      line-height 90px
      border-bottom 1px solid #d4d4d4
      &:last-child
        border 0
    b
      float right 
  .s-title
    height 90px
    width 100%
    background #a0a0a0
    padding 0 40px
    color #fff
    box-sizing border-box
    span
      line-height 90px
      float left
    .bittig
      float right
      div
        height 90px
        line-height 90px
        display inline-block
        margin-left 45px
        b,i
          vertical-align middle
        i
          width 15px
          height 15px
          display inline-block
          background url(../../assets/images/doted.png) no-repeat center center
          background-size 100% 100%
          margin-right 12px
        &:nth-child(2)
          i
           background-image url(../../assets/images/dot.png)
        &:nth-child(3)
          i
            background-size 100%
            background-image url(../../assets/images/dotno.png)
</style>
