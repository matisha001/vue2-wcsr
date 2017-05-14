import 'lib-flexible'
import FastClick from 'fastclick'
window.FastClick = FastClick
import Vue from 'vue'
import filters from '@/tools/filters'
Object.keys(filters).forEach((k) => Vue.filter(k, filters[k]))


// import App from '@/view/App'
import router from '@/router'


// router.push({ name: 'user', params: { userId: 123 }})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // template: '<App/>',
  // components: { App }
})
