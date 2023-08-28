<template>
    <div class="page2">
        <div class="title">柿树岗村产业结构</div>
        <ul class="biao">
			<li v-for="(item,index) in jidi" :key="index" @click="path(item)">{{ item.title }}</li>
		</ul>
        <ul class="biao2">
			<li v-for="(item,index) in chanye" :key="index" @click="openIamge(item)">{{ item.title }}</li>
		</ul>
        <Row class='content-left'>
            <span class="title">柿树岗村简介</span>
            <textarea class="name" readonly="readonly">
                柿树岗村是由原先赵岗和柿树两个村2004年合并而成，全村总占地面积10.92平方千米,辖34个村民组，共计4010人，2014年响应政府号召实施整村推进，经过18个月的努力，于2016年顺利将29个村民组进行拆迁安置。
                根据项目规划，全村实施“小田变大田”土地平整，使原先村总可利用耕地面积由五千多亩，增加到确权实际可用面积11125.1亩的“翻一番”改变，同时建成柿树家园A、B区，共46栋95个单元。
                先后获得肥西县抗击新冠先进集体、肥西县移风易俗示范村、肥西县乡村“复兴少年宫”示范村、全国最美农家书屋、合肥市基层小微权力“监督一点通”平台建设工作先进单位。
            </textarea>
        </Row>
        <Row class='content-center'>
            <div class="namebox">
                <div class="box1">
                    <div class="text">
                        <span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>{{ text }}
                    </div>
                    <img v-image-preview :src="ImageUrl" alt="">
                    <img v-image-preview :src="ImageUrl1" alt="">
                    <img v-image-preview :src="ImageUrl2" alt="">
                </div>
                <div class="box2">
                    <div class="bing">
                        <area-chart ref="chart1" id="left_1" class="bingtu" ></area-chart>
                    </div>
                    <div class="zhe">
                        <double-area :selectRangeDate="selectRangeDate" ref='chart1'></double-area>
                    </div>
                    </div>
            </div>
        </Row>
        <Row class='content-right'>
            <span class="title">柿树岗村学习视频</span>
            <ul class="list">
                <li>
                    <span>第一期:花卉种植</span>
                    <!-- <video src="../assets/shishu/yuanfeng.mp4"  class="vido" controls ></video> -->
                </li>
                <li>
                    <span>第二期:花卉种植</span>
                    <!-- <video src="../assets/shipin/花卉2.mp4"  class="vido" controls ></video> -->
                </li>
                <li>
                    <span>第三期:康乃馨种植</span>
                    <!-- <video src="../assets/shipin/康乃馨.mp4"  class="vido" controls ></video> -->
                </li>
            </ul>
        </Row>
    </div>
</template>

<script>
const areaChart = ()=> import('./page5/radarPart.vue');
// const pie = () => import('./components/pie')
const  doubleArea = () => import('./page5/barChart.vue');

export default {
    name: 'page2',
    props: ['selectRangeDate'],
    components: {
        doubleArea,
        areaChart,
        // pie
    },
    data() {
        return {
            ImageUrl: require("../assets/shishu1/图片1.png"),
            ImageUrl1: require("../assets/shishu1/图片4.png"),
            ImageUrl2: require("../assets/shishu1/图片6.png"),
            text:"柿树岗村花卉扶贫产业园位于柿树岗乡柿树岗村上九里村民组，主要经营范围为花卉种植及销售。项目于2021年7月建成开工，主要建设10×50米单体大棚60个，10亩智能温控连体大棚一套。目前产业园已全部建成并种植非洲菊、玫瑰、向日葵等花卉，每年为村集体经济增收18万元。通过产业园带动，常年为周边稳定提供约30个工作岗位，其中有12人为脱贫户或低保困难家庭。通过改革，将进一步优化用工结构，为更多有劳动能力的脱贫户及困难群众提供就业岗位带动工作岗位，每天务工收益平均不少于100元每人。",
            jidi:[
            { title: "李嘴村" ,path:"page2"}, 
            { title: "周楼村" ,path:"page3"}, 
            { title: "廖渡村" ,path:"page4"}, 
            { title: "柿树岗村" ,path:"page5"}, 
            { title: "新街社区" ,path:"page6"},
            ],
            chanye:[
                { 
                    title: "远峰花卉" ,
                    text:"柿树岗村花卉扶贫产业园位于柿树岗乡柿树岗村上九里村民组，主要经营范围为花卉种植及销售。项目于2021年7月建成开工，主要建设10×50米单体大棚60个，10亩智能温控连体大棚一套。目前产业园已全部建成并种植非洲菊、玫瑰、向日葵等花卉，每年为村集体经济增收18万元。通过产业园带动，常年为周边稳定提供约30个工作岗位，其中有12人为脱贫户或低保困难家庭。通过改革，将进一步优化用工结构，为更多有劳动能力的脱贫户及困难群众提供就业岗位带动工作岗位，每天务工收益平均不少于100元每人。",
                    value:require("../assets/shishu1/图片1.png"),
                    value1:require("../assets/shishu1/图片4.png"),
                    value2: require("../assets/shishu1/图片6.png"),
                }, 
                { 
                    title: "怡果生态科技" ,
                    text:"安徽怡果生态科技有限公司是一家专注于生态农业科技研发、应用推广、农产品种植与销售、农业信息化服务及农村电子商务运营的创新型企业，是安徽省合肥市农业重点示范企业。2015年柿树岗村通过招商引资成功与其签订2400余亩土地经营流转协议，主要投资无花果、甜柿等精品果林种植及景观苗木等新品种的研发。安徽怡果生态科技有限公司致力于推动现代农业的绿色、可持续发展，以科技创新为驱动，以服务农民为根本，助力乡村振兴。",
                    value:require("../assets/zhoulou/huangt1.jpg"),
                    value1:require("../assets/zhoulou/huangt2.jpg"),
                    value2:require("../assets/zhoulou/huangt3.jpg"),
                },
                { 
                    title: "明达生态公司" ,
                    text:"合肥明达生态公司是一家以生态农业技术研发为核心，集生态技术咨询、生态园林设计、生态工程施工维护于一体的综合性生态服务企业。2015年柿树岗村通过招商引资成功与其签订3500余亩土地经营流转协议，主要投资翠冠梨、甜柿等果林种植及景观苗木等新品种的研发及水稻、小麦等传统绿色粮食作物。公司秉承“绿色、环保、可持续”的发展理念，致力于为客户提供优质的生态环境解决方案。下一步，公司将积极打造以农业观光旅游、果蔬采摘、发展生态农庄、旅游；农业新品种、技术开发服务；园林绿化工程、规划设计；农业生产资料经营为一体的生态农业标杆。",
                    value:require("../assets/zhoulou/linxia1.jpg"),
                    value1:require("../assets/zhoulou/linxia2.jpg"),
                    value2:require("../assets/zhoulou/linxia3.jpg"),
                }, 
                { 
                    title: "万毅生态农业" ,
                    text:"安徽省万毅生态农业有限责任公司是一家致力于农业科技创新和推广的现代化农业企业。2015年柿树岗村通过招商引资成功与其签订1100余亩土地经营流转协议，业务范围覆盖生态农业、绿色农产品生产、销售以及农业技术咨询等多个领域。 作为一家现代化农业企业，万毅生态农业有限责任公司始终秉持绿色、生态、健康的发展理念，致力于推动农业产业升级，促进农业可持续发展。公司积极引进和推广国内外先进的农业科技成果，运用现代化的农业生产技术和管理模式，为广大消费者提供优质、安全、绿色的农产品。 ",
                    value:require("../assets/zhoulou/shenjiag1.jpg"),
                    value1:require("../assets/zhoulou/shenjiag2.jpg"),
                    value2:require("../assets/zhoulou/shenjiag3.jpg"),
                }, 
               
            ],
        }
    },
    methods: {
    openIamge(e) {
        this.text= e.text
		this.ImageUrl= e.value
		this.ImageUrl1= e.value1
		this.ImageUrl2= e.value2
        console.log(this.ImageUrl);
	},
        path(e){
        this.$router.replace(e.path)
        console.log(e.path);
    }
    },
    mounted() {
       
    },
    beforeDestroy() {
       
    }
}
</script>

<style lang="less" scoped>
.title{
    width: 700px;
    text-align: center;
    background: none;
    font-size: 20px;
    color: black;
    margin-top: 30px;
    font-weight: 600;
    margin-top: 30px;
    // background-image: url(../assets/header_bg.png);
        }
.page2 {
    height: 111%;
    width: 100%;
    padding: 14px 20px 20px;
    overflow: hidden;
    background-image: url(../assets/zl.jpg);
    position: relative;
    bottom: 90px;
    display: flex;
    flex-direction: row;
    .biao{
            color: white;
            list-style: none;
            font-size:15px;
            display: flex;
            flex-direction: row;
            position: absolute;
            top: 1000px;
            left: 600px;
            li{
                width: 100px;
                margin: 20px;
                padding: 10px;
                text-align: center;
                background: rgba(0, 0, 0,0.5);
              
            }
        }
    .biao2{
            color: white;
            list-style: none;
            font-size:15px;
            display: flex;
            flex-direction: row;
            position: absolute;
            top: 100px;
            left: 460px;
            li{
                width: 150px;
                margin: 20px;
                padding: 10px;
                text-align: center;
                background: rgba(0, 0, 0,0.5);
              
            }
        }
    .content-left {
        width: 20%;
        height: 90%;
        background: rgba(255, 255, 255, .5);
        position: relative;
        top: 80px;
        overflow: hidden;
        
        .name{
            width: 365px;
            height: 800px;
            background: none;
            border: none;
            margin-top: 50px;
            padding: 10px;
            font-size: 18px;
            font-family:"宋体";
            color: black;
        }
      
    }
    .content-center{
        width: 1000px;
        height: 470px;
        position: relative;
        top: 170px;
        left: 50px;
        background: rgba(255, 255, 255, .5);
        .namebox{
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content:left;
            .box2{
                display: flex;
                position: relative;
                top: 30px;
                left: -10px;
            }
            .bing{
                width: 490px;
                height: 300px;
                background: rgba(255, 255, 255, .5);
                
            }

            .zhe{
                width: 500px;
                height: 300px;
                background: rgba(255, 255, 255, .5);
                margin-left: 20px;

            }
                .box1 {
                    width: 100%;
                    height: 100%;
                    margin: 10px;
                    // margin: 0px auto;
                    position: relative;
                    .text{
                        height: 250px;
                        font-size: 17px;
                        overflow: hidden;
                    }
                    img{
                       
                        width: 300px;
                        height: 180px;
                        margin:10px;

                    }
                }
            }
    }
    .content-right{
        width: 20%;
        height: 90%;
        background: rgba(255, 255, 255, .5);
        position: relative;
        top: 80px;
        left: 80px;
        .title{
                background: none;
                font-size: 20px;
                color: black;
                margin-top: 30px;
                font-weight: 600;
            }
        .list{
            list-style: none;
            margin-top: 60px;
            padding-right:20px ;
            background: none;

            li{
                width: 330px;
                font-size: 22px;
                font-family:"隶书";
                color: black;
                text-align:center;
                margin: 10px;
                .vido{
                    width: 100%;
                }
            }
        }
        
    }
}
</style>
