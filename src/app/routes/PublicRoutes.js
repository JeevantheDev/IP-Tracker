import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import HomeScreen from '../../screens/homeScreen/homeScreen';
import { APPLICATION_ROUTES } from './ApplicationRoutes';

export const PublicRoutes = () => {
  return (
    <Switch>
      <Route exact path={APPLICATION_ROUTES.HOME} component={HomeScreen} />
      <Redirect to={APPLICATION_ROUTES.HOME} />
    </Switch>
  );
};
