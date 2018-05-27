import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import './styles.css';

import App from './containers/App/App';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('app'),
);
