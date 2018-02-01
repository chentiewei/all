<template>
    <div class="apply_for">
        <_menu :mess="mess"></_menu>
        <div class="apply_content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import _menu from '@/components/common/menu'
    export default {
      name: 'apply_for',
      data () {
        return {
          mess: { '新书审核': '/newBook', '章节审核': '/Chapter', '标记作家': '/starWriter', 0: '/sortBook' }
        }
      },
      components: {
        _menu
      }
    }
</script>


<style scoped lang="less">
    .apply_for{
      height:100%;
      .apply_content{
        height:calc(~"100% - 40px");
        padding:20px;
      }
    }
</style>