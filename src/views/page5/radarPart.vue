<template>
    <div id="pie1" class="pie">
   <!-- 为 ECharts 准备一个具备大小（宽高）的 DOM -->
   <div id="main1" style="float:left;width:100%;height: 300px" />
 </div>
 </template>
 
 <script>
 const echarts = require('echarts/lib/echarts')
 // 引入饼状图组件
 require('echarts/lib/chart/pie')
 require('echarts/lib/component/tooltip')
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
         initData() {
    // 基于准备好的dom，初始化echarts实例
   const myChart = echarts.init(document.getElementById('main1'))
     myChart.setOption({
         title: {
     text: '产业结构分布'
   },
   tooltip: {
     trigger: 'item'
   },
  
   legend: {
     top: '0',
     // orient: 'vertical',图例垂直排列
     x:'left',      //可设定图例在左、右、居中
     y:'top',     //可设定图例在上、下、居中
     padding:[30,0,0,10],   //可设定图例[距上方距离，距右方距离，距下方距离，距左方距离]
     textStyle: {
             color: 'black', // 设置图例文字颜色为白色
         },
   },
 
   series: [
     
     {
       center: ['50%','60%'],
       name: '单位（万）',
       type: 'pie',
       radius: '70%',
 
       data: [ 
                     {
                         value: 20,
                         name: '公司生产经营管理费',
                         itemStyle: {
                          color: '#feed2c'
                         }
 
                     },
                     {
                         value: 41,
                         name: '自营农业产业收入',
                         itemStyle: {
                          color: '#c8a286'
                         }
                     },
                     {
                         value: 22,
                         name: '花卉产业分红',
                         itemStyle: {
                          color: '#2c7bfe'
                         }
                     },
                     {
                         value: 1,
                         name: '光彩事业',
                         itemStyle: {
                          color: '#feac2c'
                         }
                     },
                     {
                         value: 5,
                         name: '花卉包装车间',
                         itemStyle: {
                             color: '#2ca8fe'
                         }
                     },
                     
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
   })
   window.onresize = myChart.resize  //自适应浏览器窗口的大小
 }
     },
     mounted() {
         this.initData()
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
 