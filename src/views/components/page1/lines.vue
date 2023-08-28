<template>
    <div class="lines">
        <div class="switchButton">
            <a :class="{'active':value==1}" @click="handleSelect(1)">月</a><a :class="{'active':value==2}"
                                                                             @click="handleSelect(2)">日</a>
        </div>
        <div id="bottom_1">

        </div>
    </div>

</template>

<script>
export default {
    name: '',
    data() {
        return {
            value: 2,
            xAxisData: [],
            seriesData: [],
            selected: {},
            legendData: []
        }
    },
    methods: {
        handleSelect(val) {
            this.xAxisData = [];
            this.seriesData = [];
            this.legendData = [];
            this.selected = {};
            this.value = val;
            let curYear = new Date().getFullYear();
            let curMonth = new Date().getMonth();
            let colorList = ['#bf232a', '#feed2c', '#2c7bfe', '#feac2c', '#ff7b7e', '#2cd9fe', '#a262f2', '#2ca8fe'];
            if (val == 1) {
                let year = [curYear - 1, curYear];
                for (let i = 0; i < 12; i++) {
                    this.xAxisData.push((i + 1) + '月');
                }
                for (let i = 0; i < year.length; i++) {
                    this.legendData.push(year[i] + '年');
                    let obj = {
                        name: year[i] + '年',
                        type: 'line',
                        symbol: 'circle',
                        smooth: false,
                        itemStyle: {
                            color: colorList[i % 8]
                        },
                        lineStyle: {
                            width: 1,
                            color: colorList[i % 8],
                        },
                        data: []
                    }
                    for (let j = 0; j < 12; j++) {
                        obj.data.push((Math.random() * 300).toFixed(0));
                    }
                    let obj1 = {
                        name: year[i] + '年',
                        type: 'line',
                        symbol: 'circle',
                        smooth: false,
                        xAxisIndex: 1,
                        yAxisIndex: 1,
                        itemStyle: {
                            color: colorList[i % 8]
                        },
                        lineStyle: {
                            width: 1,
                            color: colorList[i % 8],
                        },
                        data: []
                    }
                    for (let j = 0; j < 12; j++) {
                        obj1.data.push((Math.random() * 300).toFixed(0));
                    }
                    this.seriesData.push(obj);
                    this.seriesData.push(obj1);
                }

            } else {
                let dateLength = new Date(curYear, curMonth, 0).getDate();
                for (let i = 0; i < dateLength; i++) {
                    this.xAxisData.push((i + 1) + '号');

                }
                for (let i = 0; i < 12; i++) {
                    this.legendData.push((i + 1) + '月');
                    this.selected[(i + 1) + '月'] = false;
                    if (i < 4) {
                        this.selected[(i + 1) + '月'] = true;
                    }
                    let obj = {
                        name: (i + 1) + '月',
                        type: 'line',
                        symbol: 'circle',
                        smooth: false,
                        itemStyle: {
                            color: colorList[i % 8]
                        },
                        lineStyle: {
                            width: 1,
                            color: colorList[i % 8],
                        },
                        data: []
                    }
                    for (let j = 0; j < dateLength; j++) {
                        obj.data.push((Math.random() * 300).toFixed(0));
                    }
                    let obj1 = {
                        name: (i + 1) + '月',
                        type: 'line',
                        symbol: 'circle',
                        xAxisIndex: 1,
                        yAxisIndex: 1,
                        smooth: false,
                        itemStyle: {
                            color: colorList[i % 8]
                        },
                        lineStyle: {
                            width: 1,
                            color: colorList[i % 8],
                        },
                        data: []
                    }
                    for (let j = 0; j < dateLength; j++) {
                        obj1.data.push((Math.random() * 300).toFixed(0));
                    }

                    this.seriesData.push(obj);
                    this.seriesData.push(obj1);
                }

            }
            this.setChart()
        },
        // 金钱交易分析
        setChart() {
            let option = {
                title: {
    text: 'Referer of a Website',
    subtext: 'Fake Data',
    left: 'center'
  },
  tooltip: {
    trigger: 'item'
  },
  legend: {
    orient: 'vertical',
    left: 'left'
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: '50%',
      data: [
        { value: 1048, name: 'Search Engine' },
        { value: 735, name: 'Direct' },
        { value: 580, name: 'Email' },
        { value: 484, name: 'Union Ads' },
        { value: 300, name: 'Video Ads' }
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
            let myChart = this.$echarts(document.getElementById('bottom_1'));

            myChart.clear();
            myChart.resize()
            myChart.setOption(option);
            myChart.on('legendselectchanged', (params) => {
                let arr = [];
                for (let i in params.selected) {
                    if (params.selected[i] == true) {
                        arr.push(params.selected[i])
                    }
                }
                if (arr.length > 4) {
                    this.$Modal.error({
                        content: "<p>当前最多显示4个图例</p>"
                    });
                    myChart.dispatchAction({
                        type: 'legendUnSelect',
                        // 图例名称
                        name: params.name
                    })
                }

            });
        },
    },
    mounted() {
        this.handleSelect(this.value);
        // this.setChart ();
    },
}
</script>

<style lang="less" scoped>
.lines {
    height: 100%;
    width: 100%;

    #bottom_1 {
        height: 100%;
        width: 100%;
    }

    position: relative;

    .switchButton {
        position: absolute;
        z-index: 5;
        right: 10px;
        top: 15px;
        border: 1px solid #028bff;
        border-radius: 5px;
        padding: 0;

        .active {
            background: #0454a1;
        }

        a {
            display: inline-block;
            color: #fff;
            padding: 1px 8px;
        }

    }
}

</style>