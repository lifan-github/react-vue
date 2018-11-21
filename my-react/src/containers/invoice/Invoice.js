import React, {Component} from 'react';

export default class Invoice extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    console.log("发票")
    return (
      <div>hello 发票</div>
    )
  }
}