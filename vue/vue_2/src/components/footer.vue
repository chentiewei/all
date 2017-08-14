<template>
  <div class="g-footer">
    <router-view></router-view>
    <footer class="g-nav">
      <router-link :to="{name:'maintenance'}" class="m-navIcon">
        <span class="icon-service"></span>
        <p>维修</p>
      </router-link>
      <router-link :to="{name:'center'}" class="m-navIcon">
        <span class="icon-convenient"></span>
        <p>便民</p>
      </router-link>
      <router-link :to="{name:'repair'}" class="m-navIcon">
        <span class="icon-shua"></span>
        <p>装修</p>
      </router-link>
      <router-link :to="{name:'personal'}" class="m-navIcon">
        <span class="icon-personal"></span>
        <p>个人中心</p>
      </router-link>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'footer'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import "../assets/icon/style.css";
  .g-footer{
    padding-bottom: 50px;
  }
  .g-nav{
    width:100%;
    height: 50px;
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 1000;
    background:rgb(250,250,250);
    display: flex;
    justify-content: space-around;
    align-items: center;
    color:#929292;
  }
  .m-navIcon{
    text-align: center;
    padding:10px;
  }
  .g-nav p{
    margin-top: 5px;
    font-size: 10px;
  }
  .active{
    color:#0c1227;
  }
</style>
