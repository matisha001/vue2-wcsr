/* 路由页面设置 */
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

// import header from '@/components/header'
import t1 from '@/components/T1'
import list from '@/view/list.vue'
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: list
    },
    {
      path: '/foo',
      name: 't1',
      component: t1
    },
    {
      path: '/bar',
      name: 't2',
      component: list
    }
  ]
})
