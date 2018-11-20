import Dashboard from '../dashboard/Dashboard';
import Login from '../login/Login';
import Error from '../error/Error';

export const routerConfig = [
  {
    path: '/',
    component: Dashboard,
    auth: true
  },
  {
    path: '/dashboard',
    component: Dashboard,
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