<template>
    <!-- <dv-full-screen-container> -->
    <div class="bei">
        <div class="header">
            新街社区乡村干部实训基地智能教学平台
        </div>
        <div class="selectRange">
            <Menu mode="horizontal" @on-select="trainingClick" :active-name="$route.name">
                <MenuItem name="page1">可视化平台</MenuItem>
                <MenuItem name="page8">培训平台</MenuItem>
                <MenuItem name="Live">直播培训</MenuItem>
            </Menu>
        </div>
        <div class="page">
            <router-view ></router-view>
        </div>
    </div>
</template>
<script>
export default {
    name: '',
    data() {
        return {
            spanOne:1,
        }
    },
    mounted() {
        
    },
    methods: {
        //菜单跳转
        trainingClick(e){
            if(e == 'page1'){
                this.$router.push('/page1');
            }
            if(e == 'page8'){
                this.$router.push('/page8');
            }
            if(e == 'Live'){
                window.open('https://im.zhangkenan.com/#/','_self');
            }
        }
    },
}
</script>
<style lang="less">
.bei{
    width: 100%;
    min-width: 1200px;
    height: 100vh;
    background-image: url(../assets/map3.png);
    background-repeat:no-repeat;
    background-size: 100% 100%;
}
.header {
    width: 100%;
    height: 80px;
    text-align: center;
    color: white;
    line-height: 70px;
    font-size: 34px;
    background: linear-gradient(to bottom,#000000, rgba(38,111,232,0) 80%);
}
.selectRange{
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 80px;
    padding: 15px 10px 5px 10px;
    box-sizing: border-box;
    background-image: url(../assets/header_bg.png);
    background-repeat:no-repeat;
    background-size: 100% 100%;
    min-width: 1200px;
    .ivu-menu-light{
        background: rgba(0,0,0,0);
        &::after {
            height: 0;
        }
        .ivu-menu-item{
            color: white !important;
        }
        .ivu-menu-item-active {
            color: #75deef !important;
        }
    }
    .ivu-menu-light:after {
        height: 0px !important;
    }
}
.page {
    overflow-y: scroll;
}
</style>
