import Vue from 'vue'

import App from './App'
import router from './router'
import store from './store'

import axios from 'axios'

import './mock'

import '@/styles/index.scss'
import './plugins/element.js'

import './permission' // permission control

Vue.prototype.axios = axios

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
