<template>
  <div class="all">
    <div class="mainContent">
      <router-view/>
    </div>
    <navAll/>
  </div>
</template>

<script>
import navAll from './common/navAll'
export default {
  name: 'all',
  data () {
    return {
    }
  },
  created () {
    console.log("all created");    
  },
  components: {
    navAll
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.mainContent
  margin-bottom 220px
</style>

