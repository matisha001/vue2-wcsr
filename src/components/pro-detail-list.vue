<!--产品详情的组件列表-->
<template>
  <div class="flex">
    <div class="detail">
        <h2>产品介绍</h2>
        <p>你打谁看见了；解决空间链接可不能拿来看看；接口机接口连接回家考虑，下载下载下载吗</p>
    </div>
  </div>
</template>

<script>
  /*eslint-disable no-new*/
  export default{
    components: {

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

    }
  }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
  .flex{
    display: flex;
    justify-content:center ;
  }
  .detail{
    flex:1;
    padding: 36px 33px;
    text-align: left;
    background-color: #fff;
    font-size: 30px;
    border-bottom: 1px solid #ccc;
    h2{
      font-weight: 600;
    }
    p{
      padding-top: 40px;
      line-height: 55px;
    }
  }
</style>
