

import Vue from 'vue'

import App from './App'
import router from './router/index'



Vue.config.productionTip = false
// new Vue({
//   router,
//   render: h => h(App)
// }).$mount("#app")

new Vue({
  el: "#app",
  router,
  render: h => h(App)
}).$mount("#app");

// console.log('aa')

// new Vue({
//   el: '#app',
//   template: '<App/>',
//   components: { App }
// })


// var app = new Vue({
//   el: '#app',
//   router,
//   render: h => h(App)
// })
// console.log('aa')