import './LoginForm.css';

import React, { useContext, useEffect } from 'react';
import SawoLogin from 'sawo-react';

import { sawoConfig } from '../../app/api/api.config';
import { AppContext } from '../../app/app.context';
import { MapArea } from '../MapArea/MapArea';

export const LoginForm = () => {
  const { sawoLoginCallback, getPublicIP } = useContext(AppContext);
  useEffect(() => {
    getPublicIP({});
  }, []);
  return (
    <>
      <div className="form-background">
        <div className="form-container flex-center flex-column">
          <div className="header-text flex-center py-1">IP Address Tracker</div>
          <SawoLogin config={{ ...sawoConfig, onSuccess: sawoLoginCallback }} />
        </div>
        <div>
          <MapArea height="100vh" />
        </div>
      </div>
    </>
  );
};
