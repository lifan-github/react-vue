<template>
  <div>
    <div>特殊订单</div>
    <my-image-text :title="title"></my-image-text>
    <div>{{title}}</div>
  </div>
</template>

<script>
  //公共组件引入
  import MyImageText from '../../components/ImageText.vue'

  export default {
    name: "SpecialOrders",
    data(){
      return {
        title: "我是父组件上传递过来的数据"
      }
    },
    components: {
      'my-image-text': MyImageText
    },
    created(){
      console.log(this,'------')
    }
  }
</script>

<style scoped>

</style>