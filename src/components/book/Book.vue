<template>
  <h1>book</h1>
</template>
<script>
  import store from '@/vuex/store'
  export default({
    store,
    created (){
        this.$store.commit('routerLinks',{
            color:'rgb(121, 85, 72)',
            title:'book'
        });
    }
  })
</script>
<style scoped>

</style>
