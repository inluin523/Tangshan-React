// @ts-nocheck
import { ApplyPluginsType, dynamic } from 'E:/antd_cms/node_modules/@umijs/runtime';
import { plugin } from './plugin';
import LoadingComponent from '@/components/PageLoading/index';

export function getRoutes() {
  const routes = [
  {
    "path": "/",
    "component": dynamic({ loader: () => import(/* webpackChunkName: 'layouts__BlankLayout' */'E:/antd_cms/src/layouts/BlankLayout'), loading: LoadingComponent}),
    "routes": [
      {
        "path": "/user",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'layouts__UserLayout' */'E:/antd_cms/src/layouts/UserLayout'), loading: LoadingComponent}),
        "routes": [
          {
            "path": "/user",
            "redirect": "/user/login",
            "exact": true
          },
          {
            "name": "login",
            "icon": "smile",
            "path": "/user/login",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__user__login' */'E:/antd_cms/src/pages/user/login'), loading: LoadingComponent}),
            "exact": true
          },
          {
            "name": "register-result",
            "icon": "smile",
            "path": "/user/register-result",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__user__register-result' */'E:/antd_cms/src/pages/user/register-result'), loading: LoadingComponent}),
            "exact": true
          },
          {
            "name": "register",
            "icon": "smile",
            "path": "/user/register",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__user__register' */'E:/antd_cms/src/pages/user/register'), loading: LoadingComponent}),
            "exact": true
          },
          {
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__404' */'E:/antd_cms/src/pages/404'), loading: LoadingComponent}),
            "exact": true
          }
        ]
      },
      {
        "path": "/",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'layouts__BasicLayout' */'E:/antd_cms/src/layouts/BasicLayout'), loading: LoadingComponent}),
        "Routes": [
          "src/pages/Authorized"
        ],
        "authority": [
          "admin",
          "user"
        ],
        "routes": [
          {
            "path": "/",
            "redirect": "/get_data",
            "exact": true
          },
          {
            "name": "流量采集",
            "icon": "dashboard",
            "path": "/get_data",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__TRDP__get_data' */'E:/antd_cms/src/pages/TRDP/get_data'), loading: LoadingComponent}),
            "exact": true
          },
          {
            "name": "trdp协议",
            "icon": "flag",
            "path": "/trdp",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__TRDP__pd' */'E:/antd_cms/src/pages/TRDP/pd'), loading: LoadingComponent}),
            "exact": true
          },
          {
            "name": "数据展示",
            "icon": "dashboard",
            "path": "/data_show",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__TRDP__data_show' */'E:/antd_cms/src/pages/TRDP/data_show'), loading: LoadingComponent}),
            "exact": true
          },
          {
            "name": "模拟数据图表展示",
            "icon": "dashboard",
            "path": "/show_data",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__TRDP__show' */'E:/antd_cms/src/pages/TRDP/show'), loading: LoadingComponent}),
            "exact": true
          },
          {
            "name": "echats测试",
            "icon": "dashboard",
            "path": "/echarts",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__TRDP__echarts' */'E:/antd_cms/src/pages/TRDP/echarts'), loading: LoadingComponent}),
            "exact": true
          },
          {
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__404' */'E:/antd_cms/src/pages/404'), loading: LoadingComponent}),
            "exact": true
          }
        ]
      }
    ]
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
