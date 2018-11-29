
import API from '../../api/api';
import afterSign from '../../utils/signature';
import config from "../../utils/config";

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
    loginButtonApi(context, params){
      console.log(context,'===context===', params)
      const code = params.code;

      API.get(config.url + 'auth', {
        params: {
          code: code
        },
        headers: {
          'sign': afterSign({'code': code})
        }
      })
        .then(res => {
          console.log(res,'res')
          if(res.data.code === 200){
            let session = res.data.session;
            localStorage.setItem("token", session);
            config.session = session;
            setTimeout(() => {
              window.location.href = '/dashboard';
            }, 2000);
          }else{
            alert(res.data.message)
          }
        })
        .catch(err => {
          console.log(err,'err')
        })
    }
  }
};

export default Order