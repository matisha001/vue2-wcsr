
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import result from '@/view/result'
import pro from '@/view/pro-detail'
import index from '@/view/index'
import loan from '@/view/loan-detail'
import fill from '@/view/fill-amount'
export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/pro',
      name: 'pro',
      component: pro
    },
    {
      path: '/result',
      name: 'result',
      component: result
    },
    {
      path: '/loan',
      name: 'loan',
      component: loan
    },
    {
      path: '/fill',
      name: 'fill',
      component: fill
    }
  ]
})
