<template>
  <div>
    <div>{{count}}</div>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
  </div>
</template>

<script>
  import store from '../../store/index'
  export default {
    name: "Orders",
    computed: {
      count(){
        return store.state.orderModule.count
      }
    },
    methods: {
      increment () {
        store.commit('increment')
      },
      decrement () {
        store.commit('decrement')
      }
    }
  }
</script>

<style scoped>

</style>