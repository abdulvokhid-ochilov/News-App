import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import MainLayout from "./HOC/mainLayout";
import Home from "./components/home/index";
import Header from "./components/header";

const Routes = () => (
  <BrowserRouter>
    <Header />
    <MainLayout>
      <Switch>
        <Route component={Home} path="/"></Route>
      </Switch>
    </MainLayout>
  </BrowserRouter>
);

export default Routes;
