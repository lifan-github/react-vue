import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Error from './components/Error.vue'
import Dashboard from './views/Dashboard.vue'
import Orders from './views/orders/Orders.vue'
import SpecialOrders from './views/specialOrders/SpecialOrders.vue'
import Invoice from './views/invoice/Invoice.vue'

Vue.use(Router);


//路由守卫
const checkToken = (to, from, next) => {
  const token = localStorage.getItem('token');
  if(token){
    next();
  }else{
    window.location.href = '/';
  }
};

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
      redirect: '/dashboard/orders', //子页面默认显示的页面
      children: [
        {
          path: '/dashboard/orders',
          name: 'orders',
          component: Orders,
          beforeEnter: checkToken
        },
        {
          path: '/dashboard/specialOrders',
          name: 'specialOrders',
          component: SpecialOrders,
          beforeEnter: checkToken
        },
        {
          path: '/dashboard/invoice',
          name: 'invoice',
          component: Invoice,
          beforeEnter: checkToken
        },
      ]
    },
    {//注册找不到页面
      path: '/error',
      name: 'error',
      component: Error
    },
    {//找不到路由，进入404页面
      path: '/*', redirect: '/error'
    }
  ]
})
