
import API from '../../api/api';
import config from "../../utils/config";
import ElementUI from "element-ui";

const Order = {
  state: {
    orders: {}, //包含页面
  },
  mutations: {
    //更改 Vuex 的 store 中的状态的唯一方法是提交 mutation
    updateOrders(state, res){
      console.log(res,'stroe--->>需要更新的数据');
      state.orders = res;
    }
  },
  actions: {
    getAllOrdersApi(context, data){
      const params = data.params;
      API.get(config.url + 'orders', {
        params: params,
      })
        .then(res => {
          console.log(res,'res');
          if(res.data.code === 200){
            context.commit('updateOrders', res.data)
          }else{
            ElementUI.Message.error(res.data.message)
          }
        })
        .catch(err => {
          console.log(err,'err')
        })
    }
  }
};

export default Order