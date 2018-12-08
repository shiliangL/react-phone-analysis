import React, { Component } from 'react'
import { Icon, NavBar, Button } from "antd-mobile";
import PageBlank from '@/components/PageBlank';
import Cookies from 'js-cookie'

export default class Setting extends Component {

  clickBack = () => {
    this.props.history.goBack(-1)
  }

  clickLogout = ()=>{
    Cookies.remove('userid')
    setTimeout(() => {
      this.props.history.push('/login')
    }, 200);
  }


  render() {

    
    return (
      <div>
        <NavBar mode="dark" icon={[<Icon key="1" style={{ marginLeft: '-10px' }} type="left" onClick={this.clickBack}></Icon>]} >设置</NavBar>
        <PageBlank>
          设置页面
          <Button type="primary" onClick={this.clickLogout}>退出</Button>
        </PageBlank>
      </div>
    )
  }
}
