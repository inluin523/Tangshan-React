// @ts-nocheck
import { Component } from 'react';
import { ApplyPluginsType } from 'umi';
import dva from 'dva';
// @ts-ignore
import createLoading from 'E:/antd_cms/node_modules/dva-loading/dist/index.esm.js';
import { plugin, history } from '../core/umiExports';

let app:any = null;

export function _onCreate(options = {}) {
  const runtimeDva = plugin.applyPlugins({
    key: 'dva',
    type: ApplyPluginsType.modify,
    initialValue: {},
  });
  app = dva({
    history,
    
    ...(runtimeDva.config || {}),
    // @ts-ignore
    ...(typeof window !== 'undefined' && window.g_useSSR ? { initialState: window.g_initialProps } : {}),
    ...(options || {}),
  });
  
  app.use(createLoading());
  
  (runtimeDva.plugins || []).forEach((plugin:any) => {
    app.use(plugin);
  });
  app.model({ namespace: 'first_settings', ...(require('E:/antd_cms/src/models/first_settings.js').default) });
app.model({ namespace: 'get_data', ...(require('E:/antd_cms/src/models/get_data.js').default) });
app.model({ namespace: 'get_settings', ...(require('E:/antd_cms/src/models/get_settings.js').default) });
app.model({ namespace: 'global', ...(require('E:/antd_cms/src/models/global.js').default) });
app.model({ namespace: 'login', ...(require('E:/antd_cms/src/models/login.js').default) });
app.model({ namespace: 'setting', ...(require('E:/antd_cms/src/models/setting.js').default) });
app.model({ namespace: 'show_data', ...(require('E:/antd_cms/src/models/show_data.js').default) });
app.model({ namespace: 'trdp', ...(require('E:/antd_cms/src/models/trdp.js').default) });
app.model({ namespace: 'user', ...(require('E:/antd_cms/src/models/user.js').default) });
app.model({ namespace: 'model', ...(require('E:/antd_cms/src/pages/account/center/model.js').default) });
app.model({ namespace: 'model', ...(require('E:/antd_cms/src/pages/account/settings/model.js').default) });
app.model({ namespace: 'model', ...(require('E:/antd_cms/src/pages/dashboard/analysis/model.js').default) });
app.model({ namespace: 'model', ...(require('E:/antd_cms/src/pages/dashboard/monitor/model.js').default) });
app.model({ namespace: 'model', ...(require('E:/antd_cms/src/pages/dashboard/workplace/model.js').default) });
app.model({ namespace: 'model', ...(require('E:/antd_cms/src/pages/form/advanced-form/model.js').default) });
app.model({ namespace: 'model', ...(require('E:/antd_cms/src/pages/form/basic-form/model.js').default) });
app.model({ namespace: 'model', ...(require('E:/antd_cms/src/pages/form/step-form/model.js').default) });
app.model({ namespace: 'model', ...(require('E:/antd_cms/src/pages/list/basic-list/model.js').default) });
app.model({ namespace: 'model', ...(require('E:/antd_cms/src/pages/list/card-list/model.js').default) });
app.model({ namespace: 'model', ...(require('E:/antd_cms/src/pages/list/search/applications/model.js').default) });
app.model({ namespace: 'model', ...(require('E:/antd_cms/src/pages/list/search/articles/model.js').default) });
app.model({ namespace: 'model', ...(require('E:/antd_cms/src/pages/list/search/projects/model.js').default) });
app.model({ namespace: 'model', ...(require('E:/antd_cms/src/pages/profile/advanced/model.js').default) });
app.model({ namespace: 'model', ...(require('E:/antd_cms/src/pages/profile/basic/model.js').default) });
app.model({ namespace: 'model', ...(require('E:/antd_cms/src/pages/user/login/model.js').default) });
app.model({ namespace: 'model', ...(require('E:/antd_cms/src/pages/user/register/model.js').default) });
  return app;
}

export function getApp() {
  return app;
}

export class _DvaContainer extends Component {
  constructor(props: any) {
    super(props);
    // run only in client, avoid override server _onCreate()
    if (typeof window !== 'undefined') {
      _onCreate();
    }
  }

  componentWillUnmount() {
    let app = getApp();
    app._models.forEach((model:any) => {
      app.unmodel(model.namespace);
    });
    app._models = [];
    try {
      // 释放 app，for gc
      // immer 场景 app 是 read-only 的，这里 try catch 一下
      app = null;
    } catch(e) {
      console.error(e);
    }
  }

  render() {
    const app = getApp();
    app.router(() => this.props.children);
    return app.start()();
  }
}
