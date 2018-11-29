<template>
  <div>
    <div>orders</div>
    <ol>
      <li v-for="item in orderList">
        {{item.title}}
      </li>
    </ol>
  </div>
</template>

<script>
  export default {
    name: "Orders",
    data(){
      return {

      }
    },
    computed: {
      orderList(){
        return this.$store.state.orderModule.orders
      }
    },
    created(){
      console.log("组件加载did");
      //触发一个事件
      // this.$store.dispatch('getAllOrdersApi');
    },
    methods: {

    }
  }
</script>

<style scoped>

</style>