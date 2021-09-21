import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Home from "./components/home/index";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route component={Home} path="/"></Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
