react 的移动手机报表


#### 项目中遇到的问题
- 如果批量使用本地资源文件
- 如何使用scss预编译
- 如果使用字体图标
- 怎么嵌套路由,实现页面层级跳转
- 权限路由怎么定义

"proxy": "http://localhost:3001",

怎么同步的修改 redux 的 state 的值

```
//直接定义纯函数触发
export const setLoginStatus = isLogin => {
  return { type: "SET_LOGIN_STATUS", isLogin}
};

```


#### react-router4
Switch 只渲染命中的第一个路由
