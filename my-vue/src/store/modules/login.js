import ElementUI from 'element-ui';
import API from '../../api/api';
import afterSign from '../../utils/signature';
import config from "../../utils/config";

const Order = {
  state: {},
  mutations: {},
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
          console.log(res,'res');
          if(res.data.code === 200){
            let session = res.data.session;
            localStorage.setItem("token", session);
            config.session = session;
            ElementUI.Message.success("登录成功");
            setTimeout(() => {
              window.location.href = '/dashboard';
            }, 2000);
          }else{
            ElementUI.Message.error(res.data.message)
          }
        })
        .catch(err => {
          console.log(err,'err');
        })
    }
  }
};

export default Order
