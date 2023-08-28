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
    data: ['数字蔬果', '林下经济', '庭院经济', '深加工厂', '黄桃核桃']
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
    data: ['2020', '2021', '2022', '2023','2024','2025','2026']
  },
  yAxis: {
    type: 'value',
    max: 500,
    splitNumber: 7,
  },
  series: [
    {
      name: '数字蔬果',
      type: 'line',
      // stack: 'Total',
      data: [0, 0, 55, 110]
    },
    {
      name: '林下经济',
      type: 'line',
      // stack: 'Total',
      data: [20, 58, 85, 120]
    },
    {
      name: '庭院经济',
      type: 'line',
      // stack: 'Total',
      data: [11, 30, 70, 100]
    },
    {
      name: '深加工厂',
      type: 'line',
      // stack: 'Total',
      data: [0, 0, 20, 50]
    },
    {
      name: '黄桃核桃',
      type: 'line',
      // stack: 'Total',
      data: [0, 26, 70, 120]
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