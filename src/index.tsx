import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/scss/bootstrap.scss';

import './assets/css/style.css';
import './assets/css/responsive.css';
import App from './components/app/app.components';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

