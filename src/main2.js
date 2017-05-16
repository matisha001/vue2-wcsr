import 'lib-flexible'
import FastClick from 'fastclick'
// import VueResource from 'vue-resource'
// Vue.use(VueResource)
window.FastClick = FastClick
import Vue from 'vue'
import filters from '@/tools/filters'
Object.keys(filters).forEach((k) => Vue.filter(k, filters[k]))

// import ajax from '@/tools/ajax'
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

// Vue.http.options.headers = {
//     'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8;'
// }
// Vue.http.options.xhr = {
//     withCredentials: true
// }
// Vue.http.options.emulateJSON = true
// Vue.http({
//     url: 'http://news-at.zhihu.com/api/4/news/latest',
//     method: 'get',
//     data: {}
// })
// .then((response) => {
//     let data = response.data
//     console.log(response)
//         // params.callback(data)
// }, (response) => {
//     // error callback
// })
// ajax().then((message) => { console.log(message)}).catch((message) => {});
