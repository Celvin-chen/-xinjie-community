<template>
    <div class="page2">
           <div class="box-card">
            <div class="heise">
                <span class="fanhui" @click="pageup">返回</span>
                <!-- <video src="../assets//shipin/乡村振兴馆.mp4" class="vio" controls ></video> -->
            </div>
            <span class="jieshao">李嘴村党群服务中心新建于2019年,原先是李嘴小学,东、南、西、北各1栋校舍,因教学资源整合,小学于2006年撤并,留下的校舍因年久失修,面临倒塌,存在一定的安全隐患。为更好的为群众服务,李嘴村在2019年通过“村事民定”工作法,把东、西2东栋校舍拆除,新建600多平米的党群服务中心,现有新时代文明实践站、居家养老服务站和残疾人工作站,服务群众将更加方便快捷。
            </span>
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
        
        }
    },
    methods: {
        pageup(){
            this.$router.replace("page8")
        }
    },
    mounted() {
       
    },
  
}
</script>

<style lang="less" scoped>
  .box-card {
    width: 1270px;
    height: 980px;
    overflow:auto;
    margin: 0 auto;
    background: #efefef;
    .heise{
        width: 1270px;
        background: rgba(0, 0, 0, 0.5);
    }
    .vio{
        padding: 10px;
        width: 900px;
        height: 700px;
        position: relative;
        left: 16%;
    }
    .jieshao{
        text-indent:40px;
        display: block;
        font-size: 20px;
        // padding: 40px;
        margin: 20px;
    }
    .fanhui{
        font-size: 18px;
        font-weight: 600;
        color: #ffffff;
        position: absolute;
        left: 350px;
        top: 100px;
    }
    }
</style>
