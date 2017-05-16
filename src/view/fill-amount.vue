<template>
  <div>
    <div class="pro-name">
      <img src="../assets/img/success.png" alt="">
      <div class="pro-title">
          <h2>房易贷</h2>
          <div>
            <span>借款编号<span>LKDSLDSSA4576980</span></span>
          </div>
      </div>
    </div>
    <div class="loan-message">借款申请已审批通过，请耐心等待放款</div>
    <div class="fill-amount"><span>充值金额</span><input type="text">元</div>
    <button class="result-btn">确认充值</button>

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
  .pro-name{
    height: 190px;
    background: #fff;
    margin-top: 20px;
    display: flex;
    align-items:center;
    padding:0 33px ;
    img{
      width: 118px;
      height:118px;
    }
    .pro-title{
      padding-left: 118px;
      color: #000;
      h2{
        padding-bottom: 10px;
      }
      div{
        display: flex;
        justify-content:space-around;
        align-items:baseline;
        font-size: 20px;
        .pro-title-rate{
          padding-right: 60px;
        }
        .pro-rate{
          font-size: 30px;
        }
      }
    }
  }
  .loan-message{
    padding:15px 33px ;
    color:#54ABF0;
    font-size: 20px;
  }
  .fill-amount{
    padding: 20px 33px;
    background-color: #fff;
    height: 105px;
    display: flex;
    align-items:center;
    font-size: 33px;
    input{
      border: 0;
      height: 80px;
      width: 500px;
    }
  }
  .pro-loan-btn{
    width: 100%;
    height: 95px;
    border:0;
    font-size: 40px;
    color: #eee;
    margin-top: 20px;
    background-color:#008CED ;
  }
  .result-btn{
    width:80%;
    height: 85px;
    margin: 50px 10%;
    border: 1px solid #118EEA;
    font-size: 33px;
    background-color: #118EEA;
    color:#eee;
    line-height: 85px;
    border-radius: 5px;
    text-align: center;
  }
</style>
