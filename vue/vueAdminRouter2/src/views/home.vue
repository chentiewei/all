<template>
  <div>
    <div class="header">
      <div  v-for="(v,i) in newrouter" :key="i">
        <router-link :to="{name:v.name}"  v-if="!v.children">{{v.name}}</router-link>
        <div  v-else-if="v.children">{{v.name}}</div>
        <div v-for="(k,j) in v.children">
          <router-link  :to="{name:k.name}">{{k.name}}</router-link>
        </div>
      </div>
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
    div
      display inline-block
    a
      display inline-block
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
