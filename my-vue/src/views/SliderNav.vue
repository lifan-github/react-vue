<template>
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="red">
      <el-menu-item index="1">
        <router-link class="el-menu-a" to="/dashboard/orders">
          <div>
            <i class="el-icon-menu"></i>
            <span slot="title">订单管理</span>
          </div>
        </router-link>
      </el-menu-item>
      <el-menu-item index="2">
        <router-link class="el-menu-a" to="/dashboard/specialOrders">
          <div>
            <i class="el-icon-document"></i>
            <span slot="title">特殊订单</span>
          </div>
        </router-link>
      </el-menu-item>
      <el-menu-item index="3">
        <router-link class="el-menu-a" to="/dashboard/invoice">
          <div>
            <i class="el-icon-setting"></i>
            <span slot="title">开票管理</span>
          </div>
        </router-link>
      </el-menu-item>
    </el-menu>
</template>

<script>
  export default {
    name: "SliderNav",
    methods: {

    }
  }
</script>

<style scoped>
  .el-menu-vertical-demo i{
    color: #fff;
  }

  .el-menu-vertical-demo .el-menu-a{
    display: inline-block;
    width: 100%;
    text-decoration: none;
    color: #fff;
  }
</style>