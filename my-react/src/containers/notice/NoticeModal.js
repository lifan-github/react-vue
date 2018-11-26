import React, {Component} from 'react';
import { Modal, Button, Tabs, Input} from 'antd';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
const TabPane = Tabs.TabPane;


export default class NoticeModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeKey: 1,
      title_en: '',
      text_en: '',
      title_zh: '',
      text_zh: ''
    }
  }

  callback = (key) => {
    console.log(key);
  }

  handleChangeZh = (value) => {
    this.setState({ text_zh: value })
  }

  handleChangeEn = (value) => {
    this.setState({ text_en: value })
  }

  //子组件创建公告并传值给父组件
  createNotice = () => {
    const {title_zh, text_zh, title_en, text_en} = this.state;
    let word_obj = {
      title_zh: title_zh,
      content_zh: text_zh,
      title_en: title_en,
      content_en: text_en,
    }
    this.props.createNotice(word_obj)
  }

  bindZh = (e) => {
    let value = e.target.value;
    this.setState({
      title_zh: value
    })
  }

  bindEn = (e) => {
    let value = e.target.value;
    this.setState({
      title_en: value
    })
  }

  render() {
    const { visible, handleCancel, handleOk} = this.props;
    return (
      <Modal
        visible={visible}
        title="创建公告"
        width={1024}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>取消</Button>,
          <Button key="submit" type="primary" onClick={this.createNotice}>
            立即创建
          </Button>,
        ]}
      >
        <div className="notice-words-content">
          <Tabs defaultActiveKey="1" onChange={this.callback}>
            <TabPane tab="中文版" key="1">
              <Input className="notice-input" placeholder="请输入中文标题" onChange={this.bindZh}/>
              <ReactQuill
                value={this.state.text_zh}
                onChange={this.handleChangeZh} />
            </TabPane>
            <TabPane tab="英文版" key="2">
              <Input className="notice-input" placeholder="请输入英文标题" onChange={this.bindEn}/>
              <ReactQuill
                value={this.state.text_en}
                onChange={this.handleChangeEn} />
            </TabPane>
          </Tabs>
        </div>
      </Modal>
    )
  }
}