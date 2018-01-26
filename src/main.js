// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery'
import './assets/css/bootstrap.min.css'
import '../static/js/bootstrap.min'
import axios from 'axios';
import common from '../static/js/common'
Vue.use(common)






Vue.config.productionTip = false
Vue.prototype.$axios = axios
axios.defaults.baseURL = 'http://api.cheshili.com.cn:8000/Admin/';
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded';
// const token = sessionStorage()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'

})
