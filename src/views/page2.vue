<template>
    <div class="page2">
        <!-- <div class="title">李嘴村产业结构</div> -->
        <ul class="biao">
			<li v-for="(item,index) in jidi" :key="index" @click="path(item)">{{ item.title }}</li>
		</ul>
        <ul class="biao2">
			<li v-for="(item,index) in chanye" :key="index" @click="openIamge(item)">{{ item.title }}</li>
		</ul>
        <Row class='content-left'>
            <span class="title">李嘴村简介</span>
            <textarea class="name" readonly="readonly">
                柿树岗乡李嘴村,位于肥西县柿树岗乡西部,东与马堰行政村接壤,南与界河行政村相连,西、北与山南镇毗邻,岗冲交错、塘圩相间,乡道李仓路穿村而过,交通便捷,有小二型水库1座,杨湾河、陈家堰河玮村而流,水利条件优越,村内大部分房屋建筑样式统一,保留着原始的自然风貌,生态环境优美,村风民风淳朴,18个村民组,人口1657人,400余户,党员33名,近年来获得安徽省美丽乡村建设示范点、安徽省森林村庄、安徽省美丽宜居村庄等荣誉。
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
                        <pie-Chart ref="chart16" class="bingtu" ></pie-Chart>
                    </div>
                    <div class="zhe">
                        <colors-Bar ref="chart1" id="left_1" ></colors-Bar>
                    </div>
                    </div>
            </div>
        </Row>
        <Row class='content-right'>
            <span class="title">李嘴村学习视频</span>
            <ul class="list">
                <li>
                    <span>第一期：美丽乡村</span>
                    <!-- <video src="../assets/shipin/柿树.mp4" class="vido" controls ></video> -->
                </li>
                <li>
                    <span>第二期：葡萄种植</span>
                    <!-- <video src="../assets/shipin/葡萄.mp4" class="vido" controls ></video> -->
                </li>
                <li>
                    <span>第三期：葡萄种植</span>
                    <!-- <video src="../assets/shipin/葡萄3.mp4" class="vido" controls ></video> -->
                </li>
            </ul>
        </Row>
    </div>
</template>

<script>
const colorsBar = ()=> import('./components/page2/colorsBar.vue');
// const pie = () => import('./components/pie')
const  pieChart = () => import('./components/page2/pieChart.vue');

export default {
    name: 'page2',
    props: ['selectRangeDate'],
    components: {
        pieChart,
        colorsBar,
        // pie
    },
    data() {
        return {
            ImageUrl: require("../assets/lizui/图片1.png"),
            ImageUrl1: require("../assets/lizui/图片2.png"),
            ImageUrl2: require("../assets/lizui/图片3.png"),
            text:"李嘴村着力在产业发展上强弱项、补短板,以现有2个产业园为示范,引导好在做大、做强、做优上做文章,培育发展家庭农场2家,充分利用村级电商平台,带动更多农产品销售,增加群众收入。李嘴村坚持以为引领,通过“村企联建”发展集体经济,新建100多亩葡萄产业园、7000多平方米的高效养殖场,村级产业从无到有。村集体经济从2008年负债100多万元,到2022年村集体经济收入近200万元,纯收入达40万元的质变。",
            jidi:[
            { title: "李嘴村" ,path:"page2"}, 
            { title: "周楼村" ,path:"page3"}, 
            { title: "廖渡村" ,path:"page4"}, 
            { title: "柿树村" ,path:"page5"}, 
            { title: "新街社区" ,path:"page6"},
            ],
            chanye:[
                { 
                    title: "葡萄产业园" ,
                    text:"李嘴村着力在产业发展上强弱项、补短板,以现有2个产业园为示范,引导好在做大、做强、做优上做文章,培育发展家庭农场2家,充分利用村级电商平台,带动更多农产品销售,增加群众收入。李嘴村坚持以为引领,通过“村企联建”发展集体经济,新建100多亩葡萄产业园、7000多平方米的高效养殖场,村级产业从无到有。村集体经济从2008年负债100多万元,到2022年村集体经济收入近200万元,纯收入达40万元的质变。",
                    value:require("../assets/lizui/图片1.png"),
                    value1:require("../assets/lizui/图片2.png"),
                    value2:require("../assets/lizui/图片3.png"),
                }, 
                 
                { 
                    title: "党群服务中心" ,
                    text:"李嘴村党群服务中心于2019年新建,原先是李嘴小学,东、南、西、北各1栋校舍,因教学资源整合,小学于2006年撤并,留下的校舍因年久失修,面临倒塌,在2019年通过村事民定工作法,把东、西2东栋校舍拆除,新建600多平米的党群服务中心,现有新时代文明实践站、居家养老服务站和残疾人工作站,服务群众更加便捷。",
                    value:require("../assets/lizui/图片4.png"),
                    value1:require("../assets/lizui/图片5.png"),
                    value2:require("../assets/zhoulou/huangt3.jpg"),
                }
               
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
