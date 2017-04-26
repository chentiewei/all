<template>
  <div class="all">
    <div class="all_details" v-for="(item,key) in seller.ratings" v-if="key<=7">
      <div class="all_img">
        <img :src="item.avatar" alt="">
      </div>
      <div :class="{red:key%2==0}">{{key+1}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'all',
    data(){
      return{
        seller:'',
      }
    },
    methods: {},
    computed: {
    },
    created:function(){
      const me=this;
      this.$http.get('http://localhost:8080/static/data.json')
        .then(function (response) {
            console.log(response.data);
            me.seller=response.data;
        })
        .catch(function (error) {
          console.log(error);
        });

    },
    components: {}
  }
</script>
<style>
  .all{
    margin-bottom:54px;
    text-align: center;
  }
  .all_details{
    display: flex;
    height:6rem;
  }
  .all_details div{
    flex: 1;
  }
  .all_details .all_img{
    flex:0 0 6.3rem;
    margin:1rem 0;
  }
  .all_img img{
    width:4rem;
  }
  .red{
    background:#e4393c;
    color:#fff;
  }
</style>
