import React, {Component} from 'react';
import { Input, Button, message } from 'antd';
import './login.css';


const error = () => {
  message.error('验证码输入不正确');
};

let hide;
const loading = () => {
  hide = message.loading('正在登录中...', 0);
  //登录成功后调用影藏
  // setTimeout(hide, 2500);
};


export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: ""
    }
  }

  //输入框
  bindOnChange(e){
    this.setState({
      code: e.target.value
    })
  }

  //登录请求
  loginFun(){
    const {code} = this.state;
    if(parseInt(code) === 666){
      loading();
      //code接口请求，成功后保存本地token标识
      localStorage.setItem("config_token","lifan");
      this.props.history.push({
        pathname: '/'
      });
      setTimeout(hide, 2000);
    }else{
      error()
    }
  }

  //登录按钮
  loginButton(){
    this.loginFun();
  }

  //回车键
  onPressEnter(){
    this.loginFun();
  }

  render() {
    const {code} = this.state;
    return (
      <div className="login-container">
        <div className="login-input-container">
          <div className="logo-box"/>
          <div className="web-title">LUBANSO管理平台</div>
          <Input
            className="login-input"
            placeholder="请输入验证码"
            value={code}
            onChange={(e) => this.bindOnChange(e)}
            ref={node => this.codeInput = node}
            onPressEnter={() => this.onPressEnter()}/>
          <Button type="primary" block onClick={() => this.loginButton()}>登录</Button>
        </div>
      </div>
    )
  }
}