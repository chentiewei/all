<template>
  <div class="contrast">
    <div class="g-content">
      <div class="m-bit" v-for="(v,i) in contrastList" :key="i">
        <span>{{v.title}}{{v.id}}</span> <i @click="removeThis(i)"></i>
      </div>
      <router-link class="m-add" :to="{name:'carchoose'}" tag="div">
        <img src="../../assets/images/addcode.png" alt="">
      </router-link>
    </div>
    <div class="btn-submit" @click="contrast">开始比对</div>
        <!-- <router-link class="btn-submit" :to="{name:'contrastdetails'}" tag="div">开始比对</router-link> -->
    <div class="g-bk"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  import store from '../../store/store.js'
  import bus from '../common/bus'
  export default {
    name: "contrast",
    created (){
      var that = this;
      bus.$on('addCar', function(data) {
        var has = false;
        that.contrastList.forEach(element => {
          if(element.id ==data.id){
            has = true;
          }
        });
        if(has){
          that.$toast({position:'bottom',message:'您已添加了该车型'});
        }else{
          that.contrastList.push(data);
        }
      });      
    },
    data () {
      return {
        contrastList:[]
      }
    },
    methods:{
      removeThis(_i){
        this.contrastList.splice(_i,1);
      },
      contrast(){
        if(this.$util.empty(this.contrastList)){
          this.$toast({position:'bottom',message:'请选择要对比的车辆'});
          return;
        }
        var ids = "";
        this.contrastList.forEach(element=>{
          if(ids.length>0) ids += ",";
          ids += element.id;         
        })
        this.$router.push({name:'contrastdetails', query:{ids:ids}});
      }
    }
  }
</script>

<style scoped lang="stylus">
.contrast
  .g-content
    padding-bottom 120px
    .m-bit
      background #fff
      height 120px
      line-height 120px
      border-bottom 1px solid #d4d4d4
      padding 0 40px
      span
        display inline-block
        color #1b1b1b
        font-size 36px
        width 900px
        white-space nowrap
        overflow hidden
        text-overflow ellipsis
        vertical-align middle
      i
        display inline-block
        background url(../../assets/images/close.png) no-repeat center center
        background-size 100% 100%
        width 50px
        height 50px
        vertical-align middle
    .m-add
      height 120px
      line-height 120px
      text-align center
      background #fff
      img
        width 100px
        height 100px
        vertical-align middle
  .btn-submit
    height 120px
    line-height 120px
    background #e83644
    font-size 45px
    color #fff
    text-align center
    position fixed
    bottom 0
    width 100%
    cursor pointer
  .g-bk
    position fixed
    z-index -1
    background #eeeeee
    top 0
    bottom 0
    right 0
    left 0
</style>
