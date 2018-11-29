
import API from '../../api/api';

const Order = {
  state: {
    orders: []
  },
  mutations: {
    //更改 Vuex 的 store 中的状态的唯一方法是提交 mutation
    updateOrders(state, res){
      console.log(res,'res----');
      state.orders = res;
    }
  },
  actions: {
    getAllOrdersApi(context){
      API.get()
        .then(res => {
          context.commit('updateOrders', res.data.data)
        })
        .catch(err => {
          console.log(err,'err')
        })
    }
  }
};

export default Order