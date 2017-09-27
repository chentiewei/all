<template>
  <div id="indexPage">
    <div class="head_wrapper">
      轮播图
    </div>
    <div class="list_wrapper">
      <ul>
        <li>
          <i class="iconfont icon-zantong list_wrapper_i"></i>
          <p class="list_wrapper_p">大沙发斯蒂芬1313144564767按时啊按时  阿萨德发生的 </p>
        </li>
      </ul>
    </div>
    <list></list>
  </div>
</template>

<script>
  import list from './listBody/listBody';
  export default {
    name: 'indexPag',
    data(){
      return{

      }
    },
    methods:{
    },
    components: {
      list
    },
  }
</script>
<style>
  .head_wrapper{
    background:#333333;
    height:7.8rem;
    text-align: center;
    line-height:7.8rem;
    color:#fff;
  }
  .list_wrapper{
    height:37px;
  }
  .list_wrapper ul{
    height:100%;
  }
  .list_wrapper li{
    display:flex;
    height:37px;
  }
  .list_wrapper_i{
    padding:0 8px 0 10px;
    line-height:37px;
    color:#ed702d;
  }
  .list_wrapper_p{
    white-space:nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width:100%;
    flex: 1;
    line-height:37px;
    font-size:11px;
  }
</style>
