<template>
    <div class="page2">
        <div class="title">廖渡村产业结构</div>
        <ul class="biao">
			<li v-for="(item,index) in jidi" :key="index" @click="path(item)">{{ item.title }}</li>
		</ul>
        <ul class="biao2">
			<li v-for="(item,index) in chanye" :key="index" @click="openIamge(item)">{{ item.title }}</li>
		</ul>
        <Row class='content-left'>
            <span class="title">廖渡村简介</span>
            <textarea class="name" readonly="readonly">
                廖渡村,位于柿树岗乡最南边,以丰乐河为界与六安市舒城县相隔,属于典型的圩区地带,因沿丰乐河区域狭长,又叫长圩村,后因西大圩廖渡口通往六安而改名廖渡村。廖渡村辖19个村民组,人口约1550人,土地面积约4700亩,其中耕地面积约2850亩；水域面积约1500亩,农民以传统粮食作物和水产养殖为主。全村共有党员49人,现有“两委”干部3人,乡招聘分配后备干部3人,队伍结构进一步年轻化,目前整体干部队伍思想稳定,工作积极性高,能够严格落实党管全局,认真完成各项工作任务。
                廖渡村区位明显,四面环水,由于得天独厚的水资源优势,使得水产养殖产业较快发展,自2008年起廖渡村“网箱养鳝”就被评为省级“一村一品”专业示范村；2012年起先后引进安徽达维等多家水产养殖企业,全村土地流转率达85%以上；2018年村集体与达维水产合作村企联建,成立全乡首个水产扶贫产业园,每年为廖渡村脱贫户和集体增收15.5万元左右；廖渡村泥鳅养殖、泥鳅苗是继廖渡黄鳝后又一新特色,廖渡泥鳅市场覆盖至福建、江苏、湖北、江西等多个省市,廖渡泥鳅在业界已经形成一定口碑和知名度。
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
                        <popular-Bar ref="chart1" id="left_1" class="bingtu" ></popular-Bar>
                    </div>
                    <div class="zhe">
                        <double-area :selectRangeDate="selectRangeDate" ref='chart1'></double-area>
                    </div>
                    </div>
            </div>
        </Row>
        <Row class='content-right'>
            <span class="title">廖渡村学习视频</span>
            <ul class="list">
                <li>
                    <span>第一期：水产养殖</span>
                    <!-- <video src="../assets/shipin/水产养殖.mp4" class="vido" controls ></video> -->
                </li>
                <li>
                    <span>第二期：鳜鱼养殖</span>
                    <!-- <video src="../assets/shipin/水产.mp4" class="vido" controls ></video> -->
                </li>
                <li>
                    <span>第三期：水产养殖</span>
                    <!-- <video src="../assets/shipin/鱼.mp4" class="vido" controls ></video> -->
                </li>
               
            </ul>
        </Row>
    </div>
</template>

<script>
const popularBar = ()=> import('./page4/popularBar.vue');
// const pie = () => import('./components/pie')
const  doubleArea = () => import('./page4/singleAreaChart.vue');

export default {
    name: 'page2',
    props: ['selectRangeDate'],
    components: {
        doubleArea,
        popularBar,
        // pie
    },
    data() {
        return {
            ImageUrl: require("../assets/liaodu/图片1.jpg"),
            ImageUrl1:require("../assets/liaodu/图片2.png"),
            ImageUrl2:require("../assets/liaodu/图片3.png"),
            text:"安徽达维水产养殖有限公司2013年8月成立，位于肥西县柿树岗乡廖渡村，是一家从事水产苗种繁育，绿色生态水产养殖、休闲渔业等水产技术咨询服务的新兴产业公司，现拥有227亩养殖水面，标准化池塘22口；备有泥鳅、鳜鱼等亲本万斤有余，年生产泥鳅苗达2.5亿尾，鳜鱼苗千万尾以上，年产水产品约150余吨；是一家具有雄厚种源基础和稳定种源支持的农业产业化龙头企业。公司自成立以来，高度重视水产苗种繁育科学技术工作，先后与安徽省农科院水产研究所、中国科学院水生生物研究所、安徽农业大学保持长期合作与交流；同时，公司通过多年实践培养了13名专业从事水产苗种繁育工作的人员，平均年龄36岁，为持续发展水产苗种繁育、驯养、水产种业提纯复壮等工作提供了技术人员保障。拥有15项专利、4项软件著作权，2022年成立了首个由县政府、科研院所、企业三方合作特种水产试验站，为肥西县水产产业健康发展提供了有效的技术支撑。达维水产负责人舒伟先后获得合肥市科学技术奖、省级科技成果认定、安徽省农村青年致富带头人、肥西县优秀乡村企业家、肥西县十佳‘三农’人物、肥西县第二届十佳科技工作者、肥西县十大优秀青年、合肥市“十佳”特色种养能手等十余项荣誉称号。",
            jidi:[
            { title: "李嘴村" ,path:"page2"}, 
            { title: "周楼村" ,path:"page3"}, 
            { title: "廖渡村" ,path:"page4"}, 
            { title: "柿树村" ,path:"page5"}, 
            { title: "新街社区" ,path:"page6"},
            ],
            chanye:[
                { 
                    title: "达维水产" ,
                    text:"安徽达维水产养殖有限公司2013年8月成立，位于肥西县柿树岗乡廖渡村，是一家从事水产苗种繁育，绿色生态水产养殖、休闲渔业等水产技术咨询服务的新兴产业公司，现拥有227亩养殖水面，标准化池塘22口；备有泥鳅、鳜鱼等亲本万斤有余，年生产泥鳅苗达2.5亿尾，鳜鱼苗千万尾以上，年产水产品约150余吨；是一家具有雄厚种源基础和稳定种源支持的农业产业化龙头企业。公司自成立以来，高度重视水产苗种繁育科学技术工作，先后与安徽省农科院水产研究所、中国科学院水生生物研究所、安徽农业大学保持长期合作与交流；同时，公司通过多年实践培养了13名专业从事水产苗种繁育工作的人员，平均年龄36岁，为持续发展水产苗种繁育、驯养、水产种业提纯复壮等工作提供了技术人员保障。拥有15项专利、4项软件著作权，2022年成立了首个由县政府、科研院所、企业三方合作特种水产试验站，为肥西县水产产业健康发展提供了有效的技术支撑。达维水产负责人舒伟先后获得合肥市科学技术奖、省级科技成果认定、安徽省农村青年致富带头人、肥西县优秀乡村企业家、肥西县十佳‘三农’人物、肥西县第二届十佳科技工作者、肥西县十大优秀青年、合肥市“十佳”特色种养能手等十余项荣誉称号。",
                    value:require("../assets/liaodu/图片1.jpg"),
                    value1:require("../assets/liaodu/图片2.png"),
                    value2:require("../assets/liaodu/图片3.png"),
                }, 
                { 
                    title: "数字渔业" ,
                    text:"数字渔业系统可以利用实时监控系统来精准监测水环境的各项指标，保证养殖环境的适宜与稳定，为渔业生产提质增效、实现稳产增产。 2022年达维水产建立数字渔业管理与服务系统，积极推动渔业数字化应用，让水产产业发展有‘质’更有‘智’。数字渔业投入应用后，以数字赋能渔业，大大提升了养殖场的信息化、自动化和智能化水平，有效降低生产成本、风险，提高了劳动生产率、资源利用率和管理效率。",
                    value:require("../assets/liaodu/图片4.png"),
                    value1:require("../assets/liaodu/图片5.png"),
                    value2:require("../assets/liaodu/图片6.png"),
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
