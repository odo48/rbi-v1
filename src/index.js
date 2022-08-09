import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import GeneralProvider from 'contexts/GeneralContext';

ReactDOM.render(
  <GeneralProvider>
    <App />
  </GeneralProvider>,
  document.getElementById('root')
);
