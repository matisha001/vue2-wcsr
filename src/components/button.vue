<!--主题日报的列表-->
<template>
  <div class="flex">
    <div class="result">
      <img src="../assets/img/success.png" alt="">
      <h2>充值成功</h2>
      <p>充值金额：1000元;实际到账：1000元</p>
      <button>完成</button>
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
  .result{
    flex:1;
    padding: 100px 0 65px;
    text-align: center;
    img{
      width: 136px;
      height: 136px;
      border-radius: 50%;
    }
  }
</style>
