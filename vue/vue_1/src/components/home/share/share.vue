<template>
  <div class="share">
    <div v-for="(item,index) in data">
        <div class="im_top">
          <img :src="img">
        </div>
        <div>
          <div class="share_top">
            <span>
              名字
            </span>
            <i>时间</i>
          </div>
          <div class="share_winner">获奖单位</div>
          <div class="share_text">获奖感想</div>
          <div class="share_img">
            <transition name="share_samll">
              <div class="share_samll" v-show="!isShow[index]" :data-index="index" :data-d="!isShow[index]">
                <img :src="img" alt="" @click="f">
                <img :src="img" alt="" @click="f" class="share_padding">
                <img :src="img" alt="" @click="f">
              </div>
            </transition>
            <transition name="share_big">
              <div class="share_big share_view" v-show="isShow[index]" :data-index="index" :data-d="isShow[index]">
                <img :src="onimg" alt="" @click="f">
              </div>
            </transition>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'share',
    data(){
      return{
        img:'',
        onimg:'',
        data:4,
        isShow:{},
      }
    },
    methods:{
        f:function(e){
          const target=e.target;
          this.onimg=target.src;
          let index=target.parentElement.getAttribute('data-index');
          this.isShow[index]=!this.isShow[index];
        }
    },
    computed:{
    },
    created() {
      for(var i=0;i<this.data;i++){
        this.$set(this.isShow,i,false);
      }
      const me=this;
      this.$http.get('http://localhost:8080/static/data.json')
        .then(function (response) {
          me.img=response.data.seller.avatar;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    components: {
    },
  }

</script>
<style>
  .share{margin-bottom:65px;}
  .share>div{
    display: flex;
    padding-bottom:15px;
    border-bottom:1px solid #ddd;
    margin-top:25px;
  }
  .share>div>div{
    flex: 1;
    padding-right:1.1rem;
  }
  .share .im_top{
    flex:0 0 3.4rem;
    text-align:center;
    padding:0;
  }
  .im_top img{
    width:2rem;
    border-radius: 50%;
  }
  .share_top{
    font-size:0.6rem;
  }
  .share i{
    float:right;
    font-style:normal;
  }
  .share_winner{
    margin-top:6px;
    font-size:0.55rem;
  }
  .share_text{
    margin-top:12px;
    font-size:0.7rem;
  }
  .share_img{
    margin-top:16px;
  }
  .share_img .share_samll{
    display: flex;
  }
  .share_img .share_samll img{
    flex: 1;
    width:4.5rem;
    height:4.5rem;
  }
  .share_padding{
    margin:0 7px;
  }
  .share_big{
    text-align: center;
  }
  .share_big img{
    width:100%;
  }
  .share_samll-enter-active,
  .share_samll-leave{
    transition: all .8s ease;
    opacity: 1;
  }
  .share_samll-leave-active,
  .share_samll-enter{
    opacity: 0;
  }
  .share_view{
    transition: all .8s ease;
  }
  .share_big-enter-active,
  .share_big-leave{
    width:100%;
  }
  .share_big-leave-active,
  .share_big-enter{
    width:0;
  }
</style>
