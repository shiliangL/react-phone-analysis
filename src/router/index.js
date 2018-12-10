import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from "react-router-dom";
import { Login, Register, Home, Setting } from "@/views";
import AuthRoute from "@/components/AuthRoute";


class RoutePage extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="RoutePage">
          <AuthRoute />
          <Switch>
            <Route component={Home} >
              {/* <Route component={Home} /> */}
            </Route>
            <Route exact path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/setting" component={Setting} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default RoutePage;
