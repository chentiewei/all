<template>
  <div>
    <div class="header">
      <router-link v-for="(v,i) in newrouter" :key="i" :to="{name:v.name}">{{v.name}}</router-link>
    </div>
    <div class="main">
      <router-view></router-view>
    </div>
    <el-col :span="1" class="out">
      <div class="logout_box" @click="logout()">退出</div>
    </el-col>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  export default {
    name: 'home',
    data () {
      return {
        newrouter:this.$store.state.newrouter
      }
    },
    created(){
    },
    computed: {
      /*...mapGetters([
        'newrouter'
      ])*/
    },
    methods: {
      logout(){
        this.$store.dispatch('Logout').then(() => {
          this.$router.push({ path: '/login' });
        }).catch(err => {
          this.$message.error(err);
        });
      }
    },
    mounted(){
    }
  }
</script>

<style scoped lang="stylus">
  .header
    padding 0px
    a
      padding 30px
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
