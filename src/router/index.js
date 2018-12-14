import React, { Component } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import { Login, Register, Layout, Setting } from "@/views";
import {
  Complete,
  HotClass,
  HotRanking,
  HotSales,
  HotTags,
  Proportion
} from "@/views/HomeView";

// import AuthRoute from "@/components/AuthRoute";

class RoutePage extends Component {
  render() {
    return <BrowserRouter>
        <div className="RoutePage">
          {/* <AuthRoute  exact/> */}
          <Switch>
            <Layout exact>
              {/* <Route path="HotClass" component={HotClass} /> */}
            </Layout>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/setting" component={Setting} />
            <Route path="/hotClass" component={HotClass} />
          </Switch>
        </div>
      </BrowserRouter>;
  }
}

export default RoutePage;
