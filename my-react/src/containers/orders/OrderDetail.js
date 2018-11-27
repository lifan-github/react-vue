import React, {Component} from 'react';
import { Button } from 'antd';

export default class OrderDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  goBack = () => {
    this.props.history.goBack()
  }

  render() {
    return (
      <div>
        <div>你好，我是三级路由</div>
        <Button onClick={this.goBack}>返回上一页</Button>
      </div>
    )
  }
}