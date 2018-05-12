<template>
  <div>
    <div class="header">
      <div class="header-btn">首页</div>
      <h2 class="header-title">TITLE</h2>
    </div>
    <div class="footer">
      <ul>
        <li><router-link to="/">电影</router-link></li>
        <li><router-link to="/music">音乐</router-link></li>
        <li><router-link to="/book">书籍</router-link></li>
        <li><router-link to="/photo">图片</router-link></li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default({

  })
</script>
<style scoped>
  .header{
    height: 1rem;
    width: 100%;
    color: #fff;
    background-color: rgb(33, 150, 243);
    position: fixed;
    top: 0;
    left: 0;
  }
  .header .header-btn{
    height: 1rem;
    line-height: 1rem;
    margin-left: .1rem;
  }
  .header .header-title{
    position: absolute;
    top: 50%;
    left: 50%;
    font-size: .5rem;
    transform: translate(-50%,-50%);
  }
  .footer{
    height: 1rem;
    width: 100%;
    color: #fff;
    background-color: rgb(33, 150, 243);
    position: fixed;
    bottom: 0;
    left: 0;
  }
  .footer ul li{
    height:1rem;
    float: left;
    line-height: 1rem;
    text-align: center;
    width: 25%;
  }
</style>
