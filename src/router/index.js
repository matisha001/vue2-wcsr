/* 路由页面设置 */
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

// import header from '@/components/header'
import t1 from '@/components/T1'
import result from '@/view/result'
import list from '@/view/list.vue'
import pro from '@/view/pro-detail'
import loan from '@/view/loan-detail'
import fill from '@/view/fill-amount'
// import comments from '@/view/comments.vue'
// import detail from '@/view/detail.vue'
// import recommenders from '@/view/recommender.vue'
// import section from '@/view/section.vue'
// import editors from '@/view/editor.vue'
// import author from '@/view/author.vue'
// import listDefault from '@/components/list-default.vue'
// import listTheme from '@/components/list-theme.vue'
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: list
    },
    {
      path: '/pro',
      name: 't1',
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
    },
    { path: '/user/:id', component: list },
    { path: '/user/:id', component: t1,
      children: [
        {
          // 当 /user/:id/profile 匹配成功，
          // UserProfile 会被渲染在 User 的 <router-view> 中
          path: 'profile',
          component: list
        },
        {
          // 当 /user/:id/posts 匹配成功
          // UserPosts 会被渲染在 User 的 <router-view> 中
          path: 'posts',
          component: t1
        }
      ]
    }
  ]
})
