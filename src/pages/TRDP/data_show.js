import React, { Component } from 'react';
import { Line } from '@ant-design/charts';
import {connect} from 'dva';
import {Row,Col} from "antd";
import { Select } from 'antd';

//直接调用model trdp中的数据
const mapStateToProps= (trdp) => {
  return trdp;
};

const { Option } = Select;

function handleChange(value) {
  console.log(`selected ${value}`);
}



@connect(mapStateToProps)
class Page extends Component {

  render() {
    const {
      trdp: { data1 },

    } = this.props;

    //for循环赋值
    const data = [];
    const k=data1.length;

    for(var i=0;i<100;i++){
      var time=data1[i].t_TIME;
      var comid=data1[i].comid;
      data.push({time:time,value:comid});
    }
    const config = {
      data,
      title: {
        visible: true,
        text: 'comid',
      },
      xField: 'time',
      yField: 'value',
    };
    return (
      <div>
      <Row>
        <Col span={24}>
          <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="disabled" disabled>
              Disabled
            </Option>
            <Option value="Yiminghe">yiminghe</Option>
          </Select>
          <Select defaultValue="lucy" style={{ width: 120 }} disabled>
            <Option value="lucy">Lucy</Option>
          </Select>
          <Select defaultValue="lucy" style={{ width: 120 }} loading>
            <Option value="lucy">Lucy</Option>
          </Select>
          <Select defaultValue="lucy" style={{ width: 120 }} allowClear>
            <Option value="lucy">Lucy</Option>
          </Select>
        </Col>
      </Row>

      <Row>
        <Col span={24}>
          <div>
            <Line {...config} />

          </div>
        </Col>
      </Row>
    </div>
    );
  }
}
export default Page;
