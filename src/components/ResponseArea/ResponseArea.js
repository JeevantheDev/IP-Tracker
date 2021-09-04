import './ResponseArea.css';

import React, { useContext } from 'react';

import { AppContext } from '../../app/app.context';
import { SERVICES } from '../../app/constant';

export const ResponseArea = () => {
  const {
    ipState: [ipConfig],
    loadingState: [isLoading],
  } = useContext(AppContext);

  return (
    <div className="responseContainer">
      {SERVICES.map((service, idx) => (
        <React.Fragment key={idx}>
          <div className="service-box">
            <p className="service-title">{service.label}</p>
            <p className="service-value">{!isLoading ? ipConfig[service.key.toLowerCase()] : '...'}</p>
          </div>
          <hr />
        </React.Fragment>
      ))}
    </div>
  );
};
