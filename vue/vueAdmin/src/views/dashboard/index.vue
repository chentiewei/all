<template>
  <div class="dashboard-container">
    <img src="../../assets/img/welcome.png" alt="">
  </div>
</template>

<script>

export default {
  name: 'Dashboard',
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .dashboard-container{
    img{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
    }
  }
</style>
