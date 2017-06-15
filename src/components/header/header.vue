<template>
  <div class="v_header">
    <i class="iconfont icon-xiangzuo1" @click="goback"></i>
    <div>{{$route.meta.title}}{{$router.isBack}}</div>

  </div>
</template>

<script>
  import data from '../../assets/js/mock';
  export default {
    name: 'v_header',
    props:['siler'],
    data () {
      return {
          a:this.siler,
      }
    },
    methods: {
      goback () {
        this.$store.state.isBack=true;
        window.history.go(-1);
      }
    },
    mounted() {
    },
    created:function () {
      //mock.js的模拟
      const me=this;
      this.$http.get("http://g.cn")
        .then(function (response) {
          var data=response.data;
          console.log(data);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  }
</script>

<style>
  .v_header{
    height:44px;
    color:#333;
    border-bottom:1px solid #ddd;
  }
  .v_header i{
    position:absolute;
    height:44px;
    line-height:44px;
    padding-left:12px;
    font-size:18px;
  }
  .v_header>div{
    width:100%;
    height:100%;
    line-height:44px;
    text-align:center;
    color:#333;
    font-weight:bold;
    font-size:18px;
  }
</style>
