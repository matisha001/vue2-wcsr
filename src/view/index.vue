<!--产品详情的组件列表-->
<template>
  <div>
    <p>
      <router-link to="/foo">Go to Foo</router-link>
      <router-link to="/bar">Go to Bar</router-link>
    <p class="button"><a @click="next" >更多></a></p>
    </p>
  </div>
</template>

<script>
  import loanList from '@/components/loan-list'
  import Vue from 'vue'
//  import vueResource  from 'vue-resource';
  import ajax from '@/tools/ajax'
//  Vue.use(vueResource);
  /*eslint-disable no-new*/
  export default{
    components: {
      loanList
    },
    data () {
      return {

      }
    },
    ready () {

    },
    route: {

    },
    methods: {
      next () {
        ajax({"requestType":"5041","arguments":{"activityType":"2"}})
          .then((data) => {
            console.log(data)
          })
          .catch((message) => {

          })
      }
    }
  }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
  p{
    a{
      font-size: 30px;
    }
  }
</style>
