react 的移动手机报表
"proxy": "http://localhost:3001",

怎么同步的修改 redux 的 state 的值

```
//直接定义纯函数触发
export const setLoginStatus = isLogin => {
  return { type: "SET_LOGIN_STATUS", isLogin}
};

```
