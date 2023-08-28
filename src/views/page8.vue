<template>
    <div class="page2" style="backdrop-filter: blur(3px);">
           <div class="box-card">
            <div class="mokuai">
                <div class="kuai">
                    <div class="kuai-1">
                        <span class="kuai-2">要闻速递</span> <span class="kuai-3">更多></span>
                        <ul>
                        <li>肥西县柿树岗乡:“三点一线”拉响乡风文明礼炮</li>
                        <li>柿树岗乡：黄桃满枝头 金果促振兴</li>
                        <li>柿树岗乡防震减灾科普专栏</li>
                        <li>肥西县柿树岗乡：打造优秀书记工作室 探索基层党建新路径</li>
                        <li>肥西县：深化服务举措 扎实推进营商环境持续优化</li>
                    </ul>
                    </div>
                </div>
                <div class="kuai">
                    <div class="kuai-1">
                        <span class="kuai-2">党建党史</span> <span class="kuai-3">更多></span>
                        <ul>
                        <li>饮水思源、感恩奋进、实干争先!</li>
                        <li>调查研究“十宜十忌”</li>
                        <li>领导干部要增强工作的预见性和主动性</li>
                        <li>立德树人 为党育才</li>
                        <li>新青评|夯实“基层之治”</li>
                    </ul>
                    </div>
                </div>
                <div class="kuai">
                    <div class="kuai-1">
                        <span class="kuai-2">他山之石</span> <span class="kuai-3">更多></span>
                        <ul>
                        <li>饮水思源、感恩奋进、实干争先!</li>
                        <li>调查研究“十宜十忌”</li>
                        <li>领导干部要增强工作的预见性和主动性</li>
                        <li>立德树人 为党育才</li>
                        <li>新青评|夯实“基层之治”</li>
                    </ul>
                    </div>
                </div>
            </div>
            <div id="ziliao">
                <span >实训基地</span><span class="ziliao-1">更多></span>
            </div>
           
            <div class="jidi">
                <div class="di" @click="dang(v,i)" v-for="(v,i) in ruralList" :key="i">
                   <span class="dian"></span> <span class="di-1">{{v.name}}</span><span class="gengduo">更多></span>
                    <img :src=v.img>
                    <div class="zi">{{ v.text }}</div>
                </div>
            </div>
            <div id="ziliao">
                <span>精品课程</span><span class="ziliao-1">更多></span>
            </div>
            <ul class="ke">
                <li class="kecheng" @click="add()">乡村干部实训课程《第一期》</li>
                <li class="kecheng">乡村干部实训课程《第二期》</li>
                <li class="kecheng">乡村干部实训课程《第三期》</li>
                <li class="kecheng">乡村干部实训课程《第四期》</li>
                <li class="kecheng">乡村干部实训课程《第五期》</li>
                <li class="kecheng">乡村干部实训课程《第六期》</li>
                <li class="kecheng">乡村干部实训课程《第七期》</li>
                <li class="kecheng">乡村干部实训课程《第八期》</li>
                <li class="kecheng">乡村干部实训课程《第九期》</li>
                <li class="kecheng">乡村干部实训课程《第十期》</li>
                <li class="kecheng">乡村干部实训课程《第十一期》</li>
                <li class="kecheng">乡村干部实训课程《第十二期》</li>
            </ul>
           </div>
    </div>
</template>

<script>


export default {
    name: 'page2',
    props: ['selectRangeDate'],
    components: {
      
        // pie
    },
    data() {
        return {
            ruralList:[
					{ id: 1, name: '党群服务中心', img: require('../assets/lizui/dqfw.png') ,text:"李嘴村党群服务中心新建于2019年,原先是李嘴小学,东、南、西、北各1栋校舍,因教学资源整合,小学于2006年撤并,留下的校舍因年久失修,面临倒塌,存在一定的安全隐患。为更好的为群众服务,李嘴村在2019年通过“村事民定”工作法,把东、西2东栋校舍拆除,新建600多平米的党群服务中心,现有新时代文明实践站、居家养老服务站和残疾人工作站,服务群众将更加方便快捷。"},
					{ id: 2, name: '唐五房圩', img: require('../assets/xinjie/twfw.png') ,text:"唐五房圩位于肥西县柿树岗乡新街社区,建于1865年,由唐殿魁,唐定奎兄弟二人共同建造,后因兄殿魁早亡,弟定奎权主业,习称唐五房圩,圩子成方形,占地200百余亩,由内外两道壕沟,围墙、大局墩、小局墩,南北门楼、四层岗楼、仓库、砻场、厨房、佛堂、五房圩主体建筑三进三路一转心楼和四房圩主体建筑组成,圩原有房屋200余间,光绪年间火灾烧毁,唐定奎儿子唐治隆于宣统元年（公元1909年）重建。1949年建国之后,先后为国家粮站以及袁店中学所用,仅存转心楼1座和唐定奎从台湾带回的梓树1棵,2004年10月安徽省人民政府公布转心楼为安徽省文物保护单位。2019年至2023年肥西县人民政府对圩堡进行了环境综合整治,使其恢复原有风貌。"},
					{ id: 3, name: '蒿子粑粑展示馆', img: require('../assets/xinjie/hzbb.png') ,text:"2018年,新街社区依托自身独特的自然资源和优越的基础设施条件,以肥西县柿树岗乡新街社区社会组织联合会为实体,在肥西县供销社、山南中心供销社实地考察、组织、指导下,通过申请扶贫专项资金76.636万元,在周桥新村租用20亩土地进行土地平整,在平整后的土地上人工栽种蒿子,与此同时,对新街旧址进行改造,将其改造成蒿子粑粑生产厂房,建设社区第一座扶贫产业园,并通过“产业+扶贫”的方式,成功让社区46户脱贫户年分红在15万元左右,并为15户以上有劳动能力的脱贫户提供就业,年收入不少于6000元/人。"},
					{ id: 4, name: '游客服务中心', img: require('../assets/xinjie/ykfwzx.png'),text:"为切实推动乡村旅游高质量发展,为建设高质量美好新街赋能增效,新街社区召开“村事民定”议事会,落实全过程人民民主,盘活旧资产,实现老食品站与淮军圩堡项目有效衔接,打造游客服务中心。服务中心总建筑面积为600.58㎡,其中接待大厅面积达214.4㎡,主要用于接待游客、农特产品展销、会客研学等。餐饮区面积达386.18㎡,其中包含包厢6间,餐饮散台5组,厨房一间,包厢可同时容纳70人左右同时用餐。" },
					{ id: 5, name: '农事服务中心', img: require('../assets/xinjie/nsfwzx.png' ),text:"为大力推进农业机械化、智能化发展,提升农业装备水平,扎实推进“两强一增”行动落细落实,满足农机、农技推广以及农资产品展示、信息发布等需求,新街社区盘活前庄村民组15亩建设用地,创建集“烘干、储存、加工”全链式作业与“保养存放、信息服务、示范推广”全能式发展并存的农事服务中心,聚焦农产品高质量发展目标,提高设施设备利用率,增加“附加值”,助推农产品“提档升级”。"},
					{ id: 6, name: '诗韵甜园', img: require('../assets/xinjie/syty.png') ,text:"为盘活闲置宅基地,持续壮大村集体经济,2019年6月,新街社区党委通过招商引资,引进投资7900万元的民宿项目入驻黄圩村民组,将23亩闲置宅基地、242亩农用地及74亩水塘打包流转,诗韵甜园位于肥西县柿树岗乡新街社区黄圩村民组,占地面积约400亩,其中水域面积约75亩。甜园以原汁原味的田园风光为基础,绿色环保的民宿建筑为核心,古朴厚重的民俗文化为切入点,结合当地非遗文化蒿子粑粑、淮军故里“唐五房圩”等禀赋资源,打造集田园观光、特色民宿、休闲娱乐、文化体验于一体的乡村休闲度假基地和“日出而作、日落而息”、“鸡犬相闻、老来相伴”的乡村慢生活。"},
					{ id: 7, name: '乡村振兴馆', img: require('../assets/xinjie/xczxg.png') ,text:"周楼乡村振兴体验馆位于安徽肥西县柿树岗乡周桥新村,由柿树岗乡人民政府申请财政资金400万元,入股安徽仁奎文化旅游开发有限公司,总投资约1263万元建设的集休闲度假、特色餐饮、农业观光、产品展销等功能于一体的现代化大型文旅场所。总建筑面积约1130㎡,其中：文化产业示范区680㎡,综合服务配套310㎡,宣传展示区140㎡,研学采摘体验地50亩。体验馆以乡村文化旅游为主题,通过全方位展览和沉浸式体验的方式,展现了近年来柿树岗乡在特色产业、乡村文化、生态旅游、美丽乡村建设、基层治理等方面的发展全貌。设有文化旅游馆、书画体验馆、农耕文化馆、农产品展馆、农业科技馆、民间文化非遗馆六大部分。另设会议厅、电影院、乡村食堂、民俗中心等配套设施,突出展示乡村振兴成果、交流乡村振兴经验、开展乡村振兴研学、实施乡村振兴培训、推进乡村振兴战略。"},
					{ id: 8, name: '数字农旅果蔬大棚', img: require('../assets/zhoulou/shuguo1.jpg') ,text:"柿树岗乡周楼村数字农旅蔬果大棚项目位于上桂岗村民组,占地面积为25.29亩,智能温控大棚约8800平方米,其中空中草莓高科技智能温室大棚约 6400平方米、花卉种植高科技智能温室大棚约1550平方米、生鲜仓储高科技智能温室大棚约 240 平方米、自动化设备间约610 平方米。同时,配套建设农学营地、集散广场、停车场、绿化景观工程等。项目按照现代农业产业示范区整体架构进行规划,采用“标准化种植、数字化管理、品牌化运营”模式,全面实施农业标准化生产,依托数字化科技应用,品牌化运营策略,实现农业产业全面升级。"},
				],
        }
    },
    methods: {
        add(){
            this.$router.replace("page9")
        },
        dang(id){
            this.$router.push({
            name:'page10', 
            params:{id
                }
        })
    }
    },
    mounted() {
       
    },
  
}
</script>

<style lang="less" scoped>
    li:hover{
                color: rgba(255, 0, 0, 0.603);
            }
  .box-card {
    width: 1270px;
    height: 980px;
    overflow:auto;
    margin: 0 auto;
    background: #efefef;
    #ziliao{
        line-height: 50px;
        width: 1225px;
        display: block;
        margin-left: 10px;
        font-size: 20px;
        font-weight: 600;
        padding-left: 20px;
        background: white;
        .ziliao-1{
            float: right;
            margin-right: 10px;
            font-size: 15px;
        }
        
    }
    .kuai-1{
        width: 100%;
        height: 60px;
        background: #c0c0c0;
        padding: 20px;
        .kuai-2{
            font-size: 19px;
            font-weight: 600;
        }
        .kuai-3{
            margin-left: 240px;
            
        }
    }
    .ke{
            width: 1270px;
            display: flex;
            flex-wrap: wrap;
            align-content: space-between;
            li{
                width: 21%;
                height: 50px;
                text-align: center;
                line-height: 30px;
                font-size: 15px;
                margin:10px auto;
                background: white;
                overflow: hidden;
                padding: 10px;
                border-radius: 10px;
            }
           
        }
    }
    .mokuai{
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        .kuai{
            width: 31.5%;
            height: 300px;
            margin: 10px;
            background: white;
            ul{
                list-style:disc;
                padding: 20px;
                font-size: 17px;
                li{
                    background: url(https://newwcwy.ahxf.gov.cn/images/Skin3/index_12.jpg) 4px center no-repeat;
                    padding-left: 12px;
                    margin: 10px;
                    line-height: 30px;
                    height: 26px;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                   
                }
            }
        }
       
    }
    .jidi{
        width: 1270px;
        display: flex;
        flex-wrap: wrap;
        align-content: space-between;
        .di{
            width: 23%;
            height: 200px;
            margin: 10px;
            background: white;
            overflow: hidden;
            padding: 10px;
            .dian{
                width: 10px;
                height: 5px;
                background: rgba(255, 0, 0, 0.507);
                display: block;
                border-radius: 10px;
                position: relative;
                top: 15px;
            }
            .gengduo{
                font-size: 10px;
                float: right;
                 }
            .di-1{
                margin-left: 20px;
                font-size: 15px;
               
            }
            img{
                width: 100%;
                height: 75%;
            }
            .zi{
                
                overflow:hidden;
                text-overflow:ellipsis;
                white-space:nowrap;
            }
        }
    }
</style>
