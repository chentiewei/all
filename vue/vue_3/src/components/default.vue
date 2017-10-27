<template>
  <div class="defau">
    <div class="defau_all">
      <div class="defau_hint">
        <div>
          <i class="iconfont icon-setup"></i>
          <div>
            <span class="info-box-text">CPU TRAFFIC</span>
            <span class="info-box-number">90%</span>
          </div>
        </div>
        <div>
          <i class="iconfont icon-integral"></i>
          <div>
            <span class="info-box-text">Sales</span>
            <span class="info-box-number">41,410</span>
          </div>
        </div>
        <div>
          <i class="iconfont icon-group"></i>
          <div>
            <span class="info-box-text">NEW MEMBERS</span>
            <span class="info-box-number">41,410</span>
          </div>
        </div>
      </div>
      <div class="defau_main">
        <div id="defau_cpu"></div>
        <div id="defau_man"></div>
        <div id="defau_sales"></div>
      </div>

    </div>
  </div>
</template>

<script>
  import echarts from 'echarts'
  import 'echarts/map/js/china'
  export default {
    name: 'defau',
    data () {
      return {
        manChart: null,
        cpuChart: null,
        salesChart: null
      }
    },
    methods: {
      drawMan (id) {
        this.manChart = echarts.init(document.getElementById(id))
        this.manChart.setOption({
          tooltip: {
            trigger: 'item'
          },
          toolbox: {
            show: true,
            orient: 'vertical',
            left: 'right',
            top: 'center'
          },
          series: [
            {
              name: 'iphone3',
              type: 'map',
              mapType: 'china',
              roam: false,
              label: {
                emphasis: {
                  show: true
                }
              },
              data: [
                { name: '北京', value: Math.random() * 1000 },
                { name: '天津', value: Math.random() * 1000 },
                { name: '上海', value: Math.random() * 1000 },
                { name: '重庆', value: Math.random() * 1000 },
                { name: '河北', value: Math.random() * 1000 },
                { name: '河南', value: Math.random() * 1000 },
                { name: '云南', value: Math.random() * 1000 },
                { name: '辽宁', value: Math.random() * 1000 },
                { name: '黑龙江', value: Math.random() * 1000 },
                { name: '湖南', value: Math.random() * 1000 },
                { name: '安徽', value: Math.random() * 1000 },
                { name: '山东', value: Math.random() * 1000 },
                { name: '新疆', value: Math.random() * 1000 },
                { name: '江苏', value: Math.random() * 1000 },
                { name: '浙江', value: Math.random() * 1000 },
                { name: '江西', value: Math.random() * 1000 },
                { name: '湖北', value: Math.random() * 1000 },
                { name: '广西', value: Math.random() * 1000 },
                { name: '甘肃', value: Math.random() * 1000 },
                { name: '山西', value: Math.random() * 1000 },
                { name: '内蒙古', value: Math.random() * 1000 },
                { name: '陕西', value: Math.random() * 1000 },
                { name: '吉林', value: Math.random() * 1000 },
                { name: '福建', value: Math.random() * 1000 },
                { name: '贵州', value: Math.random() * 1000 },
                { name: '广东', value: Math.random() * 1000 },
                { name: '青海', value: Math.random() * 1000 },
                { name: '西藏', value: Math.random() * 1000 },
                { name: '四川', value: Math.random() * 1000 },
                { name: '宁夏', value: Math.random() * 1000 },
                { name: '海南', value: Math.random() * 1000 },
                { name: '台湾', value: Math.random() * 1000 },
                { name: '香港', value: Math.random() * 1000 },
                { name: '澳门', value: Math.random() * 1000 }
              ]
            }
          ]
        })
      },
      drawCpu (id) {
        this.cpuChart = echarts.init(document.getElementById(id))
        this.cpuChart.setOption({
          title: {
          },
          tooltip: {},
          legend: {
          },
          radar: {
            name: {
              textStyle: {
                color: '#fff',
                backgroundColor: '#999',
                borderRadius: 3,
                padding: [3, 5]
              }
            },
            indicator: [
              {name: '销售', max: 6500},
              {name: '管理', max: 16000},
              {name: '信息技术', max: 30000},
              {name: '客服', max: 38000},
              {name: '研发', max: 52000},
              {name: '市场', max: 25000}
            ]
          },
          series: [{
            name: '预算 ',
            type: 'radar',
            data: [
              {
                value: [4300, 10000, 28000, 35000, 50000, 19000],
                name: '预算分配'
              }
            ]
          }]
        })
      },
      drawSales (id) {
        this.salesChart = echarts.init(document.getElementById(id))
        this.salesChart.setOption({
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
              crossStyle: {
                color: '#999'
              }
            }
          },
          xAxis: [
            {
              type: 'category',
              data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
              axisPointer: {
                type: 'shadow'
              }
            }
          ],
          yAxis: [
            {
              type: 'value',
              name: '金额',
              min: -50,
              max: 250,
              interval: 50,
              axisLabel: {
                formatter: '{value} 万'
              }
            },
            {
              type: 'value',
              name: '百分比',
              min: -20,
              max: 100,
              interval: 20,
              axisLabel: {
                formatter: '{value} %'
              }
            }
          ],
          series: [
            {
              name: '收入',
              type: 'bar',
              itemStyle: {
                normal: {
                  color: '#00c0ef'
                }
              },
              data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
            },
            {
              name: '支出',
              type: 'bar',
              itemStyle: {
                normal: {
                  color: '#df6859'
                }
              },
              data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
            },
            {
              name: '利润',
              type: 'line',
              itemStyle: {
                normal: {
                  color: '#63481d'
                }
              },
              data: [0.6, 1, 2, 4.5, 3.2, 3.1, -6.7, 40, 16.1, -1.18, -0.4, -1]
            }
          ]
        })
      }
    },
    mounted () {
      this.$nextTick(function () {
        this.drawMan('defau_man')
        this.drawCpu('defau_cpu')
        this.drawSales('defau_sales')
      })
    }
  }
</script>


<style scoped>
  .defau{
    height:100%;
    padding:20px;
    overflow: auto;
  }
  .defau_all{
    height:100%;
    background:#fff;
  }
  .defau_hint{
    display: flex;
    height:130px;
  }
  .defau_hint>div{
    flex:1;
    background: #ecf0f5;;
    margin:20px 20px;
    display: flex;
  }
  .defau_hint div i{
    display: inline-block;
    flex: 0 90px;
    width:90px;
    height:90px;
    text-align: center;
    line-height: 90px;
    color:#fff;
    font-size: 45px;
    background:#f39c12;
  }
  .defau_hint div:nth-child(1) i{
    background:#00c0ef;
  }
  .defau_hint div:nth-child(2) i{
    background:#dd4b39 ;
  }
  .defau_hint div>div{
    padding: 10px 15px;
    text-transform: uppercase;
  }
  .defau_hint div span.info-box-text{
    display: block;
    font-size: 14px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width:100%;
  }
  .defau_hint div span.info-box-number{
    display: block;
    font-weight: bold;
    font-size: 18px;
    margin-top:10px;
  }
  .defau_main{
    height:calc(100% - 130px);
    display: flex;
    flex-wrap:wrap;
    overflow: auto;
  }
  #defau_man,#defau_cpu{
    width:50%;
    height:300px;
  }
  #defau_sales{
    height:300px;
    width:100%;
  }
</style>