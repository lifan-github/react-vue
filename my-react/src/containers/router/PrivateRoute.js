import React, {Component} from 'react';
import { Route,Redirect } from 'react-router-dom';


export default class PrivateRoute extends Component {
  render(){
    const { location,config } = this.props;
    const { pathname } = location;
    const isLogin = localStorage.getItem('config_token')

    console.log(location,'location')
    console.log(isLogin,'isLogin')
    console.log(config,'config')
    // 如果该路由不用进行权限校验，登录状态下登陆页除外
    // 因为登陆后，无法跳转到登陆页
    // 这部分代码，是为了在非登陆状态下，访问不需要权限校验的路由
    const targetRouterConfig = config.find((v) => v.path === pathname);
    if(targetRouterConfig && !targetRouterConfig.auth && !isLogin){
      const { component } = targetRouterConfig;
      return <Route exact path={pathname} component={component} />
    }

    if(isLogin){
      // 如果是登陆状态，想要跳转到登陆，重定向到主页
      if(pathname === '/login'){
        return <Redirect to='/' />
      }else{
        // 如果路由合法，就跳转到相应的路由
        if(targetRouterConfig){
          return <Route path={pathname} component={targetRouterConfig.component} />
        }else{
          // 如果路由不合法，重定向到 404 页面
          return <Redirect to='/404' />
        }
      }
    }else{
      // 非登陆状态下，当路由合法时且需要权限校验时，跳转到登陆页面，要求登陆
      if(targetRouterConfig && targetRouterConfig.auth){
        return <Redirect to='/login' />
      }else{
        // 非登陆状态下，路由不合法时，重定向至 404
        return <Redirect to='/404' />
      }
    }
  }
}


/**
 * 总结一下，实现路由守卫需要考虑到以下的问题：

 1、未登录情况下，访问不需要权限校验的合法页面：允许访问
 2、登陆情况下，访问登陆页面：禁止访问，跳转至主页
 3、登陆情况下，访问除登陆页以外的合法页面：允许访问
 4、登陆情况下，访问所有的非法页面：禁止访问，跳转至 404
 5、未登录情况下，访问需要权限校验的页面：禁止访问，跳转至登陆页
 6、未登录情况下，访问所有的非法页面：禁止访问，跳转至 404
 */
