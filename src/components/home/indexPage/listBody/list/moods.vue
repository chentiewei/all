<template>
  <div class="moods">
    <div v-for="(item,index) in arr" :class="{border_right:(index+1)%2==0}">
      {{item}}
      <router-link :to="{path:'/details'}" class="on_go"></router-link>
    </div>
    <div>
      跳转用户中心
    <router-link :to="{path:'/userCenter'}" class="on_go"></router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'moods',
    data(){
      return{
        arr:[1,2,3,4],
      }
    },
    methods: {},
    computed: {},
    components: {}
  }
</script>
<style>
  .moods{
    display: flex;
    flex-wrap: wrap;
    width:100%;
    margin-bottom:2.8rem;
  }
  .moods div{
    width: calc( 50% - 1px/2 );
    height:11.75rem;
    text-align:center;
    border-top:1px solid #eee;
  }
  .border_right{
    border-left:1px solid #eee;
  }
  .on_go{
    display: block;
    width:50%;
    height:50%;
    background:#eee;
    margin:0 auto;
  }
</style>
