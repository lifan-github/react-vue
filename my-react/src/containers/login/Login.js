import React, {Component} from 'react';
import {connect} from "react-redux";
import { Input, Button } from 'antd';
import './login.css';

import {loginAction} from '../../redux/actions/loginActions';


class Login extends Component {
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
    this.props.dispatch(loginAction(code))
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
          <Button className="login-button" type="primary" block onClick={() => this.loginButton()}>登录</Button>
        </div>
      </div>
    )
  }
}

export default connect((state) => {
  return {
    loginInit: state.loginReducers
  }
})(Login)