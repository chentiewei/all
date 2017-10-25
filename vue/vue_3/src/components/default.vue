<template>
  <div class="defau">
    <div class="defau_all">
      <div class="defau_hint">
        <div>
          <i class="iconfont icon-setup"></i>
          <div>
            <span class="info-box-text">Sales</span>
            <span class="info-box-number">41,410</span>
          </div>
        </div>
        <div>
          <i class="iconfont icon-integral"></i>
          <div>
            <span class="info-box-text">Sales</span>
            <span class="info-box-number">41,410</span>
          </div>
        </div>
        <div>
          <i class="iconfont icon-group"></i>
          <div>
            <span class="info-box-text">Sales</span>
            <span class="info-box-number">41,410</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'defau'
  }
</script>


<style scoped>
  .defau{
    height:100%;
    padding:20px;
    overflow: auto;
  }
  .defau_all{
    height:100%;
    background:#fff;
  }
  .defau_hint{
    display: flex;
    height:130px;
  }
  .defau_hint>div{
    flex:1;
    background: #ecf0f5;;
    margin:20px 20px;
    display: flex;
  }
  .defau_hint div i{
    display: inline-block;
    flex: 0 90px;
    width:90px;
    height:90px;
    text-align: center;
    line-height: 90px;
    color:#fff;
    font-size: 45px;
    background:#f39c12;
  }
  .defau_hint div:nth-child(1) i{
    background:#00c0ef;
  }
  .defau_hint div:nth-child(2) i{
    background:#dd4b39 ;
  }
  .defau_hint div>div{
    padding: 10px 15px;
    text-transform: uppercase;
  }
  .defau_hint div span.info-box-text{
    display: block;
    font-size: 14px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width:100%;
  }
  .defau_hint div span.info-box-number{
    display: block;
    font-weight: bold;
    font-size: 18px;
    margin-top:10px;
  }
</style>