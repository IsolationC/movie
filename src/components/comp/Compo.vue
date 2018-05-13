<template>
  <div>
    <div class="header" :style="'background-color:'+$store.state.color">
      <div class="header-btn">首页</div>
      <h2 class="header-title">TITLE</h2>
    </div>
    <div class="footer">
      <ul>
        <li @click='routerLink("/")'>电影</li>
        <li @click='routerLink("music")'>音乐</li>
        <li @click='routerLink("book")'>书籍</li>
        <li @click='routerLink("photo")'>图片</li>
      </ul>
    </div>
  </div>
</template>
<script>
  import store from '@/vuex/store'
  export default({
    store,
    data(){
        return{
            bgcolor:'red'
        }
    },

    methods: {
      routerLink(path){
          this.$router.push(path);
          if(path=='book'){
              this.bgcolor='brown';
          }
      }
    }
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
