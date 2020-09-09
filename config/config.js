// https://umijs.org/config/
import { defineConfig } from 'umi';
import defaultSettings from './defaultSettings';
//import proxy from './proxy';

const { REACT_APP_ENV } = process.env;
export default defineConfig({
  hash: true,
  antd: {},
  dva: {
    hmr: true,
  },
  locale: {
    // default zh-CN
    default: 'zh-CN',
    // default true, when it is true, will use `navigator.language` overwrite default
    antd: true,
    baseNavigator: true,
  },
  dynamicImport: {
    loading: '@/components/PageLoading/index',
  },
  targets: {
    ie: 11,
  },
  // umi routes: https://umijs.org/docs/routing

      //展示主界面是trdp列表页
      routes: [
        {
          path: '/',
          component: '../layouts/BlankLayout',
          routes: [
            //user页面 路由
            {
              path: '/user',
              component: '../layouts/UserLayout',
              routes: [
                //新增路由

                {
                  path: '/user',
                  redirect: '/user/login',
                },
                {
                  name: 'login',
                  icon: 'smile',
                  path: '/user/login',
                  component: './user/login',
                },
                {
                  name: 'register-result',
                  icon: 'smile',
                  path: '/user/register-result',
                  component: './user/register-result',
                },
                {
                  name: 'register',
                  icon: 'smile',
                  path: '/user/register',
                  component: './user/register',
                },
                {
                  component: '404',
                },
              ],
            },

            {
              path: '/',
              component: '../layouts/BasicLayout',
              Routes: ['src/pages/Authorized'],
              authority: ['admin', 'user'],
              routes: [
                { path: '/', redirect: '/get_data' },


                //流量采集页面
                {
                  name:'流量采集',
                  icon:'dashboard',
                  path:'/get_data',
                  component: './TRDP/get_data'
                },
                {
                  name: 'trdp协议',
                  icon: 'flag',
                  path: '/trdp',
                  component: './TRDP/pd',
                },

                {
                  name:'数据展示',
                  icon:'dashboard',
                  path:'/data_show',
                  component: './TRDP/data_show'
                },

                {
                  name:'模拟数据图表展示',
                  icon:'dashboard',
                  path:'/show_data',
                  component: './TRDP/show'
                },

                {
                  name:'echats测试',
                  icon:'dashboard',
                  path:'/echarts',
                  component: './TRDP/echarts'
                },

                {
                  component: '404',
                },
              ]
            },

 /*
            {
              path: '/',
              component: '../layouts/BasicLayout',
              Routes: ['src/pages/Authorized'],
              authority: ['admin', 'user'],
              routes: [
                {
                  path: '/',
                  redirect: '/dashboard/analysis',
                },
                {
                  path: '/dashboard',
                  name: 'dashboard',
                  icon: 'dashboard',
                  routes: [
                    {
                      name: 'analysis',
                      icon: 'smile',
                      path: '/dashboard/analysis',
                      component: './dashboard/analysis',
                    },
                    {
                      name: 'monitor',
                      icon: 'smile',
                      path: '/dashboard/monitor',
                      component: './dashboard/monitor',
                    },
                    {
                      name: 'workplace',
                      icon: 'smile',
                      path: '/dashboard/workplace',
                      component: './dashboard/workplace',
                    },
                  ],
                },
                {
                  path: '/form',
                  icon: 'form',
                  name: 'form',
                  routes: [
                    {
                      name: 'basic-form',
                      icon: 'smile',
                      path: '/form/basic-form',
                      component: './form/basic-form',
                    },
                    {
                      name: 'step-form',
                      icon: 'smile',
                      path: '/form/step-form',
                      component: './form/step-form',
                    },
                    {
                      name: 'advanced-form',
                      icon: 'smile',
                      path: '/form/advanced-form',
                      component: './form/advanced-form',
                    },
                  ],
                },
                {
                  path: '/list',
                  icon: 'table',
                  name: 'list',
                  routes: [
                    {
                      path: '/list/search',
                      name: 'search-list',
                      component: './list/search',
                      routes: [
                        {
                          path: '/list/search',
                          redirect: '/list/search/articles',
                        },
                        {
                          name: 'articles',
                          icon: 'smile',
                          path: '/list/search/articles',
                          component: './list/search/articles',
                        },
                        {
                          name: 'projects',
                          icon: 'smile',
                          path: '/list/search/projects',
                          component: './list/search/projects',
                        },
                        {
                          name: 'applications',
                          icon: 'smile',
                          path: '/list/search/applications',
                          component: './list/search/applications',
                        },
                      ],
                    },
                    {
                      name: 'table-list',
                      icon: 'smile',
                      path: '/list/table-list',
                      component: './list/table-list',
                    },
                    {
                      name: 'basic-list',
                      icon: 'smile',
                      path: '/list/basic-list',
                      component: './list/basic-list',
                    },
                    {
                      name: 'card-list',
                      icon: 'smile',
                      path: '/list/card-list',
                      component: './list/card-list',
                    },
                  ],
                },
                {
                  path: '/profile',
                  name: 'profile',
                  icon: 'profile',
                  routes: [
                    {
                      name: 'basic',
                      icon: 'smile',
                      path: '/profile/basic',
                      component: './profile/basic',
                    },
                    {
                      name: 'advanced',
                      icon: 'smile',
                      path: '/profile/advanced',
                      component: './profile/advanced',
                    },
                  ],
                },
                {
                  name: 'result',
                  icon: 'CheckCircleOutlined',
                  path: '/result',
                  routes: [
                    {
                      name: 'success',
                      icon: 'smile',
                      path: '/result/success',
                      component: './result/success',
                    },
                    {
                      name: 'fail',
                      icon: 'smile',
                      path: '/result/fail',
                      component: './result/fail',
                    },
                  ],
                },
                {
                  name: 'exception',
                  icon: 'warning',
                  path: '/exception',
                  routes: [
                    {
                      name: '403',
                      icon: 'smile',
                      path: '/exception/403',
                      component: './exception/403',
                    },
                    {
                      name: '404',
                      icon: 'smile',
                      path: '/exception/404',
                      component: './exception/404',
                    },
                    {
                      name: '500',
                      icon: 'smile',
                      path: '/exception/500',
                      component: './exception/500',
                    },
                  ],
                },
                {
                  name: 'account',
                  icon: 'user',
                  path: '/account',
                  routes: [
                    {
                      name: 'center',
                      icon: 'smile',
                      path: '/account/center',
                      component: './account/center',
                    },
                    {
                      name: 'settings',
                      icon: 'smile',
                      path: '/account/settings',
                      component: './account/settings',
                    },
                  ],
                },
                {
                  name: 'editor',
                  icon: 'highlight',
                  path: '/editor',
                  routes: [
                    {
                      name: 'flow',
                      icon: 'smile',
                      path: '/editor/flow',
                      component: './editor/flow',
                    },
                    {
                      name: 'mind',
                      icon: 'smile',
                      path: '/editor/mind',
                      component: './editor/mind',
                    },
                    {
                      name: 'koni',
                      icon: 'smile',
                      path: '/editor/koni',
                      component: './editor/koni',
                    },
                  ],
                },
                {
                  component: '404',
                },
              ],
            },
*/
          ],
        },
      ],


/*
        [
        { path: '/', redirect: '/trdp' },

        {
          name:'comid展示',
          icon:'dashboard',
          path:'/load_data',
          component: './TRDP/load_data'
        },
        //流量采集页面
        {
          name:'流量采集',
          icon:'dashboard',
          path:'/get_data',
          component: './TRDP/get_data'
        },
        {
          name: 'trdp',
          icon: 'flag',
          path: '/trdp',
          component: './TRDP/pd',
        },
        {
          component: '404',
        },

      ],
    },
  ],
*/
  // Theme for antd: https://ant.design/docs/react/customize-theme-cn
  theme: {
    // ...darkTheme,
    'primary-color': defaultSettings.primaryColor,
  },
  // @ts-ignore
  title: false,
  ignoreMomentLocale: true,
  proxy: {
    '/api': {
      target: 'http://localhost:8081',
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    },
  },
  manifest: {
    basePath: '/',
  },
});
