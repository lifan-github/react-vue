<template>
  <div>
    <div>{{count}}</div>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
  </div>
</template>

<script>
  import store from '../../store/Store'
  export default {
    name: "Orders",
    computed: {
      count(){
        return store.state.count
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