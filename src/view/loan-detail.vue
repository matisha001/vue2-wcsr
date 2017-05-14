<!--产品详情的组件列表-->
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
      <loanList></loanList>
      <loanList></loanList>
      <loanList></loanList>
    <div class="loan-group">
      <loanList></loanList>
      <loanList></loanList>
      <loanList></loanList>
    </div>
    <div class="loan-group">
      <loanList></loanList>
      <loanList></loanList>
      <loanList></loanList>
    </div>
  </div>
</template>

<script>
  import loanList from '@/components/loan-list'
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
  .loan-group{
    margin-top: 20px;
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
</style>
