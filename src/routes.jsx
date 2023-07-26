import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./containers/home"
import Orders from './containers/orders'
function Routes() {
  return <Router>
    <Switch>
    <Route exact path="/" component={Home} />
        <Route exact path="/orders" component={Orders} />
    </Switch>

  </Router>;
}

export default Routes;
