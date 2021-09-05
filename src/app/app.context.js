import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { GEO_API_PATH } from './api/api.config';
import { VALIDATION } from './constant';

export const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [isAuthenticating, setIsAuthenticating] = useState(true);
  const [ipConfig, setIpConfig] = useState({
    ip: 0.0,
    location: 0.0,
    timezone: '',
    isp: '',
    lat: '',
    lng: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errorRes, setErrorRes] = useState('');
  const [userInfo, setUserInfo] = useState(
    localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo') || '{}') : {},
  );

  const sawoLoginCallback = (payload) => {
    setUserInfo(payload);
  };

  const userRedirect = () => {
    setIsAuthenticating(false);
    return userInfo.verification_token ? true : false;
  };

  const logout = () => {
    localStorage.clear();
    setUserInfo({});
    setIsAuthenticating(false);
  };

  const getPublicIP = async (reqObj) => {
    setErrorRes('');
    setIsLoading(true);
    const BY_IP_ADDRESS = reqObj['ipAddress'] ? `&ipAddress=${reqObj['ipAddress']}` : '';
    const BY_DOMAIN = reqObj['domain'] ? `&domain=${reqObj['domain']}` : '';
    try {
      const res = await axios.get(GEO_API_PATH + BY_IP_ADDRESS + BY_DOMAIN);
      setIpConfig({
        ip: res.data.ip ? res.data.ip : '',
        location: res.data.location
          ? res.data.location.city + ',' + res.data.location.country + ',' + res.data.location.postalCode
          : '',
        lat: res.data.location ? res.data.location.lat : '',
        lng: res.data.location ? res.data.location.lng : '',
        isp: res.data.isp ? res.data.isp : '',
        timezone: res.data.location ? res.data.location.timezone : '',
      });
      setErrorRes(res.data.messages ? res.data.messages : '');
    } catch (error) {
      setErrorRes(error.message || VALIDATION.SOMETHING_WRONG);
    }
    setIsLoading(false);
  };

  return (
    <AppContext.Provider
      value={{
        authLoadingState: [isAuthenticating],
        loadingState: [isLoading, setIsLoading],
        userState: [userInfo, setUserInfo],
        ipState: [ipConfig],
        errorState: [errorRes, setErrorRes],
        getPublicIP,
        sawoLoginCallback,
        userRedirect,
        logout,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
