import * as types from '../constant/actionTypes';


let ordersInit = {
  allOrders: {}, //订单列表包含页码等基本信息
  hasOrders: true, //有订单数据
  table_config: { //table的基本配置
    bordered: false,
    size: 'middle',
    pagination: {position: 'both', total: 0},
  }
};

export default function AllOrders(state = ordersInit, action) {
  switch (action.type) {
    case types.GET_ALL_ORDERS:
      let new_config = {
        bordered: false,
        size: 'middle',
        pagination: {position: 'both', total: action.data.total_count},
      };
      return Object.assign({}, state, {allOrders: action.data, table_config: new_config});
    default:
      return state;
  }
}