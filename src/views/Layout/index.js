

import React, { Component } from 'react';
import { ListPage, UserInfo, Contact, IndexList } from "@/views";
import { Route, Switch, Redirect} from "react-router-dom";
import { NavBar, Icon } from 'antd-mobile';
import NavTabBar from '@/components/NavTabBar';

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: "redTab",
      open: false
    };
  }

  componentDidMount() {
    console.log(this.props);
  }

  clickEllipsis = e => {
    this.props.history.push("/setting");
  };

  render() {
    const { location } = this.props;
    const navLists = [
      {
        title: "首页",
        path: "/index",
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
        <NavBar
          mode="dark"
          rightContent={
            location.pathname === "/my"
              ? [<Icon key="1" onClick={this.clickEllipsis} type="ellipsis" />]
              : []
          }
        >
          {location.pathname === "/"
            ? "首页"
            : navLists.find(item => item.path === location.pathname)
            ? navLists.find(item => item.path === location.pathname).title
            : null}
        </NavBar>

        <div className="route-content" style={{ marginTop: "" }}>
          <Switch>
            {location.pathname === '/' ? <Redirect to='/index' /> : null}
            {navLists.map(item => {
              return (
                <Route
                  key={item.path}
                  path={`${item.path}`}
                  component={item.component}
                />
              );
            })}

          </Switch>
        </div>
        <NavTabBar data={navLists} />
      </div>
    );
  }
}

export default Layout;
