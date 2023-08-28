<template>
    <div class="threeBarChart"></div>
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
                grid: {
                    top: "20%",
                    bottom: "10%",
                    left: 60,
                    right: 40,
                },
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    left: "8%",
                    top: "10%",
                    itemWidth: 7,
                    itemHeight: 7,
                    textStyle: {
                        color: '#ffffff',
                        fontSize: 10
                    }
                },
                calculable: true,
                xAxis: [
                    {
                        type: 'category',
                        axisLine: {
                            symbol: ['none', 'arrow'],
                            symbolSize: [6, 6],
                            lineStyle: {
                                color: '#ffffff'
                            }
                        },
                        axisLabel: {
                            color: '#ffffff',
                            showMaxLabel: true,
                            fontSize: 10
                        },
                        data: ['周楼村','新街社区', '廖渡村', '李嘴村', '柿树岗村']
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        interval: 1000,
                        min: 0,
                        max: 7000,
                        splitNumber: 7,
                        axisLine: {
                            symbol: ['none', 'arrow'],
                            symbolSize: [6, 6],
                            lineStyle: {
                                color: '#ffffff'
                            }
                        },
                        axisLabel: {
                            color: '#ffffff',
                            showMaxLabel: false,
                            fontSize: 10
                        },
                        splitLine: {
                            show: false,
                        },
                        name: '(亩) (人)',
                        nameGap: -10,
                        nameTextStyle: {
                            color: '#ffffff',
                            fontSize: 9,
                            align: 'right',
                            padding: [0, 6, 0, 0]
                        }
                    },
                ],
                series: [
                    {
                        name: '林地',
                        type: 'bar',
                        barGap: 0,
                        barWidth: 10,
                        data: [1839, 500, 350, 105, 810],
                        itemStyle: {
                            barBorderRadius: [3, 3, 0, 0],
                            color: {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 1,
                                y2: 0,
                                colorStops: [
                                    {
                                        offset: 0, color: 'rgba(252,145,134,1)' // 0% 处的颜色
                                    }, {
                                        offset: 1, color: 'rgba(241,88,135,1)' // 100% 处的颜色
                                    }
                                ],
                                global: false // 缺省为 false
                            } //背景渐变色
                        }
                    },
                    {
                        name: '耕地',
                        type: 'bar',
                        barGap: 0,
                        barWidth: 10,
                        data: [4299.77, 7800, 2850, 3363.1, 11886.03],
                        itemStyle: {
                            barBorderRadius: [3, 3, 0, 0],
                            color: {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 1,
                                y2: 0,
                                colorStops: [
                                    {
                                        offset: 0, color: 'rgba(144,20,238,1)' // 0% 处的颜色
                                    }, {
                                        offset: 1, color: 'rgba(74,8,211,1)' // 100% 处的颜色
                                    }
                                ],
                                global: false // 缺省为 false
                            } //背景渐变色
                        }
                    },
                    {
                        name: '人数',
                        type: 'bar',
                        barGap: 0,
                        barWidth: 10,
                        data: [1500, 3767, 1550, 1657, 4010],
                        itemStyle: {
                            barBorderRadius: [3, 3, 0, 0],
                            color:  {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 1,
                                y2: 0,
                                colorStops: [
                                    {
                                        offset: 0, color: 'rgba(0,204,255,1)' // 0% 处的颜色
                                    }, {
                                        offset: 1, color: 'rgba(8,59,126,1)' // 100% 处的颜色
                                    }
                                ],
                                global: false // 缺省为 false
                            } //背景渐变色
                        }
                    }
                ]
            };
            let myChart = this.$echarts(this.$el);

            myChart.clear();
            myChart.resize()
            myChart.setOption(option);
        }
    },
    mounted() {
        this.setChart()
    },
}
</script>

<style lang="less" scoped>
.threeBarChart {
    height: 100%;
    width: 100%;
    color: #ffffff;
}
</style>