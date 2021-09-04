import './LoginForm.css';

import React, { useContext } from 'react';
import SawoLogin from 'sawo-react';

import { sawoConfig } from '../../app/api/api.config';
import { AppContext } from '../../app/app.context';

export const LoginForm = (props) => {
  const { sawoLoginCallback } = useContext(AppContext);
  return (
    <>
      <div className="form-background">
        <div className="header-text py-1">IP Address Tracker</div>
        <div className="form-container flex-center">
          <SawoLogin config={{ ...sawoConfig, onSuccess: sawoLoginCallback }} />
        </div>
      </div>
    </>
  );
};
