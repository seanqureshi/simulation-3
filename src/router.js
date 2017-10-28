import React from "react";
import { Switch, Route } from "react-router-dom";

import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/Login/Login';
import Profile from './components/Profile/Profile';
import Search from './components/Search/Search';

export default (
  <Switch>
    <Route component={ Login } path="/" exact />
    <Route component={ Dashboard } path="/dashboard" />
    <Route component={ Profile } path="/profile" />
    <Route component={ Search } path="/search/:page" />
  </Switch>
)