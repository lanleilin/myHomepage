// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import vueScrollBehavior from 'vue-scroll-behavior'
import 'normalize.css'

//添加
import axios from 'axios'
import './assets/css/base.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
Vue.prototype.$http = axios

Vue.use(vueScrollBehavior, { router: router })
Vue.use(ElementUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
