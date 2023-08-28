<template>
    <div class="page2">
        <!-- <div class="title1">新街社区产业结构</div> -->
        <ul class="biao">
			<li v-for="(item,index) in jidi" :key="index" @click="path(item)">{{ item.title }}</li>
		</ul>
        <ul class="biao2">
			<li v-for="(item,index) in chanye" :key="index" @click="openIamge(item)">{{ item.title }}</li>
		</ul>
        <Row class='content-left'>
            <span id="title">新街社区简介</span>
            <textarea class="name" readonly="readonly">
                新街社区位于肥西县柿树岗乡最南端,由原袁店乡利和村、大湾村、周桥村在2004年4月合并为新街社区,2007年申报为社区。水资源丰富。北有龙潭河,南有丰乐河,土地肥沃,是肥西西南的鱼米之乡。文化底蕴深厚,一处省保单位唐五坊圩,乃爱国将领唐定奎的故居；一处县级文保单位,古人类活动遗址——大面积遗址。更有名小吃蒿子粑粑、老唐酱干,2018年,合肥地区知名品牌“老唐酱干”因其祖传制作工艺和独特的口味,已被列入肥西非物质文化遗产名录。同年,蒿子粑粑也被列入肥西县非物质文化遗产名录。旅游资源禀赋。辖区内周桥新村坐落着集休闲度假、特色餐饮、农业观光、产品展销等功能于一体的现代化大型文旅场所——乡村振兴馆以及甜园民宿。文旅融合,画里乡村,欢迎和新街社区来一场四季的约定!
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
            <span class="title">新街社区学习视频</span>
            <ul class="list">
                <li>
                    <span>第一期：乡村振兴馆</span>
                    <!-- <video src="../assets/shishu/乡村振兴馆.mp4" class="vido"></video> -->
                </li>
                <li>
                    <span>第二期：蒿子粑粑</span>
                    <!-- <video src="../assets/shipin/蒿子粑粑.mp4" class="vido"></video> -->
                </li>
                <li>
                    <span>第三期：美丽乡村</span>
                    <!-- <video src="../assets/shipin/采访.mp4" class="vido"></video> -->
                </li>
            </ul>
        </Row>
    </div>
</template>

<script>
const areaChart = ()=> import('./page6/doubleBars.vue');
// const pie = () => import('./components/pie')
const  doubleArea = () => import('./page6/doubleBarChart.vue');

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
            ImageUrl: require("../assets/xinjie/图片 7.png"),
            ImageUrl1: require("../assets/xinjie/nsfwzx.png"),
            ImageUrl2: require("../assets/xinjie/图片 9.png"),
            text:"为了更好的服务柿树岗乡农业生产需要,打造柿树岗乡合肥绿色粮仓；根据《安徽省农业农村厅关于做好全程机械化综合农事服务中心建设工作的通知》文件要求,安徽雨农农业科技有限公司根据企业发展情况及市场需求,结合柿树岗乡实际情况,在前庄居民组15亩建设用地上,按照农事服务中心要求对其基础设施进行新建及购买烘干机、拖拉机等机械设备。全程农事服务中心建设,提升农机社会化服务能力。其功能主要包括：机具停放、维修保养、机具展示、技术培训、信息咨询与发布、作业服务、综合性农事服务中心机库棚、维修车间、烘干库棚、办公培训教室等固定设施建设以及信息化管理、教育培训等建设。项目为柿树岗乡15.3万亩农事生产提供服务,发展前景广阔,特别是可有效解决我乡在农事季节因缺少大型机械,满足不了周边农事需求的现状和农技推广运用不到位,不能有效为农服务的特点。同时我乡地处丰乐河流域,地势平坦,气候温和、四季分明适合机械作业,项目建成后前景广阔,产业符合国家政策及发展规划。项目包括：2500平方硬化晾晒场、农事机械停放区、600平方两层徽派样式信息服务、展示大厅、农事培训中心（单层300平方）、600平方稻谷储存仓库、500平方稻米加工厂房、500平方烘干厂房、400平方农事机械维修车间（钢构结构高度13米）。",
            jidi:[
            { title: "李嘴村" ,path:"page2"}, 
            { title: "周楼村" ,path:"page3"}, 
            { title: "廖渡村" ,path:"page4"}, 
            { title: "柿树岗村" ,path:"page5"}, 
            { title: "新街社区" ,path:"page6"},
            ],
            chanye:[
                { 
                    title: "唐五坊圩" ,
                    text:"唐五房圩位于肥西县柿树岗乡新街社区，建于1865年，由唐殿魁，唐定奎兄弟二人共同建造,后因兄殿魁早亡，弟定奎权主业，习称唐五房圩，圩子成方形，占地200百余亩，由内外两道壕沟，围墙、大局墩、小局墩，南北门楼、四层岗楼、仓库、砻场、厨房、佛堂、五房圩主体建筑三进三路一转心楼和四房圩主体建筑组成，圩原有房屋200余间，光绪年间火灾烧毁，唐定奎儿子唐治隆于宣统元年（公元1909年）重建。1949年建国之后，先后为国家粮站以及袁店中学所用，仅存转心楼1座和唐定奎从台湾带回的梓树1棵，2004年10月安徽省人民政府公布转心楼为安徽省文物保护单位。2019年至2023年肥西县人民政府对圩堡进行了环境综合整治，使其恢复原有风貌。",
                    value:require("../assets/xinjie/图片16.png"),
                    value1:require("../assets/xinjie/nsfwzx.png"),
                    value2:require("../assets/xinjie/图片 9.png"),

                }, 
                { 
                    title: "农事服务中心" ,
                    text:"为了更好的服务柿树岗乡农业生产需要,打造柿树岗乡合肥绿色粮仓；根据《安徽省农业农村厅关于做好全程机械化综合农事服务中心建设工作的通知》文件要求,安徽雨农农业科技有限公司根据企业发展情况及市场需求,结合柿树岗乡实际情况,在前庄居民组15亩建设用地上,按照农事服务中心要求对其基础设施进行新建及购买烘干机、拖拉机等机械设备。全程农事服务中心建设,提升农机社会化服务能力。其功能主要包括：机具停放、维修保养、机具展示、技术培训、信息咨询与发布、作业服务、综合性农事服务中心机库棚、维修车间、烘干库棚、办公培训教室等固定设施建设以及信息化管理、教育培训等建设。项目为柿树岗乡15.3万亩农事生产提供服务,发展前景广阔,特别是可有效解决我乡在农事季节因缺少大型机械,满足不了周边农事需求的现状和农技推广运用不到位,不能有效为农服务的特点。同时我乡地处丰乐河流域,地势平坦,气候温和、四季分明适合机械作业,项目建成后前景广阔,产业符合国家政策及发展规划。项目包括：2500平方硬化晾晒场、农事机械停放区、600平方两层徽派样式信息服务、展示大厅、农事培训中心（单层300平方）、600平方稻谷储存仓库、500平方稻米加工厂房、500平方烘干厂房、400平方农事机械维修车间（钢构结构高度13米）。",
                    value:require("../assets/xinjie/图片 7.png"),
                    value1:require("../assets/xinjie/nsfwzx.png"),
                    value2:require("../assets/xinjie/图片 9.png"),

                }, 
                { 
                    title: "乡村振兴馆" ,
                    text:"项目目位于肥西县柿树岗乡新街社区周桥新村,新街社区历史文化底蕴深厚。“中国抗日第一将”淮军将领唐定奎故居唐五房圩,始建于1865年（清同治四年）,属省文物保护单位,迄今为止,是淮军圩堡唯一保存最完整的建筑。文化遗产莲湘舞,承载传统文化、独具特色,已成功申报合肥市非物质文化遗产,2014年,微电影《莲湘舞》在北京国际微电影节评比中获全国银奖。合肥地区知名品牌“老唐酱干”因其祖传制作工艺和独特的口味,已被列入肥西非物质文化遗产名录。乡村振兴馆是集休闲度假、特色餐饮、农业观光、产品展销等功能于一体的现代化大型文旅场所。体验馆总建筑面积约3200㎡,该体验馆设有文化旅游馆、书画体验馆、农耕文 化馆、农产品展馆、农业科技馆、民间文化非遗馆六大部分。另设会议厅、电影院、乡村食堂、民宿、阅读空间等配套设施,其中文化产业示范区430㎡,综合服务配套810㎡,宣传展示区240㎡ ,研学采摘体验地50亩。以乡村文化旅游为主题,通过全方位展览和沉浸式体验的方式,展现了近年来柿树岗乡在特色产业、乡村文化、生态旅游、美丽乡村建设、基层治理等方面的发展全貌。突出展示乡村振兴成果、交流乡村振兴经验、开展乡村振兴研学、实施乡村振兴培训、推进乡村振兴战略。",
                    value:require("../assets/xinjie/xczxg.png"),
                    value1:require("../assets/xinjie/图片 2.png"),
                    value2:require("../assets/xinjie/图片 3.png"),
                },
                { 
                    title: "诗韵甜园" ,
                    text:"诗韵甜园位于肥西县柿树岗乡新街社区,是集田园观光、特色民宿、休闲娱乐、文化体验为一体的乡村休闲旅游度假基地。俱乐部除了有民宿、餐饮还有薰衣草甸、四季果园、牡丹花圃、清雅荷塘、野生香蒿园、开心农场、农耕体验、水上乐园、野生垂钓、白鹭小岛.等超多游玩项目。",
                    value:require("../assets/xinjie/syty.png"),
                    value1:require("../assets/xinjie/图片 5.png"),
                    value2:require("../assets/xinjie/图片 6.png"),
                }, 
                { 
                    title: "蒿子粑粑展示馆" ,
                    text:"蒿子粑粑展示馆位于肥西县柿树岗乡新街社区,展馆重点展示非遗项目蒿子粑粑的来历和传承史等,让游客们一起参观蒿子粑粑制作工厂,了解蒿子粑粑制作的全过程。介绍非遗传承人的讲解和示范,并让游客体验制作。在老师的指导下,孩子们体验作品,亲身感受着传统非遗文化。让孩子们收获了乐趣,也让他们认识和感受到非遗文化的丰富多彩。同时,柿树岗乡将依托辖区12项非物质文化遗产项目,开展更多的非遗巡展、教学体验等活动,让更多的人了解非遗,从而更好的学习传承非遗。",
                    value:require("../assets/xinjie/hzbb.png"),
                    value1:require("../assets/xinjie/图片 11.png"),
                    value2:require("../assets/xinjie/图片 12.png"),
                }, 
                { 
                    title: "游客服务中心" ,
                    path:"page6",
                    text:"2022年新街社区积极谋划农文旅项目,争取以高水平项目建设推动农文旅融合发展,打造新街特色农旅名片。村党支部书记王学祥考虑到村内有30多亩建设用地可以盘活利用,主动申报“数字农旅果蔬大棚项目”,并参加全县乡村振兴擂台大比武,项目经过专家三轮筛选,最终顺利评审通过。2022年7月,新街社区与安徽朗坤物联网有限公司达成“村企联建”合作关系,“数字农旅果蔬大棚项目”正式启动建设。项目占地面积25.29亩,投入财政衔接资金1800万元,打造一座8800平方米的高科技智能温控大棚（包括6400平方米的空中草莓高技智能温室大棚、1550平方米的花卉种植高科技智能温室大棚、240平方米的生鲜仓储高科技智能温室大棚、610平方米的设备区和329米的硬化道路）。该项目以提高融合意识挖掘乡村振兴潜力,力争构建“农业+文创+旅游”的农文旅融合发展模式,即以“高科温室大棚”为产业依托,以物联网、大数据等数字信息化技术为手段构建温室产业数据链,建设以科技为支撑的绿色生态农业体系,成为涵盖农业生产、休闲采摘、研学科普、旅游体验等多功能于一体的生态绿色休闲的农文旅示范点,促进三产互动融合发展。2022年底,项目在疫情期间按期竣工验收,于2023年5月投产运营,今后每年为村集体带来收益110万元,并长期带动20人就业增收。下一步,新街社区计划利用“数字农旅果蔬大棚”种植的空中草莓,打造品牌和亮点,依托果蔬大棚建成涵盖农业生产、休闲采摘、劳动教育科普、旅游体验等多功能于一体的劳动教育实训示范基地,推出农产品采摘游、乡村节庆游、短期游、周末游等优质旅游产品,构建“农业+文创+劳动教育实训基地+旅游”的发展模式,持续探索农文旅融合发展新业态。",
                    value:require("../assets/xinjie/图片 13.png"),
                    value1:require("../assets/xinjie/ykfwzx.png"),
                    value2:require("../assets/xinjie/图片 15.png"),
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
.title1{
    width: 700px;
    text-align: center;
    background: none;
    font-size: 20px;
    color: black;
    margin-top: 60px;
    font-weight: 600;
    position: absolute;
    left: 600px;
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
            left: 430px;
            li{
                width: 150px;
                margin: 10px;
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
        #title{
                width: 700px;
                text-align: center;
                line-height: 60px;
                background: none;
                font-size: 20px;
                color: black;
                margin-top: 100px;
                margin-left: 130px;
                font-weight: 600;
            }
        
        .name{
            width: 365px;
            height: 800px;
            background: none;
            border: none;
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
            }
            .vido{
                    width: 100%;
                }
        }
        
    }
}
</style>
