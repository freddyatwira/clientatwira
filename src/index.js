import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { ContextProvider } from './Context';

import './styles.css';

require('http-server').createServer().listen(3000);

ReactDOM.render(
  <ContextProvider>
    <App />
  </ContextProvider>,
  document.getElementById('root'),
);
