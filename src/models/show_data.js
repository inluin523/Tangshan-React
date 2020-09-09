//获取service
import * as dataService from '../services/show_data';

export default {
  namespace: 'show_data',
  state: {
  },

  effects: {
    *query({ payload }, { call, put }) {
      const rsp = yield call(dataService.query,payload);
      yield put({
        type: 'saveData',
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


  },
};
