<template>
  <div>
    <div class="header">
      <p>
        <span @click="back">
          <img src="../assets/images/nav_icon_back@2x.png.png" >
        </span>
        <span>购物车</span>
      </p>
    </div>
    <div class="gw">
      <ul>
        <li v-for="(v,i) in this.$store.state.car"  :key="i">
          <div class="fl">
            <img :src="v.img" width="157px">
          </div>
          <div class="fr">
            <p>{{v.mc}}</p>
            <div class="count1">
              <button @click="jian(i)">-</button><div class="count">{{$store.getters.getGoodsCount[v.id]}}</div><button @click="jia(i)">+</button>
            </div>
          </div>
          <div class="muth">
             <span>¥{{v.price*v.count}}</span>
          </div>
             <span class="remove" @click="remove(i)">删除</span>

        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {  
    if(this.$store.state.car.count == 0){
      this.$store.state.car.count = 0
    }
  },
  methods:{
    back(){
      this.$router.go(-1)
    },
    jian(i){
         this.$store.commit('jian',i);    
      
    },
    jia(i){
         this.$store.commit('jia',i);    
      
    },
    remove(x){
         this.$store.commit('remove',x);    
    }
  }
};
</script>

<style scoped>
body {
  background: #000;
}
.header {
  height: 140px;
  width: 100%;
  background: #ff9900;
  position: fixed;
  top: 0px;
}
.header p {
  text-align: center;
  font-size: 42px;
  color: #fff;
  padding-top: 60px;
}
.header p span:nth-child(1) {
  float: left;
  position: relative;
  left: 40px;
}
.gw {
  padding-top: 160px;
  padding-bottom: 100px;
  
}
.gw ul li {
  height: 200px;
  padding: 30px 0;
  background: #f7f7f7;
  padding-left: 40px;
  margin-bottom: 30px;
  position: relative;
}
.gw ul li .fl {
  float: left;
  width: 157px;height: 157px;
  padding-right: 20px;
  background: #fff;
}
.gw ul li .fr {
  width: 285px;
  float: left;
  margin-left: 20px
}
.gw ul li .fr .count {
  width: 70px;
  height: 40px;
  border: 1px solid #ccc;
  font-size: 26px;
  line-height: 40px;
  text-align: center;
  display: inline-block;
}
.gw ul li .muth span {
  font-size: 32px;
  float: left;
  padding-top: 50px;
  padding-left: 20px;

}



.gw ul li .fr button {
  width: 70px;
  height: 40px;
  border: 1px solid #ccc;
  font-size: 32px;
  background:transparent;
  margin:30px 0 ;
}

.gw ul li .fr p {
  font-size: 32px;
}
.remove{
  width: 100px;height: 260px;
  background: #ff9900;
  color: #fff;
  line-height: 260px;
  text-align: center;
  font-size: 28px;
  display: inline-block;
  position: absolute;
  right: 0px;
  top: 0;

}


</style>