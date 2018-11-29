import Vue from "vue";
import Vuex from 'vuex';
Vue.use(Vuex);

//订单store
import order from './modules/order';

export default new Vuex.Store({
  modules: {
    orderModule: order
  }
});