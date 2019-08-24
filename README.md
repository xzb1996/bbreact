# 技术站
- `react-router-dom` 
- `redux`
- `react-redux` 
- `redux-thunk`
- `redux-actions`
- `高阶组件`
- `styled-components` css模块化
- `react-loadable` 路由的懒加载
- `whatwg-fetch` 数据请求

```javascript
yarn add react-router-dom redux react-redux redux-thunk redux-actions styled-components 
react-loadable whatwg-fetch
```


# 环境配置
- `craete-react-app` 创建项目
- `react-app-rewired && customize-cra` 对create-react-app的扩展配置
- `babel-plugin-import` 按需加载
- `http-proxy-middleware` 进行服务器代理跨域

```javascript
yarn add react-app-rewired customize-cra babel-plugin-import http-proxy-middleware --dev
```







# 思路（每日完成事项）
1、 全局安装 
        craete-react-app
    创建项目
        craete-react-app '项目名'
    安装常用的插件
        见上面
    高级配置
        将package.json中的react-scripts换成react-app-rewired
        然后在项目根目录创建一个config-overrides.js 用于修改默认配置
    配置路由文件
        在src下创建setupProxy.js文件
2、 路由配置

