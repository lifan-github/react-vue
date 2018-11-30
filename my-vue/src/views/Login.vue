<template>
  <div id="container">
    <div id="login-container">
      <el-input class="code-input" v-model="input" placeholder="请输入验证码"></el-input>
      <div id="login-button" @click="goToHome">登录</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Login",
    data(){
      return {
        input: ''
      }
    },
    methods: {
      goToHome(){
        const code = this.input;
        if(code){
          console.log(this.input,"登录按钮");
          //触发登录事件, 提示组件不能全局使用，所以只能把改方法传递过去
          this.$store.dispatch('loginButtonApi', {code: code});
        }else{
          this.$message.error('请输入正确的验证码');
        }
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