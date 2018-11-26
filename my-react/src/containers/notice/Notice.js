import React, {Component} from 'react';
import {connect} from "react-redux";
import { Button, Radio } from 'antd';
import './notice.css';
import { getAllNotice } from '../../redux/actions/allNoticeActions';
import NoticeModal from './NoticeModal';
import PrintModal from "../orders/PrintModal";
const RadioGroup = Radio.Group;



class Notice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 1,
      visible: false,
    }
  }

  componentDidMount(){
    this.props.dispatch(getAllNotice())
  }

  //中英文切换
  onChange = (e) => {
    console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value,
    });
  }

  //创建公告modal
  createNoticeModal = () => {
    this.setState({
      visible: true
    })
  }

  //取消
  handleCancel = () => {
    this.setState({ visible: false });
  }

  //确定
  handleOk = () => {
    this.setState({
      visible: false
    })
  }

  //立即创建
  createNotice = (value) => {
    console.log(value,'子组件传过来的值')
  }

  render() {
    const {value} = this.state;
    const { allNotices } = this.props.notices;
    let list = allNotices.data && allNotices.data.map((item, index) => {
      if(value === 1){
        return(
          <div className="notice-list" key={item.id}>
            <div className="notice-title">{item.zh.title}</div>
            <div className="notice-content">{item.zh.content}</div>
          </div>
        )
      }else{
        return(
          <div className="notice-list" key={item.id}>
            <div className="notice-title">{item.en.title}</div>
            <div className="notice-content">{item.en.content}</div>
          </div>
        )
      }
    })
    return (
      <div className="container">
        <div className="scroll-box">
          <div className="notice-top-manage">
            <RadioGroup onChange={this.onChange} value={this.state.value}>
              <Radio value={1}>中文</Radio>
              <Radio value={2}>English</Radio>
            </RadioGroup>
            <Button type="primary" onClick={this.createNoticeModal}>创建公告</Button>
            <NoticeModal
              visible={this.state.visible}
              handleCancel={this.handleCancel}
              createNotice={this.createNotice}
              handleOk={this.handleOk}/>
          </div>
          <div className="all-notice-box">
            {list}
          </div>
        </div>
      </div>
    )
  }
}

export default connect((state) => {
  return{
    notices: state.noticeReducers
  }
})(Notice)