import config from "../../utils/config";
import { message } from 'antd';
import afterSign from '../../utils/signature';

const error = (msg) => {
  message.error(msg);
};

let hide;
const loading = () => {
  hide = message.loading('正在登录中...', 0);
};

export function loginAction(data) {
  return dispatch => {
    config.myApi.get(config.url + 'auth', {
      params: {
        code: data
      },
      headers: {
        'sign': afterSign({'code': data})
      }
    })
      .then(res => {
        console.log(res,'res');
        if(res.data.code === 200){
          loading();
          let session = res.data.session;
          localStorage.setItem("config_token", session);
          config.session = session;
          setTimeout(() => {
            hide();
            window.location.href = '/';
          }, 2000);
        }else{
          error(res.data.message);
        }
      })
      .catch(err => {
        error(err.message);
      })
  }
}