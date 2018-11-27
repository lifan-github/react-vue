This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## 技术栈介绍
****
react-router-dom@4处理路由，UI库使用antd，react-redux统一管理数据流，redux-saga管理异步调用，axios处理网络请求, redux-logger数据流日志打印

## 路由守卫（src/containers/router）简介
####（一）、
1、已登录情况下，用户浏览器输入的路由存在的情况：
    a、===需要权限校验的页面（即不可以给用户看到的）==> 校验正确后跳转至该页面
    b、===不需要权限校验的页面 ===> 直接跳转至该页面
2、已登录情况下，用户浏览器输入的路由找不到的页面情况：
    a、===直接跳转至404页面

#### （二）、
1、没有登录的情况，用户输入存在的页面路由：
      a、当路由合法时且需要权限校验时，跳转到登陆页面，要求登陆
      b、路由不合法时，重定向至 404



