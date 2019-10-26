<template>
  <div>
      <div class="top">
        <p> <span @click="ret"><img src="../assets/images/nav_icon_back@2x.png.png" alt=""></span><span>登录</span> <span @click="zhuc">注册</span></p>
     
      </div>

      <div class="center">
          <div class="center1">
              手机号：<input type="text" v-model="phone">
          </div>
          <div class="center1">
              密 &nbsp; 码：<input type="password" v-model="password">
          </div>
          <p>忘记密码</p>
          <button @click="register">登录</button>
      </div>

  </div>
</template>

<script>
export default {
    data(){
        return{
            phone:'',
            password:''
        }
    },
    methods:{
        register(){
               this.$http({
          url: "http://yd.msword.top/login",
          params: {
            phone: this.phone,
            password: this.password
          }
        }).then(res => {
          console.log(res);
          if(res.data.msg==="登录成功。"){
            //   this.$router.push('./logged')
            alert('登录成功')
          }else{
              alert('账号或密码错误')
          }
        });
        },
        ret(){
            this.$router.push('/wo')
        },
        zhuc(){
            this.$router.push('/login')
        }
    }
}
</script>

<style scoped>
    .top{
        width: 100%;height: 140px;
        background: #ff9900;
    }
    .top p{
        padding-top: 80px;
        padding-left: 30px;
        padding-right: 20px;
        display: flex;
        justify-content: space-between;

    }
    .center{
        padding-top: 235px;
         width: 600px;
        margin: 0 auto;
    }
    .top p span{
        font-size: 36px;
        color: #fff;
    }
    .center1{
        width: 600px;
        margin: 0 auto;
        border-bottom: 2px solid #a3a3a3;
        padding: 45px 0;
        font-size: 30px;
        color: #333;
        
     }
     .center1 input{
         vertical-align: top;
         height: 50px;
         font-size: 30px;
         border: none;
         outline: none;
     }
     .center p{
         float: right;
         font-size: 30px;
         color: #666;
         padding: 25px 0;
     }
     .center button{
         width: 600px;height: 100px;
         background: #ff9900;
         line-height: 100px;
         text-align: center;
         border-radius: 10px;
         border: none;
         color: #fff;
         font-size: 38px;
     }

</style>