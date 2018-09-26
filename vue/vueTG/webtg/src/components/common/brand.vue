<template>
  <div class="brand">
    <div class="g-brand"  @mouseleave="brand=0">
      <div class="w1000">
        <ul>
           <!-- <li>
            <div>
            <img src="../../assets/images/carbrand.png" alt="">
            </div>
            <span>北京现代haha </span>
          </li> -->

          <li v-for="(info,index) in hotBrands" :key="index" @click="chooseBrand(info.brandId)">
            <div>
              <img :src="'http://image.isite.new4s.com/car_logos/logo_' + info.brandId + '.jpg'" alt="">
            </div>
            <span>{{info.brandName}}</span>
          </li>
          
          <li @click="loadMore">
            <div>
              <img :class="{'go':brand}" src="../../assets/images/arrow-bottom.png" alt="">
            </div>
            <span>更多</span>
          </li>
        </ul>
        <div class="g-brand-details" v-show="brand">
          <div class="w1000">
            <div class="m-details">
              <div class="half">
                <template v-for="(info,index) in data1">
                  <div class="s-word" :key="index">
                    <span class="wordName">{{info.fletter}}</span>
                    <div class="name">
                      <span v-for="(b,i) in info.datas" :key="i" @click="chooseBrand(b.id)">{{b.title}}</span>                     
                    </div>
                  </div>
                </template>     
              </div>    
              <div class="half">
                <template v-for="(info,index) in data2">
                  <div class="s-word" :key="index">
                    <span class="wordName">{{info.fletter}}</span>
                    <div class="name">
                      <span v-for="(b,i) in info.datas" :key="i" @click="chooseBrand(b.id)">{{b.title}}</span>                     
                    </div>
                  </div>
                </template>     
              </div>    
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from "vue";

  export default {
    name: 'brand',
    data(){
      return {
        brand:0,
        currentBrand:this.brandId,
        moreData:null,
        data1:[],
        data2:[],
        half:0
      }
    },
    methods:{
      loadMore(){
        this.brand = !this.brand;
        if(this.moreData==null){
          this.moreData = [];
          let that = this;
          this.$axios.get("/sys/brand/list").then((res) => {
            res.forEach(element => {
              var hasAttr = false;
              that.moreData.forEach(item=>{
                if(item.fletter == element.fletter){
                  hasAttr = true;
                  item.datas.push(element);
                }
              })
              if(!hasAttr){
                var item = {fletter:element.fletter,datas:[element]};
                that.moreData.push(item);
              }
            });

            this.half = this.$util.toInt(this.moreData.length/2);
            for(var i = 0 ; i < this.moreData.length; i ++){
              if(i<this.half){
                this.data1.push(this.moreData[i]);
              }else{
                this.data2.push(this.moreData[i]);
              }
            }
          })
        }
      },
      chooseBrand(brandId){
        this.$emit("chooseBrand",brandId);
        this.brand=0;
      }
    },
    props:{
      brandId:0,
      hotBrands:null
    }
  }
</script>


<style scoped lang="stylus">
.g-brand
  background #f0f3f5
  height 120px
  position relative
  ul
    font-size 0
    li
      width 60px
      color #000000
      font-size 14px
      text-align center
      display inline-block
      margin-right 34px
      cursor pointer
      div
        width 40px
        height 40px
        line-height 40px
        text-align center
        margin 20px auto 0 
        img
          max-width 40px
          max-height 40px
          vertical-align: sub;
      &:last-child
        margin-right 0
        img 
          margin-bottom 10px
          transition all 0.5s
          &.go
            transform rotate(180deg)
      span
        display inline-block
        margin-top 20px
        width 100%
        white-space nowrap
        overflow hidden
        text-overflow ellipsis
.g-brand-details
  position absolute
  top 120px
  background #fff
  z-index 10
  .half
    display inline-block
    margin-right 90px
    vertical-align: top;
    &:last-child
      margin-right 0
  .m-details
    overflow hidden
    width 100%
    height 680px
    padding 45px 50px
    border 1px solid #e6e3ed
    .s-word
      margin-bottom 15px
      .wordName
        font-size 16px
        color #e93644
        font-weight bold
      .name
        color #1b1b1b
        font-size 0
        width 400px
        span
          display inline-block
          font-size 14px
          margin-right 10px
          margin-top 15px
          cursor pointer
          &:hover,&.active
            color #e93644
</style>
