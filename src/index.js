import React from 'react';
import ReactDOM from 'react-dom';

import App from './app/App';
import { AppProvider } from './app/app.context';

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
