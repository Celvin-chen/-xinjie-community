<template>
    <div class="page2">
           <div class="box-card">
            <div class="di">
                <span class="fanhui" @click="tiao">返回</span>
                    <div class="biaoti">{{list.name}}</div>
                    <img :src=list.img alt="">
                    <div class="zi">{{ list.text }}</div>
                </div>
           </div>
    </div>
</template>

<script>


export default {
    name: 'page2',
    data() {
        return {
            list:[]
        }
    },
    methods: {
        tiao(){
            this.$router.replace("page8")
        }
    },
    mounted(){
        this.list=this.$route.params.id
        console.log(this.list);

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
    .biaoti{
        text-align: center;
        font-size: 30px;
        position: relative;
    }
        img{
            width: 70%;
            height: 70%;
            position: relative;
            left: 15%;
        }
        .zi{
            padding: 20px;
            font-size: 20px;
        }
        .fanhui{
        font-size: 18px;
        font-weight: 600;
        color: #0f0f0f;
        position: absolute;
        left: 350px;
        top: 100px;
        z-index: 999;
    }
    }
</style>
