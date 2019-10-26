<template>
  <div id="app">
  <div class="index_state">
    <img src="./assets/images/index_02.png" alt="">
  </div>

    <router-view/>




 
  </div>
</template>

<script>
export default {
  data(){
    return{
    }
  }
}
</script>

<style>

.index_state{
  width: 750px ;
  height: 40px;
  position: fixed!important;
  z-index: 999;
  top: 0;

}
</style>
