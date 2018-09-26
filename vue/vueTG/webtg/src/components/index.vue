<template>
  <div class="index">
    <div class="g-swiper">
      <transition-group tag="ul" class='slide-ul' name="list">
        <li v-for="(list,index) in slideList" :key="index" v-show="index===currentIndex">
          <a :href="getUrl(list.redirectUrl)" target="_blank">
            <img :src="list.imageUrl">
          </a>
        </li>
      </transition-group>
      <div class="m-pos">
        <div class="w1000">
          <div class="s-title">
            <div>车主流，一个只做<b>汽车特卖</b>的网站</div>
            <p>已有<b>83,282</b>人通过车巡平台买车</p>
          </div>
          <div class="s-form">
            <form action="">
              <div class="input-free" @mouseleave="brandC.show=1">
                <div @click="brandC.show=!brandC.show">{{brandC.title}}<i></i></div>
                <ul :class="{'dis':brandC.show}">
                  <li v-for="(v,i) in brand" :key="i" @click="checkBrand(v)">{{v.title}}</li>
                </ul>
              </div>
              <div class="input-free" @mouseleave="seriesC.show=1">
                <div @click="seriesC.show=!seriesC.show">{{seriesC.title}}<i></i></div>
                <ul :class="{'dis':seriesC.show}">
                  <li v-for="(v,i) in series" :key="i" @click="seriesC.id=v.id;seriesC.title=v.title;seriesC.show=1;">{{v.title}}</li>
                </ul>
              </div>
              <button @click="buyCar">一口价</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="g-allBuy">
      <div class="w1000">
        <h1>团结就是力量</h1>
        <div class="m-brandList">
          <div class="s-hot">热门品牌 :</div>
          <div class="s-brand">
            <router-link :key="index" v-for="(info,index) in hotBrands" :to="{ name: 'teambuying',params:{brandId:info.brandId} }">
              <span>{{info.brandName}}</span>
            </router-link>
            <!-- <span v-for="(info,index) in hotBrands" :key="index">{{info.brandName}}</span> -->
          </div>
          <router-link class="s-more" tag="div" :to="{ name: 'teambuying' }">更多团购 >></router-link>
        </div>
        <div class="m-carList">
          <div class="s-car" v-for="(info,index) in tuanList" :key="index">
            <router-link :to="{ name: 'teamdetails',query:{id:info.id} }">
            <img :src="info.imageUrl+'?x-oss-process=image/resize,w_250'" alt="">
            <span>{{info.brandName}}</span>
            <p>已有<b>{{info.tuanerCount}}</b>人报名参团</p>
            </router-link>
          </div>          
        </div>
      </div>
    </div>
    <div class="g-exhibition">
      <div class="w1000">
        <h1>数字智能展厅</h1>
        <div class="m-list">
          <ul>
            <li v-for="(info,i) in iehList" :key="i" :class="{'rbg08':rbgColor(i)}">
              <a :href="getUrl(info.redirectUrl)" target="_blank">
              <img :src="info.logo+'?x-oss-process=image/resize,w_80'" alt="">
              <span>{{info.brandName}}</span>
              </a>
            </li>
          </ul>
        </div>
        <div class="m-backImg">
          <img src="../assets/images/backImg.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: '',
    data(){
      return {
        slideList: [],
        currentIndex: 0,/*轮播图下标 */
        timer: '',/*轮播图定时器*/
        iehList:[],
        hotBrands:[],
        tuanList:[],
        brand:[],
        series:[],
        brandC:{title:'品牌',id:0, show:1},
        seriesC:{title:'车系',id:0,show:1}
      }
    },
    created() {
      this.$nextTick(() => {
        this.timer = setInterval(() => {
            this.autoPlay()
        }, 4000)
      })
      this.getSlideshow();
      this.getIeh();
      this.getHotBrand();
      this.getBrand();
      
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
      rbgColor(i){/*数字智能展厅色块*/
        if(i/4<1){
          return i%2;
        }else if(i/4<2){
          return i%2==0&&true;
        }else if(i/4<3){
          return i%2;
        }
      },
      getSlideshow(){
        this.$axios.get("/index/slideshow?page=1&row=5").then((res) => {
          this.slideList = res.rows;
        })
      },
      getIeh(){
        this.$axios.get("/index/distributor?page=1&row=11").then((res) => {
          this.iehList = res.rows;
        })
      },
      getHotBrand(){
        var p = {
          page:1,
          rows:20
        }
        this.$axios.get("/index/hot_brand",p).then((res) => {
          this.hotBrands = res.rows;
          this.getTuanList();
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
      getBrand(){
        this.$axios.get("/index/buy_car/brand/list",null).then((res) => {
          this.brand = res;
        })
      },
      getSeries(bid){
        this.$axios.get("/index/buy_car/"+bid+"/list",null).then((res) => {
          this.series = res;
        })
      },
      checkBrand(v){
        this.brandC.title=v.title;
        this.brandC.show=1;
        this.brandC.id = v.id;
        this.seriesC = {title:'车系',id:0,show:1};
        this.getSeries(v.id);
      },
      buyCar(){
        if(this.brandC.id == 0){
          return;
        }
        this.$router.push({ name: 'buycar', params: { brandId: this.brandC.id,seriesId:this.seriesC.id }});
      },
      getUrl(url){
        if(this.$util.empty(url)){
          return "#";
        }else{
          url =url.substr(0,7).toLowerCase() == "http://" ? url : "http://" + url;
          return url;
        }
      }


    }
  }
</script>

<style scoped lang="stylus">
  .g-swiper
    width 100%
    height 650px
    background-color #fff
    overflow hidden
    position relative
    .slide-ul
      width 100%
      height 100%
      li
        position absolute
        width 100%
        height 100%
        img
          width 100%
          height 100% 
    .m-pos
      position absolute
      top 0
      left 0
      width 100%
      height 100%
      padding-top 60px
      .s-form
        background rgba(0,0,0,0.5)
        width 880px
        height 90px
        margin 120px auto 0 
        border-radius 10px
        font-size 0
        .input-free
          width 325px
          height 50px
          display inline-block
          vertical-align bottom
          background #fff
          border 1px solid #434343
          margin-left 20px
          div
            width 100%
            height 100%
            line-height 50px
            font-size 18px
            color #1b1b1b
            text-indent 15px
            position relative
            i
              position absolute
              width 20px
              height 20px
              bottom 0
              right 0
              background url(../assets/images/arrow-right.png) no-repeat center center
          ul
            width 100%
            height 200px
            overflow auto
            background #fff
            text-indent 15px
            &.dis
              display none
            li
              font-size 14px
              line-height 40px
              line-height 40px
              cursor pointer
        button
          width 150px
          height 50px
          background #e93644
          border 0
          color #ffffff
          font-size 24px
          margin-top 20px
          margin-left 20px
      .s-title
        div,p
          color #1b1b1b
          font-size 48px
          text-align center
          b
            color #e93644
        p
          font-size 30px
          margin-top 30px
          b
            color 30px
  .carousel-items
    position: absolute;
    z-index: 10;
    top: 380px;
    width: 100%;
    margin: 0 auto;
    text-align: center;
    font-size: 0;
    span
      display inline-block
      height 6px
      width 30px
      margin 0 3px
      background-color #b2b2b2
      cursor pointer
    .active
      background-color $btn-color
  .g-allBuy
    background #f0f3f5
    padding-top 40px
    h1
      font-size 36px
      text-align center
      color #1b1b1b
      margin-bottom 40px
    .m-brandList
      margin-bottom 25px
      div
        display inline-block
        font-size 16px
      .s-brand
        font-size 0
        span
          font-size 16px
          padding 0 20px
          position relative
          cursor pointer
          &:after
            width 1px
            height 16px
            content ""
            position absolute
            top 3px
            right -1px
            background #959595
      .s-more
        float right
        cursor pointer
    .m-carList
      font-size 0
      .s-car
        display inline-block
        width 280px
        height 280px
        -webkit-box-shadow #666 0px 0px 10px
        -moz-box-shadow #666 0px 0px 10px
        box-shadow #666 0px 0px 10px
        border-radius 5px
        margin-bottom 40px
        padding 20px
        vertical-align: middle;
        &:nth-child(3n-1)
          margin 0 80px 40px
        img
          width 240px
          height 160px
        span
          margin-top 25px
          display block
          text-align center
          color #1b1b1b
          font-size 20px
        p
          font-size 16px
          color #1b1b1b
          text-align center
          margin-top 15px
          b
            color #e93644
  .g-exhibition
    background #fff
    height 800px
    padding-top 45px
    h1
      font-size 36px
      text-align center
      color #1b1b1b
      margin-bottom 40px
    .m-backImg
      width 1000px
      height 600px
      img
        width 100%
        height 100%
    .m-list
      position absolute
      ul
        font-size 0
        min-width 1000px
        width 1000px
        li
          width 250px
          height 200px
          display inline-block
          background rgba(0,0,0,.5)
          vertical-align middle
          text-align center
          padding-top 50px
          img
            max-width 80px
            max-height 80px
          &.rbg08
            background rgba(0,0,0,.8)
          span
            display block
            color #fff
            font-size 18px
            margin-top 25px
  .list-enter-to
    transition all 1s ease
    transform translateX(0)
  .list-leave-active
    transition all 1s ease
    transform translateX(-100%)
  .list-enter
    transform translateX(100%)  
  .list-leave
    transform translateX(0)
</style>
