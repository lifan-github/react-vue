<template>
  <div>
    <el-table
            ref="multipleTable"
            :data="tableData"
            tooltip-effect="dark"
            style="width: 100%"
            @selection-change="handleSelectionChange">
      <el-table-column
              type="selection"
              width="55">
      </el-table-column>
      <el-table-column
              prop="date_placed"
              label="日期"
              width="160">
      </el-table-column>
      <el-table-column
              prop="product_shipping_address.name"
              label="姓名"
              width="120">
      </el-table-column>
      <el-table-column
              prop="product_shipping_address.address"
              label="地址"
              show-overflow-tooltip>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    name: "Orders",
    data(){
      return {
        multipleSelection: []
      }
    },
    computed: {
      tableData(){
        return this.$store.state.orderModule.orders.data
      }
    },
    created(){
      //触发一个事件
      let params = {
        page: 1,
        limit: 10,
        order_number: '',
        sort_by: 'order_date',
        keyword: '',
        order_status: '',
        shipping_status: '',
        paymethod: '',
        channel: '',
        month: ''
      };
      this.$store.dispatch('getAllOrdersApi', {params: params});
    },
    methods: {
      handleSelectionChange(val) {
        this.multipleSelection = val;
      }
    }
  }
</script>

<style scoped>

</style>