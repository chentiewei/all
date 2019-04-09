<template>
  <div class="navbar">
    <div class="navbarSvg" @click="collapse">
      <img src="../assets/images/gengduo.svg" :class="{'rt':isCollapse}">
    </div>
    <el-breadcrumb separator="/" class="navList">
        <el-breadcrumb-item v-for="item in realList" :to="item.path">{{item.name}}</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="userImg">
      <el-dropdown>
        <div class="el-dropdown-link avatar-wrapper">
          <img src="https://avatars0.githubusercontent.com/u/22538215?s=400&u=84e3500b9a133ea13b75c4396dd9535eba9213b0&v=4" alt="">
          <i class="el-icon-caret-bottom"></i>
        </div>
        <el-dropdown-menu slot="dropdown">
          <div @click="RPush({ name: 'dashboard'})">
            <el-dropdown-item>首页</el-dropdown-item>
          </div>
          <div @click="RPush({ name: 'dashboard'})">
            <el-dropdown-item>设置</el-dropdown-item>
          </div>
          <div @click="logout()">
            <el-dropdown-item divided>退出</el-dropdown-item>
          </div>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
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
        matched = [{ path: '/', name:'蜗系统'}].concat(matched)
        this.realList = matched
      },
      logout() {//退出
        this.$store.dispatch('Logout').then(() => {
          this.$router.push({path: '/login'});
        }).catch(err => {
          this.$message.error(err);
        });
      },
      RPush(strRouter){//路由跳转
        this.$router.push(strRouter)
      },
      collapse(){
        this.$store.commit('SET_COLLAPSE',!this.isCollapse)
      }
    },
    computed: {
      ...mapGetters([
        'isCollapse'
      ])
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
  .navbar
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #e6e6e6;
  .navbarSvg
    line-height: 58px;
    height: 50px;
    float: left;
    padding: 0 10px;
    img
      width 20px
      cursor pointer
      transition:transform .2s ease-in;
      &.rt
        transform:rotate(90deg)
  .navList
    display: inline-block;
    font-size: 14px;
    line-height: 50px;
    margin-left: 10px;
  .userImg
    height: 50px;
    display: inline-block;
    position: absolute;
    right: 20px;
    .avatar-wrapper
      cursor: pointer;
      margin-top: 5px;
      position: relative;
      line-height: normal;
      img
        width: 40px;
        height: 40px;
        border-radius: 10px;
</style>
