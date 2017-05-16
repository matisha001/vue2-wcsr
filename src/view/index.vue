<!--产品详情的组件列表-->
<template>
  <div>
    <p>
      <router-link to="/">Go to index</router-link> </p>
    <p> <router-link to="/pro">Go to pro</router-link></p>
    <p> <router-link to="/result">Go to result</router-link></p>
    <p><router-link to="/loan">Go to loan</router-link></p>
    <p> <router-link to="/fill">Go to fill</router-link></p>
    <p class="button"><a @click="next" >更多></a></p>
  </div>
</template>

<script>
  import loanList from '@/components/loan-list'
  import ajax from '@/tools/ajax'
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
//        ajax({"requestType":"5041","arguments":{"activityType":"2"}})
//          .then((data) => {
//            console.log(data)
//          })
//          .catch((message) => {
//
//          })
      }
    }
  }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
  p{
    margin: 20px;
    background-color: #00a2ed;
    a{
      font-size: 30px;
      text-decoration: none;
    }
  }
</style>
