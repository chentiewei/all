<template>
    <div class="mail">
        <_menu :mess="mess"></_menu>
        <div class="mail_content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import _menu from '@/components/common/menu'
    export default {
      name: 'mail',
      data () {
        return {
          mess: { '收件箱': '/Inbox', '写信': '/Write', '重要': '/Import', '草稿': '/Draft', '垃圾箱': '/Dustbin', 0: '/mail_all' }
        }
      },
      components: {
        _menu
      }
    }
</script>


<style scoped>
    .mail{
        height:100%;
    }
    .mail_content{
        height:calc( 100% - 40px);
        background: #f3f3f4;
        overflow: auto;
        padding:20px;
    }

</style>