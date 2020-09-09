import React, {useState, useEffect, Component} from 'react';
import { Line } from '@ant-design/charts';
import  {Row, Col,Form,Input,Button} from 'antd';
import { Select,TreeSelect } from 'antd';
import { Card } from 'antd';
import { Cascader } from 'antd';
import {connect} from 'dva';
import {number} from "prop-types";




const mapStateToProps= (data) => {
  console.log(data);
  return data;
};

// 选择配置文件
const { Option } = Select;
const provinceData = ['Zhejiang', 'Jiangsu'];
const cityData = {
  Zhejiang: ['Hangzhou', 'Ningbo', 'Wenzhou'],
  Jiangsu: ['Nanjing', 'Suzhou', 'Zhenjiang'],
};


function getPath(value) {
  const path = [];
  let current = valueMap[value];
  while (current) {
    path.unshift(current.value);
    current = current.parent;
  }
  return path;
}


@connect(mapStateToProps)
class show_page extends Component {
  // 显示选中的变量数据
  state = {
    value: undefined,
    submitTreeData:[],
    treeData: [
      {
        
      }
    ],
    cities: cityData[provinceData[0]],
    secondCity: cityData[provinceData[0]][0],
  };

  handleProvinceChange = value => {
    this.setState({
      cities: cityData[value],
      secondCity: cityData[value][0],
    });
  };

  onSecondCityChange = value => {
    this.setState({
      secondCity: value,
    });
  };

  // 选择的变量提交数据库返回
  onChange = value => {
    const {dispatch}=this.props;
    this.setState({
      submitTreeData:value
    })
    console.log(value)
    dispatch({
      type: 'get_settings/query',
      payload:{
        comid: value
      }
    });
  };

  onSubmit = () => {
    console.log(getPath)
    console.log(this.state.submitTreeData);

  }
  // 根据配置文件显示对应变量

  handleChange= value =>{
    console.log(typeof(value));
    if(value=="1"){
      console.log("ddd")
      this.setState({
        treeData: [
          {
            title: 'Comid0x10ff',
            value: 'Comid0x10ff',
            children: [
              {
                value: 'source_ip_10ff',
                label: 'source_ip',
              },
              {
                value: 'srcport_10ff',
                label: 'srcport',
              },
              {
                value: 'dstip_10ff',
                label: 'dstip',
              },
              {
                value:'dstport_10ff',
                label:'dstport',
              },
              {
                value:'sequenceCounter_10ff',
                label:'sequenceCounter',
              },
              {
                value:'version_10ff',
                label:'version',
              },
              {
                value:'msgtype_10ff',
                label:'msgtype',
              },
              {
                value:'comid_10ff',
                label:'comid',
              },
              {
                value: 'etbctopocent_10ff',
                label: 'etbctopocent',
              },
              {
                value: 'optrntopocent_10ff',
                label: 'optrntopocent',
              },
              {
                value: 'datasetlen_10ff',
                label: 'datasetlen',
              },
              {
                value: 'replycomid_10ff',
                label: 'replycomid',
              },
              {
                value:'replyaddress_10ff',
                label:'replyaddress',
              },
              {
                value:'fcs_10ff',
                label:'fcs',
              },
              {
                value:'CCU_Life_signal',
                label:'CCU_Life_signal',
              },
              {
                value:'Year',
                label:'Year',
              },
              {
                value:'Month',
                label:'Month',
              },
              {
                value:'Day',
                label:'Day',
              },
              {
                value:'Hour',
                label:'Hour',
              },
              {
                value:'Minute',
                label:'Minute',
              },
              {
                value: 'Second',
                label: 'Second',
              },
              {
                value: 'TimeSetV',
                label: 'TimeSetV',
              },
              {
                value: 'FirstCarnumber',
                label: 'FirstCarnumber',
              },
              {
                value: 'SecondCardnumber',
                label: 'SecondCardnumber',
              },
              {
                value:'ThirdCardnumber',
                label:'ThirdCardnumber',
              },
              {
                value:'ForthCardnumber',
                label:'ForthCardnumber',
              },
            ],
          },
          {

            title: 'Comid0x1191',
            label:'Comid0x1191',
            children: [
              {
                value: 'srcip_1191',
                label: 'srcip_1191',
              },
              {
                value: 'srcport_1191',
                label: 'srcport_1191',
              },
              {
                value: 'dstip_1191',
                label: 'dstip_1191',
              },
              {
                value:'dstport_1191',
                label:'dstport_1191',
              },
              {
                value:'sequenceCounter_1191',
                label:'sequenceCounter_1191',
              },
              {
                value:'version_1191',
                label:'version_1191',
              },
              {
                value:'msgtype_1191',
                label:'msgtype_1191',
              },
              {
                value:'comid_1191',
                label:'comid_1191',
              },
              {
                value: 'etbctopocent_1191',
                label: 'etbctopocent_1191',
              },
              {
                value: 'optrntopocent_1191',
                label: 'optrntopocent_1191',
              },
              {
                value: 'datasetlen_1191',
                label: 'datasetlen_1191',
              },
              {
                value: 'replycomid_1191',
                label: 'replycomid_1191',
              },
              {
                value:'replyaddress_1191',
                label:'replyaddress_1191',
              },
              {
                value:'fcs_1191',
                label:'fcs_1191',
              },
              {
                value:'AllRiDClosed',
                label:'AllRiDClosed',
              },
              {
                value:'OpenLeftDoor',
                label:'OpenLeftDoor',
              },
              {
                value:'OpenRightDoor',
                label:'OpenRightDoor',
              },
              {
                value:'MC1Valid',
                label:'MC1Valid',
              },
              {
                value:'MC2Valid',
                label:'MC2Valid',
              },
              {
                value:'SaAutSpMo',
                label:'SaAutSpMo',
              },
              {
                value: 'ManuSpMo',
                label: 'ManuSpMo',
              },
              {
                value: 'ArrStationPA',
                label: 'ArrStationPA',
              },
              {
                value: 'LeaveStaPA',
                label: 'LeaveStaPA',
              },
              {
                value: 'PaSpkValid',
                label: 'PaSpkValid',
              },
              {
                value:'EmergenPAStop',
                label:'EmergenPAStop',
              },
              {
                value:'SkipPreStaID',
                label:'SkipPreStaID',
              },
              {
                value: 'SkipNextStaID',
                label: 'SkipNextStaID',
              },
              {
                value: 'CabReVoSet_Valid',
                label: 'CabReVoSet_Valid',
              },
              {
                value: 'GueReVoSet_Valid',
                label: 'GueReVoSet_Valid',
              },
              {
                value: 'CabReproVo',
                label: 'CabReproVo',
              },
              {
                value:'GueReproVo',
                label:'GueReproVo',
              },
              {
                value:'SpyFire1',
                label:'SpyFire1',
              },
              {
                value:'SpyFire2',
                label:'SpyFire2',
              },
              {
                value:'SpyFire3',
                label:'SpyFire3',
              },
              {
                value:'SpyFire4',
                label:'SpyFire4',
              },
              {
                value: 'SpyFire5',
                label: 'SpyFire5',
              },
              {
                value: 'SpyFire6',
                label: 'SpyFire6',
              },
              {
                value: 'SpyFire7',
                label: 'SpyFire7',
              },
              {
                value: 'SpyFire8',
                label: 'SpyFire8',
              },
              {
                value:'SpyFire9',
                label:'SpyFire9',
              },
              {
                value:'SpyFire10',
                label:'SpyFire10',
              },
              {
                value:'SpyFire11',
                label:'SpyFire11',
              },
              {
                value:'SpyFire12',
                label:'SpyFire12',
              },
              {
                value:'SpyFire13',
                label:'SpyFire13',
              },
              {
                value:'SpyFire14',
                label:'SpyFire14',
              },
              {
                value:'SpyFire15',
                label:'SpyFire15',
              },
              {
                value:'SpyFire16',
                label:'SpyFire16',
              },
              {
                value: 'IxDor1EmUlck',
                label: 'IxDor1EmUlck',
              },
              {
                value: 'IxDor2EmUlck',
                label: 'IxDor2EmUlck',
              },
              {
                value: 'IxDor3EmUlck',
                label: 'IxDor3EmUlck',
              },
              {
                value: 'IxDor4EmUlck',
                label: 'IxDor4EmUlck',
              },
              {
                value:'IxDor5EmUlck',
                label:'IxDor5EmUlck',
              },
              {
                value:'IxDor6EmUlck',
                label:'IxDor6EmUlck',
              },
              {
                value: 'IxDor7EmUlck',
                label: 'IxDor7EmUlck',
              },
              {
                value: 'IxDor8EmUlck',
                label: 'IxDor8EmUlck',
              },
              {
                value: 'IxDor9EmUlck',
                label: 'IxDor9EmUlck',
              },
              {
                value:'IxDor10EmUlck',
                label:'IxDor10EmUlck',
              },
              {
                value:'ArrCleanUp',
                label:'ArrCleanUp',
              },
              {
                value:'CarOverDet',
                label:'CarOverDet',
              },
              {
                value:'SStationID',
                label:'SStationID',
              },
              {
                value:'NextPTID',
                label:'NextPTID',
              },
              {
                value:'DestiPTID',
                label:'DestiPTID',
              },
              {
                value:'EmergencyPA',
                label:'EmergencyPA',
              },
              {
                value:'TrainSpeed',
                label:'TrainSpeed',
              },
            ],
          },
          {
            title: 'Comid0x2191AndComid0x2491',
            label:'Comid0x2191AndComid0x2491',
            children: [
              {
                value: 'srcip_2191',
                label: 'srcip_2191',
              },
              {
                value: 'srcport_2191',
                label: 'srcport_2191',
              },
              {
                value: 'dstip_2191',
                label: 'dstip_2191',
              },
              {
                value:'dstport_2191',
                label:'dstport_2191',
              },
              {
                value:'sequenceCounter_2191',
                label:'sequenceCounter_2191',
              },
              {
                value:'version_2191',
                label:'version_2191',
              },
              {
                value:'msgtype_2191',
                label:'msgtype_2191',
              },
              {
                value:'comid_2191',
                label:'comid_2191',
              },
              {
                value: 'etbctopocent_2191',
                label: 'etbctopocent_2191',
              },
              {
                value: 'optrntopocent_2191',
                label: 'optrntopocent_2191',
              },
              {
                value: 'datasetlen_2191',
                label: 'datasetlen_2191',
              },
              {
                value: 'replycomid_2191',
                label: 'replycomid_2191',
              },
              {
                value:'replyaddress_2191',
                label:'replyaddress_2191',
              },
              {
                value:'fcs_2191',
                label:'fcs_2191',
              },
              {
                value:'LifeSig',
                label:'LifeSig',
              },
              {
                value:'SStationIDFb',
                label:'SStationIDFb',
              },
              {
                value:'DestiPTIDFb',
                label:'DestiPTIDFb',
              },
              {
                value:'CurrPTIDFb',
                label:'CurrPTIDFb',
              },
              {
                value:'NextPTIDFb',
                label:'NextPTIDFb',
              },
              {
                value:'EmergencyPAFb',
                label:'EmergencyPAFb',
              },
              {
                value: 'CabReproVoFb',
                label: 'CabReproVoFb',
              },
              {
                value: 'GueReproVoFb',
                label: 'GueReproVoFb',
              },
              {
                value: 'PASWVersion',
                label: 'PASWVersion',
              },
              {
                value: 'CCTVSWVersion',
                label: 'CCTVSWVersion',
              },
              {
                value:'MovSWVersion',
                label:'MovSWVersion',
              },
              {
                value:'VidInteHCSWVersion',
                label:'VidInteHCSWVersion',
              },
              {
                value: 'CabCallSta',
                label: 'CabCallSta',
              },
              {
                value: 'OccBroSta',
                label: 'OccBroSta',
              },
              {
                value: 'ManBroSta',
                label: 'ManBroSta',
              },
              {
                value: 'EmcBroSta',
                label: 'EmcBroSta',
              },
              {
                value:'OffBroSta',
                label:'OffBroSta',
              },
              {
                value:'InBroSta',
                label:'InBroSta',
              },
              {
                value:'ArrCleanUpFb',
                label:'ArrCleanUpFb',
              },
              {
                value:'CarOverDetFb',
                label:'CarOverDetFb',
              },
              {
                value:'KeyPosiWatch',
                label:'KeyPosiWatch',
              },
              {
                value: 'Mc1PISHost',
                label: 'Mc1PISHost',
              },
              {
                value: 'Mc2PISHost',
                label: 'Mc2PISHost',
              },
              {
                value: 'SaAutSpMoFb',
                label: 'SaAutSpMoFb',
              },
              {
                value: 'ManuSpMoFb',
                label: 'ManuSpMoFb',
              },
              {
                value:'PECU11Call',
                label:'PECU11Call',
              },
              {
                value:'PECU12Call',
                label:'PECU12Call',
              },
              {
                value:'PECU21Call',
                label:'PECU21Call',
              },
              {
                value:'PECU22Call',
                label:'PECU22Call',
              },
              {
                value:'PECU31Call',
                label:'PECU31Call',
              },
              {
                value:'PECU32Call',
                label:'PECU32Call',
              },
              {
                value:'PECU41Call',
                label:'PECU41Call',
              },
              {
                value:'PECU42Call',
                label:'PECU42Call',
              },
              {
                value: 'PECU11Act',
                label: 'PECU11Act',
              },
              {
                value: 'PECU12Act',
                label: 'PECU12Act',
              },
              {
                value: 'PECU21Act',
                label: 'PECU21Act',
              },
              {
                value: 'PECU22Act',
                label: 'PECU22Act',
              },
              {
                value:'PECU31Act',
                label:'PECU31Act',
              },
              {
                value:'PECU32Act',
                label:'PECU32Act',
              },
              {
                value: 'PECU41Act',
                label: 'PECU41Act',
              },
              {
                value: 'PECU42Act',
                label: 'PECU42Act',
              },
              {
                value: 'Camre11Act',
                label: 'Camre11Act',
              },
              {
                value:'Camre12Act',
                label:'Camre12Act',
              },
              {
                value:'Camre21Act',
                label:'Camre21Act',
              },
              {
                value:'Camre22Act',
                label:'Camre22Act',
              },
              {
                value:'Camre31Act',
                label:'Camre31Act',
              },
              {
                value:'Camre32Act',
                label:'Camre32Act',
              },
              {
                value:'Camre41Act',
                label:'Camre41Act',
              },
              {
                value:'Camre42Act',
                label:'Camre42Act',
              },
              {
                value:'Camre11Leave',
                label:'Camre11Leave',
              },
              {
                value:'Camre12Leave',
                label:'Camre12Leave',
              },
              {
                value:'Camre21Leave',
                label:'Camre21Leave',
              },
              {
                value:'Camre22Leave',
                label:'Camre22Leave',
              },
              {
                value:'Camre31Leave',
                label:'Camre31Leave',
              },
              {
                value:'Camre32Leave',
                label:'Camre32Leave',
              },
              {
                value:'Camre41Leave',
                label:'Camre41Leave',
              },
              {
                value:'Camre42Leave',
                label:'Camre42Leave',
              },
              {
                value: 'Mc1CabFCamreAct',
                label: 'Mc1CabFCamreAct',
              },
              {
                value: 'Mc1CabFCamreLeave',
                label: 'Mc1CabFCamreLeave',
              },
              {
                value: 'Mc1CabFCamreWard',
                label: 'Mc1CabFCamreWard',
              },
              {
                value: 'Mc2CabFCamreAct',
                label: 'Mc2CabFCamreAct',
              },
              {
                value:'Mc2CabFCamreLeave',
                label:'Mc2CabFCamreLeave',
              },
              {
                value:'Mc2CabFCamreWard',
                label:'Mc2CabFCamreWard',
              },
              {
                value: 'Mc1CabCamreAct',
                label: 'Mc1CabCamreAct',
              },
              {
                value: 'Mc1CabCamreLeave',
                label: 'Mc1CabCamreLeave',
              },
              {
                value: 'Mc1CabCamreWard',
                label: 'Mc1CabCamreWard',
              },
              {
                value:'Mc2CabCamreAct',
                label:'Mc2CabCamreAct',
              },
              {
                value:'Mc2CabCamreLeave',
                label:'Mc2CabCamreLeave',
              },
              {
                value:'Mc2CabCamreWard',
                label:'Mc2CabCamreWard',
              },
              {
                value:'Mc1NVRLeaveFlt',
                label:'Mc1NVRLeaveFlt',
              },
              {
                value:'Mc2NVRLeaveFlt',
                label:'Mc2NVRLeaveFlt',
              },
              {
                value:'Mc1NVRStorFlt',
                label:'Mc1NVRStorFlt',
              },
              {
                value:'Mc2NVRStorFlt',
                label:'Mc2NVRStorFlt',
              },
              {
                value:'Mc1NVRStorShotFlt',
                label:'Mc1NVRStorShotFlt',
              },
              {
                value:'Mc2NVRStorShotFlt',
                label:'Mc2NVRStorShotFlt',
              },
              {
                value:'IPConflictFltt',
                label:'IPConflictFltt',
              },
              {
                value:'Camre11Ward',
                label:'Camre11Ward',
              },
              {
                value:'Camre12Ward',
                label:'Camre12Ward',
              },
              {
                value:'Camre21Ward',
                label:'Camre21Ward',
              },
              {
                value:'Camre22Ward',
                label:'Camre22Ward',
              },
              {
                value:'Camre31Ward',
                label:'Camre31Ward',
              },
              {
                value:'Camre32Ward',
                label:'Camre32Ward',
              },
              {
                value:'Camre41Ward',
                label:'Camre41Ward',
              },
              {
                value: 'Camre42Ward',
                label: 'Camre42Ward',
              },
              {
                value: 'MDU11Leave',
                label: 'MDU11Leave',
              },
              {
                value: 'MDU12Leave',
                label: 'MDU12Leave',
              },
              {
                value: 'MDU13Leave',
                label: 'MDU13Leave',
              },
              {
                value:'MDU21Leave',
                label:'MDU21Leave',
              },
              {
                value:'MDU22Leave',
                label:'MDU22Leave',
              },
              {
                value: 'MDU31Leave',
                label: 'MDU31Leave',
              },
              {
                value: 'MDU32Leave',
                label: 'MDU32Leave',
              },
              {
                value: 'MDU41Leave',
                label: 'MDU41Leave',
              },
              {
                value:'MDU42Leave',
                label:'MDU42Leave',
              },
              {
                value:'MDU43Leave',
                label:'MDU43Leave',
              },
              {
                value:'AMP1Leave',
                label:'AMP1Leave',
              },
              {
                value:'AMP4Leave',
                label:'AMP4Leave',
              },
              {
                value:'Mc1DesDisplayLeave',
                label:'Mc1DesDisplayLeave',
              },
              {
                value:'Mc2DesDisplayLeave',
                label:'Mc2DesDisplayLeave',
              },
              {
                value:'Mc1HUD1Leave',
                label:'Mc1HUD1Leave',
              },
              {
                value:'Mc2HUD4Leave',
                label:'Mc2HUD4Leave',
              },
              {
                value:'EmerPAFlt',
                label:'EmerPAFlt',
              },
              {
                value:'Mc1ServerLeaveFlt',
                label:'Mc1ServerLeaveFlt',
              },
              {
                value:'Mc2ServerLeaveFlt',
                label:'Mc2ServerLeaveFlt',
              },
              {
                value:'PassWeightSum',
                label:'PassWeightSum',
              },
              {
                value:'PECU11Leave',
                label:'PECU11Leave',
              },
              {
                value:'PECU12Leave',
                label:'PECU12Leave',
              },
              {
                value:'PECU21Leave',
                label:'PECU21Leave',
              },
              {
                value:'PECU22Leave',
                label:'PECU22Leave',
              },
              {
                value: 'PECU31Leave',
                label: 'PECU31Leave',
              },
              {
                value: 'PECU32Leave',
                label: 'PECU32Leave',
              },
              {
                value: 'PECU41Leave',
                label: 'PECU41Leave',
              },
              {
                value: 'PECU42Leave',
                label: 'PECU42Leave',
              },
              {
                value:'Mc1CabOutCamre1Leave',
                label:'Mc1CabOutCamre1Leave',
              },
              {
                value:'Mc1CabOutCamre1Ward',
                label:'Mc1CabOutCamre1Ward',
              },
              {
                value:'Mc1CabOutCamre2Leave',
                label:'Mc1CabOutCamre2Leave',
              },
              {
                value:'Mc1CabOutCamre2Ward',
                label:'Mc1CabOutCamre2Ward',
              },
              {
                value: 'Mc2CabOutCamre1Leave',
                label: 'Mc2CabOutCamre1Leave',
              },
              {
                value: 'Mc2CabOutCamre1Ward',
                label: 'Mc2CabOutCamre1Ward',
              },
              {
                value: 'Mc2CabOutCamre2Leave',
                label: 'Mc2CabOutCamre2Leave',
              },
              {
                value: 'Mc2CabOutCamre2Ward',
                label: 'Mc2CabOutCamre2Ward',
              },
            ],
          },
        ]
        }

      );
    };
    // const {dispatch}=this.props;
    // console.log(value)
    // dispatch({
    //   type: 'get_settings/query',
    //   payload:{
    //     value
    //   }
    // });

  };



  componentDidMount() {}
    /*
    for(let i=0;i<3;i++) {
      const { dispatch } = this.props;
      if(i==0){
        dispatch({
          type: 'first_settings/query10ff',
        });
      };

      if(i==1){
        dispatch({
          type: 'first_settings/query1191',
        });
      };

      if(i==2){
        dispatch({
          type: 'first_settings/query2191',
        });
      };


    };
  }

     */

    handleClick(e, q) {

      console.log(e, q);
  
      this.setState({ click: !this.state.click, value: e });
  
    }
  render() {


    const { cities } = this.state;
    const data = [
      {
        date: '2018/8/1',
        type: 'download',
        value: 4623,
      },
      {
        date: '2018/8/1',
        type: 'register',
        value: 2208,
      },
      {
        date: '2018/8/1',
        type: 'bill',
        value: 182,
      },
      {
        date: '2018/8/2',
        type: 'download',
        value: 6145,
      },
      {
        date: '2018/8/2',
        type: 'register',
        value: 2016,
      },
      {
        date: '2018/8/2',
        type: 'bill',
        value: 257,
      },
      {
        date: '2018/8/3',
        type: 'download',
        value: 508,
      },
      {
        date: '2018/8/3',
        type: 'register',
        value: 2916,
      },
      {
        date: '2018/8/3',
        type: 'bill',
        value: 289,
      },
      {
        date: '2018/8/4',
        type: 'download',
        value: 6268,
      },
      {
        date: '2018/8/4',
        type: 'register',
        value: 4512,
      },
      {
        date: '2018/8/4',
        type: 'bill',
        value: 428,
      },
      {
        date: '2018/8/5',
        type: 'download',
        value: 6411,
      },
      {
        date: '2018/8/5',
        type: 'register',
        value: 8281,
      },
      {
        date: '2018/8/5',
        type: 'bill',
        value: 619,
      },
      {
        date: '2018/8/6',
        type: 'download',
        value: 1890,
      },
      {
        date: '2018/8/6',
        type: 'register',
        value: 2008,
      },
      {
        date: '2018/8/6',
        type: 'bill',
        value: 87,
      },
      {
        date: '2018/8/7',
        type: 'download',
        value: 4251,
      },
      {
        date: '2018/8/7',
        type: 'register',
        value: 1963,
      },
      {
        date: '2018/8/7',
        type: 'bill',
        value: 706,
      },
      {
        date: '2018/8/8',
        type: 'download',
        value: 2978,
      },
      {
        date: '2018/8/8',
        type: 'register',
        value: 2367,
      },
      {
        date: '2018/8/8',
        type: 'bill',
        value: 387,
      },
      {
        date: '2018/8/9',
        type: 'download',
        value: 3880,
      },
      {
        date: '2018/8/9',
        type: 'register',
        value: 2956,
      },
      {
        date: '2018/8/9',
        type: 'bill',
        value: 488,
      },
      {
        date: '2018/8/10',
        type: 'download',
        value: 3606,
      },
      {
        date: '2018/8/10',
        type: 'register',
        value: 678,
      },
      {
        date: '2018/8/10',
        type: 'bill',
        value: 507,
      },
      {
        date: '2018/8/11',
        type: 'download',
        value: 4311,
      },
      {
        date: '2018/8/11',
        type: 'register',
        value: 3188,
      },
      {
        date: '2018/8/11',
        type: 'bill',
        value: 548,
      },
      {
        date: '2018/8/12',
        type: 'download',
        value: 4116,
      },
      {
        date: '2018/8/12',
        type: 'register',
        value: 3491,
      },
      {
        date: '2018/8/12',
        type: 'bill',
        value: 456,
      },
      {
        date: '2018/8/13',
        type: 'download',
        value: 6419,
      },
      {
        date: '2018/8/13',
        type: 'register',
        value: 2852,
      },
      {
        date: '2018/8/13',
        type: 'bill',
        value: 689,
      },
      {
        date: '2018/8/14',
        type: 'download',
        value: 1643,
      },
      {
        date: '2018/8/14',
        type: 'register',
        value: 4788,
      },
      {
        date: '2018/8/14',
        type: 'bill',
        value: 280,
      },
      {
        date: '2018/8/15',
        type: 'download',
        value: 445,
      },
      {
        date: '2018/8/15',
        type: 'register',
        value: 4319,
      },
      {
        date: '2018/8/15',
        type: 'bill',
        value: 176,
      },
    ];
    const config = {
      title: {
        visible: true,
        text: '多折线图',
      },
      description: {
        visible: true,
        text: '指定折线颜色',
      },
      padding: 'auto',
      forceFit: true,
      data,
      xField: 'date',
      yField: 'value',
      yAxis: {label: {formatter: (v) => `${v}`.replace(/\d{1,3}(?=(\d{3})+$)/g, (s) => `${s},`)}},
      legend: {position: 'right-top'},
      seriesField: 'type',
      color: ['#1979C9', '#D62A0D', '#FAA219'],
      responsive: true,
    };

    console.log(this.state.treeData);
    console.log(provinceData);
    
    onChange = value => {
      console.log("Change", getPath(value));
      this.setState({ value });
    };
  
    onSelect = value => {
      console.log("Select:", getPath(value));
    };
  
    return (

      <div>
        <Row>
          <Col flex={3}>
            <Line {...config} />
          </Col>

          <Col flex={2}>
            <Card title="监测变量显示" bordered={false} style={{ width: 300 ,height: 500}}>

              <Select defaultValue="配置1" style={{ width: 120 }} onChange={this.handleChange}>
                <Option value="1">配置1</Option>
                <Option value="2">配置2</Option>
                <Option value="3">配置3</Option>
                <Option value="4">配置4</Option>
                <Option value="5">配置5</Option>
                <Option value="6">配置6</Option>
              </Select>


              <TreeSelect
               // showSearch
                style={{ width: '100%' }}
                value={this.state.value}
              //  dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                placeholder="Please select"
                treeData={this.state.treeData}
                allowClear
                multiple
                treeDefaultExpandAll
                onChange={this.onChange}
              >

              </TreeSelect>
              onChange={this.onChange}
              onSelect={this.onSelect}
            {/* <Button onClick={this.onSubmit}>确定</Button> */}
           </Card>
          </Col>


        </Row>
      
      
      </div>

    );
  }
}







export default show_page;


