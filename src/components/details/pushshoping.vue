<template>
  <div class="pushshop" v-show="this.$store.state.count">
    <div class="top">
      <div class="cwei">
        <img :src="banner1" alt width="200px" />
      </div>
      <div class="biaoti">
        <p>¥{{banner.reduct_price}}.00</p>
        <br />
        <span>库存123456件</span>
        <br />
        <span>请选择商品属性</span>
      </div>
      <span @click="xiaoshi">
        <img src="../../assets/images/1111_03.jpg" alt />
      </span>
    </div>
    <div class="amount">
      <span class="span">购买数量</span>
      <div class="amount1">
        <span @click="jnjn">-</span><input type="text" :value="values"><span @click="jaja">+</span>
      </div>
    </div>

    <div>
      <img src="../../assets/images/push.jpg" alt="">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      banner: "",
      banner1: "",
      values:'1'
    };
  },
  
  methods: {
    xiaoshi() {
      this.$store.commit("aa");
      
    },
    jaja(){
        this.values++
        
     this.$store.commit('shuliang',this.values);
        
      },
      jnjn(){
        if(this.values == 0){
          this.values = 0
        }else{
          this.values--
          this.$store.commit('shuliang',this.values);

        }
        
      }
  },
  mounted() {
    this.$http({
      url: "http://yd.msword.top/getDetails?pid=" + this.$route.query.pid + ""
    }).then(res => {
      // console.log(res.data.data);
      this.banner = res.data.data;
      this.banner1 = res.data.data.swiperImgArr[1];
    });
  },
  computed:{
  }
};
</script>

<style scoped>
.pushshop {
  width: 100%;
  height: 673px;
  background: #fff;
  position: fixed;
  bottom: 0;
  z-index: 2;
}
.top span {
  float: right;
  padding: 20px;
}
.top {
  padding-left: 40px;
  overflow: hidden;
  height: 220px;
}
.top .cwei {
  width: 200px;
  height: 200px;
  border: 7px solid #ddd;
  border-radius: 10px;
  position: absolute;
  top: -30px;
}
.top .biaoti {
  width: 200px;
  margin-left: 230px;
  margin-top: 30px;
  position: absolute;
}
.top .biaoti p {
  font-size: 30px;
  color: #eb2222;
}
.top .biaoti span {
  font-size: 24px;
  list-style: none;
  padding: 5px 0;
  color: #333;
  margin: 0;
  float: left;
}
.amount .span {
  font-size: 30px;
  color: #333;
  padding-left: 40px;
}
.amount1 {
  width: 220px;
  height: 50px;
  float: right;
  margin-right: 30px;
}
.amount1 span {
  width: 50px;
  height: 50px;
  background: #999;
  display: inline-block;
  line-height: 50px;
  text-align: center;
  font-size: 35px;
  color: #fff;
}

.amount input {
  width: 100px;
  height: 50px;
  border: 1px solid #999;
  vertical-align: top;
   line-height: 50px;
  text-align: center;
  font-size: 35px;
  color: #333;

  
}
</style>