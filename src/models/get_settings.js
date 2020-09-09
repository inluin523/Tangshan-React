//获取service
import * as trdpService from '../services/get_settings';

export default {
  namespace: 'get_settings',

  state: {

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
  },

  reducers: {
    saveData(state, action) {
      return {
        state,
        data1: action.payload,
      };
    },
  },
};
