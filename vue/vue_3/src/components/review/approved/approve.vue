<template>
    <div class="approve">
        <_menu :mess="mess"></_menu>
        <div class="apply_content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import _menu from '@/components/common/menu'
    export default {
      name: 'approve',
      data () {
        return {
          mess: { '新书通过': '/newApprove', '章节通过': '/chapterApprove', '历史通过': '/historyApprove', 0: '/sortBook' }
        }
      },
      components: {
        _menu
      }
    }
</script>


<style scoped lang="less">
  .approve{
    height:100%;
    .apply_content{
      height:calc(~"100% - 40px");
      padding:20px;
    }
  }
</style>