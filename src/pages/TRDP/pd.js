import { Table,Card} from 'antd';
import { PureComponent} from 'react';
import { connect } from 'dva';

//
const columns = [

  {
    title: '时间',
    dataIndex: 't_TIME',
  },
  {
    title: '源IP',
    dataIndex: 'ip_SRC',
  },
  {
    title:'目的IP',
    dataIndex:'ip_DST',
  },
  {
    title: '源端口',
    dataIndex: 'srcport',
  },
  {
    title: '目的端口',
    dataIndex: 'dstport',
  },

  {
    title:'ComID',
    dataIndex:'comid',
  },
];


const detailDiv = {
  width:'70%',
  marginLeft:'15%'
};

const CardHeard = {
  textAlign: 'center',
  width:'100%',
};

const gridStyle = {
  textAlign: 'center',
  width:'100%',
  height:'1px'
};
const gridStyle1 = {
  textAlign: 'center',
  width:'50%',
  height:'1px'
};

/*
const mapStateToProps= (state) => {
  const trdp_data=state['trdp'].data;
  return{
    trdp_data,
  };
};
*/
const mapStateToProps= (trdp) => {
  return trdp;
};


/*
@connect(=(state) => ({
  trdp,
 // loading: loading.models.trdp,
}))
*/

@connect(mapStateToProps)
class Pd extends PureComponent {

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'trdp/query',
    });
  }

  render() {
    //const { trdp:{data1} } = this.props 相当于 const trdp = this.props.trdp  && const data1 = trdp.data1;

      const {
        trdp: { data1 },

      } = this.props;
      return (
        <div>
          <Table
            columns={columns}
            expandedRowRender={record =>
              <div style={detailDiv}>
                <Card style={CardHeard} title="TRDP详细信息">
                  <Card.Grid style={gridStyle}>SequenceCounter:{record.seqcounter}</Card.Grid>
                  <Card.Grid style={gridStyle1}>ProtocolVersion:{record.pro_VERSION}</Card.Grid>
                  <Card.Grid style={gridStyle1}>MsgType:{record.type}</Card.Grid>
                  <Card.Grid style={gridStyle}>ComId:{record.comid}</Card.Grid>
                  <Card.Grid style={gridStyle}>etbTopoCnt:{record.etbtopocnt}</Card.Grid>
                  <Card.Grid style={gridStyle}>opTrnTopoCnt:{record.optrntopocnt}</Card.Grid>
                  <Card.Grid style={gridStyle}>DatasetLength:{record.dataset_LENGTH}</Card.Grid>
                  <Card.Grid style={gridStyle}>Reserved:{record.reserver}</Card.Grid>
                  <Card.Grid style={gridStyle}>ReplyComId:{record.reply_COMID}</Card.Grid>
                  <Card.Grid style={gridStyle}>ReplyIpAddress:{record.reply_IP}</Card.Grid>
                  <Card.Grid style={gridStyle}>HeaderFCS:{record.fcs_HEADER}</Card.Grid>
                  <Card.Grid style={gridStyle}>Dataset:{record.dataset}</Card.Grid>
                </Card>,
              </div>
            }
            dataSource={data1}/>
        </div>

      );

  }
}
  export default Pd;
