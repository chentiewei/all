<template>
  <div class="navbar">
    <div class="navbarSvg">
      <img src="../assets/images/gengduo.svg" alt="">
    </div>
    <transition name="el-zoom-in-center">
      <el-breadcrumb separator="/" class="navList">
          <el-breadcrumb-item v-for="item in realList" :to="item.path">{{item.name}}</el-breadcrumb-item>
      </el-breadcrumb>
    </transition>
    <div></div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  export default {
    name: 'navbar',
    data() {
      return {
        realList:[]
      }
    },
    created(){
      this.getRoutePath()
    },
    watch: {
      $route() {
        this.getRoutePath()
      }
    },
    methods:{
      getRoutePath() {
        let matched=this.$route.matched.filter(item => item.name)
        matched = [{ path: '/dashboard', name:'dashboard', meta: { title: 'dashboard' }}].concat(matched)
        this.realList = matched
      }
    },
    computed: {
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
  .navbar
    height: 50px;
    line-height: 50px;
  .navbarSvg
    line-height: 58px;
    height: 50px;
    float: left;
    padding: 0 10px;
    img
      width 20px
  .navList
    display: inline-block;
    font-size: 14px;
    line-height: 50px;
    margin-left: 10px;
</style>
