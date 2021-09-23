import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import MainLayout from "./HOC/mainLayout";
import Home from "./components/home/index";
import Header from "./components/header";
import Contact from "./components/contact/contact";
import PostComp from "./components/posts/postComp";

const Routes = () => (
  <BrowserRouter>
    <Header />
    <MainLayout>
      <Switch>
        <Route component={PostComp} path="/article/:id"></Route>
        <Route component={Contact} path="/contact"></Route>
        <Route component={Home} path="/"></Route>
      </Switch>
    </MainLayout>
  </BrowserRouter>
);

export default Routes;
