import Vue from 'vue'

import App from './App'
import router from './router'
import store from './store'

import axios from 'axios'
import VueAxios from 'vue-axios'

import './mock'

import '@/styles/index.scss'
import './plugins/element.js'

import './permission' // permission control

Vue.use(VueAxios, axios)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
