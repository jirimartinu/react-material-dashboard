import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import RouteWithLayout from './components/RouteWithLayout';

import Main from './layouts/Main/Main';
import Minimal from './layouts/Minimal/Minimal';

import Dashboard from './views/Dashboard/Dashboard';
import ProductList from './views/ProductList/ProductList';
import UserList from './views/UserList/UserList';
import Typography from './views/Typography';
import Icons from './views/Icons';
import Account from './views/Account/Account';
import Settings from './views/Settings/Settings';
import SignUp from './views/SignUp';
import SignIn from './views/SignIn';
import NotFound from './views/NotFound';

const Routes = () => {
  return (
    <Switch>
      <Redirect
        exact
        from="/"
        to="/dashboard"
      />
      <RouteWithLayout
        component={Dashboard}
        exact
        layout={Main}
        path="/dashboard"
      />
      <RouteWithLayout
        component={UserList}
        exact
        layout={Main}
        path="/users"
      />
      <RouteWithLayout
        component={ProductList}
        exact
        layout={Main}
        path="/products"
      />
      <RouteWithLayout
        component={Typography}
        exact
        layout={Main}
        path="/typography"
      />
      <RouteWithLayout
        component={Icons}
        exact
        layout={Main}
        path="/icons"
      />
      <RouteWithLayout
        component={Account}
        exact
        layout={Main}
        path="/account"
      />
      <RouteWithLayout
        component={Settings}
        exact
        layout={Main}
        path="/settings"
      />
      <RouteWithLayout
        component={SignUp}
        exact
        layout={Minimal}
        path="/sign-up"
      />
      <RouteWithLayout
        component={SignIn}
        exact
        layout={Minimal}
        path="/sign-in"
      />
      <RouteWithLayout
        component={NotFound}
        exact
        layout={Minimal}
        path="/not-found"
      />
      <Redirect to="/not-found" />
    </Switch>
  );
};

export default Routes;
