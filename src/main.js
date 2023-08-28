import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview';
import './assets/less/index.less';
import echarts from 'echarts'
import img from './lib/img'
import utils from "./lib/utils";
import axios from 'axios';
// main.js
import 'lib-flexible'

// 轮播图
import "swiper/swiper.min.css";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// 图片点击放大
import VueDirectiveImagePreviewer from 'vue-directive-image-previewer'
import 'vue-directive-image-previewer/dist/assets/style.css'
Vue.use(VueDirectiveImagePreviewer)
// 将自动注册所有组件为全局组件
import dataV from '@jiaminghi/data-view'
Vue.use(dataV)
Vue.use(ElementUI);

Vue.prototype.$echarts = function (el) {
    return echarts.init(el, null, {renderer: 'svg'})
}
Vue.prototype.$images = img
Vue.prototype.$axios = axios
axios.defaults.baseURL='/gdWeather'

Vue.config.productionTip = false;
Vue.use(iView);
Vue.use(utils)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
