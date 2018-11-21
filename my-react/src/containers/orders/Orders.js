import React, {Component} from 'react';
import {connect} from "react-redux";
import { getAllOrders } from '../../redux/actions/allOrdersActions';

class Orders extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount(){
    this.props.dispatch(getAllOrders())
  }

  render() {
    return (
      <div>hello Orders</div>
    )
  }
}

export default connect((state) => {
  console.log(state,'推荐');
  return {
    allOrders: state.allOrdersReducers
  }
})(Orders)