import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./pages/home";
import ProfilePage from "./pages/profile";
import Login from "./pages/login";

const routes = (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/profile" component={ProfilePage} />
    </Switch>
    <Route path="/" component={Login} />
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById("root"));
