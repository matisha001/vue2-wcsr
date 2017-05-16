<!--主题日报的列表-->
<template>
  <div class="flex">
    <div class="result">
      <img src="../assets/img/success.png" alt="">
      <h2 class="result-state">充值成功</h2>
      <p class="result-message">充值金额：1000元;实际到账：1000元</p>
      <button class="result-btn">完成</button>
      <!--<div class="result-error">-->
        <!--<button class="result-btn result-btn-service">咨询客服</button>-->
        <!--<button class="result-btn result-btn-finish">完成</button>-->
      <!--</div>-->
    </div>

  </div>
</template>

<script>
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
    background-color: #fff;
  }
  .result{
    flex:1;
    padding: 100px 0 88px;
    text-align: center;
    img{
      width: 136px;
      height: 136px;
      border-radius: 50%;
    }
    .result-state{
      font-size: 33px;
      padding-top: 65px;
    }
    .result-message{
      font-size: 20px;
      color:#ccc;
      padding: 35px 0 60px;
    }
    .result-btn{
      width:80%;
      height: 85px;
      border: 1px solid #118EEA;
      font-size: 33px;
      background-color: #118EEA;
      color:#eee;
      line-height: 85px;
      border-radius: 5px;
    }
    .result-error{
      width: 100%;
      .result-btn-service{
        width: 35%;
        background-color: #fff;
        color:#118EEA;
        margin-right: 10px;
        flex:1;
      }
      .result-btn-finish{
        width: 35%;
        margin-left: 10px;
        flex:1;
      }
    }

  }
</style>
