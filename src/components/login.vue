<template>
  <div>
    <div class="top">
      <p>
        <span @click="fanh">
          <img src="../assets/images/nav_icon_back@2x.png.png" alt />
        </span>
        <span>注册</span>
        <span @click="register">登录</span>
      </p>
    </div>

    <div class="center">
      <div class="center1">
        手机号：
        <input type="text" v-model="phone" />
      </div>
      <div class="center1">
        密 &nbsp; 码：
        <input type="password" v-model="password" />
      </div>
      <div class="center1">
        验证码：
        <input type="text" v-model="code" />
        <span @click="get">点击获取</span>
      </div>
      <button @click="login">注册</button>
      <div class="tiaokuan">
        <input type="checkbox" />我已阅读并同意使用条款和隐私政策
      </div>
    </div>
  </div>
</template>

<script>
import qs from 'qs'
export default {
  data() {
    return {
      phone: "",
      password: "",
      code: ""
    };
  },
  methods: {
    get() {
      var reg = /^1[3-9][0-9]{9}$/;
      if (reg.test(this.phone)) {
        this.$http({
          url: "http://localhost:3000/captcha/sent",
          params: {
            phone: this.phone
          }
        }).then(res => {
          console.log(res);
        });
      } else {
        alert("请输入正确手机号");
      }
    },

    fanh(){
      this.$router.go(-1)
    },
    register(){
      this.$router.push('./register')
    },

    login() {
       var  params={
            phone: this.phone,
            password: this.password
          }

      var reg = /^1[3-9][0-9]{9}$/;
      if (this.phone == "" || this.password == "" || this.code == false) {
        alert("手机号或密码不能为空");
      } else if (!reg.test(this.phone)) {
        alert("请输入正确手机号");
      } else if (this.password.length < 6) {
        alert("至少六位数");
      } else {
        this.$http("http://localhost:3000/captcha/verify", {
          params: {
            phone: this.phone,
            captcha: this.code
          }
        }).then(res => {
          if (res.status == 200) {
            console.log("验证码正确");
            this.$http({
              url: "http://yd.msword.top/register",
              method: "post",
              data: qs.stringify(params)
            }).then(res => {
              alert(res.data.msg);
            });
            this.$router.push('/register')
          }
        });
      }
    }
  }
};
</script>

<style scoped>
.top {
  width: 100%;
  height: 140px;
  background: #ff9900;
}
.top p {
  padding-top: 80px;
  padding-left: 30px;
  padding-right: 20px;
  display: flex;
  justify-content: space-between;
}
.center {
  padding-top: 235px;
  width: 600px;
  margin: 0 auto;
}
.top p span {
  font-size: 36px;
  color: #fff;
}
.center1 {
  width: 600px;
  margin: 0 auto;
  border-bottom: 2px solid #a3a3a3;
  padding: 45px 0;
  font-size: 30px;
  color: #333;
}
.center1 input {
  vertical-align: top;
  height: 50px;
  width: 300px;
  font-size: 30px;
  border: none;
  outline: none;
}
.center1 span {
  font-size: 28px;
  color: #fe0041;
  float: right;
}

.center button {
  width: 600px;
  height: 100px;
  background: #ff9900;
  line-height: 100px;
  text-align: center;
  border-radius: 10px;
  border: none;
  color: #fff;
  font-size: 38px;
  margin: 42px 0;
}
.center .tiaokuan {
  font-size: 28px;
  color: #666;
}
.center .tiaokuan input {
  width: 30px;
  height: 30px;
  vertical-align: middle;
  margin-right: 15px;
  margin-bottom: 6px;
}
</style>