<template>
    <div class="page2">
        <div class="title">周楼村产业结构</div>
        <ul class="biao">
			<li v-for="(item,index) in jidi" :key="index" @click="path(item)">{{ item.title }}</li>
		</ul>
        <ul class="biao2">
			<li v-for="(item,index) in chanye" :key="index" @click="openIamge(item)">{{ item.title }}</li>
		</ul>
        <Row class='content-left'>
            <span class="title">周楼村简介</span>
            <textarea class="name" readonly="readonly">
                2023年4月,安徽省农业农村厅认定周楼村为2023年度安徽省美丽宜居村庄。
                2022年12月,安徽省委农村工作领导小组公布安徽省乡村振兴示范村创建名单,周楼村上榜。
                2022年9月,周楼村被授予第六届合肥市文明村镇称号。
                2020年12月,周楼村入选2020年度安徽省森林村庄。
                2020年10月,合肥市农业农村局认定周楼村为第十二批合肥市“一村一品”示范村,主打产品：美国薄壳山核桃黄桃。
                2019年12月,合肥市爱卫办命名周楼村为2019年度合肥市卫生村(社区)。
                2018年10月,合肥市文明委授予周楼村第四届合肥市文明村镇称号。
                周楼村位于柿树岗岗乡西南,与龙潭村相接,全村共20个村民组,共计1673人,耕地面积2610亩,拥有党员33人。
                周楼村与长郢村、代塘村、龙潭村、柿树岗村、新街社区、廖渡村、袁店村、联圩村、杨桥村、宗洼村、马堰村、李嘴村、界河社区、李塘社区相邻。
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
            <span class="title">周楼村学习视频</span>
            <ul class="list">
                <li>
                    <span>第一期：碧根果种植</span>
                    <!-- <video src="../assets/shipin/碧根果.mp4" class="vido" controls ></video> -->
                </li>
                <li>
                    <span>第二期：黄桃种植</span>
                    <!-- <video src="../assets/shipin/黄桃.mp4" class="vido" controls ></video> -->
                </li>
                <li>
                    <span>第三期：黄桃种植</span>
                    <!-- <video src="../assets/shipin/黄桃2.mp4" class="vido" controls ></video> -->
                </li>
                
            </ul>
        </Row>
    </div>
</template>

<script>
const areaChart = ()=> import('./components/areaChart');
// const pie = () => import('./components/pie')
const  doubleArea = () => import('./components/page1/doubleArea.vue');

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
            ImageUrl: require("../assets/zhoulou/shuguo1.jpg"),
            ImageUrl1: require("../assets/zhoulou/shuguo2.jpg"),
            ImageUrl2: require("../assets/zhoulou/shuguo3.jpg"),
            text:"2022年周楼村积极谋划农文旅项目,争取以高水平项目建设推动农文旅融合发展,打造周楼特色农旅名片。村党支部书记王学祥考虑到村内有30多亩建设用地可以盘活利用,主动申报“数字农旅果蔬大棚项目”,并参加全县乡村振兴擂台大比武,项目经过专家三轮筛选,最终顺利评审通过。2022年7月,周楼村与安徽朗坤物联网有限公司达成“村企联建”合作关系,“数字农旅果蔬大棚项目”正式启动建设。项目占地面积25.29亩,投入财政衔接资金1800万元,打造一座8800平方米的高科技智能温控大棚（包括6400平方米的空中草莓高技智能温室大棚、1550平方米的花卉种植高科技智能温室大棚、240平方米的生鲜仓储高科技智能温室大棚、610平方米的设备区和329米的硬化道路）。该项目以提高融合意识挖掘乡村振兴潜力,力争构建“农业+文创+旅游”的农文旅融合发展模式,即以“高科温室大棚”为产业依托,以物联网、大数据等数字信息化技术为手段构建温室产业数据链,建设以科技为支撑的绿色生态农业体系,成为涵盖农业生产、休闲采摘、研学科普、旅游体验等多功能于一体的生态绿色休闲的农文旅示范点,促进三产互动融合发展。2022年底,项目在疫情期间按期竣工验收,于2023年5月投产运营,今后每年为村集体带来收益110万元,并长期带动20人就业增收。下一步,周楼村计划利用“数字农旅果蔬大棚”种植的空中草莓,打造品牌和亮点,依托果蔬大棚建成涵盖农业生产、休闲采摘、劳动教育科普、旅游体验等多功能于一体的劳动教育实训示范基地,推出农产品采摘游、乡村节庆游、短期游、周末游等优质旅游产品,构建“农业+文创+劳动教育实训基地+旅游”的发展模式,持续探索农文旅融合发展新业态。",
            jidi:[
            { title: "李嘴村" ,path:"page2"}, 
            { title: "周楼村" ,path:"page3"}, 
            { title: "廖渡村" ,path:"page4"}, 
            { title: "柿树村" ,path:"page5"}, 
            { title: "新街社区" ,path:"page6"},
            ],
            chanye:[
                { 
                    title: "数字农旅果蔬大棚" ,
                    path:"page6",
                    text:"2022年周楼村积极谋划农文旅项目,争取以高水平项目建设推动农文旅融合发展,打造周楼特色农旅名片。村党支部书记王学祥考虑到村内有30多亩建设用地可以盘活利用,主动申报“数字农旅果蔬大棚项目”,并参加全县乡村振兴擂台大比武,项目经过专家三轮筛选,最终顺利评审通过。2022年7月,周楼村与安徽朗坤物联网有限公司达成“村企联建”合作关系,“数字农旅果蔬大棚项目”正式启动建设。项目占地面积25.29亩,投入财政衔接资金1800万元,打造一座8800平方米的高科技智能温控大棚（包括6400平方米的空中草莓高技智能温室大棚、1550平方米的花卉种植高科技智能温室大棚、240平方米的生鲜仓储高科技智能温室大棚、610平方米的设备区和329米的硬化道路）。该项目以提高融合意识挖掘乡村振兴潜力,力争构建“农业+文创+旅游”的农文旅融合发展模式,即以“高科温室大棚”为产业依托,以物联网、大数据等数字信息化技术为手段构建温室产业数据链,建设以科技为支撑的绿色生态农业体系,成为涵盖农业生产、休闲采摘、研学科普、旅游体验等多功能于一体的生态绿色休闲的农文旅示范点,促进三产互动融合发展。2022年底,项目在疫情期间按期竣工验收,于2023年5月投产运营,今后每年为村集体带来收益110万元,并长期带动20人就业增收。下一步,周楼村计划利用“数字农旅果蔬大棚”种植的空中草莓,打造品牌和亮点,依托果蔬大棚建成涵盖农业生产、休闲采摘、劳动教育科普、旅游体验等多功能于一体的劳动教育实训示范基地,推出农产品采摘游、乡村节庆游、短期游、周末游等优质旅游产品,构建“农业+文创+劳动教育实训基地+旅游”的发展模式,持续探索农文旅融合发展新业态。",
                    value:require("../assets/zhoulou/shuguo1.jpg"),
                    value1:require("../assets/zhoulou/shuguo2.jpg"),
                    value2:require("../assets/zhoulou/shuguo3.jpg"),
                },
                { 
                    title: "黄桃产业园" ,
                    text:"周楼村黄桃产业园2017年底,为发展壮大村集体经济、带动脱贫户就业增收,周楼村两委班子转变发展观念,外出参观学习,回村后积极谋划种植特色经果林,经村民代表大会民主协商,决定对村集体岗坡地进行退化林改造,同时流转村民组部分林地,共投资61万元,其中财政扶贫资金38万元、村自筹23万元,建成120亩扶贫产业园,种植优质黄桃黄金蜜一号。扶贫产业园建设过程中,带动15户脱贫户种植黄桃约19亩,树苗费用由村免费提供,栽植树苗技术由村统一指导,脱贫户栽植黄桃产生效益后由村统一帮助销售,每年带动脱贫户户均增收5000-10000万元。2018年底为了更快发展周楼村集体经济,在县农委的支持下,投入产业资金20万元,在原有120亩黄桃产业园基地套种40亩460棵美国薄壳山核桃。 2019年为推进经果林产业规模化发展,扩建薄壳山核桃产业园,最终在全村形成1500亩薄壳山核桃种植基地和120亩优质黄桃产业园的双产业体系。",
                    value:require("../assets/zhoulou/huangt1.jpg"),
                    value1:require("../assets/zhoulou/huangt2.jpg"),
                    value2:require("../assets/zhoulou/huangt3.jpg"),
                },
                { 
                    title: "高庄庭院经济" ,
                    text:"2019年周楼村党支部书记王学祥到浙江学习农村人居环境提升经验,回来以后带领村“两委”创新思路,当时结合“五清一改”农村人居环境整治行动,利用大型机械对全村18个村民组房前屋后的土地进行全面整治,共整治出400亩空闲地。为彻底解决“脏乱差”问题,经研究协商,决定对全村房前屋后400亩空闲地进行整体布局,全面推广种植薄壳山核桃,村里负责山核桃的资金投入、种植、技术管理,产生经济效益以后,由村集体与村民按比例享受效益。通过在房前屋后推广种植山核桃树,周楼村人居环境美化成果显著,原本人居环境“脏乱差”的房前屋后,被绿色珍贵的薄壳山核桃覆盖,人居环境大大提升,不仅如此,山核桃预计5年后收益,届时每户可增收千元以上,且每年持续增收。2021年,经民主协商征求村民组群众意见,周楼村引进中药材芍药和金丝皇菊种苗率先在高庄村民组房前屋后山核桃林下套种,芍药根可以作为药材出售、花可观赏,金丝皇菊可以观赏又能采摘制茶,既增加经济效益,又美化人居环境,林花繁茂的“庭院经济”成为村民增收致富的新渠道。",
                    value:require("../assets/tiayuan1.jpg"),
                    value1: require("../assets/shaoyao.jpg"),
                    value2:require("../assets/shaoyao3.jpg"),
                }, 
                { 
                    title: "林下中药材" ,
                    text:"2019年周楼村加快特色经果林产业规模化发展,扩种约200亩薄壳山核桃产业园。为充分利用林下土地资源和林荫空间,缩短林业经济周期,增加林业附加值,开辟增收渠道,村集体投资5.6万元,在山核桃林下套种40亩冬桃和30亩精品苗木花卉,此后每年在林下套种花生、西瓜等经济作物,巩固生态建设成果,推进“绿水青山”向“金山银山”转化。2021年,周楼村将林下套种中药材作为推进乡村产业发展的重要抓手,先后引进中药材芍药,在山核桃林下套种100亩；引进金丝皇菊在村林下共套种80亩；引进中药材防风,在林下套种140亩。目前全村林下套种经济作物面积已超过300亩,中药材芍药四年后每亩收益1.5万元,预计可带来180万元收益,金丝皇菊和防风预计2023带来收益约120万元,同时累计带动50户农户约70人务工,帮助脱贫群众稳岗就业、稳定增收。“林下经济”的发展拓展了农村经济的发展空间,提高了土地利用率,拓宽了群众增收渠道,实现林业增效、农民增收。",
                    value:require("../assets/zhoulou/linxia1.jpg"),
                    value1:require("../assets/zhoulou/linxia2.jpg"),
                    value2:require("../assets/zhoulou/linxia3.jpg"),
                }, 
                { 
                    title: "深加工厂房" ,
                    text:"周楼村农林产品资源丰富,现有金丝皇菊80亩、芍药100亩,防风140亩,薄壳山核桃1500亩,其中薄壳山核桃年产量约20000斤并将逐年增加,全乡已种植山核桃3500亩,周边乡镇区域已有万亩以上。为了把资源优势转化为产品和经济优势,2022年周楼村利用闲置多年、年久失修,已无修缮价值的废弃老小学旧址,新建一座1350㎡的农副产品深加工厂房,推动农村产业发展由一产向二产延伸。 厂房建造了冷库,申报了薄壳山核桃深加工生产线,即炒果机、烘干机、炸油机等核桃加工机械设备,通过对农副产品进行就地保鲜和深加工销售,从根本上保障和提升农产品的质量安全,提高薄壳山核桃、金丝皇菊、芍药等特色农副产品附加值,增加农副产品经济效益。目前农副产品加工厂房项目已建成投用,今年为村带来增收约50万元,并逐年增加。该项目有效破解了传统农产品附加值低、效益差的难题,成为村集体经济发展新的增长点,同时将带动全村及周边群众实现就近就业或产业分红,并助力周边农副产品深加工产业发展。",
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
                
                .bingtu{
                    position: relative;
                    left: -40px;
                    bottom: 60px;
                }
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
