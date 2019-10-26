<template>
  <div>
      <div class="header"></div>

      <div class="imgs" @click="login">
        <img src="../assets/images/ims1.jpg" alt="">
      </div>
      <div class="imgs1">
        <img src="../assets/images/imgs2.jpg" alt="">
      </div>

     
  </div>
</template>

<script>
export default {
methods:{
  login(){
    this.$router.push('/login')
  }
}
}
</script>

<style scoped>
  .header{
    width: 100%;
    height: 48px;
    background: #ff9900;
    position: fixed;
    top: 0;
  }
  .imgs{
    padding-top: 47px;
  }
</style>