//获取service
import * as trdpService from '../services/first_settings';

export default {
  namespace: 'first_settings',

  state: {

  },

  effects: {
    *query10ff({ payload }, { call, put }) {
      const rsp = yield call(trdpService.query10ff);
      yield put({
        type: 'saveData',
        payload: rsp,
      });
    },

    *query1191({ payload }, { call, put }) {
      const rsp = yield call(trdpService.query1191);
      yield put({
        type: 'saveData',
        payload: rsp,
      });
    },

    *query2191({ payload }, { call, put }) {
      const rsp = yield call(trdpService.query2191);
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
        first: action.payload,
      };
    },
  },
};
