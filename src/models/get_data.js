//获取service
import * as trdpService from '../services/get_data';

export default {
  namespace: 'get_data',

  state: {
    //data: [],
  },

  effects: {
    *query({ payload }, { call, put }) {
      console.log(payload);
      const rsp = yield call(trdpService.query,payload);
      yield put({
        type: 'saveData',
        payload: rsp,
      });
    },

    *query_port({ payload }, { call, put }) {
      const rsp = yield call(trdpService.query_port,payload);
  //    console.log(rsp);
      yield put({
        type: 'savePort',
        payload: rsp,
      });
    },
  },

  reducers: {
    saveData(state, action) {
//      console.log(action);
      return {
      //  state,
        finishstate: action.payload,
      };
    },

    savePort(state, action) {
//      console.log(action);
      return {
        //  state,
        port: action.payload,
      };
    },

  },
};
