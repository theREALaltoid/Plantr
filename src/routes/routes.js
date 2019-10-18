import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/home';
import signin from '../pages/signin';
import aboutus from '../pages/aboutus';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/signin" component={signin} />
    <Route path="/aboutus" component={aboutus} />
  </Switch>
);

export default Routes;
