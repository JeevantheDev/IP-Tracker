import './utils/utils.css';

import React, { Suspense, useContext, useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { AppContext } from './app.context';
import { PrivateRoutes } from './routes/PrivateRoutes';
import { PublicRoutes } from './routes/PublicRoutes';

function App() {
  const {
    authLoadingState: [isAuthenticating],
    userState: [userInfo],
    userRedirect,
    logout,
  } = useContext(AppContext);

  const [isUserValid, setIsUserValid] = useState(false);

  useEffect(() => {
    if (userInfo.verification_token) localStorage.setItem('userInfo', JSON.stringify(userInfo));
    setIsUserValid(!!userInfo.verification_token);
  }, [userInfo]);

  useEffect(() => {
    if (userInfo.verification_token && userInfo.identifier) {
      setIsUserValid(userRedirect());
    } else {
      logout();
    }
  }, []);

  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="overflow-hide">
          {isAuthenticating ? (
            <div>Let me authenticate you...</div>
          ) : isUserValid ? (
            <PrivateRoutes />
          ) : (
            <PublicRoutes />
          )}
        </div>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
