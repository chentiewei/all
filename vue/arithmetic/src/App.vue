<template>
  <div id="app" v-cloak>
    <keep-alive>
      <router-view
              v-wechat-title="$route.meta.title"
              v-if="$route.meta.keepalive"
      />
    </keep-alive>
    <router-view
            v-wechat-title="$route.meta.title"
            v-if="!$route.meta.keepalive"
    />
    <div v-transfer-dom>
      <loading v-model="isLoading"></loading>
    </div>
    <div v-transfer-dom>
      <toast v-model="isToast.state" type="text" :text="isToast.text"></toast>
    </div>
  </div>
</template>
<script>
  import { Loading,Toast,TransferDomDirective as TransferDom } from 'vux'
  import { mapState } from 'vuex'
  export default {
    name: "app",
    data(){
      return{
      }
    },
    created(){
    },
    computed: {
      ...mapState({
        isLoading: state => state.dialog.isLoading,
        isToast: state => state.dialog.isToast
      })
    },
    methods:{
    },
    directives: {
      TransferDom
    },
    components: {
      Loading,
      Toast
    },
  };
</script>
<style lang="less">
  @import '~vux/src/styles/reset.less';
</style>

<style lang="stylus">
  @import "/assets/css/animation.styl"
  #app
    font-family:'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
  .vux-loading
    .weui-toast
      width: 4.5em;
      margin-left: -2.25em;
</style>
