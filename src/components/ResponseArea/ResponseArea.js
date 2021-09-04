import React, { useContext } from 'react';
import { AppContext } from '../../app/app.context';

import './ResponseArea.css';

export const ResponseArea = (props) => {
  const {
    ipState: [ipConfig],
    loadingState: [isLoading],
  } = useContext(AppContext);
  return (
    <div className="responseContainer">
      <div className="service-box">
        <p className="service-title">IP ADDRESS</p>
        <p className="service-value">{!isLoading ? ipConfig.ip : '...'}</p>
      </div>
      <hr />
      <div className="service-box">
        <p className="service-title">LOCATION</p>
        <p className="service-value">{!isLoading ? ipConfig.location : '...'}</p>
      </div>
      <hr />
      <div className="service-box">
        <p className="service-title">TIMEZONE</p>
        <p className="service-value">{!isLoading ? ipConfig.timezone : '...'}</p>
      </div>
      <hr />
      <div className="service-box">
        <p className="service-title">ISP</p>
        <p className="service-value">{!isLoading ? ipConfig.isp : '...'}</p>
      </div>
    </div>
  );
};
