import * as types from '../constant/actionTypes';


let ordersInit = {
  allOrders: {}, //订单列表包含页码等基本信息
  hasOrders: true, //有订单数据
};

export default function AllOrders(state = ordersInit, action) {
  switch (action.type) {
    case types.GET_ALL_ORDERS:
      return Object.assign({}, state, {allOrders: action.data});
    default:
      return state;
  }
}


