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
  data: ['达维水产', '产业入股分红']
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
    name: '达维水产',
    type: 'line',
    // stack: 'Total',
    data: [0, 0, 28.75, 50]
  },
  {
    name: '产业入股分红',
    type: 'line',
    // stack: 'Total',
    data: [2.1, 4.6, 4.6, 4.6]
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