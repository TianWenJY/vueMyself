import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '../page/login'
import axios from 'axios';
import VueResource from 'vue-resource'
import Index from '../page/Index'
import Nav from '../components/Nav'



Vue.use(Router)
Vue.use(Login)
Vue.use(VueResource)
Vue.use(Index)
Vue.prototype.$axios = axios
axios.defaults.baseURL = 'http://api.cheshili.com.cn:8000/Admin/';
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded';


export default new Router({
  routes: [
    { path: '/', name: 'Login', component: Login },
    {
      path: '/index', name: 'Index', component: Index
    }
  ]
})
