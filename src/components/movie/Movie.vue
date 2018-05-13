<template>
  <h1>movie</h1>
</template>
<script>
  import store from '@/vuex/store'
  export default({
    store,
    created (){
      this.$store.commit('routerLinks',{
        color:'rgb(33, 150, 243)',
        title:'movie'
      });
    }
  })
</script>
<style scoped>

</style>
