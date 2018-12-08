

import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import { List, InputItem, Flex, Button, Toast } from 'antd-mobile';
import { connect } from 'react-redux';
import { userLogin, setLoginStatus } from "@/redux/user_redux";

@connect(
  (state) => (state.user),
  {
    userLogin, setLoginStatus
  }
)
class Login extends Component {

  toRegister = () => {
    this.props.history.push('/register')
  }

  toLogin = () => {
    if (!this.InputItemName.state.value) {
      Toast.info('请输入用户名');
      return
    }
    if (!this.InputItemKey.state.value) {
      Toast.info("请输入手机");
      return;
    }
    const { userLogin, history, isLogin, setLoginStatus } = this.props
    const data = {
      name: this.InputItemName.state.value,
      key: this.InputItemKey.state.value,
    }
    console.log(this.props.store,'sb');
    setLoginStatus(true)
    history.push("/");
    // userLogin( data )
  }

  render() {
    const { redirectTo } = this.props
    return (
      <div className="front-page">
        <div className="front-content">
          {/* 登录成功调到首页 */}
          {redirectTo ? <Redirect to={redirectTo} /> : null}
        <List renderHeader={() => '欢迎光临'}>
          <InputItem ref={el => this.InputItemName = el } placeholder="">
            名称
          </InputItem>
          <InputItem ref={el => this.InputItemKey = el}  placeholder="">
            密码
          </InputItem>
        </List>

        <Flex style={{ marginTop: '10px' }}>
          <Flex.Item>
            <Button size="small" type="primary" onClick={this.toLogin}>登录</Button>
          </Flex.Item>
          <Flex.Item>
            <Button size="small" onClick={this.toRegister}>注册</Button>
          </Flex.Item>
        </Flex>
        </div>
      </div>
    );
  }
}

export default Login;
