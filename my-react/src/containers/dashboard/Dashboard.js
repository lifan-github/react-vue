import React, {Component} from 'react';
import Header from '../../components/Header';
import { Menu, Icon, Divider } from 'antd';
import './layout.css';

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {

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
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
            >
              <Menu.Item key="1">
                <Icon type="mail" />
                订单管理
              </Menu.Item>
              <Menu.Item key="2">
                <Icon type="calendar" />
                特殊订单
              </Menu.Item>
              <Menu.Item key="3">
                <Icon type="calendar" />
                开票管理
              </Menu.Item>
              <Menu.Item key="4">
                <Icon type="calendar" />
                渠道管理
              </Menu.Item>
              <Menu.Item key="5">
                <Icon type="calendar" />
                营销联盟
              </Menu.Item>
              <Menu.Item key="6">
                <Icon type="calendar" />
                官方公告
              </Menu.Item>
              <Menu.Item key="7">
                <Icon type="calendar" />
                积分管理
              </Menu.Item>
              <Menu.Item key="8">
                <Icon type="calendar" />
                兑换管理
              </Menu.Item>
              <Menu.Item key="9">
                <Icon type="calendar" />
                活动开关
              </Menu.Item>
              <Menu.Item key="10">
                <Icon type="calendar" />
                上传图片
              </Menu.Item>
            </Menu>
          </div>
          <div className="right-switch-content">

          </div>
        </div>
      </div>
    )
  }
}