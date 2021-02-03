

import Vue from 'vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/zh-CN' // lang i18n

import '@/styles/index.scss' // global css
import App from './App'
import router from './router'
import store from './store'

import '@/icons' // icon
import './router/index' // permission control 


Vue.use(ElementUI, {
  // size: 'mini',
  locale
})


Vue.config.productionTip = false

var app = new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
}) 
