//获取service
import * as trdpService from '../services/trdp';

export default {
  namespace: 'trdp',

  state: {

  },

  effects: {
    *query({ payload }, { call, put }) {
      const rsp = yield call(trdpService.query);
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
