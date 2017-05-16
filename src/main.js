import 'lib-flexible'
import FastClick from 'fastclick'
window.FastClick = FastClick
import Vue from 'vue'
import filters from '@/tools/filters'
Object.keys(filters).forEach((k) => Vue.filter(k, filters[k]))

import ajax from '@/tools/ajax'

import router from '@/tools/router'

Vue.config.productionTip = false

new Vue({
    el: '#app',
    router
})
 ajax({"requestType":"5041","arguments":{"activityType":"2"}})
 .then((data) => {
 // console.log(data)
 })
 .catch((message) => {

 })



