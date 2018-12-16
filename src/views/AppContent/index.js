// 设计整个应用框架的路由切换展示渲染
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { NavBar } from "antd-mobile";

import NavTabBar from "@/components/NavTabBar";
import { ListPage, UserInfo, Contact, IndexList } from "@/views";

@withRouter
class AppContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "首页"
    };
  }
  render() {
    const { title } = this.state;
    const navLists = [
      {
        title: "首页",
        path: "/",
        icon: "",
        class: "iconfont icon-shouye",
        selectedClass: "iconfont icon-shouye",
        isHide: "",
        component: IndexList
      },
      {
        title: "列表",
        path: "/list",
        icon: "",
        class: "iconfont icon-yanchurili",
        selectedClass: "iconfont icon-yanchurili",
        isHide: "",
        component: ListPage
      },
      {
        title: "信息",
        path: "/contact",
        icon: "",
        class: "iconfont icon-pingjia",
        selectedClass: "iconfont icon-pingjia",
        isHide: "",
        component: Contact
      },
      {
        title: "我的",
        path: "/my",
        icon: "",
        class: "iconfont icon-wode",
        selectedClass: "iconfont icon-wode",
        isHide: "",
        component: UserInfo
      }
    ];

    return (
      <div style={{ height: "100%" }}>
        <NavBar mode="dark"> {title} </NavBar>
        <div className="route-content" style={{ marginTop: "" }}>
          {this.props.children}
        </div>
        <NavTabBar
          onClick={item => {
            this.props.history.push(item.path);
            this.setState({ title: item.title });
          }}
          data={navLists}
        />
      </div>
    );
  }
}
export default AppContent;
// this.props.history.push(path);
