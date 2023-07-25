import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./containers/home"
import Orders from './containers/orders'
function Routes() {
  return <Router>
        <Route path="/" component={Home}/>
        <Route path="/orders" component={Orders}/>
  </Router>;
}

export default Routes;
