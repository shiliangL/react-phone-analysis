import { WingBlank, WhiteSpace } from 'antd-mobile'
import React, { Component } from 'react'

export default class PageBlank extends Component {
  render() {

    const { size, children} = this.props
    return (
      <WingBlank size={size}>
        <WhiteSpace size={size} />
        { children }
        <WhiteSpace size={size} />
      </WingBlank>
    )
  }
}
