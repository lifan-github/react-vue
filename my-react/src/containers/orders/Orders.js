import React, {Component} from 'react';
import {connect} from "react-redux";
import {Table, Button, Input, Pagination, message} from 'antd';
import { getAllOrders } from '../../redux/actions/allOrdersActions';
import PrintModal from './PrintModal';
import './orders.css';

const error = (msg) => {
  message.error(msg);
};

const columns = [{
  title: '订单号',
  key: 'orderNum',
  dataIndex: 'order_number',
  render: text => <div>{text}</div>,
}, {
  title: '下单时间',
  key: 'time',
  dataIndex: 'date_placed',
  render : text => <div>{text}</div>
}, {
  title: '数量',
  key: 'num',
  dataIndex: 'total_amount',
  render : text => <div>{text}</div>
}, {
  title: '购买途径',
  key: 'buyWay',
  render: () => <div>官网</div>,
},{
  title: '姓名',
  key: 'name',
  dataIndex: 'product_shipping_address',
  render: (data) => <div>{data.name}</div>,
},{
  title: '电话',
  key: 'tel',
  dataIndex: 'product_shipping_address',
  render: (data) => <div>{data.mobile}</div>
},{
  title: '收货地址',
  key: 'address',
  dataIndex: 'product_shipping_address',
  width: 120,
  render: (data) => <div>{data.address}</div>
},{
  title: '支付状态',
  key: 'payStatus',
  render: () => <div>已支付</div>
},{
  title: '发货状态',
  key: 'faStatus',
  render: () => <div>未发货</div>
},{
  title: '后续状态',
  key: 'houStatus',
  render: () => <div>待发货</div>
},{
  title: '运单号',
  key: 'yunNum',
  render: () => <div>运单号</div>
},{
  title: '操作',
  key: 'action',
  render: () => <div>编辑、详情</div>
}
];

class Orders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //table基本配置
      table_config: {
        bordered: false,
        size: 'middle',
        rowSelection: {
          type: 'checkbox'
        },
        pagination: false
      },
      //modal打印订单配置
      loading: false,
      visible: false,
      selectedRows: [], //存放需要打印的订单
    }
  }

  componentDidMount(){
    const {allOrders} = this.props.allOrders;
    const {cur_page = 1} = allOrders;
    let param = {
      page: cur_page,
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
    this.props.dispatch(getAllOrders(param))
  }

  //搜索订单框
  onChange(e){
    let value = e.target.value;
    let param = {
      page: 1,
      limit: 10,
      order_number: '',
      sort_by: 'order_date',
      keyword: value,
      order_status: '',
      shipping_status: '',
      paymethod: '',
      channel: '',
      month: ''
    };
    this.props.dispatch(getAllOrders(param))
  }

  //切换页面
  pageOnChange(page){
    let param = {
      page: page,
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
    this.props.dispatch(getAllOrders(param))

  }

  //生成打印订单预览modal
  showPrintModal(){
    const { selectedRows } = this.state;
    if(selectedRows.length > 0){
      this.setState({
        visible: true
      });
    }else{
      error("没有需要打印的订单")
    }
  }

  //取消
  handleCancel = () => {
    this.setState({ visible: false });
  }

  //确定打印
  handleOk = () => {
    window.print();
  }

  //选择框
  seletedOrders = (orders) => {
    this.setState({
      selectedRows: orders
    })
  }

  render() {
    const that = this;
    const {allOrders, hasOrders} = this.props.allOrders;
    const rowSelection = {
      onSelect(record, selected, selectedRows) {
        console.log(record, selected, selectedRows);
        that.seletedOrders(selectedRows)
      },
      onSelectAll(selected, selectedRows, changeRows) {
        console.log(selected, selectedRows, changeRows);
        that.seletedOrders(selectedRows)
      }
    };
    return (
      <div className="orders-container">
        <div className="top-action-container">
          <Button type="primary" onClick={() => this.showPrintModal()}>打印订单</Button>
          <PrintModal
            visible={this.state.visible}
            loading={this.state.loading}
            handleCancel={this.handleCancel}
            printData={this.state.selectedRows}
            handleOk={this.handleOk}/>
          <Button>添加订单</Button>
          <Input className="search-orders-input" placeholder="订单搜索" onChange={(e) => this.onChange(e)}/>
          <Pagination defaultCurrent={allOrders.cur_page} total={allOrders.total_count} onChange={(page) => this.pageOnChange(page)}/>
        </div>
        <Table
          {...this.state.table_config}
          rowKey={record => record.order_id}
          columns={columns}
          rowSelection={rowSelection}
          dataSource={hasOrders ? allOrders.data : null} />
      </div>
    )
  }
}

export default connect((state) => {
  console.log(state,'推荐');
  return {
    allOrders: state.allOrdersReducers
  }
})(Orders)