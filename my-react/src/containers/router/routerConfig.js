import Home from '../home/Home';
import Login from '../login/Login';
import Error from '../error/Error';

export const routerConfig = [
  {
    path: '/',
    component: Home,
    auth: true
  },
  {
    path: '/home',
    component: Home,
    auth: true
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/404',
    component: Error
  }
];

/*
* 将 auth 设置为 true，表示该路由需要权限校验
* */