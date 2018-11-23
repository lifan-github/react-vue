import * as types from '../constant/actionTypes';
import {getAllOrders} from '../actions/allOrdersActions';
import store from '../reducers/store';



const onChange = (curr) => {
  let param = {
    page: curr,
    limit: 10,
    order_number: '',
    sort_by: 'order_date',
    keyword: '',
    order_status: '',
    shipping_status: '',
    paymethod: '',
    channel: '',
    month: '',
  };
  store.dispatch(getAllOrders(param))
};

let ordersInit = {
  allOrders: {}, //订单列表包含页码等基本信息
  hasOrders: true, //有订单数据
  table_config: { //table的基本配置
    bordered: false,
    size: 'middle',
    rowSelection: {},
    pagination: {position: 'both', total: 0, onChange: onChange},
  }
};

export default function AllOrders(state = ordersInit, action) {
  switch (action.type) {
    case types.GET_ALL_ORDERS:
      let new_config = {
        bordered: false,
        size: 'middle',
        rowSelection: {},
        pagination: {position: 'both', total: action.data.total_count},
      };
      return Object.assign({}, state, {allOrders: action.data, table_config: new_config});
    default:
      return state;
  }
}


