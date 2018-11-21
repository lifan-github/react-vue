import * as types from '../constant/actionTypes';



let ordersInit = {
  allOrders: [],
};

export default function AllOrders(state = ordersInit, action) {
  switch (action.type) {
    case types.GET_ALL_ORDERS:
      return Object.assign({}, state, {allOrders: action.data});
    default:
      return state;
  }
}