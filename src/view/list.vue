<!--列表页-->
<template>
  <div class="main-list" id="foo">
    <div>这是list</div>
    <list-header :show-sidebar.sync="showSidebar" :title="title" :tip="tip" :icon-display="iconDisplay"> </list-header>
    <!--侧边栏-->
    <side-bar > </side-bar>
    <!--侧边栏遮罩层-->
    <div v-if="showSidebar" class="sidebar-mask" @click="hiddenBar"></div>

    <!--页面子路由-->
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
import sideBar from '@/components/T1.vue'
//import sideBar from '../components/sidebar.vue'
import listHeader from '@/components/list-header.vue'

export default {
  components: {
    sideBar,
    listHeader
  },
  data () {
    return {
      loading: false,
      showSidebar: false,
      tip: ''
    }
  },
  computed: {
    title () {
      switch (this.$route.params.id) {

      }
    },
    iconDisplay () {
      if (this.$route.params.id) {
        return false
      } else {
        return true
      }
    }
  },
  events: {

  },
  attached () {
  },
  methods: {
    replace (str) {

    },
    showBar () {

    },
    hiddenBar () {

    }
  }
}
</script>

<style lang="scss" rel="stylesheet/scss">
  @import "../assets/css/reset";
  @font-face {
    font-family: 'iconfont';
    src: url('//at.alicdn.com/t/font_1467357626_5109937.eot'); /* IE9*/
    src: url('//at.alicdn.com/t/font_1467357626_5109937.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('//at.alicdn.com/t/font_1467357626_5109937.woff') format('woff'), /* chrome、firefox */
    url('//at.alicdn.com/t/font_1467357626_5109937.ttf') format('truetype'), /* chrome、firefox、opera、Safari, Android, iOS 4.2+*/
    url('//at.alicdn.com/t/font_1467357626_5109937.svg#iconfont') format('svg'); /* iOS 4.1- */
  }
  .scroll-stop{
    overflow: hidden;
  }

  .main-list{
    margin-top: 50px;
  }

  .sidebar-mask{
    /*width: 357px;*/
    /*height: 667px;*/
    position: fixed;
    transform: translateZ(0);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 5;
    background: rgba(0, 0, 0, 0.7);
  }
  .list{
    background: #efefef;
  }

  html {
    height: 100%;
    /*overflow: auto;*/
  }

  body {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  #app {
    color: #2c3e50;
    height: 100%;
    width: 100%;
    font-family: Source Sans Pro, Helvetica, sans-serif;
  }

  #app.night-style{
    background: #343434;
    .list-header{
      background: #222222;
    }
    .list-box{
      background: #343434;
      .title{
        color: #B7B7B7;
      }
      .list-detail-box{
        background: #404040;
        border: 1px solid #343434;
        border-bottom: 1px solid #222222;
        .list-content-box{
          color: #d2d2d2;
        }
      }
    }
    .mask{
      .share-box{
        background: #343434;
        p{
          color: #B7B7B7;
        }
      }
    }
    .sidebar-header{
      background:  #222222;
      p{
        color: #B7B7B7;
      }
    }
    .sidebar-list{
      background: #343434;
      .sidebar-list-first{
        background: #343434;
      }
      .sidebar-list-ul{
        color: #B7B7B7;
      }
    }
    .editors-box{
      background: #343434;
      color: #B7B7B7;
    }
    .name{
      color: #B7B7B7;
    }
    .content-wrap{
      background: #343434;
      .headline-title{
        color: #B7B7B7;
      }
      .content-inner{
        background: #343434;
        .question + .question{
          border-top: 4px solid #222222;
        }
      }
      .heading-content{
        color: #888888;
      }
      .question-title{
        color: #B7B7B7;
      }
      .content{
        color: #888888;
      }
      .author{
        color: #888888;
      }
      .view-more{
        a{
          background: #303030;
          color: #6991C2;
        }
      }
    }
    .section-box{
      background: #343434;
      .section-btn{
        background: #303030;
        p{
          color: #888888;
        }
      }
    }
    .recommenders-box{
      background: #343434;
      color: #B7B7B7;
    }
    .comments-header{
      background: #222222;
    }
    .long-comments{
      background: #343434;
      .long-comments-nav{
        color: #B7B7B7;
      }
      .comment-content{
        color: #888888;
      }
    }
    .short-comments{
      background: #343434;
      .short-comments-nav{
        color: #B7B7B7;
      }
      .comment-content{
        color: #888888;
      }
    }
    .no-comments{
      border-top: 1px solid #888888;
    }
    .common-header{
      background: #222222;
    }
    .list{
      background: #343434;
      .list-detail-box{
        background: #404040;
        border: 1px solid #343434;
        border-bottom: 1px solid #222222;
        .list-content-box{
          color: #d2d2d2;
        }
      }
    }
  }

</style>
