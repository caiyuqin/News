import Vue from 'vue'
import App from './App.vue'
import Font from '../src/assets/js/font.js'
import axios from 'axios'
import Loading from './components/loading'
import VueRouter from 'vue-router'
import routes from './vuerouter.config.js'

import stores from './store/index'

import { Swipe, SwipeItem } from 'mint-ui';
import 'mint-ui/lib/style.css';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

import Icon from 'vue-svg-icon/Icon.vue';
Vue.component('icon', Icon);


Vue.prototype.$http = axios
const router=new VueRouter({
  routes,
  mode: 'history', //切换路径模式，变成history模式
  scrollBehavior: () => ({ y: 0 }), // 滚动条滚动的行为，不加这个默认就会记忆原来滚动条的位置
});

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  stores.dispatch("LOADING_SHOW")
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  stores.dispatch("LOADING_HIDE")
  return response;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});

Vue.use(Loading)
Vue.use(VueRouter)
new Vue({
  el: '#app',
  router,
  store:stores,
  render: h => h(App)
})
