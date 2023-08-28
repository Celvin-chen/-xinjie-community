<template>
    <div class="webPie">
        <div class="webPie-content" :id="id">

        </div>
    </div>
</template>

<script>
export default {
    name: '',
    props: {
        id: String,
        data: Object
    },
    data() {
        return {}
    },
    methods: {
        setChart() {
            let option = {
                //                 title: {
                //     text: 'Referer of a Website',
                //     subtext: 'Fake Data',
                //     left: 'center'
                //   },
                tooltip: {
                    trigger: 'item'
                },
                legend: {
                    // orient: 'vertical',
                    // left: '3%',
                    top: '7%',
                    left: 'center',
                    textStyle: {
                        color: 'white' // 设置图例文字颜色为红色
                    },
                    // padding:[40,50,0,0],
                },
                series: [
                    {
                        name: '单位（万）',
                        type: 'pie',
                        radius: '50%',
                        center:['50%','60%'],
                        data: [ 
                            {
                                value: 109.87,
                                name: '李嘴村',
                                itemStyle: {
                                    color: '#feed2c'
                                }
                            },
                            {
                                value: 314.6,
                                name: '周楼村',
                                itemStyle: {
                                    color: '#2ca8fe'
                                }
                            },
                            {
                                value: 104.82,
                                name: '廖渡村',
                                itemStyle: {
                                    color: '#feac2c'
                                }
                            },
                            {
                                value: 204.83,
                                name: '柿树岗村',
                                itemStyle: {
                                    color: '#2c7bfe'
                                }
                            },
                            {
                                value: 161.9,
                                name: '新街社区',
                                itemStyle: {
                                    color: '#c8a286'
                                    
                                }
                            }
                        ],
                        emphasis: {
                            itemStyle: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }
                ]
            };
            let myChart = this.$echarts(document.getElementById(this.id));

            myChart.clear();
            myChart.resize(
                {
                    width: document.getElementById(this.id).offsetWidth,
                    height: document.getElementById(this.id).offsetHeight
                }
            );
            myChart.setOption(option);
        }
    },
    mounted() {
        this.setChart()
    },
}
</script>

<style lang="less" scoped>
.webPie {
    width: 100%;
    height: 100%;
    .webPie-title {
        height: 20%;
        text-align: center;
        .subtitle {
            color:white;
            position: relative;
            font-size: 15px;

        }
    }

    .webPie-content {
        width: 100%;
        height: 250px;
        color: #ffffff;
    }
}
</style>
git init
