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
    path: '/dashboard/orders', //订单管理
    component: Dashboard, //想这些页面路由都显示Dashboard，作用是路由守卫检测功能
    auth: true
  },
  {
    path: '/dashboard/orders/addOrder', //添加订单
    component: Dashboard,
    auth: true
  },
  {
    path: '/dashboard/orders/addOrder/orderDetail', //三级路由
    component: Dashboard,
    auth: true
  },
  {
    path: '/dashboard/specialOrders', //特殊订单
    component: Dashboard,
    auth: true
  },
  {
    path: '/dashboard/invoice', //发票管理
    component: Dashboard,
    auth: true
  },
  {
    path: '/dashboard/qudao', //渠道
    component: Dashboard,
    auth: true
  },
  {
    path: '/dashboard/union', //营销联盟
    component: Dashboard,
    auth: true
  },
  {
    path: '/dashboard/notice', //官方公告
    component: Dashboard,
    auth: true
  },
  {
    path: '/dashboard/integral', //积分管理
    component: Dashboard,
    auth: true
  },
  {
    path: '/dashboard/exchange', //兑换管理
    component: Dashboard,
    auth: true
  },
  {
    path: '/dashboard/switchActivities', //活动开关
    component: Dashboard,
    auth: true
  },
  {
    path: '/dashboard/upImg', //上传图片
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
  },
];

/*
* 将 auth 设置为 true，表示该路由需要权限校验
*
* */