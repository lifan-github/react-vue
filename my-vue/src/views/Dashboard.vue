<template>
  <div id="dashboard-container">
    <div class="header">
      <div class="header-left-box">
        <div class="logo"></div>
        <div>LUBANSO管理平台</div>
      </div>
      <div class="header-right-box">
        <el-dropdown>
          <span class="el-dropdown-link">
            个人中心<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>
              <div @click="logOut">退出登录</div>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
    <div id="content">
      <div class="left-slider">
        <SliderNav/>
      </div>
      <div class="right-content">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
  import SliderNav from '@/views/SliderNav.vue'

  export default {
    name: "Dashboard",
    components: {
      SliderNav
    },
    methods: {
      logOut(){
        this.$router.push({name: 'login'});
        localStorage.clear();
      }
    }
  }
</script>

<style scoped>
  #dashboard-container{
    display: flex;
    flex: 1;
    flex-direction: column;
  }

  .header{
    background-color: #545c64;
    border-bottom: 1px solid #ddd;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
  }

  #content{
    width: 100%;
    display: flex;
    flex: 1;
    flex-direction: row;
  }

  .left-slider{
    width: 200px;
    background-color: #545c64;
  }

  .left-slider .el-menu{
    border-right: none;
  }

  .right-content{
    flex: 1;
    margin: 20px;
    background-color: #fff;
  }

  .logo{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #ddd;
    margin-right: 10px;
  }

  .header-left-box{
    display: flex;
    flex-direction: row;
    align-items: center;
    color: #fff;
  }

  .el-dropdown-link{
    color: #fff;
    cursor: pointer;
  }
</style>