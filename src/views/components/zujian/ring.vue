<template>
    <div class="webPie">
        <div class="webPie-title">
            <span class="subtitle">
                <!-- <span class="leftCircle" :style="{background:data.color}"></span> -->
                                        <!-- {{ data.title }} -->
                <!-- <span class="rightCircle" :style="{background:data.color}"></span> -->
            </span>
        </div>
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
                title: {
    text: '产业结构分布'
  },
  tooltip: {
    trigger: 'item'
  },
  legend: {
    orient: 'vertical',
    left: 'left',
    textStyle: {
            color: 'white', // 设置图例文字颜色为白色
            
        },
    padding:[70,0,0,10],
  },

  series: [
    {
      name: '单位（万）',
      type: 'pie',
      radius: '70%',
      data: [ 
                    {
                        value: 100,
                        name: '高庄庭院经济',
                        itemStyle: {
                            color: '#feed2c'
                        }

                    },
                    {
                        value: 120,
                        name: '黄桃产业园',
                        itemStyle: {
                            color: '#2ca8fe'
                        }
                    },
                    {
                        value: 120,
                        name: '林下中药材',
                        itemStyle: {
                            color: '#feac2c'
                        }
                    },
                    {
                        value: 50,
                        name: '深加工厂房',
                        itemStyle: {
                            color: '#2c7bfe'
                        }
                    },
                    {
                        value: 110,
                        name: '数字农旅果蔬大棚',
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
        width: 110%;
        height: 110%;
        margin-left: 40px;
        color: #ffffff;
    }
}
</style>
git init
