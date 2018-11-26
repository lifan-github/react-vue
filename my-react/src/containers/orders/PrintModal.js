import React, {Component} from 'react';
import { Modal, Button} from 'antd';


export default class PrintModal extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }


  render() {
    const { visible, loading, handleCancel, handleOk, printData} = this.props;
    let list = printData && printData.map((item, index) => {
      return(
        <div key={item.order_id} className="modal-list-box">
          <span className="header-ordernum">{item.order_number}</span>
          <span className="header-time">{item.date_placed}</span>
          <span className="header-num">{item.total_amount}</span>
          <span className="header-way">微信</span>
          <span className="header-name">{item.product_shipping_address.name}</span>
          <span className="header-tel">{item.product_shipping_address.mobile}</span>
          <span className="header-addrees">{item.product_shipping_address.address}</span>
          <span className="header-status">已支付</span>
          <span className="header-editor">老司机</span>
        </div>
      )
    })
    return (
      <Modal
        visible={visible}
        title="订单预览"
        width={1024}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>取消</Button>,
          <Button key="submit" type="primary" loading={loading} onClick={handleOk}>
            确定打印
          </Button>,
        ]}
      >
        <div className="table-header">
          <span className="header-ordernum">订单号</span>
          <span className="header-time">下单时间</span>
          <span className="header-num">数量</span>
          <span className="header-way">购买途径</span>
          <span className="header-name">姓名</span>
          <span className="header-tel">电话</span>
          <span className="header-addrees">收货地址</span>
          <span className="header-status">支付状态</span>
          <span className="header-editor">备注</span>
        </div>
        {list}
      </Modal>
    )
  }
}