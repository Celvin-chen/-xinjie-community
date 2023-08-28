<template>
    <div class="page1">
        <!-- <Row class="listTop">
            <Row class="bottom-list1">
                <div class="dawei" v-show="xiao"></div>
                <div class="list1">
                    <div class="bottom1">
                        <span class='title'><span class="title-10">气象数据</span></span>
                        <div class="qi">
                            <div class="name">柿树岗乡 <span class="tag">{{ tianqi.result.templow }}°C
                                    -{{ tianqi.result.temphigh }}°C &nbsp;&nbsp; {{ tianqi.result.weather }}</span></div>
                            <div class="tian">
                                <web-bar ref="chart4" class="time"></web-bar>
                                <img src="../assets/icon_weather_dy.svg" alt="" class="img" @click="xiaoshi()">
                            </div>
                        </div>
                        <dv-scroll-board :config="config1" style="width: 100%; height: 150px;" />
                    </div>
                </div>
                <div class="list1">
                    <div class="bottom1">
                        <span class='title'><span class="title-10">土地人口</span></span>
                        <three-bar-chart ref="chart11" id="bottom_3"></three-bar-chart>
                    </div>
                </div>
                <div class="list1">
                    <div class="bottom1">
                        <span class='title'><span class="title-10">村集体经济</span></span>
                        <pie ref="chart5" id="left_3_2" class="biao2"></pie>
                    </div>
                </div>
            </Row>
            <Row class="bottom-list">
                <div class="list">
                    <div class="bottom">
                        <span class='title' style="z-index: 999;" @click="video()"><span class="title-10" >基地视频</span></span>
                        <div class="kong">
                            <img src="../assets/jian1.png" alt="" class="jian">
                            <img src="../assets/jiankong.png" alt="" class="jian">
                            <img src="../assets/jian2.png" alt="" class="jian">
                            <img src="../assets/jian3.png" alt="" class="jian">
                        </div>
                        <double-line ref="chart9" id="bottom_1"></double-line>
                    </div>
                </div>
                <div class="list">
                    <div class="bottom">
                        <span class='title'><span class="title-10">实训基地</span></span>
                        <img :src="ImageUrl" alt="">
                        <ul>
                            <li v-for="(item, index) in jidi" :key="index" @click="path(item)"
                                @mouseenter="openIamge(item)">
                                {{ item.title }}</li>
                        </ul>
                    </div>
                </div>
                <div class="list">
                    <div class="bottom">
                        <span class='title'><span class="title-10">直播培训</span></span>
                        <a href="https://im.zhangkenan.com/#/">
                            <img src="../assets/zb.png" alt="" class="zb">
                        </a>
                    </div>
                </div>
            </Row>
        </Row> -->
        <div class="page1-box">
            <div class="page1-One">
                <div class="One">
                    <div class="One-bottom1">
                        <span class="title-data">气象数据</span>
                        <div class="One-qi">
                            <div class="one-name">
                                <span>柿树岗乡</span>
                                <span>{{ tianqi.result.templow }}°C -{{ tianqi.result.temphigh }}°C &nbsp;&nbsp; {{ tianqi.result.weather }}</span>
                            </div>
                            <div class="One-tian">
                                <web-bar ref="chart4" class="timeOne"></web-bar>
                                <img src="../assets/icon_weather_dy.svg" alt="" class="img" @click="xiaoshi()">
                            </div>
                        </div>
                        <dv-scroll-board :config="config1" style="width: 100%; height: 150px;" />
                    </div>
                </div>
                <div class="One">
                    <div class="One-bottom1">
                        <span class="title-data">土地人口</span>
                        <three-bar-chart class="population"></three-bar-chart>
                    </div>
                </div>
                <div class="One OneS">
                    <div class="One-bottom1">
                        <span class="title-data">村集体经济</span>
                        <pie id="left_3_2" class="economy"></pie>
                    </div>
                </div>
            </div>
            <div class="page1-Two">
                <div class="Two">
                    <div class="Two-bottom1">
                        <span class="title-data title" @click="video()">基地视频</span>
                        <div class="Two-kong">
                            <img src="../assets/jian1.png" alt="">
                            <img src="../assets/jiankong.png" alt="">
                            <img src="../assets/jian2.png" alt="">
                            <img src="../assets/jian3.png" alt="">
                        </div>
                    </div>
                </div>
                <div class="Two">
                    <div class="Two-bottom1 Two-bottom1S">
                        <span class="title-data title">实训基地</span>
                        <img :src="ImageUrl" alt="" class="training">
                        <div class="list-name">
                            <div v-for="(item, index) in jidi" :key="index" @click="path(item.name)"
                                @mouseenter="openIamge(item)" class="names">{{ item.title }}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="Two TwoS">
                    <div class="Two-bottom1 Two-bottom1S">
                        <span class="title-data title">直播培训</span>
                        <!-- <a href="https://im.zhangkenan.com/#/">
                            
                        </a> -->
                        <img src="../assets/zb.png" alt="" class="trainingS" @click="trainClick">
                    </div>
                </div>
            </div>
        </div>
        <div v-show="xiao">
            <div class="dawei"></div>
        </div>
    </div>
</template>
<script>
const pie = () => import('./components/pie')
// const doubleLine  = () => import('./components/page2/doubleLine');
const threeBarChart = () => import('./components/page2/threeBarChart');
const webBar = () => import('./components/page1/webBar.vue');
export default {
    name: 'page1',
    props: {
        selectRangeDate: Array
    },
    components: {
        pie, // 饼图
        threeBarChart,
        webBar,// 当前时间
    },
    data() {
        return {
            tianqi:{
                result:{
                    city:'',
                    templow:'',
                    temphigh:'',
                    weather:''
                }
            },
            xiao: false,
            ImageUrl: require("../assets/shishu/zhoulou.png"),
            jidi: [
                { title: "周楼村", value: require("../assets/shishu/zhoulou.png"), path: "page3",name:1},
                { title: "廖渡村", value: require("../assets/shishu/图片 3.png"), path: "page4",name:2},
                { title: "柿树村", value: require("../assets/shishu/图片 4.png"), path: "page5",name:3},
                { title: "新街社区", value: require("../assets/shishu/图片 5.png"), path: "page6",name:4},
                { title: "李嘴村", value: require("../assets/shishu/图片 1.png"), path: "page2",name:5},
            ],
            config1: {
                oddRowBGC: 'rgba(0,0,0,.3)',
                evenRowBGC: 'rgb(63, 150, 165, .35)',
                data: [
                    ['气压', '1000 hpa'],
                    ['湿度', '95 %'],
                    ['风速', '0.5 m/s'],
                    ['风级', ' 一级'],
                ],
                rowNum: 4, //表格行数
                headerHeight: 30,
                headerBGC: "#00baff", //表头
                // oddRowBGC: "#0f1325", //奇数行
                // evenRowBGC: "#171c33", //偶数行
                index: true,
                columnWidth: [50],
                align: ["center"],
            },

        }
    },
    methods: {
        xiaoshi() {
            this.xiao = !this.xiao;
        },
        video() {
            this.$router.replace("page7")
        },
        openIamge(e) {
            this.ImageUrl = e.value
            // console.log(this.ImageUrl);
        },
        path(name) {
            // this.$router.push(e.path)
            this.$router.push({path:'/baseDetails',query:{name:name}})
        },
        trainClick(){
            window.open('https://im.zhangkenan.com/#/','_self');
        }
    },
    watch: {

    },
    mounted() {
        this.$axios({
            method: 'get',//请求方法
            url: '/weather/query?city=肥西县&appkey=f904c490e985cff7',
        }).then(res => {
            //执行成功后代码处理
            console.log(res.data);
            this.tianqi = res.data
        })
    },

}

</script>

<style lang="less">
.page1 {
    width: 100%;
    height: calc(100vh - 80px);
    padding: 20px;
    box-sizing: border-box;
}
.bottom-list1 {
    float: left;
    width: 30%;
    height: 75%;
    display: flex;
    flex-direction: column;
    position: relative;
    left: 10px;
}
.img {
    width: 80px;
    height: 80px;
    position: relative;
    left: 80px;
    top: -12px;
}
.name {
    color: white;
    font-size: 18px;
    position: relative;
    top: 20px;
    left: 10px;
    .tag {
        font-size: 15px;
    }
}
.tian {
    position: relative;
    left: 10px;
    display: inline-flex;
}
.time {
    position: relative;
    top: 30px;
}
.list1 {
    height: 100%;
    width: 80%;
    padding-right: 35px;
    margin: 10px;
    background: rgba(0, 0, 0, 0.5);
}
.biao2 {
    position: relative;
    top: -45px;
    right: -20px;
}
.bottom1 {
    width: 100%;
    height: 250px;
    border: 1px solid #0D2451;
    position: relative;
    margin: 20px;
    padding-bottom: 5px;
}
.bottom-list {
    height: 75%;
    display: flex;
    flex-direction: column;
    position: relative;
    left: 44%;
}
.ivu-col {
    height: 100%;
}
.list {
    height: 100%;
    width: 35%;
    margin: 10px;
    background: rgba(0, 0, 0, 0.5);
}
.bottom {
    width: 94%;
    height: 260px;
    border: 1px solid #0D2451;
    position: relative;
    margin: 15px;
    .kong {
        display: flex;
        flex-wrap: wrap;
        .jian {
            width: 50%;
            height: 123px;
        }
    }
    ul {
        color: white;
        list-style: none;
        font-size: 15px;
        display: flex;
        flex-direction: row;
        position: relative;
        bottom: 60px;
        left: 20px;
        li {
            margin: 5px;
            padding: 10px;
            background: rgba(255, 255, 255, 0.3);
        }
    }
    img {
        width: 100%;
        height: 100%;
    }
}
.zb {
    width: 100%;
    height: 100%;
}
.page1-box{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .page1-One{
        width: 370px;
        .One{
            width: 100%;
            background: rgba(0, 0, 0, 0.4);
            padding: 20px 15px 15px 15px;
            box-sizing: border-box;
            margin-bottom: 15px;
            border-radius: 5px;
            .One-bottom1{
                border: 1px solid #0D2451;
                position: relative;
                .title-data{
                    position: absolute;
                    top: -13px;
                    left: calc(50% - 50px);
                    display: inline-block;
                    width: 100px;
                    height: 26px;
                    line-height: 26px;
                    text-align: center;
                    color: #6EDDF1;
                    background: #14418E;
                    font-size: 15px;
                }
                .One-qi{
                    width: 100%;
                    .one-name{
                        width: 100%;
                        color: white;
                        font-size: 0px;
                        margin-top: 20px;
                        padding: 0px 10px;
                        box-sizing: border-box;
                        span{
                            &:nth-child(1){
                                font-size: 18px;
                            }
                            &:nth-child(2){
                                font-size: 15px;
                                margin-left: 15px;
                            }
                        }
                    }
                    .One-tian{
                        width: 100%;
                        padding: 0px 10px;
                        box-sizing: border-box;
                        margin-bottom: 10px;
                        position: relative;
                        img{
                            width: 40px;
                            height: 40px;
                            position: absolute;
                            top:-10px;
                            left: 240px;
                        }
                    }
                }
                .population{
                    width: 100%;
                    height: 250px;
                }
                .economy{
                    width: 100%;
                    height: 250px;
                }
            }
        }
        .OneS{
            margin-bottom: 10px;
        }
    }
    .page1-Two{
        width: 370px;
        .Two{
            width: 100%;
            background: rgba(0, 0, 0, 0.4);
            padding: 20px 15px 15px 15px;
            box-sizing: border-box;
            margin-bottom: 15px;
            border-radius: 5px;
            .Two-bottom1{
                width: 100%;
                border: 1px solid #0D2451;
                position: relative;
                .title-data{
                    position: absolute;
                    top: 0px;
                    left: 50%;
                    display: inline-block;
                    width: 100px;
                    height: 26px;
                    line-height: 26px;
                    text-align: center;
                    color: #6EDDF1;
                    background: #14418E;
                    font-size: 15px;
                }
                .title{
                    cursor: pointer;
                }
                .Two-kong{
                    display: flex;
                    flex-wrap: wrap;
                    width: 100%;
                    height: 230px;
                    img{
                        width: 50%;
                        height: 115px;
                    }
                }
                .training{
                    width: 100%;
                    height: 248px;
                }
                .trainingS{
                    width: 100%;
                    height: 248px;
                }
                .list-name{
                    position: absolute;
                    left: 0px;
                    bottom: 0px;
                    width: 100%;
                    height: 65px;
                    // display: flex;
                    font-size: 0px;
                    // background: rgba(0, 0, 0, 0);
                    .names{
                        width: 13%;
                        font-size: 13px;
                        height: 65px;
                        color: white;
                        background: rgba(255,255, 255, 0.4);
                        display: inline-block;
                        line-height: 50px;
                        writing-mode: vertical-rl;
                        font-family: PingFangSC-Semibold;
                        text-align: center;
                        cursor: pointer;
                        &:nth-child(2),&:nth-child(3),&:nth-child(4),&:nth-child(5){
                            margin-left: 8.75%;
                        }
                    }
                    
                }
            }
            .Two-bottom1S{
                height: 250px;
            }
        }
        .TwoS{
            margin-bottom: 10px;
        }
    }
}
.dawei {
    width: 450px;
    height: 570px;
    background: white;
    background-image: url(../assets/tu.jpg);
    background-size: 100% 100%;
    position: absolute;
    top: calc(50% - 250px);
    left: calc(50% - 225px);
    // background: wheat;
}
</style>
