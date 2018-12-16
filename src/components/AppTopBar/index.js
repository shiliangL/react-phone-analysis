import React, { Component } from "react";
import { NavBar, Icon } from "antd-mobile";
import { withRouter } from "react-router-dom";

@withRouter
class AppTopBar extends Component {


  render() {
    const { title = "初始值", mode = "dark", history } = this.props;

    return (
      <NavBar
        mode={mode}
        icon={<Icon type="left" />}
        onLeftClick={() => history.goBack()}
        // rightContent={[
        //   <Icon key="0" type="search" style={{ marginRight: "16px" }} />,
        //   <Icon key="1" type="ellipsis" />
        // ]}
      >
        {title}
      </NavBar>
    );
  }
}

export default AppTopBar;