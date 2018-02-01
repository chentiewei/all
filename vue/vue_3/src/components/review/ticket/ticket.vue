<template>
    <div class="ticket">
        <_menu :mess="mess"></_menu>
        <div class="apply_content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import _menu from '@/components/common/menu'
    export default {
      name: 'ticket',
      data () {
        return {
          mess: { '全部': '/tick_all', '处理中': '/in_hand', '未处理': '/untreated', '已解决': '/resolved', 0: '/tick_all' }
        }
      },
      components: {
        _menu
      }
    }
</script>


<style scoped lang="less">
    .ticket{
        height:100%;
        .apply_content{
          height:calc(~"100% - 40px");
          padding:20px;
        }
    }
</style>