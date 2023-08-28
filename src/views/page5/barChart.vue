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
  data: ['公司生产经营管理费', '自营农业产业收入','花卉产业分红','光彩事业','花卉包装车间']
},
grid: {
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
  data: ['2020', '2021','2022', '2023','2024', ]
},
yAxis: {
  type: 'value',
  max: 50,
  splitNumber: 7,
},
series: [
  {
    name: '公司生产经营管理费',
    type: 'line',
    // stack: 'Total',
    data: [8.1, 8.1, 8.1, 20]
  },
  {
    name: '自营农业产业收入',
    type: 'line',
    // stack: 'Total',
    data: [0, 10, 25, 41]
  },
  {
    name: '花卉产业分红',
    type: 'line',
    // stack: 'Total',
    data: [0, 18.6, 18.6, 22]
  },
  {
    name: '光彩事业',
    type: 'line',
    // stack: 'Total',
    data: [0, 1, 1, 1]
  },
  {
    name: '花卉包装车间',
    type: 'line',
    // stack: 'Total',
    data: [0, 0, 0, 5]
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