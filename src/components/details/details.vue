<template>
  <div>
    <div class="yinying" v-show='this.$store.state.count'></div>
    <div class="top"></div>
    <div class="banner">
      <div class="fanhui">
        <span @click="ret" class="fl">＜</span>
        <span class="fr">...</span>
      </div>
      <mt-swipe :auto="0">
        <mt-swipe-item v-for="(v,i) in banner.swiperImgArr" :key="i">
          <img :src="v" />
        </mt-swipe-item>
      </mt-swipe>
      <div class="banner_details">
        <p @click="pushshop">
          {{banner.name}}
          <span>
            <img src="../../assets/images/sc.png" alt />
            <br />收藏
          </span>
        </p>
        <div class="banner1_details">
          <ul>
            <li>
              <span class="xianjia">¥{{banner.reduct_price}}</span>
              <div>
                <span class="bb">包邮</span>
                <span class="bb">{{banner.allowance}}</span>
              </div>
            </li>
            <li>
              <span class="yuanjia">¥{{banner.original_price}}</span>
              <div>
                <span class="aa" v-for="(v,i) in banner.describe" :key="i">{{v}}</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="fenge"></div>

    <div class="qiehuan">
      <ul>
        <li>
          <a @click="yc1" :class="d">商品详情</a>
          <a @click="yc2" :class="c">买家口碑</a>
        </li>
      </ul>
      <!-- <router-view /> -->
      <shopDes v-show="yc"></shopDes>
      <buyerReviews v-show="!yc"></buyerReviews>
    </div>
    <pushshop v-show="shop"></pushshop>

    <div class="details_bottom">
      <span>
        总价:
        <span class="money">¥{{$store.getters.getAllCount*banner.reduct_price}}</span>
      </span>
      <button @click="ljgm">立即购买</button>
      <button @click="pushshops">加入购物车</button>
    </div>
  </div>
</template>
<script>
import shopDes from "./shopDes";
import buyerReviews from "./buyerReviews";
import pushshop from "./pushshoping";
export default {
  data() {
    return {
      banner: [],
      yc: true,
      d: "sty",
      c: "",
      shop: false
    };
  },
  mounted() {
    this.$http({
      url: "http://yd.msword.top/getDetails?pid=" + this.$route.query.pid + ""
    }).then(res => {
      console.log(res.data.data);
      this.banner = res.data.data;
    });
  },
  methods: {
    ret() {
      this.$router.push("/one");
    },
    ljgm() {
      this.$router.push("/gouwuche");
      
    },
    yc1() {
      (this.yc = true), (this.c = "");
      this.d = "sty";
    },
    yc2() {
      (this.yc = false), (this.c = "sty");
      this.d = "";
    },
    pushshop() {
      this.$store.commit('bb')
    },
    pushshops(){
      if(this.$store.state.count == false){
        this.$store.commit('bb')
        this.$store.state.shuliangs = 1
      }else{
         this.$store.commit('aa')
      var shuju = {mc:this.banner.name ,img:this.banner.swiperImgArr[1],price:this.banner.reduct_price,id:this.banner.pid,count:this.$store.state.shuliangs}
        
      this.$store.commit('addtocar',shuju);
      }
     

    }
  },
  components: {
    shopDes,
    buyerReviews,
    pushshop
  }
};
</script>
<style  scoped>
.yinying{
  width: 100%;
  height: 700px;
  background: #333;
  opacity: 0.5;
  position: fixed;
  z-index: 1;
}
.sty {
  border-bottom: 3px solid #ff9900;
  color: #ff9900;
}
.top {
  width: 750px;
  height: 40px;
  background: #ff9900;
  position: fixed;
  top: 0;
  z-index: 100;
}
.banner {
  width: 100%;
  padding-bottom: 20px;
}
.mint-swipe {
  padding-top: 40px;
  height: 400px;
  width: 100%;
}
.mint-swipe-item {
  text-align: center;
}

.banner_details p {
  font-size: 30px;
  color: #333;
  margin-bottom: 50px;
}
.banner_details p span {
  /* display: inline-block; */
  width: 70px;
  height: 70px;
  border-left: 3px solid #ddd;
  float: right;
  color: #e71f19;
  text-align: center;
  vertical-align: bottom;
  font-size: 16px;
  padding: 0 30px 0 10px;
}

.banner_details {
  border-top: 1px solid #ddd;
  padding-left: 34px;
  padding-top: 10px;
}
.banner1_details ul li {
  font-size: 16px;
  margin: 10px 0;
}
.banner1_details ul li div {
  display: inline-block;
}

.banner1_details ul li .yuanjia {
  font-size: 24px;
  color: #999;
  text-decoration: line-through;
}
.banner1_details ul li .xianjia {
  font-size: 34px;
  color: #eb2222;
}

.banner1_details ul li .aa {
  display: inline-block;
  width: 100px;
  height: 26px;
  border: 2px solid #ff9900;
  color: #ff9900;
  margin: 0 10px;
  font-size: 20px;
  text-align: center;
}
.banner1_details ul li .aa:nth-child(1) {
  margin-left: 32px;
}

.banner1_details ul li .bb {
  display: inline-block;
  height: 30px;
  background: #ff9900;
  color: #fff;
  margin: 0 10px;
  padding: 0 12px;
  font-size: 20px;
  text-align: center;
}
.qiehuan {
  padding: 0 46px;
}
.qiehuan ul li {
  margin-bottom: 26px;
  margin-top: 20px;
  padding: 10px 0;
  border-top: 1px solid #999;
  border-bottom: 1px solid #999;
}

.qiehuan ul li a {
  display: inline-block;
  font-size: 26px;
  margin: 0 68px;
  padding: 12px 25px 12px 25px;
  line-height: 50px;
  text-decoration: none;
}
.fenge {
  width: 100%;
  height: 32px;
  background: #eee;
}
.details_bottom {
  height: 100px;
  width: 750px;
  border-top: 1px solid #999;
  position: fixed;
  bottom: 0;
  background: #fff;
  z-index: 2;
}
.details_bottom span {
  font-size: 28px;
  line-height: 100px;
  padding-left: 46px;
}
.details_bottom .money {
  color: red;
}

.details_bottom button {
  height: 100px;
  width: 200px;
  background: #e71f19;
  border: none;
  font-size: 28px;
  color: #fff;
  line-height: 100px;
  text-align: center;
  float: right;
}
.details_bottom button:nth-child(2) {
  height: 100px;
  width: 200px;
  background: #ff9900;
  border: none;
  font-size: 28px;
  color: #fff;
  line-height: 100px;
  text-align: center;
  float: right;
}
.fanhui span {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #b2b2b2;
  display: inline-block;
  margin-top: 50px;
}
.fl {
  float: left;
  margin-left: 34px;
  text-align: center;
  line-height: 38px;
  font-size: 50px;
  color: #fff;
}
.fr {
  float: right;
  margin-right: 34px;
  text-align: center;
  line-height: 17px;
  font-size: 50px;
  color: #fff;
}
</style>