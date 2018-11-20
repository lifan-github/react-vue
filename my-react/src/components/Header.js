import React, {Component} from 'react';
import { Menu, Icon } from 'antd';
import './header.css';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div className="header-container">
        <div className="header-left">
          <div className="logo"/>
          <div>LUBANSO管理平台</div>
        </div>
        <div className="header-right">
          <Menu
            mode="horizontal"
          >
            <SubMenu title={<span className="submenu-title-wrapper"><Icon type="user" />用户中心 <Icon type="caret-down" /></span>}>
              <MenuItemGroup>
                <Menu.Item key="setting:1"><Icon type="setting" />管理员</Menu.Item>
                <Menu.Item key="setting:2"><Icon type="logout" />退出登录</Menu.Item>
              </MenuItemGroup>
            </SubMenu>
          </Menu>
        </div>
      </div>
    )
  }
}