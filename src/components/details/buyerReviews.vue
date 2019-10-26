<template>
  <div>
    <div class="pingjia">
        <ul>
            <li>
                <a href="#"> 全部评价</a>
                <a href="#"> 好评</a>
                <a href="#"> 差评</a>
                <a href="#"> 晒单</a>
            </li>
        </ul>
    </div>
    <div class="center_all">
        <ul>
            <li v-for="(v,i) in buye.all" :key="i">
                <p><span>{{v.buyerName}}</span> <span>{{v.createTime}}</span></p>
                <div><span v-for="(value,index) in v.postImg" :key="index"><img :src="value" alt="" width="150px"></span></div>
                <div class="pl">{{v.postDescribe}}</div>
                <div class="gly">管理员：{{v.adminReviews}}</div>
            </li>
        </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      buye: []
    };
  },
  mounted() {
    this.$http({
      url: 'http://yd.msword.top/getDetails?pid='+this.$route.query.pid+''
    }).then(res => {
        // console.log(res.data.data.buyerReviews);
      this.buye = res.data.data.buyerReviews;
    });

    function getLocalTime(ns) {
      return new Date(parseInt(ns) * 1000)
        .toLocaleString()
        .replace(/:\d{1,2}$/, " ");
    }
    // console.log(getLocalTime(res.data.data.buyerReviews.all[1].createTime));
  }
};
</script>

<style scoped>
.pingjia ul li a{
    display: inline-block;
    height: 50px;
    background: #999;
    color: #fff;
    line-height: 50px;
    border-radius: 35px;
    padding: 0 45px;
    font-size: 22px;
    text-decoration: none;
    /* justify-content: space-between; */
}
.pingjia ul li{
    width: 100%;
    display: inline-flex;
    justify-content: space-between;
    margin-bottom: 20px;
  

}
.center_all{
    padding-bottom: 100px
}
.center_all ul li{
    border-top: 1px solid #999;
}
.center_all ul li p span:nth-child(1){
    font-size: 22px;
    color: #ff9900;
    padding: 20px 0;
}
.center_all ul li p span:nth-child(2){
    font-size: 14px;
    color: #999;
    padding: 20px 0;
    float: right;
}
.center_all ul li .pl{
    color: #999;
    font-size: 20px;
    padding: 20px 0;
}
.center_all ul li .gly{
    background: #ddd;
    padding: 15px 8px;
    border-radius: 10px;
    font-size: 18px;
    color: #333;
    margin-bottom: 20px;

}



</style>