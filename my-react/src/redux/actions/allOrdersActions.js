import * as types from '../constant/actionTypes';
import config from "../../utils/config";
import axios from 'axios';

const myApi = axios.create({
  baseURL: config.url,
  timeout: 10000,
  transformRequest: [(data) => JSON.stringify(data)],
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  }
});

export function getAllOrders() {
  return dispatch => {
    myApi.get(config.url, {
      params: {
        pageToken: 1,
        kw: config.kw,
        apikey: config.apikey
      }
    })
      .then(res => {
        console.log(res,'res')
        if(res.status === 200){
          dispatch(updateOrders(res.data.data))
        }
      })
      .catch(err => {
        console.log(err,'err')
      })
  }
}


//获取所有新闻
export function updateOrders(data) {
  return {
    type: types.GET_ALL_ORDERS,
    data
  }
}
