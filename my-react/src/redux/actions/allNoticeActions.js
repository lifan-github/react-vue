import * as types from '../constant/actionTypes';
import config from "../../utils/config";
import {message} from "antd";

const error = (msg) => {
  message.error(msg);
};

//获取订单默认状态
export function getAllNotice(data) {
  return dispatch => {
    config.myApi.get(config.url + 'bulletins', {
      params: data
    })
      .then(res => {
        console.log(res,'res');
        dispatch({type: types.GET_ALL_NOTICE, data: res.data}) //获取所有订单
      })
      .catch(err => {
        console.log(err,'err');
        error(err.message);
      })
  }
}



