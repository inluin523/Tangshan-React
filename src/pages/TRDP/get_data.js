import { Form } from 'antd';
import { Input, Button, Checkbox ,message,Spin } from 'antd';
import { Component } from 'react';
import {connect} from 'dva';
import { Modal } from 'antd';
import { Alert } from 'antd';
import {Select} from "antd";

const {Option} =Select;




const layout = {
  labelCol: { span: 5 },
  wrapperCol: { span: 15 },
};
const tailLayout = {
  wrapperCol: { offset: 5, span: 15 },
};

const mapStateToProps= (data) => {
//  console.log(data);
  return data;
};




//全局提示
const openMessage = () => {
  const key = 'updatable';
  message.loading({ content: '数据正在采集中,请耐心等候数据采集完成', key,duration:3});
};






@connect(mapStateToProps)
class get_data extends Component{
  state = {
    modal1Visible: false,
    modal2Visible: false,
  };


  setModal1Visible(modal1Visible) {
    this.setState({ modal1Visible });
  }

  setModal2Visible(modal2Visible) {
    this.setState({ modal2Visible });
  }

  showModal1 = () => {
    const { dispatch } = this.props;
    dispatch({
      type: 'get_data/query_port',
    });
    this.setState({
      modal2Visible: true,
    });
  };

  showModal2 = () => {
    this.setState({
      modal1Visible: true,
    });
  };



  render() {

    //提交
    const onFinish = values => {

      const {dispatch} = this.props;
      dispatch({
        type: 'get_data/query',
        payload:{
          values
        }
      });


      console.log('Success:', values);
    };

    const onFinishFailed = errorInfo => {
      console.log('Failed:', errorInfo);
    };

    const {
      get_data: { port },

    } = this.props;
    console.log(port);

    // 获取完成信息
    const {
      get_data: { finishstate },

    } = this.props;

    console.log(finishstate);

    return (

      // 采集信息提交
      <Form
        {...layout}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="配置文件"
          name="settings"
          rules={[{ required: true, message: '请选择对应配置文件!' }]}
        >
          <Select
            placeholder="请选择配置文件"
          >
            <Option value="1">列车1</Option>
            <Option value="2">列车2</Option>
            <Option value="3">列车3</Option>
            <Option value="4">列车4</Option>
            <Option value="5">列车5</Option>
            <Option value="6">列车6</Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="采集时长"
          name="time"
          rules={[{ required: true, message: '请输入你想采集的时长!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" onClick={this.showModal1}>
            显示端口信息
          </Button>
          <Modal
            title="本机以太网端口"
            centered
            visible={this.state.modal2Visible}
            onOk={() => this.setModal2Visible(false)}
            onCancel={() => this.setModal2Visible(false)}
          >
            <p>{port}</p>

          </Modal>
        </Form.Item>

        <Form.Item
          label="端口号"
          name="port"
          rules={[{ required: true, message: '请输入端口号!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit" onClick={openMessage}>
            开始抓包
          </Button>
        </Form.Item>

        <Form.Item {...tailLayout}>

            <Alert
              message={finishstate}
              description="采集完成这里会显示信息"
              type="info"
            />

        </Form.Item>

      </Form>

    );
  };
}




export default get_data;
