<template>
  <div class="index">
    <swiper :slideList="slideList" heighted="0"/>
    <div class="g-search">
      <div>
        <input type="text" v-model="name">
        <i @click="search"></i>
      </div>
    </div>
    <border/>
    <div class="title">
      <div></div>
      <span>杭州热门品牌</span>
      <router-link tag="i" :to="{name:'brandchoose'}">
      <i>全部品牌 <van-icon name="arrow" /></i>
      </router-link>
    </div>
    <brand :type="0"/>
    <border/>
    <div class="title">
      <div></div>
      <span>团结就是力量</span>
      <router-link class="s-more" tag="i" :to="{ name: 'tg' }"> <i>更多团购 <van-icon name="arrow" /></i></router-link>
    </div>
    <div class="g-carList">
      <div class="m-list">
        <div  v-for="(info,index) in tuanList" :key="index">
          <router-link :to="{ name: 'tgdetails',query:{id:info.id} }">
          <img :src="info.imageUrl+'?x-oss-process=image/resize,w_250'" alt="">
          <span>{{info.brandName}}</span>
          <p>已有<b>{{info.tuanerCount}}</b>人报名参团</p>
          </router-link>
        </div>       
      </div>
    </div>
  </div>
</template>

<script>
import border from '../common/border'
import brand from '../common/brand'
import swiper from '../common/swiper'
export default {
  name: 'index',
  data () {
    return {
      slideList: [
      ],
      tuanList:[],
      name:''
    }
  },
  created() {
    this.$nextTick(() => {
      this.timer = setInterval(() => {
          this.autoPlay()
      }, 4000)
    })
    this.getSlideshow();
    this.getTuanList();
  },
  methods:{
    go() {/*滑动开始*/
      this.timer = setInterval(() => {
          this.autoPlay()
      }, 4000)
    },
    stop() {/*滑动停止*/
      clearInterval(this.timer)
      this.timer = null
    },
    change(index) {/*改变下标 */
      this.currentIndex = index
    },
    autoPlay() {/*轮播开始*/
      this.currentIndex++
      if (this.currentIndex > this.slideList.length - 1) {
          this.currentIndex = 0
      }
    },
    getSlideshow(){
      this.$axios.get("/index/slideshow?page=1&row=5").then((res) => {
        this.slideList = res.rows;
      })
    },   
    getTuanList(){
        var p = {
          page:1,
          rows:20
        }
        this.$axios.get("/index/hot_tuan/list",p).then((res) => {
          this.tuanList = res.rows;
        })
    },
    search(){
      this.$router.push({ name: 'car', params: { searchWord:this.name }});
    }
  },
  components: {
    border,
    brand,
    swiper
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.g-search
  height 185px
  width 100%
  div
    height 105px;
    width 1000px
    margin 0 auto
    padding-top 40px
    position relative
    input
      width 100%
      height 100%
      border 1px solid #d2d2d2
    i
      position absolute
      top 40px
      right 0
      width 105px
      height 105px
      background url(../../assets/images/search.png) no-repeat center center
      background-color #e83644
      background-size 80% 80%
.g-carList
  .m-list
    width 1000px
    margin 40px auto 0
    display flex
    flex-wrap wrap
    div
      width 480px
      margin-right 40px
      margin-bottom 30px
      &:nth-child(2n)
        margin 0
      span
        font-size 39px
        color #1b1b1b
        display block
        text-align center
        margin-top 30px
      p
        text-align center
        color #959595
        font-size 36px
        margin-top 15px
        b
          color #e83644
      img
        width 480px
        height 320px
</style>
