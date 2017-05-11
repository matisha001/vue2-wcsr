<template>
  <div>
    <div class="photo">
      <img src="http://7xqch8.com1.z0.glb.clouddn.com/4.pic_hd.jpg" alt="">
      <p>test2</p>
    </div>
      <p>
        <router-link to="/foo">Go to Foo</router-link>
        <router-link to="/bar">Go to Bar</router-link>
      </p>
  </div>
</template>

<script>

</script>

<style scoped lang="scss" rel="stylesheet/scss">
  .photo{
    width: 80px;
    height: auto;
    margin: 0 auto;
    padding: 30px 0;
    img{
      width: 80px;
      height: 80px;
      border-radius: 50%;
    }
  }

</style>
