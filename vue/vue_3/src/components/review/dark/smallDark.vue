<template>
    <div class="small_dark">
        <_menu :mess="mess"></_menu>
        <div class="apply_content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import _menu from '@/components/common/menu'
    export default {
      name: 'small_dark',
      data () {
        return {
          mess: { '和谐库': '/chapted', 0: '/chapted' }
        }
      },
      components: {
        _menu
      }
    }
</script>


<style scoped lang="less">
    .small_dark{
        height:100%;
        .apply_content{
            height:calc(~"100% - 40px");
            padding:20px;
        }
    }
</style>