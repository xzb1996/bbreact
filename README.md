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
- `qs` 
- `better-scroll`

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
### 1、 环境配置
    全局安装 
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
### 2、 路由配置
在store中配置好react-redux
在pages中添加各个页面
在App.js中引入路由和redux，同时配置路由
使用路由懒加载：
- 在common中创建loading
- 在pages下创建index.js文件,配置路由懒加载
- 在router中配置路径
- 在component中写tabBar
- #### 在App中配置路由(----不太懂----)
- 在common-->baseRoute对router进行二次封装  - 不太懂
- 在layout中对tarBar进行布局（判断tarBar是否存在） -
- 在conmon中添加权限验证布局   -
- 在utlis中对fetch进行封装  + 完成
- 在api中处理接口 + 完成

### 3、页面渲染
- chioce页面进行静态布局+数据渲染
- goods详情页进行静态布局+数据渲染
- shoppingcart 未登录状态静态布局
- 登录页面的静态布局

# GitHub使用
### 创建自己的仓库
- `git init` 初始化仓库
- `git status` 查看git仓库是否有文件未提交
- `git add .` 
- `git commit -m "备注" `
- `git remote add origin https://github.com/xzb1996/bbreact.git` 连接远程仓库
- `git push -u origin master` 将主分支push到线上（新建的远程仓库是空的，需要加上-u这个参数）


### 拉取他人的仓库
- `git init` 初始化仓库
- `git remote add origin git@github.com:XXXX/nothing2.git` 与你要的远程仓库连接
- `git fetch origin dev` 拉取远程仓库，dev为你要拉取的分支
- `git checkout -b dev` 在拉取仓库之前你要先创建并切换到自己的分支
- `git pull origin dev` 把某个分支的内容拉取到本地 




