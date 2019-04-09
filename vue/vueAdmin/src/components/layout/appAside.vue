<template>
  <div class="appAside">
    <el-menu class="el-menu-vertical-demo" :collapse="isCollapse" :router="router" background-color="#304156"
             text-color="#bfcbd9" active-text-color="#409eff">
      <template v-for="(v,i) in newrouter">
        <el-menu-item v-if="!v.children" :index="v.path" :key="i">
          <i class="el-icon-setting"></i>
          <span slot="title">{{v.name}}</span>
        </el-menu-item>
        <el-submenu v-else-if="v.children" :index="v.name" :key="i">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">{{v.name}}</span>
          </template>
          <el-menu-item :index="k.path" v-for="(k,j) in v.children" :key="i+'-'+j">{{k.name}}</el-menu-item>
        </el-submenu>
      </template>
    </el-menu>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex';

  export default {
    name: 'appAside',
    data() {
      return {
        router: true
      }
    },
    computed: {
      ...mapGetters([
        'newrouter',
        'isCollapse'
      ])
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
  .appAside
    height: 100%;
    position: fixed;
    font-size: 0;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 1001;
    overflow: hidden;

  .el-menu-item [class^=el-icon-], .el-submenu [class^=el-icon-]
    font-size: 15px
    width: auto

  .el-menu-vertical-demo
    height: 100%

  .el-menu-vertical-demo:not(.el-menu--collapse)
    width: 180px;
    min-height: 400px;
</style>
