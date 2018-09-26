<template>
  <div class="page" v-show="total>0">
    <i class="g-prve" :class="{'no':vid==1}" @click="prvePage">上一页</i>
    <div class="g-num">
      <span v-for="(v,i) in total" :key="i" :class="{'active':v==vid}" @click="page(v)">{{v}}</span>
    </div>
    <i class="g-next" :class="{'no':vid==total}" @click="nextPage">下一页</i>
  </div>
</template>

<script>
  export default {
    name: 'page',
    data(){
      return {
        vid:this.current
      }
    },
    methods:{
      page(v){/*页码选择*/
        this.vid=v;
        this.$emit("changeData",this.vid);
      },
      nextPage(){/*下一页*/
        if(this.vid<=(this.list.length-1)){
          this.vid+=1;
          this.$emit("changeData",this.vid);
        }
      },
      prvePage(){/*下一页*/
        if(this.vid>=2){
          this.vid-=1;
          this.$emit("changeData",this.vid);
        }
      }
    },
    props:{
      current:0,
      total:0
    }
  }
</script>


<style scoped lang="stylus">
.page
  text-align center
  margin-bottom 20px
.g-num,.g-prve,.g-next,.g-num span
  display inline-block
.g-prve,.g-next,.g-num span
  width 70px
  height 30px
  line-height 30px
  color #1b1b1b
  font-size 14px
  font-style normal
  text-align center
  border 1px solid #dcdcdc
  border-radius 5px
  cursor pointer
.g-prve,.g-next,.g-num span
  &.active,&:hover
      color #fff
      background #e93644
      border-color #e93644
.g-prve,.g-next
  &.no
    background #eee
    font-size 14px
    color #a0a0a0
    border-color #eee
    cursor not-allowed
.g-prve
  margin-right 5px
.g-next
  margin-left 5px
.g-num
  span
    width auto
    padding 5px 10px
    line-height normal
    margin 0 5px

</style>