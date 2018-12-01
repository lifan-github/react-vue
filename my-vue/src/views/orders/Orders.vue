<template>
  <div>
    <el-pagination
            background
            layout="prev, pager, next"
            @current-change="clickChange"
            :total="tableData.total_count">
    </el-pagination>
    <el-table
            ref="multipleTable"
            :data="tableData.data"
            tooltip-effect="dark"
            style="width: 100%"
            @selection-change="handleSelectionChange">
      <el-table-column
              type="selection"
              width="55">
      </el-table-column>
      <el-table-column
              prop="order_number"
              label="订单号"
              width="220">
      </el-table-column>
      <el-table-column
              prop="date_placed"
              label="下单时间"
              width="100">
      </el-table-column>
      <el-table-column
              prop="total_amount"
              label="数量"
              width="50">
      </el-table-column>
      <el-table-column
              label="购买途径"
              width="80">
        <template scope="scope">
          官网
        </template>
      </el-table-column>
      <el-table-column
              prop="product_shipping_address.name"
              label="姓名"
              width="120">
      </el-table-column>
      <el-table-column
              prop="product_shipping_address.mobile"
              label="电话"
              width="120">
      </el-table-column>
      <el-table-column
              prop="product_shipping_address.address"
              label="收货地址"
              width="200">
      </el-table-column>
      <el-table-column
              prop="product_shipping_address.address"
              label="支付状态"
              width="100">
        <template scope="scope">
          已支付
        </template>
      </el-table-column>
      <el-table-column
              label="操作">
        <template slot-scope="scope">
          <el-button type="primary" @click="itemDetails(scope.$index, scope.row)">详情</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!--详情modal-->
    <el-dialog title="收货地址" :visible.sync="dialogTableVisible">
      <el-table :data="gridData">
        <el-table-column property="date" label="日期" width="150"></el-table-column>
        <el-table-column property="name" label="姓名" width="200"></el-table-column>
        <el-table-column property="address" label="地址"></el-table-column>
      </el-table>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    name: "Orders",
    data(){
      return {
        multipleSelection: [],
        gridData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
        dialogTableVisible: false
      }
    },
    computed: {
      tableData(){
        return this.$store.state.orderModule.orders
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
      },
      //翻页
      clickChange(e){
        let curr_page = e;
        let params = {
          page: curr_page,
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
      //查看详情
      itemDetails(index, row){
        console.log(index, row);
        const item_index = index; //该行角标
        const row_data = row; //该行数据
        this.dialogTableVisible = true
      }
    }
  }
</script>

<style scoped>

</style>