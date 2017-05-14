<!--产品详情的组件列表-->
<template>
  <div>
    <div class="pro-name">
      <img src="../assets/img/success.png" alt="">
      <div class="pro-title">
          <h2>房易贷</h2>
          <div>
            <span class="pro-title-rate">月利率<span class="pro-rate">1.5%</span></span>
            <span>服务费率 <span class="pro-rate">1.0%</span>起</span>
          </div>
      </div>
    </div>
    <detailList></detailList>
    <detailList></detailList>
    <detailList></detailList>
    <detailList></detailList>
    <detailList></detailList>
    <button class="pro-loan-btn">我要借款</button>
  </div>
</template>

<script>
  import detailList from '@/components/pro-detail-list'
  /*eslint-disable no-new*/
  export default{
    components: {
      detailList
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
    background: #008CED;
    margin-bottom: 20px;
    display: flex;
    align-items:center;
    padding:0 33px ;
    img{
      width: 118px;
      height:118px;
    }
    .pro-title{
      padding-left: 118px;
      color: #eee;
      div{
        display: flex;
        justify-content:space-around;
        align-items:baseline;
        font-size: 23px;
        .pro-title-rate{
          padding-right: 60px;
        }
        .pro-rate{
          font-size: 30px;
        }
      }
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
</style>
