import * as types from '../constant/actionTypes';
import config from "../../utils/config";

export function getAllOrders(data) {
  return dispatch => {
    config.myApi.get(config.url + 'orders', {
      params: data
    })
      .then(res => {
        console.log(res,'res');
        dispatch({type: types.GET_ALL_ORDERS, data: res.data}) //获取所有订单
      })
      .catch(err => {
        console.log(err,'err')
        dispatch({type: types.GET_ALL_ORDERS_FAILED, data: err.message})
      })
  }
}