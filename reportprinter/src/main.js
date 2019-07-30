import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import axios from 'axios';
import utils from './utils.js';


// Vue.use(router)
Vue.use(ElementUI)
Vue.prototype.$axios = axios;
Vue.prototype.$utils = utils;

Vue.prototype.$SERVICEADDRESS = "http://booking.jingru88.com/";

new Vue({
  el: '#app',
  render: h => h(App)
})
