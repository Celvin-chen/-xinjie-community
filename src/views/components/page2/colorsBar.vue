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
    data: ['葡萄产业园', '高效养殖场']
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
    max: 20,
    splitNumber: 7,
  },
  series: [
    {
      name: '葡萄产业园',
      type: 'line',
      // stack: 'Total',
      data: [0, 8.4, 11.4, 11.4]
    },
    {
      name: '高效养殖场',
      type: 'line',
      // stack: 'Total',
      data: [0, 0, 15, 15]
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