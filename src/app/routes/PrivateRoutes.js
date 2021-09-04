import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import MapScreen from '../../screens/mapScreen/mapScreen';
import { APPLICATION_ROUTES } from './ApplicationRoutes';

export const PrivateRoutes = () => {
  return (
    <Switch>
      <Redirect exact from={APPLICATION_ROUTES.TRACKER} to={APPLICATION_ROUTES.TRACKER_MAP_AREA} />
      <Route exact path={APPLICATION_ROUTES.TRACKER_MAP_AREA} component={MapScreen} />
      <Redirect to={APPLICATION_ROUTES.TRACKER_MAP_AREA} />
    </Switch>
  );
};
