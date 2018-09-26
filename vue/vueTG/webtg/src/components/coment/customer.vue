<template>
  <div class="customer">
    <div class="g-table">
      <div class="m-title">最新10位报名客户</div>
      <div class="m-content">
        <table>
          <thead>
            <tr>
              <th>姓名</th>
              <th>手机号码</th>
              <th>城市</th>
              <th>车型</th>
              <th>报名时间</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(info,index) in datas" :key="index">
              <td>{{info.name}}</td>
              <td>{{info.phone}}</td>
              <td>{{info.cityName}}</td>
              <td>{{info.seriesName}}</td>
              <td>{{info.createTime}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import store from '../../store/store.js'
  export default {
    name: 'customer',
    data(){
      return {
      }
    },
    computed:{
      datas: function () {      
        let info = store.state.carSigns;
        if(!this.$util.empty(info)){
          return store.state.carSigns
        }else{
          return "";
        }
      }      
    }
  }
</script>


<style scoped lang="stylus">
.g-table
  .m-title
    color #1b1b1b
    font-size 14px
    height 40px
    line-height 40px
    border-top 1px solid #dcdcdc
    text-align center
  .m-content
    font-size 14px
    text-align center
    color #1b1b1b
    table
      width 100%
      tr
        width 100%
        th,td
          background #eeeeee
          height 40px
          line-height 40px
          width 20%
      thead,tbody
        width 100%
        tr
          border-bottom 1px solid #dcdcdc
      thead
        tr
          border-top 1px solid #dcdcdc
      tbody
          td
            background #fff
</style>