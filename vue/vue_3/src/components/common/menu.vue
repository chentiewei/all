<template>
  <div>
    <el-menu  :default-active="mos" class="el-menu-demo" mode="horizontal" @select="handleSelect" router>
      <el-menu-item v-for="(v,k,i) in mess" v-if="k!=0" :index="v" :key="i">{{k}}</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
  export default {
    name: 'menu',
    data () {
      return {
        mos: this.mess[0]
      }
    },
    props: ['mess'],
    created () {
    },
    methods: {
      handleSelect (key, keyPath) {
        console.log(key, keyPath)
      }
    }
  }
</script>


<style scoped>
  .el-menu--horizontal .el-menu-item{
    height: 40px;
    line-height: 40px;
  }
</style>