import React, {Component} from 'react';
import { Route, Switch, Link} from "react-router-dom";
import Header from '../../components/Header';
import { Menu, Icon } from 'antd';
import './layout.css';


import Orders from '../../containers/orders/Orders';
import AddOrder from '../../containers/orders/AddOrder';
import OrderDetail from '../../containers/orders/OrderDetail';
import SpecialOrders from '../../containers/specialOrders/SpecialOrders';
import Invoice from '../../containers/invoice/Invoice';
import QuDao from '../../containers/qudao/QuDao';
import Union from '../../containers/union/Union';
import Notice from '../../containers/notice/Notice';
import Integral from '../../containers/integral/Integral';
import Exchange from '../../containers/exchange/Exchange';
import SwitchActivities from '../../containers/switchActivities/SwitchActivities';
import UpImg from '../../containers/upImg/UpImg';

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultOpenKeys: '1'
    }
  }

  componentWillMount(){
    const location_url = this.props.location.pathname;
    const all_url = [
      {pathname: '/dashboard/orders'},
      {pathname: '/dashboard/specialOrders'},
      {pathname: '/dashboard/invoice'},
      {pathname: '/dashboard/qudao'},
      {pathname: '/dashboard/union'},
      {pathname: '/dashboard/notice'},
      {pathname: '/dashboard/integral'},
      {pathname: '/dashboard/exchange'},
      {pathname: '/dashboard/switchActivities'},
      {pathname: '/dashboard/upImg'},
    ];
    for(let i = 0; i<all_url.length; i++){
      if(location_url === all_url[i].pathname){
        this.setState({
          defaultOpenKeys: String(i+1)
        })
      }
    }
  }

  render() {
    return (
      <div className="inner-container">
        <Header/>
        <div className="dashboard-contianer">
          <div className="slider-nav-container">
            <Menu
              style={{ width: 200 }}
              defaultSelectedKeys={[this.state.defaultOpenKeys]}
            >
              <Menu.Item key="1">
                <Link to={'/dashboard/orders'}>
                  <Icon type="ordered-list" />
                  订单管理
                </Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to={'/dashboard/specialOrders'}>
                  <Icon type="book" />
                  特殊订单
                </Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to={'/dashboard/invoice'}>
                  <Icon type="diff" />
                  开票管理
                </Link>
              </Menu.Item>
              <Menu.Item key="4">
                <Link to={'/dashboard/qudao'}>
                  <Icon type="appstore" />
                  渠道管理
                </Link>
              </Menu.Item>
              <Menu.Item key="5">
                <Link to={'/dashboard/union'}>
                  <Icon type="flag" />
                  营销联盟
                </Link>
              </Menu.Item>
              <Menu.Item key="6">
                <Link to={'/dashboard/notice'}>
                  <Icon type="sound" />
                  官方公告
                </Link>
              </Menu.Item>
              <Menu.Item key="7">
                <Link to={'/dashboard/integral'}>
                  <Icon type="calendar" />
                  积分管理
                </Link>
              </Menu.Item>
              <Menu.Item key="8">
                <Link to={'/dashboard/exchange'}>
                  <Icon type="sync" />
                  兑换管理
                </Link>
              </Menu.Item>
              <Menu.Item key="9">
                <Link to={'/dashboard/switchActivities'}>
                  <Icon type="box-plot" />
                  活动开关
                </Link>
              </Menu.Item>
              <Menu.Item key="10">
                <Link to={'/dashboard/upImg'}>
                  <Icon type="cloud-upload" />
                  上传图片
                </Link>
              </Menu.Item>
            </Menu>
          </div>
          <div className="right-switch-content">
            <Switch>
              <Route path="/" exact component={Orders}/>
              <Route path='/dashboard/orders' exact component={Orders} />
              <Route path='/dashboard/orders/addOrder' exact component={AddOrder} />
              <Route path='/dashboard/orders/addOrder/orderDetail' exact component={OrderDetail} />
              <Route path='/dashboard/specialOrders' component={SpecialOrders} />
              <Route path='/dashboard/invoice' component={Invoice} />
              <Route path='/dashboard/qudao' component={QuDao} />
              <Route path='/dashboard/union' component={Union} />
              <Route path='/dashboard/notice' component={Notice} />
              <Route path='/dashboard/integral' component={Integral} />
              <Route path='/dashboard/exchange' component={Exchange} />
              <Route path='/dashboard/switchActivities' component={SwitchActivities} />
              <Route path='/dashboard/upImg' component={UpImg} />
            </Switch>
          </div>
        </div>
      </div>
    )
  }
}