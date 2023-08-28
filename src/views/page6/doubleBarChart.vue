<template>
  <div class="funnel"></div>
</template>

<script>
export default {
  name: '',
  data() {
      return {}
  },
  methods: {
      // 手机安全分析
      setChart() {
          let option = {
              title: {
  text: '产业发展趋势'
},
tooltip: {
  trigger: 'axis'
},
legend: {
  padding:[40,0,0,0],
  data: ['公司生产经营管理费', '自营农业产业收入', '花卉产业分红', '光彩事业', '花卉包装车间']
},
grid: {
  height: "80%",
  left: '3%',
  right: '4%',
  bottom: '3%',
  containLabel: true
},
toolbox: {
  feature: {
    saveAsImage: {}
  }
},
xAxis: {
  type: 'category',
  boundaryGap: false,
  data: ['2020', '2021', '2022', '2023','2024']
},
yAxis: {
  type: 'value',
  max: 50,
  splitNumber: 5,
},
series: [
{
      name: '蒿子粑粑展示馆',
      type: 'line',
      // stack: 'Total',
      data: [4.8, 4.8, 4.8, 4.8]
    },
    {
      name: '乡村振兴馆',
      type: 'line',
      // stack: 'Total',
      data: [12, 12, 12, 12]
    },
    {
      name: '诗韵甜园',
      type: 'line',
      // stack: 'Total',
      data: [20, 20, 20, 20]
    },
    {
      name: '农事服务中心',
      type: 'line',
      // stack: 'Total',
      data: [0, 0, 0, 30]
    },
    {
      name: '游客服务中心',
      type: 'line',
      // stack: 'Total',
      data: [0, 0, 0, 30]
    }
]
          };

          let myChart = this.$echarts(this.$el);

          myChart.clear();
          myChart.resize()
          myChart.setOption(option);
      },
  },
  mounted() {
      this.setChart()
  },
}
</script>

<style lang="less" scoped>
.funnel {
  width: 100%;
  height: 100%;
}
</style>