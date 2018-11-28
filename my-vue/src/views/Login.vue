<template>
  <div id="container">
    <div id="login-container">
      <input class="code-input" type="text" placeholder="请输入验证码">
      <div id="login-button" @click="goToHome">登录</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Login",
    methods: {
      goToHome(){
        console.log("登录按钮");
        localStorage.setItem("token", 'lifan888')
        this.$router.push({name: 'dashboard'})
      }
    }
  }
</script>

<style scoped>
  #container {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
  }

  #login-container {
    width: 400px;
    height: 400px;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #ddd;
  }

  .code-input{
    height: 40px;
    width: 90%;
    border-radius: 4px;
    outline: none;
  }

  #login-button{
    height: 40px;
    width: 90%;
    color: #fff;
    border-radius: 4px;
    line-height: 40px;
    margin-top: 20px;
    background-color: cadetblue;
    cursor: pointer;
  }
</style>