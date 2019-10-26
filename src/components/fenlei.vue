<template>
  <div>
    <div class="header">
      <div class="index_banner1">
        <div class="search_input">
          <input type="text" placeholder="Montagne jeunesse" />
          <span>
            <img src="../assets/images/search.png" alt />
          </span>
        </div>
      </div>
     
    </div>


     <div class="center">
        <div class="left_nav">
          <ul>
            <li v-for="(v,i) in ify" :key="i">
              <a href="#">{{v.name}}</a>
            </li>
          </ul>
        </div>
        <div class="right">
          <ul v-for="(va,is) in ify" :key="is">
            <li v-for="(v,i) in va.list" :key="i"><img :src="v.thumbnail" alt=""> <p>{{v.name}}</p></li>
           
          </ul>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ify:[],
    };
  },
  mounted() {
    this.$http({
      url: "http://yd.msword.top/getClassify"
    }).then(res => {
      // console.log(res.data.data);
      this.ify = res.data.data;
    });
  }
};
</script>

<style scoped>
.header {
  width: 750px;
  height: 138px;
  background: #ff9900;
  position: fixed;
  top: 0;
}
.search_input {
  position: relative;
}
.index_banner1 input {
  width: 485px;
  height: 62px;
  opacity: 0.5;
  margin: 60px 0 0 110px;
  border: 1px solid #ffffff;
  border-radius: 15px;
  font-size: 20px;
  padding-left: 30px;
}
.index_banner1 span {
  width: 37px;
  height: 39px;
  position: absolute;
  top: 75px;
  right: 140px;
}

.center{
  overflow: hidden;
  padding-top: 138px;
}
.left_nav {
  width: 234px;
  background: #fafafa;
  float: left;
}

.left_nav ul li {
  height: 95px;
  width: 100%;
  text-align: center;
}
.left_nav ul li:nth-child(1) {
  background: #fff;
  border-left:8px solid  #1d84a7
}

.left_nav ul li:nth-child(1) a{
    color: #ff9900;

}

.left_nav ul li a {
  font-size: 28px /*no*/;
  text-decoration: none;
  line-height: 95px;
  color: #333;
}

.right{
  float: left;
  padding-bottom: 100px;
  width: 515px;
}
.right ul{
  padding-top: 18px;
  padding-left: 18px;
}
.right ul li{
  width: 225px;height: 235px;
  border: 1px solid #1d84a7;
  border-radius: 10px;
  float: left;
  text-align: center;
  margin-right:18px;
  margin-bottom:18px;

}
.right ul li img{
  padding-top: 15px;
 }

.right ul li p{
  height: 46px;
  background: #1d84a7;
  line-height: 46px;
  font-size: 22px;
  color: #fff;

}

</style>