<template>
  <div class="details">
      <ul>
        <li v-for="(v,i) in banner.shopDes" :key="i">
          <img :src="v" alt="" width="100%">
        </li>
      </ul>
    </div>
</template>

<script>
export default {
    data() {
    return {
      banner: []
    };
  },
  mounted() {
    this.$http({
      url: 'http://yd.msword.top/getDetails?pid='+this.$route.query.pid+''
    }).then(res => {
      // console.log(res.data.data);
      // console.log( this.$route.query.pid);
      
      this.banner = res.data.data;
    });
  }
}
</script>

<style scoped>
  .details ul li{
    width: 655px;

  }


</style>