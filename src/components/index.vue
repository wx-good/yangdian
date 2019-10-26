<template>
  <div class="hello">
    <!-- 今日疯抢 -->

    <router-view />

    <div class="index_bottom">
      <ul>
        <router-link to="/one" tag="li">
          <img src="../assets/images/tab_home_nor.png" alt />
          <p>首页</p>
        </router-link>
        <router-link to="/fenlei" tag="li">
          <img src="../assets/images/tab_me_nor.png" alt />
          <p>分类</p>
        </router-link>
        <router-link to="/gouwuche" tag="li">
          <img src="../assets/images/tab_menu_nor.png" alt />
          <p>购物车</p>
        </router-link>
        <router-link to="/wo" tag="li">
          <img src="../assets/images/tab_shopping_nor.png" alt />
          <p>我</p>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hot: [],
      selected: ""
    };
  },
  mounted() {},
  components: {
    // one
  }
};
</script>


<style scoped>
* {
  padding: 0;
  margin: 0;
}
.sty {
  color: #ffa002;
}

/* 底部 */
.index_bottom {
  margin-top: 20px;
}
.index_bottom ul {
  display: flex;
  height: 100px;
  width: 750px;
  background: #fff;
  border-top: 1px solid #999;
  justify-content: space-around;
  padding: 20px 0;
  position: fixed;
  bottom: 0px;

}
.index_bottom ul li {
  padding-top: 20px;
  width: 60px;
  text-align: center;
  position: relative;
}

.index_bottom ul li p {
  text-align: center;
  position: absolute;
  bottom: 0;
  width: 60px;
  text-align: center;
  font-size: 20px;
}
</style>
