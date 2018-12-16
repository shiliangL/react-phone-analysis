import React, { Component } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import {
  Login,
  Register,
  Setting,
  AppContent,
  ListPage,
  UserInfo,
  Contact,
  IndexList
} from "@/views";
import {
  Complete,
  HotClass,
  HotRanking,
  HotSales,
  HotTags,
  Proportion
} from "@/views/HomeView";

const routes = [
  { path: "/login", component: Login },
  { path: "/register", component: Register },
  { path: "/setting", component: Setting },
  { path: "/hotClass", component: HotClass },
  { path: "/hotRanking", component: HotRanking },
  { path: "/proportion", component: Proportion },
  { path: "/hotSales", component: HotSales },
  { path: "/complete", component: Complete },
  { path: "/hotTags", component: HotTags }
];

// import AuthRoute from "@/components/AuthRoute";

class RoutePage extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="RoutePage">
          {/* <AuthRoute  exact/> 路由校验 */}
          <Switch>
            {routes.map(item => {
              return (
                <Route
                  key={item.path}
                  path={`${item.path}`}
                  component={item.component}
                />
              );
            })}
            <AppContent>
              <Route exact path="/" component={IndexList} />
              <Route path="/list" component={ListPage} />
              <Route path="/contact" component={Contact} />
              <Route path="/my" component={UserInfo} />
            </AppContent>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default RoutePage;
