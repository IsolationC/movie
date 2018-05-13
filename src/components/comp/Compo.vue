<template>
  <div>
    <div class="header" :style="'background-color:'+$store.state.color">
      <div class="header-btn">首页</div>
      <h2 class="header-title">{{$store.state.title}}</h2>
    </div>
    <div class="footer" :style="'background-color:'+$store.state.color">
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

      }
    }
    })
</script>
<style scoped>
  .header{
    height: 1rem;
    width: 100%;
    color: #fff;
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
    font-size: .6rem;
    transform: translate(-50%,-50%);
  }
  .footer{
    height: 1rem;
    width: 100%;
    color: #fff;
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
