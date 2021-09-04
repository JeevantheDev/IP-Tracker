import React, { useContext, useEffect, useState } from 'react';
import ArrowIcon from '../../assets/icons/icon-arrow.svg';
import DownIcon from '../../assets/icons/icon-down.svg';

import './HeaderArea.css';
import { AppContext } from '../../app/app.context';
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

  useEffect(() => {
    setInput(ipConfig.ip);
  }, [ipConfig]);

  const handlePressButton = (e) => {
    e.stopPropagation();
    setErrorRes('');
    if (!input) {
      setErrorRes('Please fill the area.');
    } else if (!ipRegex.test(input) && !domainRegex.test(input)) {
      setErrorRes('Invalid Format');
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
      <div className="header-text">
        IP Address Tracker
        <div className="down-icon">
          <img src={DownIcon} alt="icon" />
          <ul>
            <li
              onClick={(e) => {
                e.stopPropagation();
                logout();
              }}
            >
              Logout
            </li>
          </ul>
        </div>
      </div>
      <div className={`input-button-container ${!userInfo.verification_token ? 'input-hidden' : ''}`}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Search for any IP address or domain"
        />
        <div onClick={handlePressButton} className="icon-button">
          {isLoading ? <div className="loader">Loading...</div> : <img className="icon" src={ArrowIcon} alt="icon" />}
        </div>
      </div>
      {/* <button className="logout-button">Logout</button> */}
      <span className="error-msg">{errorRes}</span>
      <ResponseArea />
    </div>
  );
};
