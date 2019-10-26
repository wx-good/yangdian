<template>
  <div class="one">
    <div class="index_banner1">
      <div class="search_input">
        <input type="text" placeholder="Montagne jeunesse" />
        <span>
          <img src="../assets/images/search.png" alt />
        </span>
      </div>
    </div>
    <div class="index_banner2"></div>

    <div class="snap" v-for="(v,i) in hot" :key="i">
      <h2>
        <span>
          <img src="../assets/images/001.png" alt />
        </span>
        {{v.name}}
      </h2>
      <ul>
        <li v-for="(value,index) in v.list" :key="index" @click="details(value.id)">
          <img :src="value.thumbnail" alt />
          <div class="h3">
            ¥{{value.reduct_price}}.00
            <span>¥{{value.original_price}}.00</span>
          </div>
          <p>{{value.name}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      hot: [],
      id:'',
      imgs:['../assets/images/001.png','../assets/images/002.png']
    };
  },
  mounted() {
    this.$http({
      url: "http://yd.msword.top/getIndexData"
    }).then(res => {
      // console.log(res.data.data);
      // console.log(this.id);
      
      
      this.hot = res.data.data;
    });
  },
  methods:{
    details(e){
      this.$router.push('/details?pid='+e+'')
      
    },

  }
};
</script> 
<style scoped>
.one{
  padding-bottom: 100px;
}
.index_banner1 {
  background: url(../assets/images/banner1.png);
  width: 750px;
  position: fixed;
  top: 0;
z-index: 9;
  height: 146px;
}
.search_input{
  position: relative;
}
.index_banner1 input {
  width: 485px;
  height: 62px;
  opacity: 0.5;
  margin: 70px 0 0px 110px;
  border: 1px solid #ffffff;
  border-radius: 15px;
  font-size: 20px;
  padding-left: 30px;
  
}
.index_banner1 span {
  width: 37px;
  height: 39px;
  position: absolute;
  top: 85px;
  right: 140px;
}

.index_banner2 {
  background: url(../assets/images/banner2.png) no-repeat 0 146px;
  width: 750px;
  position: relative;
  top: -2px;
  height: 380px;
  padding-top: 146px;
}
.snap {
  padding-left: 30px;
}
.snap h2 {
  margin: 20px auto;
  font-size: 28px;
  color: #333;
}
.snap h2 img {
  margin-right: 20px;
  position: relative;
  top: 8px;
}
.snap ul {
  overflow: hidden;
}
.snap ul li {
  width: 318px;
  height: 465px;
  border: 1px solid #999;
  float: left;
  overflow: hidden;
  margin-right: 25px;
  padding-left: 10px;
}
.snap ul li p {
  font-size: 28px;
  color: 555;
}
.snap ul li .h3 {
  color: #ffa002;
  font-size: 28px;
  padding-top: 35px;
  padding-right: 15px;
  padding-left: 15px;
}
.snap ul li .h3 span {
  color: #888;
  float: right;
  text-decoration: line-through;
}
</style>