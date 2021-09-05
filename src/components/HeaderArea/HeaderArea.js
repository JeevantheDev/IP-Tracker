import './HeaderArea.css';

import React, { useContext, useEffect, useState } from 'react';

import { AppContext } from '../../app/app.context';
import { VALIDATION } from '../../app/constant';
import ArrowIcon from '../../assets/icons/icon-arrow.svg';
import LogoutIcon from '../../assets/icons/icon-logout.svg';
import { ResponseArea } from '../ResponseArea/ResponseArea';

const ipRegex =
  /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
const domainRegex = /[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+/;

export const HeaderArea = () => {
  const {
    userState: [userInfo],
    ipState: [ipConfig],
    loadingState: [isLoading],
    errorState: [errorRes, setErrorRes],
    getPublicIP,
    logout,
  } = useContext(AppContext);

  const [input, setInput] = useState('');

  useEffect(() => {
    getPublicIP({});
  }, []);

  const handlePressButton = (e) => {
    e.stopPropagation();
    setErrorRes('');
    if (!input) {
      setErrorRes(VALIDATION.FILL_ALL);
    } else if (!ipRegex.test(input) && !domainRegex.test(input)) {
      setErrorRes(VALIDATION.INVALID);
    } else {
      const reqObj = {
        ipAddress: ipRegex.test(input) ? input.trim() : '',
        domain: domainRegex.test(input) ? input.trim() : '',
      };
      getPublicIP(reqObj);
    }
  };

  return (
    <div className={`header-container ${userInfo.verification_token ? 'header-background' : ''}`}>
      <button
        onClick={(e) => {
          e.stopPropagation();
          logout();
        }}
        className="logout-button"
      >
        <img src={LogoutIcon} alt="icon" />
      </button>
      <div className="header-text">IP Address Tracker</div>
      <div className={`input-button-container flex-center ${!userInfo.verification_token ? 'input-hidden' : ''}`}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Search for any IP address or domain"
        />
        <button disabled={isLoading} onClick={handlePressButton} className="icon-button">
          {isLoading ? <div className="loader">Loading...</div> : <img className="icon" src={ArrowIcon} alt="icon" />}
        </button>
      </div>
      <span className="error-msg">{errorRes}</span>
      <ResponseArea />
    </div>
  );
};
