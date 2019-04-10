<template>
  <div class="app-wrapper">
    <el-container>
      <el-aside :width="isCollapse?'64px':'180px'">
        <appAside/>
      </el-aside>
      <div class="main-container" :class="{'pl':isCollapse}">
        <el-header height="50px" style="padding:0;">
          <navbar/>
        </el-header>
        <el-main style="padding: 0">
          <div class="app-main">
            <transition name="fade-transform" mode="out-in">
              <router-view/>
            </transition>
          </div>
        </el-main>
      </div>
    </el-container>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import appAside from './appAside'
import navbar from './navbar'

export default {
  name: "app",
  data(){
    return{
    }
  },
  created(){

  },
  computed: {
    ...mapGetters([
      'isCollapse'
    ])
  },
  methods:{

  },
  components: {
    appAside,
    navbar
  }
};
</script>

<style lang="stylus">
  body
    margin 0
  .el-header
    padding: 0
  .main-container
    width 100%
    min-height: 100%;
    transition: padding-left .28s;
    padding-left: 180px;
    position: absolute;
    box-sizing border-box
    &.pl
      padding-left 65px
  .app-main
    min-height: calc(100vh - 50px);
    position: relative;
    overflow: hidden;
</style>
