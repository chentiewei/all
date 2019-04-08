<template>
  <div class="main">
    <router-view></router-view>
    <el-col :span="1" class="out">
      <div class="logout_box" @click="logout()">退出</div>
    </el-col>
  </div>
</template>

<script>
  export default {
    name: 'home',
    data() {
      return {
        newrouter: this.$store.state.newrouter,

      }
    },
    created() {
    },
    methods: {
      logout() {
        this.$store.dispatch('Logout').then(() => {
          this.$router.push({path: '/login'});
        }).catch(err => {
          this.$message.error(err);
        });
      }
    }
  }
</script>

<style scoped lang="stylus">
  .nav_box
    border-bottom 0px

  .out
    margin 15px auto
    float none

  .logout_box
    background-color #545c64
    line-height 60px
    width 100%
    color #fff

  .main
    margin-top 100px

</style>
