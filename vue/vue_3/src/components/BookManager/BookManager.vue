<template>
  <div class="BookManager">
    <_menu :mess="mess"></_menu>
    <div class="book_content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import _menu from '@/components/common/menu'
  export default {
    name: 'BookManager',
    data () {
      return {
        mess: { '书籍列表': '/book_list', '上架书籍': '/racking_book', '下架书籍': '/sold_book', '添加书籍': '/add_book', 0: '/book_list' }
      }
    },
    components: {
      _menu
    }

  }
</script>


<style scoped lang="less">
  .BookManager{
    height:100%;
    .book_content{
      height:calc(~"100% - 40px");
      padding:20px;
    }
  }
</style>