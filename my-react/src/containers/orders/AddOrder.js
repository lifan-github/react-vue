import React, {Component} from 'react';
import { Button } from 'antd';

export default class AddOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  goBack = () => {
    this.props.history.goBack()
  }

  goNext = () => {
    console.log(this.props,'-----')
    this.props.history.push('/dashboard/orders/addOrder/orderDetail')
  }

  render() {
    return (
      <div>
        <div>hello AddOrder</div>
        <Button onClick={this.goBack}>返回上一页</Button>
        <Button onClick={this.goNext}>进入三级路由</Button>
      </div>
    )
  }
}